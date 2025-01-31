import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { User } from '@/models/user'  // Note: lowercase 'user'

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const { email, password, name } = await req.json()

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      )
    }

    // Create new user with default role
    const user = new User({ 
      email, 
      password,
      name,
      role: 'user',  // Set default role
      inviteCode: null  // Optional: generate if needed
    })

    await user.save()

    return NextResponse.json(
      { success: true, message: 'Registration successful' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    )
  }
} 
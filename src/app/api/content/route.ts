import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Content } from '@/models/content'
import { getToken } from 'next-auth/jwt'
import { handleError } from '@/utils/handleErrors'

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    // Fetch all content for the user
    const content = await Content.find({ userId: token.id })
      .sort({ createdAt: -1 })
      .select('type fileName content createdAt')
    
    return NextResponse.json({ 
      success: true,
      cvs: content // For now, keeping 'cvs' name for backward compatibility
    })

  } catch (error) {
    return handleError(error, 'Error fetching content')
  }
} 
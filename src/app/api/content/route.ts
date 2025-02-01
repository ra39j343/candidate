import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Content } from '@/models/content'
import { getToken } from 'next-auth/jwt'
import { handleError } from '@/utils/handleErrors'
import { authOptions } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  console.log('GET /api/content called')
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    console.log('Token:', token?.sub ? 'exists' : 'missing')
    
    if (!token?.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    console.log('Database connected')

    const contents = await Content.find({ userId: token.sub })
      .sort({ createdAt: -1 })
    
    console.log('Content items found:', contents.length)

    return NextResponse.json({ 
      cvs: contents,
      message: 'Content retrieved successfully' 
    })

  } catch (error) {
    console.error('Error in GET /api/content:', error)
    return NextResponse.json(
      { error: 'Error fetching content' },
      { status: 500 }
    )
  }
} 
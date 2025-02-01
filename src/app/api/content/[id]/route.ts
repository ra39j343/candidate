import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { getToken } from 'next-auth/jwt'
import { handleError } from '@/utils/handleErrors'
import { authOptions } from '@/lib/auth'
import { Encryption } from '@/utils/encryption'
import { Chat } from '@/models/chat'
import { Content } from '@/models/content'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log('DELETE request received for content:', params.id)
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    const content = await Content.findOne({ 
      _id: params.id, 
      userId: token.sub 
    })
    
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }

    // Delete related chat sessions
    await Chat.deleteMany({ contentId: params.id })

    // Delete the content
    await Content.findByIdAndDelete(params.id)

    return NextResponse.json({ 
      success: true,
      message: 'Content and related data deleted successfully'
    })
  } catch (error) {
    console.error('Error in DELETE /api/content/[id]:', error)
    return NextResponse.json(
      { error: 'Error deleting content' },
      { status: 500 }
    )
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    const content = await Content.findOne({
      _id: params.id,
      userId: token.sub
    })

    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }

    return NextResponse.json({ content: content.content })
  } catch (error) {
    console.error('Error fetching content:', error)
    return NextResponse.json(
      { error: 'Error fetching content' },
      { status: 500 }
    )
  }
} 
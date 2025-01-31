import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { connectDB } from '@/lib/db'
import { Content } from '@/models/content'
import { Chat } from '@/models/chat'
import { Encryption } from '@/utils/encryption'

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const content = formData.get('content') as string
    
    if (!content?.trim()) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 })
    }

    await connectDB()
    
    const newContent = new Content({
      userId: token.sub,
      type: 'text',
      content: content,
      fileName: 'text-content.txt',
      mimeType: 'text/plain'
    })

    await newContent.save()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing text:', error)
    return NextResponse.json(
      { error: 'Error processing text' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    // Find and delete all text content for this user
    const textContents = await Content.find({ 
      userId: token.sub,
      type: 'text',
      fileName: 'text-content.txt'
    })

    // Delete related chat sessions first
    for (const content of textContents) {
      await Chat.deleteMany({ contentId: content._id })
    }

    // Delete the text documents
    await Content.deleteMany({ 
      _id: { $in: textContents.map(content => content._id) }
    })

    return NextResponse.json({ 
      success: true,
      message: 'Text content and related data permanently deleted'
    })
  } catch (error) {
    console.error('Error deleting text content:', error)
    return NextResponse.json(
      { error: 'Error deleting text content' },
      { status: 500 }
    )
  }
} 
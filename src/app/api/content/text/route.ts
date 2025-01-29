import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Content } from '@/models/content'
import { getToken } from 'next-auth/jwt'
import { handleError } from '@/utils/handleErrors'

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const content = formData.get('content')
    
    if (!content) {
      return NextResponse.json(
        { error: 'No content provided' },
        { status: 400 }
      )
    }

    await connectDB()
    
    // Create new text content
    const newContent = new Content({
      userId: token.id,
      type: 'text',
      content: content.toString(),
      fileName: `Text Content ${new Date().toLocaleDateString()}`,
      mimeType: 'text/plain'
    })

    await newContent.save()

    return NextResponse.json({
      success: true,
      message: 'Text content added successfully',
      content: newContent
    })

  } catch (error) {
    return handleError(error, 'Error adding text content')
  }
} 
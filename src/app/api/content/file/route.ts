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
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Read file content
    const fileContent = await file.text()

    await connectDB()
    
    // Create new file content
    const newContent = new Content({
      userId: token.id,
      type: 'file',
      content: fileContent,
      fileName: file.name,
      fileSize: file.size,
      mimeType: file.type
    })

    await newContent.save()

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      content: newContent
    })

  } catch (error) {
    return handleError(error, 'Error uploading file')
  }
} 
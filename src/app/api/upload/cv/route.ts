import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { connectDB } from '@/lib/db'
import { Content } from '@/models/content'
import { cvUploadSchema } from '@/validation/schemas'
import { handleError } from '@/utils/handleErrors'
import { Encryption } from '@/utils/encryption'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js'
import path from 'path'

// Configure worker for Node.js environment
pdfjsLib.GlobalWorkerOptions.workerSrc = path.resolve(process.cwd(), 'node_modules/pdfjs-dist/legacy/build/pdf.worker.js')

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get('file') as File
    console.log('Upload received file:', { name: file.name, type: file.type })

    // Only accept text files for now
    if (file.type !== 'text/plain') {
      return NextResponse.json({ 
        error: 'Only .txt files are currently supported' 
      }, { status: 400 })
    }

    cvUploadSchema.parse({ file })
    const content = await file.text()

    await connectDB()
    const newContent = new Content({
      userId: token.sub,
      type: 'file',
      content: content,
      fileName: file.name,
      fileSize: file.size,
      mimeType: file.type
    })

    await newContent.save()
    console.log('Content saved to database:', { id: newContent._id, filename: newContent.fileName })

    return NextResponse.json({
      success: true,
      redirectUrl: `/preview?${new URLSearchParams({
        id: newContent._id,
        filename: file.name,
      }).toString()}`,
    })

  } catch (error) {
    console.error('Error processing file:', error)
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Error processing file' 
    }, { status: 500 })
  }
} 
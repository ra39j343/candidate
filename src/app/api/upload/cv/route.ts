import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { connectDB } from '@/lib/db'
import { Content } from '@/models/content'
import { cvUploadSchema } from '@/validation/schemas'
import { handleError } from '@/utils/handleErrors'
import { Encryption } from '@/utils/encryption'
// Import the legacy build specifically
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf'

// Configure worker
const pdfjsWorker = require('pdfjs-dist/legacy/build/pdf.worker.entry')
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get('file') as File
    console.log('Upload received file:', { name: file.name, type: file.type })
    
    cvUploadSchema.parse({ file })

    let content: string

    if (file.type === 'application/pdf') {
      console.log('Processing PDF file...')
      const arrayBuffer = await file.arrayBuffer()
      const uint8Array = new Uint8Array(arrayBuffer)
      
      const loadingTask = pdfjs.getDocument(uint8Array)
      const pdf = await loadingTask.promise
      console.log('PDF loaded, pages:', pdf.numPages)
      
      const textContent = []
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const text = await page.getTextContent()
        textContent.push(text.items.map((item: any) => item.str).join(' '))
      }
      
      content = textContent.join('\n\n')
      console.log('PDF content extracted, length:', content.length)
    } else {
      content = await file.text()
    }

    const newContent = new Content({
      userId: token.sub,
      type: 'file',
      content: content,
      fileName: file.name,
      fileSize: file.size,
      mimeType: file.type
    })

    await connectDB()
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
    return NextResponse.json({ error: 'Error processing file' }, { status: 500 })
  }
} 
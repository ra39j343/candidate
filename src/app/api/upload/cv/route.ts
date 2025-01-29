import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { connectDB } from '@/lib/db'
import { CV } from '@/models/CV'
import { Chat } from '@/models/chat'
import { cvUploadSchema } from '@/validation/schemas'
import { handleError } from '@/utils/handleErrors'
import * as pdfjs from 'pdfjs-dist'

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get('file') as File
    
    // Add validation
    cvUploadSchema.parse({ file })

    let content: string

    if (file.type === 'application/pdf') {
      // Handle PDF files
      const arrayBuffer = await file.arrayBuffer()
      const uint8Array = new Uint8Array(arrayBuffer)
      
      // Load the PDF document
      const loadingTask = pdfjs.getDocument(uint8Array)
      const pdf = await loadingTask.promise
      
      // Extract text from all pages
      const textContent = []
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const text = await page.getTextContent()
        const pageText = text.items.map((item: any) => item.str).join(' ')
        textContent.push(pageText)
      }
      
      content = textContent.join('\n\n')
    } else {
      // Handle text files
      content = await file.text()
    }

    await connectDB()
    
    // Save CV to the database
    const newCV = new CV({
      userId: token.id,
      filename: file.name,
      content,
      contentType: file.type,
    })

    await newCV.save()

    return NextResponse.json({
      success: true,
      redirectUrl: `/preview?${new URLSearchParams({
        content,
        filename: file.name,
      }).toString()}`,
    })

  } catch (error) {
    console.error('Error processing file:', error)
    return NextResponse.json(
      { error: 'Error processing file' },
      { status: 500 }
    )
  }
} 
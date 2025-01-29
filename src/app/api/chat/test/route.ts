import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Chat } from '@/models/chat'
import { getToken } from 'next-auth/jwt'
import { getAIResponse } from '@/lib/aiService'
import { chatMessageSchema } from '@/validation/schemas'
import { handleError } from '@/utils/handleErrors'

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req })
    if (!token?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { message } = body

    // Add validation
    chatMessageSchema.parse({ message })

    await connectDB()
    
    // First store the user message
    const userMessage = {
      role: 'user',
      content: message,
      createdAt: new Date()
    }

    // Get AI response using the service
    const aiResponse = await getAIResponse(token.id, message)

    // Create AI message
    const assistantMessage = {
      role: 'assistant',
      content: aiResponse,
      createdAt: new Date()
    }

    // Find or create chat session and update messages
    const chat = await Chat.findOneAndUpdate(
      { 
        userId: token.id,
        'settings.isTest': true
      },
      {
        $push: {
          messages: {
            $each: [userMessage, assistantMessage]
          }
        },
        $setOnInsert: {
          settings: {
            isTest: true,
            modelType: 'flan-t5-base',
            contextLength: 2048
          }
        }
      },
      { 
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
      }
    )

    return NextResponse.json({
      success: true,
      response: aiResponse
    })

  } catch (error) {
    console.error('Chat error:', error)
    return handleError(error, 'Error processing chat message')
  }
}

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    // Find or create test chat for user
    let chat = await Chat.findOne({ 
      userId: token.id,
      'settings.isTest': true
    })

    if (!chat) {
      chat = new Chat({
        userId: token.id,
        settings: {
          isTest: true,
          modelType: 'flan-t5-base',
          contextLength: 2048
        },
        messages: []
      })
      await chat.save()
    }

    return NextResponse.json({
      success: true,
      chat: chat
    })

  } catch (error) {
    console.error('Error fetching test chat:', error)
    return NextResponse.json(
      { error: 'Error fetching test chat' },
      { status: 500 }
    )
  }
} 
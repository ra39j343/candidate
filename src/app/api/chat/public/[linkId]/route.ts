import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { ShareableLink } from '@/models/ShareableLink'
import { getAIResponse } from '@/lib/aiService'
import { handleError } from '@/utils/handleErrors'

interface DailyStat {
  date: Date;
  views: number;
  // add other stat properties if needed
}

export async function POST(
  req: NextRequest,
  { params }: { params: { linkId: string } }
) {
  try {
    await connectDB()

    const { message, isNewChat = false } = await req.json()
    
    // Find the link and verify it's active
    const link = await ShareableLink.findOne({
      id: params.linkId,
      isActive: true
    })

    if (!link) {
      return NextResponse.json(
        { error: 'Link not found or inactive' },
        { status: 404 }
      )
    }

    // Get AI response
    const response = await getAIResponse(link.userId, message)

    // Update daily stats
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const statsIndex = link.dailyStats.findIndex(
      stat => new Date(stat.date).getTime() === today.getTime()
    )

    if (statsIndex === -1) {
      // Create new daily stat
      link.dailyStats.push({
        date: today,
        chatsInitiated: isNewChat ? 1 : 0,
        messagesCount: 1
      })
    } else {
      // Update existing daily stat
      if (isNewChat) {
        link.dailyStats[statsIndex].chatsInitiated++
      }
      link.dailyStats[statsIndex].messagesCount++
    }

    await link.save()

    return NextResponse.json({
      success: true,
      response
    })
  } catch (error) {
    return handleError(error, 'Error in public chat')
  }
}
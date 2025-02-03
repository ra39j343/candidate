import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ShareableLink } from '@/models/ShareableLink';

export async function POST(
  req: NextRequest,
  { params }: { params: { linkId: string } }
) {
  try {
    await connectDB();

    const link = await ShareableLink.findOne({ 
      id: params.linkId,
      isActive: true 
    });

    if (!link) {
      return NextResponse.json(
        { error: 'Link not found or inactive' },
        { status: 404 }
      );
    }

    // Get today's date (reset to midnight)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find today's stats or create new entry
    const statsIndex = link.dailyStats.findIndex(
      (stat: any) => new Date(stat.date).getTime() === today.getTime()
    );

    if (statsIndex === -1) {
      // Create new daily stat
      link.dailyStats.push({
        date: today,
        chatsInitiated: 0,
        messagesCount: 0,
        visits: 1
      });
    } else {
      // Update existing daily stat
      link.dailyStats[statsIndex].visits++;
    }

    await link.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking visit:', error);
    return NextResponse.json(
      { error: 'Failed to track visit' },
      { status: 500 }
    );
  }
} 
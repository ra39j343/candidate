// src/app/api/links/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { connectDB } from '@/lib/db';
import { Chat } from '@/models/chat';
import { nanoid } from 'nanoid';
import { ShareableLink } from '@/models/ShareableLink';
import { authOptions } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    const links = await ShareableLink.find({ 
      userId: token.sub,
      isActive: true 
    })

    console.log('Found links for user:', links); // Debug log

    return NextResponse.json({ links });
  } catch (error) {
    console.error('Error fetching links:', error);
    return NextResponse.json(
      { error: 'Failed to fetch links' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    
    // Get user's first name from token or use default
    const firstName = token.name?.split(' ')[0] || 'user';
    
    const newLink = new ShareableLink({
      id: await ShareableLink.generateId(firstName),
      userId: token.id,
      isActive: true,
      dailyStats: [{
        date: new Date(),
        chatsInitiated: 0,
        messagesCount: 0
      }]
    });

    await newLink.save();

    return NextResponse.json({
      success: true,
      link: {
        id: newLink.id,
        createdAt: newLink.createdAt,
        dailyStats: newLink.dailyStats
      }
    });
  } catch (error) {
    console.error('Error creating link:', error);
    return NextResponse.json(
      { error: 'Failed to create link' },
      { status: 500 }
    );
  }
}
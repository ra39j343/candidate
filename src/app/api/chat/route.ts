// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { connectDB } from '@/lib/db';
import { Chat } from '@/models/chat';
import { handleError } from '@/utils/handleErrors';

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const chat = new Chat({
      userId: token.id,
      settings: {
        modelType: 'flan-t5-base',
        contextLength: 2048,
        isTest: false,
      },
    });

    await chat.save();

    return NextResponse.json({
      success: true,
      chatId: chat._id.toString(),
    });
  } catch (error) {
    return handleError(error, 'Error creating chat session');
  }
}
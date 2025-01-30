// src/app/api/chat/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { connectDB } from '@/lib/db';
import { Chat } from '@/models/chat';
import { Message } from '@/models/Message';
import { getAIResponse } from '@/lib/aiService';
import { chatMessageSchema } from '@/validation/schemas';
import { handleError } from '@/utils/handleErrors';
import { authOptions } from '@/lib/auth';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = await getToken({ req, secret: authOptions.secret });
    if (!token?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { message } = await req.json();
    
    chatMessageSchema.parse({ message });

    const chatId = params.id;

    await connectDB();
    const chat = await Chat.findById(chatId);

    if (!chat) {
      return NextResponse.json(
        { error: 'Chat session not found' },
        { status: 404 }
      );
    }

    // Store user message
    const userMessage = new Message({
      chatId: chat._id,
      role: 'user',
      content: message,
    });

    await userMessage.save();

    // Get AI response
    const aiResponse = await getAIResponse(token.id, message);

    // Store assistant message
    const assistantMessage = new Message({
      chatId: chat._id,
      role: 'assistant',
      content: aiResponse,
    });

    await assistantMessage.save();

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    return handleError(error, 'Error processing chat message');
  }
}
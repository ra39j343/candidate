// src/controllers/chatController.ts
import { Request, Response } from 'express';
import { Chat } from '@/models/Chat';
import mongoose from 'mongoose';

export const uploadCV = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const chat = new Chat({
      userId: req.user.id, // assuming `req.user` is populated after authentication
      cvId: req.file.cvId,  // assuming `cvId` is obtained after saving the CV
      settings: {},
    });

    await chat.save();

    res.json({
      success: true,
      message: 'CV uploaded successfully',
      chatId: chat._id,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ success: false, message: 'Error uploading file' });
  }
};

export const getCV = async (req: Request, res: Response) => {
  try {
    const chat = await Chat.findById(req.params.id).populate('cvId');
    if (!chat) {
      return res.status(404).json({ error: 'Chat session not found' });
    }
    res.json({ content: (chat.cvId as any).content });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching CV' });
  }
};
// src/models/Chat.ts
import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
  role: { type: String, required: true, enum: ['user', 'assistant'] },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const shareableLinkSchema = new Schema({
  id: { type: String, required: true, unique: true },
  isActive: { type: Boolean, default: true },
  dailyStats: [{
    date: { type: Date, required: true },
    chatsInitiated: { type: Number, default: 0 },
    messagesCount: { type: Number, default: 0 }
  }],
  createdAt: { type: Date, default: Date.now }
});

const chatSchema = new Schema({
  userId: { type: String, required: true },
  messages: [messageSchema],
  shareableLinks: [shareableLinkSchema],
  settings: {
    isTest: { type: Boolean, default: false },
    modelType: { type: String, default: 'flan-t5-base' },
    contextLength: { type: Number, default: 2048 }
  },
  createdAt: { type: Date, default: Date.now }
})

export const Chat = mongoose.models.Chat || mongoose.model('Chat', chatSchema)
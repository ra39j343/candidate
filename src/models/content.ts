import mongoose, { Document, Schema } from 'mongoose';

export interface IContent extends Document {
  userId: mongoose.Types.ObjectId;
  type: 'file' | 'text';
  content: string;
  fileName?: string;
  fileSize?: number;
  mimeType?: string;
  createdAt: Date;
}

const contentSchema = new Schema<IContent>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['file', 'text'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  fileName: String,
  fileSize: Number,
  mimeType: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Content = mongoose.models.Content || mongoose.model<IContent>('Content', contentSchema); 
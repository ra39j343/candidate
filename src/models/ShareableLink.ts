import mongoose, { Schema, Document } from 'mongoose';

export interface IDailyStat {
  date: Date;
  chatsInitiated: number;
  messagesCount: number;
}

export interface IShareableLink extends Document {
  userId: string;
  id: string;
  createdAt: Date;
  isActive: boolean;
  dailyStats: IDailyStat[];
}

const dailyStatSchema = new Schema<IDailyStat>({
  date: { type: Date, required: true },
  chatsInitiated: { type: Number, default: 0 },
  messagesCount: { type: Number, default: 0 },
});

const shareableLinkSchema = new Schema<IShareableLink>({
  userId: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  dailyStats: [dailyStatSchema],
});

// Add index for faster lookups
shareableLinkSchema.index({ id: 1, userId: 1 });

export const ShareableLink = mongoose.models.ShareableLink || mongoose.model<IShareableLink>('ShareableLink', shareableLinkSchema);

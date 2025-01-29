import mongoose, { Document, Schema } from 'mongoose';

export interface IChatStats extends Document {
  userId: mongoose.Types.ObjectId;
  visitorId: string;
  chatStarted: Date;
  lastActivity: Date;
}

const chatStatsSchema = new Schema<IChatStats>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  visitorId: {
    type: String,
    required: true
  },
  chatStarted: {
    type: Date,
    default: Date.now
  },
  lastActivity: {
    type: Date,
    default: Date.now
  }
});

// Create compound index for unique visitors per user
chatStatsSchema.index({ userId: 1, visitorId: 1 }, { unique: true });

export const ChatStats = mongoose.models.ChatStats || mongoose.model<IChatStats>('ChatStats', chatStatsSchema);
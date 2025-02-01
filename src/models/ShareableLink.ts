import mongoose, { Schema, Document } from 'mongoose';
import { nanoid } from 'nanoid';

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
  id: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v: string) {
        // Updated regex to allow underscores and both uppercase/lowercase letters
        return /^[A-Za-z0-9_-]+$/.test(v);
      },
      message: 'Invalid link ID format'
    }
  },
  createdAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  dailyStats: [dailyStatSchema],
});

// Add index for faster lookups
shareableLinkSchema.index({ id: 1, userId: 1 });

// Add method to generate ID with just name and short unique id
shareableLinkSchema.statics.generateId = function(firstName: string = '') {
  const sanitizedName = firstName.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .slice(0, 10);
  const uniqueId = nanoid(3); // Reduced to 3 characters for shorter URLs
  return `${sanitizedName}-${uniqueId}`;
};

// Add method to get public URL
shareableLinkSchema.methods.getPublicUrl = function() {
  const env = process.env.VERCEL_ENV || 'development';
  const baseUrl = env === 'production' 
    ? 'https://echoprofile.vercel.app'
    : env === 'preview'
      ? `https://echoprofile-git-${process.env.VERCEL_GIT_COMMIT_REF}-radiks-projects.vercel.app`
      : 'http://localhost:3000';
      
  return `${baseUrl}/p/${this.id}`;
};

export const ShareableLink = mongoose.models.ShareableLink || mongoose.model<IShareableLink>('ShareableLink', shareableLinkSchema);

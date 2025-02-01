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

// Add static method to interface
interface ShareableLinkModel extends mongoose.Model<IShareableLink> {
  generateId(firstName?: string): Promise<string>;
}

// Add method to generate ID with just name and short unique id
shareableLinkSchema.statics.generateId = async function(firstName: string = '') {
  const sanitizedName = firstName.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .slice(0, 5);
    
  const uniquePart = nanoid(3).toUpperCase();
  const proposedId = `${sanitizedName}-${uniquePart}`;
  
  const existing = await this.findOne({ id: proposedId });
  if (existing) {
    // Generate a new unique part instead of recursive call
    return `${sanitizedName}-${nanoid(3).toUpperCase()}`;
  }
  
  return proposedId;
};

// Add method to get public URL with sharing text
shareableLinkSchema.methods.getPublicUrl = function(includeText = false) {
  const baseUrl = `https://echoprofile.vercel.app/chat/public/${this.id}`;
  if (!includeText) return baseUrl;
  
  const shareText = "Hi everyone! Check out my EchoProfile link to ask AI questions about my professional background and experience.";
  return `${shareText}\n\n${baseUrl}`;
};

// Update model export with proper typing
export const ShareableLink = (mongoose.models.ShareableLink || mongoose.model<IShareableLink, ShareableLinkModel>('ShareableLink', shareableLinkSchema)) as ShareableLinkModel;

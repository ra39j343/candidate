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
  // Sanitize and limit the name portion
  const sanitizedName = firstName.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .slice(0, 5); // Reduced to 5 chars max
    
  // Generate a shorter unique part
  const uniquePart = nanoid(3).toUpperCase(); // Using uppercase for better readability
  
  const proposedId = `${sanitizedName}-${uniquePart}`;
  
  // Verify uniqueness
  const existing = await this.findOne({ id: proposedId });
  if (existing) {
    // If collision, try again with new uniquePart
    return this.generateId(firstName);
  }
  
  return proposedId;
};

// Add method to get public URL
shareableLinkSchema.methods.getPublicUrl = function() {
  // Use the production domain consistently
  return `https://echoprofile.vercel.app/chat/public/${this.id}`;
};

// Update model export with proper typing
export const ShareableLink = (mongoose.models.ShareableLink || mongoose.model<IShareableLink, ShareableLinkModel>('ShareableLink', shareableLinkSchema)) as ShareableLinkModel;

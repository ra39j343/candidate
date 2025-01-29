import mongoose, { Document, Schema } from 'mongoose';

export interface IInvite extends Document {
  code: string;
  createdBy: mongoose.Types.ObjectId;
  used: boolean;
  createdAt: Date;
}

const inviteSchema = new Schema<IInvite>({
  code: {
    type: String,
    required: true,
    unique: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  used: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 7 * 24 * 60 * 60 // Automatically delete after 7 days if unused
  }
});

export const Invite = mongoose.models.Invite || mongoose.model<IInvite>('Invite', inviteSchema); 
import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  email: string;
  password: string;
  role: string;
  name?: string;
  inviteCode?: string;
  createdAt?: Date;
  // add other user fields as needed
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  name: String,
  inviteCode: String,
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateInviteCode = function() {
  return Math.random().toString(36).substring(2, 15);
};

export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema); 
import mongoose, { Schema } from 'mongoose';

const cvSchema = new Schema({
  userId: { type: String, required: true },
  filename: { type: String, required: true },
  content: { type: String, required: true },
  contentType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Use a type guard to prevent re-compilation error
export const CV = mongoose.models.CV || mongoose.model('CV', cvSchema);

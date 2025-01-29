import mongoose, { Document, Schema } from 'mongoose';

export interface ICandidate extends Document {
  resumeText: string;
  fileName?: string;
  uploadDate: Date;
}

const candidateSchema = new Schema<ICandidate>({
  resumeText: {
    type: String,
    required: true
  },
  fileName: String,
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

export const Candidate = mongoose.models.Candidate || mongoose.model<ICandidate>('Candidate', candidateSchema);
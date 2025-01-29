import { z } from 'zod';

export const cvUploadSchema = z.object({
  file: z.instanceof(File).refine((file) => 
    ['text/plain', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type), {
    message: 'Unsupported file type',
  }),
});

export const chatMessageSchema = z.object({
  message: z.string()
    .min(1, 'Message cannot be empty')
    .max(1000, 'Message is too long'),
});

export const shareableLinkSchema = z.object({
  chatId: z.string().min(1, 'Chat ID is required'),
});

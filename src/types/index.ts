import { IShareableLink } from '@/models/ShareableLink'

// API Response Types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Model Types
export interface ICV {
  _id: string;
  fileName: string;
  content: string;
  contentType: string;
  type: 'text' | 'pdf';
  createdAt: string;
}

// Update ILink to extend IShareableLink
export type ILink = Pick<IShareableLink, 'id' | 'createdAt' | 'dailyStats'>;

// Common type for content items in dashboard
export interface ContentItem {
  _id: string;
  fileName: string;
  content: string;
  type: 'text' | 'pdf';
  contentType: string;
  createdAt: string;
}

// ... other shared types 
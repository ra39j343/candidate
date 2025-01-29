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

export interface ILink {
  id: string;
  createdAt: string;
  dailyStats: Array<{
    date: string;
    chatsInitiated: number;
    messagesCount: number;
  }>;
}

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
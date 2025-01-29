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

// ... other shared types 
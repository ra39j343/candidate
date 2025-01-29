import { APIResponse, ICV, ILink } from '@/types'

export const api = {
  createLink: async (): Promise<APIResponse<ILink>> => {
    const res = await fetch('/api/links', { method: 'POST' })
    return res.json()
  },
  // ... other API calls
} 
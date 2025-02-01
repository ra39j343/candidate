'use client'

import { useState } from 'react'
import ChatInterface from '../../../../components/ChatInterface'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function PublicChatPage({ params }: { params: { linkId: string } }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [chatInitialized, setChatInitialized] = useState(false)

  const handleSendMessage = async (message: string) => {
    try {
      const response = await fetch(`/api/chat/public/${params.linkId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message,
          isNewChat: !chatInitialized // Mark as new chat only for first message
        })
      })

      const data = await response.json()
      if (data.success) {
        if (!chatInitialized) {
          setChatInitialized(true)
        }
        setMessages(prev => [
          ...prev,
          { role: 'user', content: message },
          { role: 'assistant', content: data.response }
        ])
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <div className="h-screen">
      <ChatInterface 
        messages={messages}
        onSendMessage={handleSendMessage}
        isPublic={true}
      />
    </div>
  )
} 
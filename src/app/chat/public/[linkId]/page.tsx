'use client'

import { useState } from 'react'
import ChatInterface from '../../../../components/ChatInterface'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function PublicChatPage({ params }: { params: { linkId: string } }) {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSendMessage = async (message: string) => {
    try {
      const response = await fetch(`/api/chat/public/${params.linkId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      })

      const data = await response.json()
      if (data.success) {
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
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">AI Chat Assistant</h1>
        <p className="text-gray-600">Ask questions about the candidate</p>
      </div>

      <ChatInterface 
        messages={messages}
        onSendMessage={handleSendMessage}
        isPublic={true}
      />
    </div>
  )
} 
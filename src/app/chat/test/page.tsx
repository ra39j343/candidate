'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import ChatInterface from '../../../components/ChatInterface'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function TestChatPage() {
  const { data: session } = useSession()
  const [chat, setChat] = useState(null)
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    if (!session?.user) {
      redirect('/auth/login')
    }

    // Fetch or create test chat session
    fetch('/api/chat/test')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setChat(data.chat)
          setMessages(data.chat?.messages || [])
        }
        setLoading(false)
      })
  }, [session])

  const handleSendMessage = async (message: string) => {
    try {
      const response = await fetch('/api/chat/test', {
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

  if (loading) {
    return <div>Loading chat...</div>
  }

  return (
    <div className="h-[calc(100vh-2rem)] overflow-hidden">
      <ChatInterface 
        messages={messages}
        onSendMessageAction={handleSendMessage}
        isTest={true}
      />
    </div>
  )
} 
'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import TypingIndicator from './TypingIndicator'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Command, CommandInput } from "@/components/ui/command"
import { Send, Loader2, Link2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp?: Date
}

const DEFAULT_SUGGESTED_QUESTIONS = [
  "Tell about candidate's last experience in more detail",
  "What are candidate's salary expectations?",
  "Tell more about candidate's leadership experience",
  "What languages does candidate speak?"
]

interface ChatInterfaceProps {
  messages?: Message[]
  onSendMessage: (message: string) => Promise<void>
  isPublic?: boolean
  isTest?: boolean
  suggestedQuestions?: string[]
}

const CreateLinkCTA = () => (
  <Button 
    className="fixed right-4 top-4 bg-green-500 hover:bg-green-600 text-white p-4 h-auto flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
    asChild
  >
    <Link href="/dashboard?tab=links&from=test">
      <Link2 className="w-4 h-4" />
      <span className="font-medium">Create link to this chat</span>
    </Link>
  </Button>
)

export default function ChatInterface({ 
  messages = [],
  onSendMessage, 
  isPublic,
  isTest,
  suggestedQuestions = DEFAULT_SUGGESTED_QUESTIONS 
}: ChatInterfaceProps) {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    try {
      await onSendMessage(input)
      setInput('')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestedQuestion = async (question: string) => {
    if (isLoading) return
    setIsLoading(true)
    try {
      await onSendMessage(question)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isTest && <CreateLinkCTA />}
      <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-md border relative">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <>
              {/* Help Message - centered */}
              <div className="flex flex-col justify-center h-1/2">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/ai-avatar.png" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">How I can help you:</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="space-y-2">
                      {["Analyze candidate's experience", "Evaluate leadership skills", "Provide salary insights"].map((text) => (
                        <div key={text} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-slate-600">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* No Messages Text - at bottom */}
              <div className="flex flex-col items-center justify-end h-1/2 space-y-4 text-slate-500">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center">
                  💬
                </div>
                <p>No messages yet. Start by asking a question!</p>
              </div>
            </>
          ) : (
            <>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
                      {message.role === 'assistant' ? '🤖' : '👤'}
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 mb-1 text-xs bg-slate-100 rounded-full">
                        {message.role === 'assistant' ? 'AI Assistant' : 'You'}
                      </span>
                      <div className={`p-3 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-slate-100'
                      }`}>
                        <div className="space-y-2">
                          {message.content.split('\n').map((paragraph, i) => (
                            <p key={i} className="text-sm leading-relaxed">
                              {paragraph.startsWith('•') ? (
                                <span className="flex items-start gap-2">
                                  <span className="text-blue-500">•</span>
                                  {paragraph.substring(1)}
                                </span>
                              ) : paragraph}
                            </p>
                          ))}
                        </div>
                        {message.timestamp && (
                          <time className="text-xs text-slate-500 mt-2 block">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </time>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && <TypingIndicator />}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form - taller input and button */}
        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Command className="flex-1 overflow-hidden rounded-lg border shadow-sm">
              <CommandInput
                value={input}
                onValueChange={setInput}
                placeholder="Ask anything about the candidate..."
                className="text-base h-[80px]"
              />
            </Command>
            <Button 
              type="submit" 
              disabled={isLoading}
              className={`px-6 h-[80px] hover:scale-105 transition-transform ${
                input.trim() 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-yellow-200 hover:bg-yellow-500'
              } text-black`}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Thinking...
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Ask
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Suggested Questions - non-bold title and more visible */}
        <div className="px-4 py-3 border-t bg-slate-50 max-h-[200px] overflow-y-auto">
          <p className="text-sm text-slate-700 mb-2">Common questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                onClick={() => handleSuggestedQuestion(question)}
                disabled={isLoading}
                className="text-sm hover:bg-slate-100 whitespace-normal text-left h-auto py-2 px-3 min-h-[2.5rem] max-w-[300px]"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import TypingIndicator from './TypingIndicator'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Command, CommandInput } from "@/components/ui/command"
import { Send, Loader2, Link2, FileText } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { BetaDisclaimer } from '@/components/BetaDisclaimer'

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
  onSendMessageAction: (message: string) => Promise<void>
  isPublic?: boolean
  isTest?: boolean
  suggestedQuestions?: string[]
}

export default function ChatInterface({ 
  messages = [],
  onSendMessageAction,
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
      await onSendMessageAction(input)
      setInput('')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestedQuestion = async (question: string) => {
    if (isLoading) return
    setIsLoading(true)
    try {
      await onSendMessageAction(question)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="flex flex-col h-[calc(100vh-2rem)] bg-white rounded-lg shadow-md border relative">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white border-b px-4 py-1.5">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[14px] font-semibold">AI Chat Assistant</h1>
              <p className="text-[9px] text-muted-foreground">
                {isTest 
                  ? "Try asking questions as a recruiter would"
                  : "Ask questions about the candidate"
                }
              </p>
            </div>
            {isTest ? (
              <div className="flex items-center gap-2">
                <Link href="/dashboard?tab=content">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 text-gray-600 p-3 h-3 text-[10px]"
                  >
                    <FileText className="h-3 w-3" />
                    Give more information to AI
                  </Button>
                </Link>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white p-3 h-3 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all text-[10px]"
                  asChild
                >
                  <Link href="/dashboard?tab=links&from=test">
                    <Link2 className="w-3 h-3" />
                    Create link to this chat
                  </Link>
                </Button>
              </div>
            ) : isPublic && (
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white p-3 h-3 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all text-[10px]"
                asChild
              >
                <Link href="/auth/register">
                  <Link2 className="w-3 h-3 mr-1" />
                  Create your own EchoProfile link
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <>
              {/* Help Message - centered */}
              <div className="flex flex-col justify-center h-1/2">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/ai-avatar.png" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <span className="text-md font-medium">How I can help you:</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="space-y-2">
                      {["Analyze candidate's experience", "Evaluate leadership skills", "Provide salary insights"].map((text) => (
                        <div key={text} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          <span className="text-sm text-slate-600">{text}</span>
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
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                    <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center mt-0">
                      {message.role === 'assistant' ? '🤖' : '👤'}
                    </div>
                    <div>
                      <div className={`p-2 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-slate-100'
                      }`}>
                        <div className="space-y-1">
                          {message.content.split('\n').map((paragraph, i) => (
                            <p key={i} className="text-[11px] leading-relaxed">
                              {paragraph.startsWith('•') ? (
                                <span className="flex items-start gap-1">
                                  <span className="text-blue-500">•</span>
                                  {paragraph.substring(1)}
                                </span>
                              ) : paragraph}
                            </p>
                          ))}
                        </div>
                        {message.timestamp && (
                          <time className="text-[9px] text-slate-500 mt-1 block">
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

        {/* Input Form */}
        <div className="p-3.5 border-t">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Command className="flex-1 overflow-hidden rounded-lg border shadow-sm">
              <CommandInput
                value={input}
                onValueChange={setInput}
                placeholder="Ask anything about the candidate..."
                className="text-[10px] h-[72px]"
              />
            </Command>
            <Button 
              type="submit" 
              disabled={isLoading}
              className={`px-5 h-[72px] hover:scale-105 transition-transform text-[10px] ${
                input.trim() 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-yellow-200 hover:bg-yellow-500'
              } text-black`}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Thinking...
                </div>
              ) : (
                <>
                  <Send className="w-3 h-3 mr-2" />
                  Ask
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Suggested Questions */}
        <div className="px-4 py-1.5 border-t bg-slate-50">
          <p className="text-[11px] text-slate-700 mb-1.5">Common questions:</p>
          <div className="flex flex-wrap gap-1.5">
            {suggestedQuestions.map((question, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                onClick={() => handleSuggestedQuestion(question)}
                disabled={isLoading}
                className="text-[11px] hover:bg-slate-100 whitespace-normal text-left h-auto py-1 px-1.5 min-h-[1.75rem]"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <BetaDisclaimer />
    </>
  )
}
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

interface MessageProps {
  role: 'user' | 'assistant'
  content: string
  timestamp?: Date
}

interface ChatInterfaceProps {
  messages?: MessageProps[]
  onSendMessage: (message: string) => Promise<void>
  isPublic?: boolean
  isTest?: boolean
  suggestedQuestions?: string[]
}

// Define Message component
function MessageComponent({ role, content }: MessageProps) {
  return (
    <div className={`flex ${role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex items-start gap-2.5 max-w-[80%] ${
        role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
      }`}>
        <Avatar className="w-6 h-6">
          <AvatarFallback>
            {role === 'assistant' ? 'AI' : 'U'}
          </AvatarFallback>
        </Avatar>
        <div className={`rounded-lg px-3 py-2 text-[11px] ${
          role === 'assistant' 
            ? 'bg-muted' 
            : 'bg-primary text-primary-foreground'
        }`}>
          {content}
        </div>
      </div>
    </div>
  )
}

const DEFAULT_SUGGESTED_QUESTIONS = [
  "Tell about candidate's last experience in more detail",
  "What are candidate's salary expectations?",
  "Tell more about candidate's leadership experience",
  "What languages does candidate speak?"
]

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
      <div className="flex flex-col h-screen overflow-hidden">
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

        {/* Messages container with fixed height and scrolling */}
        <div className="flex-1 overflow-y-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4 py-4">
            {messages.map((message, index) => (
              <MessageComponent key={index} {...message} />
            ))}
            {isLoading && <TypingIndicator />}
          </div>
        </div>

        {/* Input area stays fixed at bottom */}
        <div className="flex-shrink-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
          <div className="max-w-3xl mx-auto">
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
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function TextUpload({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const { toast } = useToast()
  const [text, setText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!text.trim()) return
    
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      formData.append('content', text)
      
      const res = await fetch('/api/content/text', {
        method: 'POST',
        body: formData
      })
      
      if (res.ok) {
        setText('')
        onUploadSuccess()
        toast({
          title: "Success",
          description: "Text content uploaded successfully",
        })
      } else {
        throw new Error('Failed to upload text')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload text content",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="overflow-hidden border-border/40 shadow-xl">
      <CardHeader>
        <CardTitle>Add Text Content</CardTitle>
        <CardDescription>
          Paste or type text content to train the AI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea 
          placeholder="Enter text content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="resize-none"
        />
        <Button 
          onClick={handleSubmit} 
          disabled={isSubmitting || !text.trim()}
          className="w-full"
        >
          {isSubmitting ? "Uploading..." : "Upload Text"}
        </Button>
      </CardContent>
    </Card>
  )
} 
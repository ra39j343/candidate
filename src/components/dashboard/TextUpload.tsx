'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { DeleteConfirmDialog } from './DeleteConfirmDialog'

export default function TextUpload({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const { toast } = useToast()
  const [text, setText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

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

  const handleConfirmClear = async () => {
    try {
      // Delete from database first
      const res = await fetch('/api/content/text', {
        method: 'DELETE'
      })
      
      if (!res.ok) {
        throw new Error('Failed to delete text content')
      }

      // Then clear local state
      setText('')
      setShowDeleteConfirm(false)
      onUploadSuccess()
      toast({
        title: "Success",
        description: "Text content securely deleted from all systems",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to completely delete text content",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <Card className="overflow-hidden border-border/40 shadow-xl">
        <CardHeader className="pb-2 pt-3 space-y-0">
          <CardTitle className="text-[14px]">Add Text</CardTitle>
          <CardDescription className="text-[9px]">
            Tell details about your experience, skills, hobbies in plain text.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 pb-3">
          <Textarea 
            placeholder="Share your story in your own words...."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            className="text-[10px] resize-none min-h-[60px]"
          />
          <Button 
            onClick={handleSubmit} 
            disabled={isSubmitting || !text.trim()}
            className="w-full text-[10px] h-7"
          >
            {isSubmitting ? "Encrypting & Uploading..." : "Upload Text"}
          </Button>
        </CardContent>
      </Card>

      <DeleteConfirmDialog
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleConfirmClear}
        title="Clear Sensitive Text Content"
      />
    </>
  )
} 
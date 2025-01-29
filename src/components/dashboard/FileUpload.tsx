'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Upload } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function FileUpload({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const { toast } = useToast()
  const [isUploading, setIsUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const router = useRouter()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    if (e.dataTransfer.files?.[0]) {
      await handleUpload(e.dataTransfer.files[0])
    }
  }

  const handleUpload = async (file: File) => {
    setIsUploading(true)
    try {
      // First read the file content
      const content = await file.text()
      
      // Create FormData and upload the file directly
      const formData = new FormData()
      formData.append('file', file)
      
      const res = await fetch('/api/content/file', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) {
        throw new Error('Failed to upload file')
      }

      // After successful upload, show preview
      router.push(`/preview?${new URLSearchParams({
        content,
        filename: file.name,
        uploaded: 'true'  // Flag to indicate file is already uploaded
      }).toString()}`)

      onUploadSuccess()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload file",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="overflow-hidden border-border/40 shadow-xl">
      <CardHeader>
        <CardTitle>Upload CV Files</CardTitle>
        <CardDescription>
          Upload CV files to train the AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            relative rounded-lg border-2 border-dashed transition-all duration-200 ease-in-out
            ${dragActive ? 'border-primary bg-primary/5 scale-[0.99]' : 'border-border'}
          `}
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={(e) => e.target.files && handleUpload(e.target.files[0])}
            accept=".pdf,.doc,.docx,.txt"
            disabled={isUploading}
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center p-10 cursor-pointer space-y-4"
          >
            <div className="p-4 bg-primary/10 rounded-full">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm font-medium">
                {isUploading ? "Uploading..." : "Drop files here or click to upload"}
              </p>
              <p className="text-xs text-muted-foreground">
                PDF, DOC, DOCX or TXT (max 10MB)
              </p>
            </div>
          </label>
        </div>
      </CardContent>
    </Card>
  )
} 
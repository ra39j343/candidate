'use client'

import { useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Upload, FileUp, Plus, Loader2 } from "lucide-react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function FileUpload({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const { toast } = useToast()
  const [isUploading, setIsUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  const validateFile = (file: File) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
    if (!validTypes.includes(file.type)) {
      throw new Error('Invalid file type. Please upload PDF, DOC, DOCX, or TXT files only.')
    }
    if (file.size > 10 * 1024 * 1024) { // 10MB
      throw new Error('File size too large. Maximum size is 10MB.')
    }
  }

  const handleUpload = async (file: File) => {
    setIsUploading(true)
    try {
      validateFile(file)
      const formData = new FormData()
      formData.append('file', file)
      
      const res = await fetch('/api/upload/cv', {
        method: 'POST',
        body: formData
      })
      
      if (!res.ok) {
        throw new Error('Upload failed')
      }
      
      const data = await res.json()
      if (data.success) {
        toast({
          title: "Success",
          description: "CV uploaded successfully",
        })
        onUploadSuccess()
      } else {
        throw new Error(data.error || 'Upload failed')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to upload CV",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="relative border-dashed border-2 hover:border-primary/50 transition-colors">
      <CardHeader className="pb-2 pt-2 space-y-0">
        <CardTitle className="text-[14px]">Upload CV Files</CardTitle>
        <CardDescription className="text-[9px]">
          Drop your text files here or click to browse (.txt only)
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div 
          className={`flex flex-col items-center justify-center space-y-2 p-4 rounded-lg transition-colors ${
            dragActive ? 'bg-primary/10' : 'bg-muted/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="p-2 rounded-full bg-primary/10">
            <FileUp className="w-4 h-4 text-primary" />
          </div>
          <div className="text-center space-y-1">
            <p className="text-[9px] text-muted-foreground">
              PDF, DOC, DOCX, TXT up to 10MB
            </p>
            <Button 
              variant="outline" 
              disabled={isUploading}
              className="text-[10px] h-7 px-3"
              onClick={() => fileInputRef.current?.click()}
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-3 w-3" />
                  Choose File
                </>
              )}
            </Button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleUpload(e.target.files[0])
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
} 
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
  const router = useRouter()
  const [canUpload, setCanUpload] = useState(false)
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

  const handleUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/upload/cv', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      
      if (data.success) {
        toast({
          title: "Success",
          description: "CV uploaded successfully",
        })
        onUploadSuccess()
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload CV",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="relative border-dashed border-2 hover:border-primary/50 transition-colors">
      <CardHeader>
        <CardTitle>Upload CV Files</CardTitle>
        <CardDescription>
          Drop your CV files here or click to browse
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className={`flex flex-col items-center justify-center space-y-4 p-8 rounded-lg transition-colors ${
            dragActive ? 'bg-primary/10' : 'bg-muted/50'
          }`}
          onDragOver={(e) => {
            e.preventDefault()
            setDragActive(true)
          }}
          onDragLeave={(e) => {
            e.preventDefault()
            setDragActive(false)
          }}
          onDrop={(e) => {
            e.preventDefault()
            setDragActive(false)
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              handleUpload(e.dataTransfer.files[0])
            }
          }}
        >
          <div className="p-4 rounded-full bg-primary/10">
            <FileUp className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              PDF, DOC, DOCX, TXT up to 10MB
            </p>
            <Button 
              variant="outline" 
              disabled={isUploading}
              onClick={() => fileInputRef.current?.click()}
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Choose File
                </>
              )}
            </Button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
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
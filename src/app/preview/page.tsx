'use client'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

function PreviewContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get('id')
  const filename = searchParams.get('filename')
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    const fetchContent = async () => {
      if (id) {
        const res = await fetch(`/api/content/${id}`)
        const data = await res.json()
        if (data.content) {
          setContent(data.content)
        }
      }
    }
    fetchContent()
  }, [id])

  const handleBack = () => {
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="mb-6">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">Preview Content</h1>
          <p className="text-muted-foreground mb-4">{filename}</p>
          <pre className="whitespace-pre-wrap bg-muted p-4 rounded-lg overflow-auto max-h-[600px]">
            {content}
          </pre>
        </div>
      </Card>
      
      <Button onClick={handleBack} variant="outline">
        Back to Dashboard
      </Button>
    </div>
  )
}

export default function PreviewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PreviewContent />
    </Suspense>
  )
} 
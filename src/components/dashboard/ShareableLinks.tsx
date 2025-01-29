'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Loader2, Trash2 } from "lucide-react"

interface ShareableLinksProps {
  links: any[]
  onCreateLinkAction: () => Promise<void>
  onDeleteLinkAction: (linkId: string) => Promise<void>
}

export default function ShareableLinks({ links, onCreateLinkAction, onDeleteLinkAction }: ShareableLinksProps) {
  const [isCreating, setIsCreating] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const handleCreate = async () => {
    setIsCreating(true)
    try {
      await onCreateLinkAction()
    } catch (error) {
      console.error('Error in handleCreate:', error)
    } finally {
      setIsCreating(false)
    }
  }

  const handleDelete = async (linkId: string) => {
    setIsDeleting(linkId)
    try {
      await onDeleteLinkAction(linkId)
    } catch (error) {
      console.error('Error in handleDelete:', error)
    } finally {
      setIsDeleting(null)
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Chat Links</CardTitle>
        <Button 
          onClick={handleCreate}
          disabled={isCreating}
          className="shadow-sm hover:shadow-md transition-all"
        >
          {isCreating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Create New Link
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          <div className="space-y-4">
            {links?.map(link => (
              <div
                key={link.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="space-y-1">
                  <p className="font-medium break-all">
                    {window.location.origin}/chat/public/{link.id}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">
                      Created: {new Date(link.createdAt).toLocaleDateString()}
                    </Badge>
                    <Badge>
                      {link.dailyStats?.reduce((sum: number, stat: any) => sum + (stat.chatsInitiated || 0), 0)} chats
                    </Badge>
                  </div>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDelete(link.id)}
                  disabled={isDeleting === link.id}
                >
                  {isDeleting === link.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
} 
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Loader2, Trash2, Link2, Copy, Check, Share2 } from "lucide-react"
import { IShareableLink, IDailyStat } from '@/models/ShareableLink'
import { useToast } from "@/components/ui/use-toast"

interface ShareableLinksProps {
  links: IShareableLink[]
  onCreateLinkAction: () => Promise<void>
  onDeleteLinkAction: (linkId: string) => Promise<void>
}

export default function ShareableLinks({ links, onCreateLinkAction, onDeleteLinkAction }: ShareableLinksProps) {
  const [isCreating, setIsCreating] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const { toast } = useToast()

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

  const handleCopy = async (link: string) => {
    await navigator.clipboard.writeText(link)
    setCopiedId(link)
    toast({
      description: "Link copied to clipboard!",
      duration: 2000
    })
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleShareLinkedIn = (link: string) => {
    try {
      const shareText = "Hi everyone! Check out my EchoProfile link to ask AI questions about my professional background and experience."
      const shareUrl = encodeURIComponent(link)
      
      console.log('Original share text:', shareText)
      console.log('Original URL:', link)
      
      const linkedInUrl = new URL('https://www.linkedin.com/sharing/share-offsite/')
      linkedInUrl.searchParams.append('url', link)
      linkedInUrl.searchParams.append('summary', shareText)
      
      console.log('Final LinkedIn URL:', linkedInUrl.toString())
      
      const shareWindow = window.open(
        linkedInUrl.toString(),
        'linkedin-share',
        'width=600,height=600,left=' + (window.screen.width / 2 - 300) + ',top=' + (window.screen.height / 2 - 300)
      )

      if (!shareWindow) {
        console.error('Share window was blocked')
        toast({
          title: "Error",
          description: "Please allow popups to share on LinkedIn",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Share failed:', error)
      toast({
        title: "Error",
        description: "Failed to share on LinkedIn",
        variant: "destructive",
      })
    }
  }

  const getTotalStats = (dailyStats: IDailyStat[]) => {
    return dailyStats?.reduce((acc, stat) => ({
      chats: acc.chats + (stat.chatsInitiated || 0),
      messages: acc.messages + (stat.messagesCount || 0)
    }), { chats: 0, messages: 0 });
  };

  return (
    <Card>
      <CardHeader className="space-y-0 pb-2">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-between">
            <CardTitle className="text-[14px]">Chat Links</CardTitle>
            <Button 
              onClick={handleCreate}
              disabled={isCreating}
              className="text-[10px] h-8 px-3 shadow-sm hover:shadow-md transition-all"
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
          </div>
          <p className="text-[9px] text-muted-foreground">
            💡 Use these links to showcase your profile: add them to your CV, list as a website on LinkedIn, or share directly with recruiters
          </p>
        </div>
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
                  <div className="font-medium break-all text-[11px]">
                    {window.location.origin}/chat/public/{link.id}
                  </div>
                  <div className="text-[9px] flex items-center space-x-2">
                    <Badge variant="outline">
                      Created: {new Date(link.createdAt).toLocaleDateString()}
                    </Badge>
                    <Badge>
                      {getTotalStats(link.dailyStats).chats} chats
                    </Badge>
                    <Badge variant="secondary">
                      {getTotalStats(link.dailyStats).messages} messages
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(`${window.location.origin}/chat/public/${link.id}`)}
                    className="text-[10px] h-7 px-2"
                  >
                    {copiedId === `${window.location.origin}/chat/public/${link.id}` ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white text-[10px] h-7 px-2"
                    onClick={() => handleShareLinkedIn(`${window.location.origin}/chat/public/${link.id}`)}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(link.id)}
                    disabled={isDeleting === link.id}
                    className="text-[10px] h-7 px-2"
                  >
                    {isDeleting === link.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
} 
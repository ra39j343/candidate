'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Trash2, Plus, Clock, Link2, Eye } from "lucide-react"
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import ShareableLinks from '@/components/dashboard/ShareableLinks'
import FileUpload from '@/components/dashboard/FileUpload'
import TextUpload from '@/components/dashboard/TextUpload'
import { useRouter } from 'next/navigation'
import { ICV, ILink, ContentItem } from '@/types'
import { IShareableLink } from '@/models/ShareableLink'

const truncateText = (text: string, maxLength: number = 50) => {
  if (!text) return '';
  const firstSentence = text.split(/[.!?]/)[0]; // Get first sentence
  if (firstSentence.length <= maxLength) return firstSentence;
  return firstSentence.substring(0, maxLength) + '...';
};

export default function DashboardPage() {
  const [links, setLinks] = useState<IShareableLink[]>([])
  const [cvs, setCvs] = useState<ContentItem[]>([])
  const router = useRouter()

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content')
      if (response.ok) {
        const data = await response.json()
        setCvs(data.cvs)
      }
    } catch (error) {
      console.error('Error fetching content:', error)
    }
  }

  const fetchLinks = async () => {
    try {
      const response = await fetch('/api/links')
      if (response.ok) {
        const data = await response.json()
        setLinks(data.links)
      }
    } catch (error) {
      console.error('Error fetching links:', error)
    }
  }

  useEffect(() => {
    fetchLinks()
    fetchContent()
  }, [])

  const handleCreateLink = async () => {
    try {
      const response = await fetch('/api/links', {
        method: 'POST'
      })
      if (response.ok) {
        const data = await response.json()
        console.log('Created new link:', data); // Debug log
        setLinks([...links, data.link])
      }
    } catch (error) {
      console.error('Error creating link:', error)
    }
  }

  const handleDeleteLink = async (linkId: string) => {
    try {
      console.log('Attempting to delete link:', linkId); // Debug log
      console.log('Current links:', links); // Debug log
      
      const response = await fetch(`/api/links/${linkId}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        setLinks(links.filter(link => link.id !== linkId))
      } else {
        const errorData = await response.json()
        console.error('Delete response error:', errorData); // Debug log
      }
    } catch (error) {
      console.error('Error deleting link:', error)
    }
  }

  const handleDeleteCV = async (cvId: string) => {
    try {
      const response = await fetch(`/api/content/${cvId}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        setCvs(cvs.filter(cv => cv._id !== cvId))
      }
    } catch (error) {
      console.error('Error deleting CV:', error)
    }
  }

  return (
    <div className="container mx-auto p-6 border-2 border-blue-500">
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your CV content and chat interactions
          </p>
        </div>
        <Link href="/chat/test">
          <Button className="shadow-lg hover:shadow-xl transition-all">
            <Plus className="mr-2 h-4 w-4" />
            Test AI Chat
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="content" className="space-y-8">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2 p-1 bg-muted/50 backdrop-blur-sm">
          <TabsTrigger value="content">
            <FileText className="mr-2 h-4 w-4" />
            Content
          </TabsTrigger>
          <TabsTrigger value="links" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all">
            <Link2 className="mr-2 h-4 w-4" />
            Links
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileUpload onUploadSuccess={fetchContent} />
              <TextUpload onUploadSuccess={fetchContent} />
            </div>

            <Card className="border-border/40 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle>Your Content</CardTitle>
                    <CardDescription>Manage your uploaded content</CardDescription>
                  </div>
                  <Badge variant="outline" className="h-7">
                    {cvs.length} files
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] rounded-md">
                  <div className="space-y-4 p-1">
                    {cvs.map((content) => (
                      <motion.div
                        key={content._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-full bg-primary/10">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <p className="font-medium">{content.fileName}</p>
                            {content.type === 'text' && (
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {truncateText(content.content)}
                              </p>
                            )}
                            <div className="flex items-center space-x-2 text-sm">
                              <Badge variant="outline" className="text-xs">
                                {content.type.toUpperCase()}
                              </Badge>
                              <span className="flex items-center text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                Added {new Date(content.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => router.push(`/preview?${new URLSearchParams({
                              id: content._id,
                              content: content.content,
                              filename: content.fileName
                            }).toString()}`)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteCV(content._id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </AnimatePresence>

        <TabsContent value="links">
          <ShareableLinks 
            links={links}
            onCreateLinkAction={handleCreateLink}
            onDeleteLinkAction={handleDeleteLink}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
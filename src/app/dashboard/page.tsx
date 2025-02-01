'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Trash2, Plus, Clock, Link2, Eye, LogOut, MessageSquare } from "lucide-react"
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import ShareableLinks from '@/components/dashboard/ShareableLinks'
import FileUpload from '@/components/dashboard/FileUpload'
import TextUpload from '@/components/dashboard/TextUpload'
import { useRouter } from 'next/navigation'
import { ICV, ILink, ContentItem } from '@/types'
import { IShareableLink } from '@/models/ShareableLink'
import { useSession, signOut } from 'next-auth/react'
import { useToast } from "@/components/ui/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

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
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('content')
  const [isUploading, setIsUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const { toast } = useToast()
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('tab') === 'links' && params.get('from') === 'test') {
      setActiveTab('links')
    }
  }, [])

  const fetchContent = async () => {
    try {
      console.log('Fetching content...')
      const response = await fetch('/api/content', {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      })
      if (response.ok) {
        const data = await response.json()
        console.log('Raw content data:', data)
        const mappedCvs = data.cvs.map((cv: any) => ({
          ...cv,
          type: cv.mimeType?.includes('pdf') ? 'PDF' : 'TEXT',
          filename: cv.fileName || cv.filename
        }))
        console.log('Mapped CVs:', mappedCvs)
        setCvs(mappedCvs)
        console.log('CVs state updated:', mappedCvs.length, 'items')
      } else {
        console.error('Error fetching content:', await response.text())
      }
    } catch (error) {
      console.error('Error in fetchContent:', error)
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
    fetchContent()
    fetchLinks()

    const intervalId = setInterval(fetchContent, 5000)
    return () => clearInterval(intervalId)
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
    console.log('Attempting to delete CV:', cvId)
    setPendingDeleteId(cvId)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!pendingDeleteId) return
    console.log('Confirming delete for CV:', pendingDeleteId)

    try {
      const response = await fetch(`/api/content/${pendingDeleteId}`, {
        method: 'DELETE',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      })
      console.log('Delete response status:', response.status)
      
      if (response.ok) {
        const data = await response.json()
        console.log('Delete response:', data)
        setCvs(cvs.filter(cv => cv._id !== pendingDeleteId))
        setDeleteDialogOpen(false)
        setPendingDeleteId(null)
        toast({
          title: "Success",
          description: "CV deleted successfully",
        })
      } else {
        const errorData = await response.text()
        console.error('Delete response error:', errorData)
        toast({
          title: "Error",
          description: "Failed to delete CV",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error deleting CV:', error)
      toast({
        title: "Error",
        description: "Failed to delete CV",
        variant: "destructive",
      })
    }
  }

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/auth/login' })
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0])
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
        await fetchContent()
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error('Upload error:', error)
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
    <div className="container mx-auto max-w-[1400px] h-screen p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h1 className="text-[18px] font-semibold tracking-tight">
            Your EchoProfile Dashboard
          </h1>
          <p className="text-[12px] text-muted-foreground">
            Manage your content and links
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            onClick={() => router.push('/chat/test')}
            className="text-[10px] h-8 px-3 bg-green-500 hover:bg-green-600 text-white"
          >
            <MessageSquare className="mr-2 h-3 w-3" />
            Test AI Chat
          </Button>
          <Button 
            onClick={handleLogout}
            className="text-[10px] h-8 px-3"
          >
            <LogOut className="mr-2 h-3 w-3" />
            Sign Out
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2 p-1 bg-muted/50 backdrop-blur-sm">
          <TabsTrigger value="content" className="text-xs">
            <FileText className="mr-2 h-4 w-4" />
            Content
          </TabsTrigger>
          <TabsTrigger value="links" className="text-xs">
            <Link2 className="mr-2 h-4 w-4" />
            Links
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="content" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FileUpload onUploadSuccess={fetchContent} />
              <TextUpload onUploadSuccess={fetchContent} />
            </div>

            <Card className="border-border/40 shadow-xl">
              <CardHeader className="pb-2 pt-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <CardTitle className="text-[14px]">Your Content</CardTitle>
                    <CardDescription className="text-[9px]">
                      💡 Add more CVs and other information about yourself, especially things that didn't fit your resume.
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-[9px] h-5">
                    {cvs.length} files
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ScrollArea className="h-[300px] rounded-md">
                  <div className="space-y-2 p-0.5">
                    {cvs.map((content) => (
                      <motion.div
                        key={content._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group flex items-center justify-between py-2 px-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-1.5 rounded-full bg-primary/10">
                            <FileText className="h-3 w-3 text-primary" />
                          </div>
                          <div className="space-y-0.5">
                            <p className="text-[11px] font-medium leading-none">
                              {content.fileName || 'Untitled'}
                            </p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-[9px] h-4 px-1.5">
                                {content.type || 'UNKNOWN'}
                              </Badge>
                              <span className="flex items-center text-[9px] text-muted-foreground">
                                <Clock className="mr-1 h-2.5 w-2.5" />
                                Added {new Date(content.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-6 w-6 p-0"
                            onClick={() => router.push(`/preview?${new URLSearchParams({
                              id: content._id,
                              filename: content.fileName
                            }).toString()}`)}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-6 w-6 p-0"
                            onClick={() => handleDeleteCV(content._id)}
                          >
                            <Trash2 className="h-3 w-3" />
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

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the CV
              and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setPendingDeleteId(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
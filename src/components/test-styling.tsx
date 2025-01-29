'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Loader2 } from "lucide-react"

export function TestStyling() {
  return (
    <Card className="w-[400px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Style Test</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full rounded-md border p-4">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="default"
                className="shadow-sm hover:shadow-md transition-all"
              >
                <Plus className="mr-2 h-4 w-4" />
                Default
              </Button>
              <Button variant="destructive">
                <Loader2 className="mr-2 h-4 w-4" />
                Destructive
              </Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Badge variant="outline">Test Badge</Badge>
              <Badge>Another Badge</Badge>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
} 
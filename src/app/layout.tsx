'use client'

import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "next-auth/react"
import '@/app/globals.css'
import { BetaDisclaimer } from '@/components/BetaDisclaimer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="pb-12">
        <SessionProvider>
          {children}
          <BetaDisclaimer />
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
} 
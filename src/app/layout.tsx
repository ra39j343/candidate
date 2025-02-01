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
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full overflow-hidden">
        <SessionProvider>
          <main className="relative h-full">
            {children}
          </main>
          <BetaDisclaimer />
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
} 
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
    <html lang="en" className="w-full">
      <body className="pb-12 w-full">
        <SessionProvider>
          <main className="w-full">
            {children}
          </main>
          <BetaDisclaimer />
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
} 
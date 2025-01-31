'use client'

import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "next-auth/react"
import '@/app/globals.css'
import Link from 'next/link'
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
          <footer className="border-t mt-auto py-4">
            <div className="container mx-auto px-4 text-sm text-gray-600">
              <div className="flex justify-center space-x-4">
                <Link href="/legal/privacy">Privacy Policy</Link>
                <Link href="/legal/terms">Terms of Service</Link>
                <Link href="/legal/cookies">Cookie Policy</Link>
                <Link href="/legal/dpa">Data Processing</Link>
              </div>
            </div>
          </footer>
        </SessionProvider>
      </body>
    </html>
  )
} 
'use client'

import Link from 'next/link'

export function BetaDisclaimer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-50 border-t border-blue-100 p-0.5 text-center z-50">
      <div className="flex items-center justify-center gap-4 text-[10px]">
        <Link href="/legal/privacy" className="text-muted-foreground hover:underline">
          Privacy Policy
        </Link>
        <Link href="/legal/terms" className="text-muted-foreground hover:underline">
          Terms of Service
        </Link>
        <Link href="/legal/cookies" className="text-muted-foreground hover:underline">
          Cookie Policy
        </Link>
        <Link href="/legal/dpa" className="text-muted-foreground hover:underline">
          Data Processing
        </Link>
      </div>
      <p className="text-[10px] text-blue-700 -mt-0.5">
        <span className="font-medium">Closed Beta Testing:</span> This platform is currently in closed beta. Features and functionality may change.
      </p>
    </div>
  )
} 
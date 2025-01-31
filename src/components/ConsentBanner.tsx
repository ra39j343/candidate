'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('dataConsent')
    if (!consent) setShowBanner(true)
  }, [])

  const acceptConsent = () => {
    localStorage.setItem('dataConsent', 'accepted')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          We use encryption to protect your data and cookies for authentication. 
          By using this site, you agree to our{' '}
          <Link href="/legal/privacy" className="underline">Privacy Policy</Link>{' '}
          and{' '}
          <Link href="/legal/terms" className="underline">Terms of Service</Link>.
        </p>
        <Button onClick={acceptConsent} variant="outline" className="ml-4">
          Accept
        </Button>
      </div>
    </div>
  )
} 
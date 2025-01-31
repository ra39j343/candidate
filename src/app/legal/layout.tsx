import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Documents',
  description: 'Privacy Policy, Terms of Service, and other legal information'
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="prose prose-slate max-w-none">
        <div className="space-y-8 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  )
} 
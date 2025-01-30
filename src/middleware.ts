import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Create a list of paths that should be public
  const publicPaths = [
    '/chat/public',           // Public chat UI (without trailing slash)
    '/api/chat/public',       // Public chat API (without trailing slash)
    '/auth',                  // Auth pages
    '/api/auth',              // Auth API
    '/_next',                 // Next.js assets
    '/static',                // Static files
    '/favicon.ico'            // Favicon
  ]

  // Check if the current path starts with any of the public paths
  const isPublicPath = publicPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  )
  
  if (isPublicPath) {
    console.log('Public path accessed:', pathname)
    return NextResponse.next()
  }

  // Check for session token
  const token = request.cookies.get('next-auth.session-token') ||
                request.cookies.get('__Secure-next-auth.session-token')
                
  if (!token) {
    console.log('No token found for path:', pathname)
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 
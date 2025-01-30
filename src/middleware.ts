import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Debug log to see what path is being accessed
  console.log('Middleware processing path:', pathname)

  // Check if this is a public chat route (either UI or API)
  if (pathname.includes('/chat/public/') || pathname.includes('/api/chat/public/')) {
    console.log('Public chat route detected:', pathname)
    return NextResponse.next()
  }

  // Other public paths that don't need authentication
  const publicPaths = [
    '/auth',
    '/api/auth',
    '/_next',
    '/static',
    '/favicon.ico'
  ]

  // Check if the current path starts with any of the public paths
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path))
  
  if (isPublicPath) {
    return NextResponse.next()
  }

  // Check for session token
  const token = request.cookies.get('next-auth.session-token') ||
                request.cookies.get('__Secure-next-auth.session-token')
                
  if (!token) {
    console.log('Authentication required for:', pathname)
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all paths except static files
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Explicitly check for public chat routes first
  if (request.nextUrl.pathname.startsWith('/chat/public/') || 
      request.nextUrl.pathname.startsWith('/api/chat/public/')) {
    console.log('Public chat route accessed:', request.nextUrl.pathname) // Debug log
    return NextResponse.next()
  }

  // Don't check auth for login-related routes
  if (request.nextUrl.pathname.startsWith('/auth/') ||
      request.nextUrl.pathname.startsWith('/api/auth/')) {
    return NextResponse.next()
  }

  // Check for session token (both secure and non-secure versions)
  const token = request.cookies.get('next-auth.session-token') ||
                request.cookies.get('__Secure-next-auth.session-token')
                
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 
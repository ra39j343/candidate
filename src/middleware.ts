import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Don't require auth for public chat routes and their API endpoints
  if (request.nextUrl.pathname.startsWith('/chat/public/') || 
      request.nextUrl.pathname.startsWith('/api/chat/public/')) {
    return NextResponse.next()
  }

  // Don't check auth for login-related routes
  if (request.nextUrl.pathname.startsWith('/auth/') ||
      request.nextUrl.pathname.startsWith('/api/auth/')) {
    return NextResponse.next()
  }

  // Check for session token
  const token = request.cookies.get('next-auth.session-token') ||
                request.cookies.get('__Secure-next-auth.session-token')
                
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 
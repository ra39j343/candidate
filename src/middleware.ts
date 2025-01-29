import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Don't require auth for public chat routes and their API endpoints
  if (request.nextUrl.pathname.startsWith('/chat/public/') || 
      request.nextUrl.pathname.startsWith('/api/chat/public/')) {
    return NextResponse.next()
  }

  // Require auth for all other routes (except auth routes)
  if (!request.nextUrl.pathname.startsWith('/auth/')) {
    const token = request.cookies.get('next-auth.session-token')
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
} 
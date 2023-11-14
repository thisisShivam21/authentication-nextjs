import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // Finding the path
    const path = request.nextUrl.pathname

    // Checking the public paths.
    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

    // Getting the token value.
    const token = request.cookies.get('token')?.value || ''

    // Logic to redirect user to some other page if user already has the token and if isPublicPath is true.
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    // Logic to redirect user to login page if user does not have the token and if isPublicPath is false.
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}
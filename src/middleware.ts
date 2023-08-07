import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const cookie = req?.cookies.get('EXAMPLECOOKIE')

  const { pathname } = req.nextUrl

  // Example of redirecting to /auth if the cookie is not set
  if (!cookie && pathname !== '/auth') {
    req.nextUrl.pathname = '/auth'
    return NextResponse.redirect(req.nextUrl)
  }

  return NextResponse.next()
}

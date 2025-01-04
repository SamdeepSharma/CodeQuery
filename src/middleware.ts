import { NextResponse } from 'next/server'
import getOrCreateDB from './utils/models/server/seed'
import getOrCreateStorage from './utils/models/server/storage.setup'
 
// This function can be marked `async` if using `await` inside
export async function middleware() {

     await Promise.all([
          getOrCreateDB(),
          getOrCreateStorage()
     ])

     return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
     /* match all request paths except for the ones that starts with:
     - api
     - _next/static
     - _next/image
     - favicon.ico
     */

  matcher: [
     "/((?!api|_next/static|_next/image|favicon.ico).*)"
  ],
}
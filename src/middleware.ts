import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '../auth';

const protectedRoutes = ['/profile'];

export default async function middleware(req: NextRequest) {
  const session = await auth();
  const isProtectedRoute = protectedRoutes.some((prefix) => req.nextUrl.pathname.startsWith(prefix));

  if (!session && isProtectedRoute) {
    const absoluteURL = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}

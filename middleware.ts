import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
import { NextRequest } from 'next/server';

export default withAuth(
  async function middleware(request: NextRequest) {
    // console.log(request);
  },
  { isReturnToCurrentPage: true },
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images
     * - auth
     * - login
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - homepage (represented with after beginning with a slash)
     */
    '/((?!api|_next/static|_next/image|images|auth|login|favicon.ico|sitemap.xml|robots.txt|$).*)',
  ],
};
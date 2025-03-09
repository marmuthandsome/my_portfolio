import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the response
  const response = NextResponse.next();

  // Add CORS headers
  response.headers.set('Access-Control-Allow-Origin', 'http://100.99.73.6');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.headers.set('Access-Control-Max-Age', '86400');

  return response;
}

// Configure the paths that should be handled by this middleware
export const config = {
  matcher: [
    // Match all API routes
    '/api/:path*',
    // Match specific paths that need CORS
    '/blog/:path*',
  ],
};

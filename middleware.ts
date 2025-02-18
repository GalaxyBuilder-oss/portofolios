import { middleware } from './middleware/logger';

export const config = {
  matcher: [
    '/api/v1/:path*', 
    '/api/v2/:path*'
  ],
};

export default middleware;

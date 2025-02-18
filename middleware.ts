import { middleware } from './middleware/logger';

export const config = {
  matcher: [
    '/api/:path*'
  ],
};

export default middleware;

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx'],
  turbopack:{
    resolveExtensions: [
      '.mdx',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.mjs',
      '.json',
    ],
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [new URL('https://portofolio2024.s3.ap-southeast-1.amazonaws.com/public/**')],
  },
};

export default nextConfig;

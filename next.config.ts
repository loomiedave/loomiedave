import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  ignoreDuringBuilds: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;

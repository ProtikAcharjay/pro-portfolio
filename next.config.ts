import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.techtime.com.bd',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

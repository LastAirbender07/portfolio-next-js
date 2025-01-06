import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images:{
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '/**',
          },
        ]
      },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow builds to complete even with TypeScript errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

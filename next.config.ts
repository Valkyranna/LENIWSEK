import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/LENIWSEK',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

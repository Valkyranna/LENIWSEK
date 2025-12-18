import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // Only use the static export output when building for GitHub Pages
  output: isGithubActions ? 'export' : undefined,
  // Only use the /LENIWSEK path when building for GitHub Pages
  basePath: isGithubActions ? '/LENIWSEK' : '',
  // Pass the same base path to the client side
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/LENIWSEK' : '',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

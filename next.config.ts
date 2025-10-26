import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xxpokwgadanlbdaiughz.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default withMDX(nextConfig);

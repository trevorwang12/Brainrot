import type { NextConfig } from "next";

/**
 * Next.js Configuration for Steal a Brainrot News Website
 * 
 * This configuration optimizes the website for:
 * - Static Site Generation (SSG) for optimal performance
 * - Image optimization for gaming content
 * - SEO-friendly URL structure
 * - Progressive Web App capabilities
 */
const nextConfig: NextConfig = {
  // Output configuration for Docker deployment
  output: 'standalone',
  
  // Image optimization
  images: {
    unoptimized: false, // Enable Next.js image optimization
    domains: [
      'localhost',
      'brainout-news.vercel.app'
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85, 90], // Configure allowed quality levels
    minimumCacheTTL: 31536000, // Cache images for 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Server external packages
  serverExternalPackages: ['gray-matter', 'marked'],
  
  // Experimental features
  experimental: {
    // Enable App Router optimizations
    optimizePackageImports: ['react', 'react-dom'],
  },
  
  // Turbopack configuration
  turbopack: {
    root: '/Users/chuyoujing/Documents/编程项目/brainout/brainout-news',
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      // Specific caching for static assets
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)\\.(.css|js|png|jpg|jpeg|gif|ico|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=59',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Handle SVG imports
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  
  // Environment variables
  env: {
    SITE_NAME: 'Steal a Brainrot News',
    SITE_URL: 'https://brainout-news.vercel.app',
    SITE_DESCRIPTION: 'The ultimate source for Steal a Brainrot gaming news, guides, and strategies',
  },
};

export default nextConfig;

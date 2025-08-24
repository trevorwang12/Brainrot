import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false, // Only preload primary font
});

export const metadata: Metadata = {
  title: "Steal a Brainrot News - Game Updates & Guides",
  description: "Latest Steal a Brainrot game news, strategy guides, and community discussions",
  keywords: ["steal a brainrot", "roblox games", "gaming news", "strategy guides", "brainrot"],
  authors: [{ name: "Brainrot News Team" }],
  creator: "Brainrot News",
  publisher: "Brainrot News",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brainout-news.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Steal a Brainrot News - Game Updates & Guides",
    description: "Latest Steal a Brainrot game news, strategy guides, and community discussions",
    url: 'https://brainout-news.vercel.app',
    siteName: 'Steal a Brainrot News',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Steal a Brainrot News',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Steal a Brainrot News - Game Updates & Guides",
    description: "Latest Steal a Brainrot game news, strategy guides, and community discussions",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Viewport meta for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Theme color for PWA */}
        <meta name="theme-color" content="#9333ea" />
        <meta name="msapplication-TileColor" content="#9333ea" />
        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo.png" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <PerformanceMonitor />
        <ServiceWorkerRegistration />
        <Suspense fallback={
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        }>
          <Layout>
            {children}
          </Layout>
        </Suspense>
      </body>
    </html>
  );
}

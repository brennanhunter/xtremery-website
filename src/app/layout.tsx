import type { Metadata } from "next";
import "./globals.css";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/lib/analytics-component";
import Chatbot from "./components/Chatbot";
import { Toaster } from 'react-hot-toast';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from 'react';
import SEOJsonLd from "@/app/components/SEOJsonLd";
import { handelsonTwo, handelsonSix, handelsonFive, avenir } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Using your brand fonts as the primary fonts

export const metadata: Metadata = {
  metadataBase: new URL('https://www.xtremery.com'),
  title: {
    default: 'Xtremery – PC Repair & Web Design in DeLand, FL',
    template: '%s | Xtremery',
  },
  description:
    'DeLand, FL computer repair and custom web design. Honest pricing, expert service, and fast help for PCs, laptops, and high‑converting websites.',
  keywords: [
    'DeLand web design',
    'web design DeLand FL',
    'website design DeLand',
    'PC repair DeLand',
    'computer repair DeLand',
    'laptop repair DeLand',
    'custom PC builds DeLand',
    'small business websites Florida',
    'SEO DeLand',
    'Xtremery',
  ],
  applicationName: 'Xtremery',
  authors: [{ name: 'Xtremery' }],
  creator: 'Xtremery',
  publisher: 'Xtremery',
  alternates: {
    canonical: 'https://www.xtremery.com',
    types: {
      'application/rss+xml': 'https://www.xtremery.com/rss.xml',
    },
  },
  openGraph: {
    title: 'Xtremery – PC Repair & Web Design in DeLand, FL',
    description:
      'Local computer repair and modern web design serving DeLand, Florida. Friendly, honest, and reliable.',
    url: 'https://www.xtremery.com',
    siteName: 'Xtremery',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logos/logo-purple.png',
        width: 1200,
        height: 630,
        alt: 'Xtremery – PC Repair & Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xtremery – PC Repair & Web Design in DeLand, FL',
    description:
      'Computer repair and web design for DeLand, FL. Honest pricing. Expert help.',
    images: ['/logos/logo-purple.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SEOJsonLd />
      </head>
      <body className={`${avenir.variable} ${handelsonTwo.variable} ${handelsonSix.variable} ${handelsonFive.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <Chatbot />
        <VercelAnalytics />
        <SpeedInsights />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
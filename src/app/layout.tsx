import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/lib/analytics-component";
import Chatbot from "./components/Chatbot";
import { Toaster } from 'react-hot-toast';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from 'react';
import SEOJsonLd from "@/app/components/SEOJsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    canonical: '/',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  openGraph: {
    title: 'Xtremery – PC Repair & Web Design in DeLand, FL',
    description:
      'Local computer repair and modern web design serving DeLand, Florida. Friendly, honest, and reliable.',
    url: '/',
    siteName: 'Xtremery',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/LogoNew.png',
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
    images: ['/LogoNew.png'],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <Chatbot />
        <VercelAnalytics />
        <Suspense fallback={null}>  {/* 👈 Add this */}
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
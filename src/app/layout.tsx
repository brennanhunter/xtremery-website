import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Chatbot from "./components/Chatbot";
import { Toaster } from 'react-hot-toast'; // ✅ add this import (after globals)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Xtremery – PC Repair & Web Design in Deland, FL',
  description: 'Local tech wizardry for your computer or website. Honest help, no pushy sales.',
  icons: {
    icon: '/favicon.ico',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} /> {/* ✅ add this line */}
      </body> <Chatbot />   </html>
    
  );
}

<Analytics />
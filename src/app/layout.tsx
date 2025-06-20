import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Temporarily commented out to find the issue:
        <Header />
        <Footer />
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <Chatbot />
        <VercelAnalytics />
        */}
      </body>
    </html>
  );
}
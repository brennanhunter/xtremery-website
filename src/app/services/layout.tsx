import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - PC Repair & Web Design | Xtremery DeLand',
  description: 'Professional computer repair and custom web design services in DeLand, FL. From PC diagnostics and upgrades to high-converting websites and SEO optimization.',
  keywords: [
    'pc repair services deland',
    'web design services deland',
    'computer repair deland fl',
    'website design services',
    'laptop repair deland',
    'custom pc builds',
    'seo services deland',
    'deland tech services',
    'volusia county pc repair',
    'local web designer'
  ],
  alternates: {
    canonical: 'https://www.xtremery.com/services',
  },
  openGraph: {
    title: 'Services - PC Repair & Web Design | Xtremery DeLand',
    description: 'Professional computer repair and custom web design services in DeLand, FL.',
    url: 'https://www.xtremery.com/services',
    siteName: 'Xtremery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - PC Repair & Web Design | Xtremery DeLand',
    description: 'Professional computer repair and custom web design services in DeLand, FL.',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

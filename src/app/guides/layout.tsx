import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PC Repair Guides',
  description: 'Free step-by-step computer repair guides from Xtremery in DeLand, FL. Learn how to fix slow PCs, backup data, troubleshoot issues, and more.',
  alternates: {
    canonical: 'https://www.xtremery.com/guides',
  },
  openGraph: {
    title: 'PC Repair Guides | Xtremery DeLand',
    description: 'Free DIY computer repair guides with easy-to-follow instructions.',
    url: 'https://www.xtremery.com/guides',
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

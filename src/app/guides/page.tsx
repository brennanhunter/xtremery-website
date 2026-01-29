import { Metadata } from 'next';
import PCRepairGuides from '../components/PCRepairGuides';

export const metadata: Metadata = {
  title: 'Free PC Repair Guides | DeLand Computer Help',
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

export default function PCRepairGuidesPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-blue-950">
        <PCRepairGuides />
      </main>
      

    </>
  );
}
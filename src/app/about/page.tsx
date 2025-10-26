import type { Metadata } from 'next';
import HonorGrid from '../components/about/HonorGrid';
import WhoAmI from '../components/about/WhoAmI';
import AboutXtremery from '../components/about/AboutXtremery';
import OffTheClock from '../components/about/OffTheClock';
import CTA from '../components/home/CTA';

export const metadata: Metadata = {
  title: 'About Xtremery - Your DeLand Tech Expert',
  description: 'Meet Hunter - DeLand\'s trusted computer repair and web design expert. Military veteran, tech enthusiast, and passionate local business owner serving Central Florida.',
  keywords: [
    'about xtremery',
    'deland tech expert',
    'computer repair deland owner',
    'web design deland',
    'hunter xtremery',
    'local tech business deland',
    'military veteran tech business',
    'deland computer technician'
  ],
  alternates: {
    canonical: 'https://www.xtremery.com/about',
  },
  openGraph: {
    title: 'About Xtremery - Your DeLand Tech Expert',
    description: 'Meet Hunter - DeLand\'s trusted computer repair and web design expert. Military veteran serving Central Florida.',
    url: 'https://www.xtremery.com/about',
    siteName: 'Xtremery',
    type: 'website',
    images: [
      {
        url: '/logos/logo-purple.png',
        width: 1200,
        height: 630,
        alt: 'Xtremery - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Xtremery - Your DeLand Tech Expert',
    description: 'Meet Hunter - DeLand\'s trusted computer repair and web design expert.',
    images: ['/logos/logo-purple.png'],
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="bg-white text-gray-800">
      <AboutXtremery /> 
      <WhoAmI />
      <HonorGrid />
      <OffTheClock />
      <CTA />
      </main>
    </>
  );
}

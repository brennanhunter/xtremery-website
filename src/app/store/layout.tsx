import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Tools & Digital Products Store - Xtremery',
  description: 'Professional tech tools, guides, and digital products from Xtremery. Expert-created solutions for PC maintenance and optimization.',
  alternates: {
    canonical: 'https://www.xtremery.com/store',
  },
  openGraph: {
    title: 'Xtremery Store | Professional Tech Tools & Guides',
    description: 'Download professional-grade tech tools and guides created by experts.',
    url: 'https://www.xtremery.com/store',
  },
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

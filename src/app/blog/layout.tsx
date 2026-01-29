import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Blog',
  description: 'Expert tech advice, PC repair tips, web design insights, and gaming guides from Xtremery in DeLand, FL.',
  alternates: {
    canonical: 'https://www.xtremery.com/blog',
  },
  openGraph: {
    title: 'Xtremery Tech Blog | PC Repair & Web Design Tips',
    description: 'Latest tech news, repair guides, and web design insights from DeLand experts.',
    url: 'https://www.xtremery.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

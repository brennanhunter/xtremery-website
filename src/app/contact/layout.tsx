import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Xtremery',
  description: 'Contact Xtremery in DeLand, FL for PC repair, web design, and tech support. Fast, honest service with no hidden fees.',
  alternates: {
    canonical: 'https://www.xtremery.com/contact',
  },
  openGraph: {
    title: 'Contact Xtremery | DeLand PC Repair & Web Design',
    description: 'Get in touch for expert computer repair and web design services in DeLand, FL.',
    url: 'https://www.xtremery.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

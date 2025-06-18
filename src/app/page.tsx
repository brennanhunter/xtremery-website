'use client';

import Hero from './components/home/Hero';
import Services from "./components/home/Services";
import Testimonials from './components/home/Testimonials'; // or '@/components/Testimonials'
import CTA from './components/home/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">


<Hero />
<Services />
<Testimonials />
<CTA />

    </main>
  );
}

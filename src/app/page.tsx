'use client';

import Hero from './components/home/Hero';
import Services from "./components/home/Services";
import Testimonials from './components/home/Testimonials'; // or '@/components/Testimonials'
import CTA from './components/home/CTA';
import ChallengeGallery from './components/home/ChallengeGallery';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

{/* Emergency Phone Notice */}
<div className="bg-red-600 text-white py-3 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <p className="font-bold text-sm sm:text-base">
      ⚠️ PHONE SYSTEM UPDATE (as of Nov 24, 2025, 12:00 PM) - My primary line is temporarily out. Please call/text <a href="tel:+14066968256" className="underline hover:text-red-100">(406) 696-8256</a> for immediate assistance.
    </p>
  </div>
</div>

<Hero />
<Services />
<ChallengeGallery />
<Testimonials />
<CTA />

    </main>
  );
}

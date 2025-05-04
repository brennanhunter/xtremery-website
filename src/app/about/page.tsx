'use client';
import Header from '../components/Header';
import HonorGrid from '../components/HonorGrid';
import WhoAmI from '../components/WhoAmI';
import AboutXtremery from '../components/AboutXtremery';
import OffTheClock from '../components/OffTheClock';
import CTA from '../components/CTA';


export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutXtremery />
      
      <main className="w-full min-h-screen bg-gradient-to-br from-purple-800 via-black to-cyan-500 text-gray-100 px-0 py-20">
          <div className="space-y-0">
            <WhoAmI />
            <HonorGrid />
            <OffTheClock />

            <CTA />
        </div>
      </main>
    </>
  );
}

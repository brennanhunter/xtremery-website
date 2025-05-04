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
      
      
      
      <main className="bg-gradient-to-br from-purple-800 via-black to-cyan-500 text-gray-100">
      <Header />
      <AboutXtremery /> 
      <WhoAmI />
            <HonorGrid />
            <OffTheClock />

            <CTA />
        
      </main>
    </>
  );
}

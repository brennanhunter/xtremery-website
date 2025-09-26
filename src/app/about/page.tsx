'use client';
import HonorGrid from '../components/about/HonorGrid';
import WhoAmI from '../components/about/WhoAmI';
import AboutXtremery from '../components/about/AboutXtremery';
import  OffTheClock from '../components/about/OffTheClock';
import CTA from '../components/home/CTA';


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

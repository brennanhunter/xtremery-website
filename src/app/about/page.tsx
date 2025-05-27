'use client';
import Header from '../components/Header';
import HonorGrid from '../components/HonorGrid';
import WhoAmI from '../components/WhoAmI';
import AboutXtremery from '../components/AboutXtremery';
import OffTheClock from '../components/OffTheClock';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      
      <Header />
      
      <main className="bg-gradient-to-br from-purple-800 via-black to-cyan-500 text-gray-100">
      
      <AboutXtremery /> 
      <WhoAmI />
            <HonorGrid />
            <OffTheClock />

            <CTA />
            <Footer />
      </main>
    </>
  );
}

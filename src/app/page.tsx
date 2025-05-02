'use client';
import { motion } from "framer-motion";
import { FaTools, FaCode, FaGamepad, FaVideo, FaServer, FaFacebookF } from "react-icons/fa";
import Hero from './components/Hero';
import Services from "./components/Services";
import Testimonials from './components/Testimonials'; // or '@/components/Testimonials'
import Header from "./components/Header";
import CTA from "./components/CTA";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

<Header />
<Hero />
<Services />
<Testimonials />
<CTA />



      {/* Next sections will go here */}
    </main>
  );
}

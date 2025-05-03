'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '/public/HeroImageFour.png';
import { motion } from 'framer-motion';
import MagicButton from './MagicButton';

export default function Hero() {
  return (
    <section className="relative h-[100vh] sm:h-[120vh] overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src={HeroImage}
          alt="Hero background"
          fill
          priority
          className="object-cover object-top w-full h-full"
        />
      </div>

      {/* Glowing Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-20 z-10 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-20 z-10 animate-pulse delay-1000" />

      {/* Foreground Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center h-full">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg text-balance relative"
          whileHover={{
            scale: 1.05,
            textShadow: '0px 0px 8px #7f00ff, 0px 0px 12px #00c3ff',
            rotateZ: [0, -1.5, 1.5, -1, 1, 0],
          }}
          transition={{
            type: 'tween',
            duration: 0.6,
            ease: 'easeInOut',
          }}
        >
          <span className="block sm:inline">Cutting-Edge Tech,</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline">Tailored For You.</span>
        </motion.h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8 drop-shadow-md">
          From blazing-fast web apps to pixel-perfect repair—Xtremery delivers wizard-level tech solutions with style.
        </p>

        <MagicButton />
      </div>
    </section>
  );
}

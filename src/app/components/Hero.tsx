'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '/public/HeroImageFour.png';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(useTransform(mouseX, [0, 1920], [-20, 20]), {
    stiffness: 200,
    damping: 15,
  });

  const y = useSpring(useTransform(mouseY, [0, 1080], [-20, 20]), {
    stiffness: 200,
    damping: 15,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
      <motion.div
        ref={containerRef}
        style={{ x, y }}
        className="relative z-20 max-w-4xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center h-full"
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg text-balance"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="block sm:inline">Cutting-Edge Tech,</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline">Tailored For You.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8 drop-shadow-md"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          From blazing-fast web apps to pixel-perfect repair—Xtremery delivers wizard-level tech solutions with style.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="#"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Work With Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

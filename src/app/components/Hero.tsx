// src/app/components/Hero.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '/public/HeroImageFour.png';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const letters = 'Cutting-Edge Tech, Tailored For You.'.split('');
  const subtext = 'From blazing-fast web apps to pixel-perfect repair—Xtremery delivers wizard-level tech solutions with style.'.split('');
  const buttonText = 'Work With Us'.split('');

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
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg flex flex-wrap justify-center">
          {letters.map((char, i) => (
            <MagneticLetter key={i} char={char} withShock />
          ))}
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8 drop-shadow-md flex flex-wrap justify-center">
          {subtext.map((char, i) => (
            <MagneticLetter key={i} char={char} />
          ))}
        </p>

        <Link
          href="#"
          className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          {buttonText.map((char, i) => (
            <MagneticLetter key={i} char={char} withShock />
          ))}
        </Link>
      </div>
    </section>
  );
}

function MagneticLetter({ char, withShock = false }: { char: string; withShock?: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds) return;

      const dx = e.clientX - (bounds.left + bounds.width / 2);
      const dy = e.clientY - (bounds.top + bounds.height / 2);
      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      if (distance < 100) {
        x.set(dx * 0.3);
        y.set(dy * 0.3);
        if (withShock) scale.set(1.2);
      } else {
        x.set(0);
        y.set(0);
        scale.set(1);
      }
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y, scale, withShock]);

  return (
    <motion.span
      ref={ref}
      style={{ x, y, scale }}
      className={`inline-block mx-[1px] transition-transform duration-150 ${withShock ? 'text-glow' : ''}`}
    >
      {char === ' ' ? ' ' : char}
    </motion.span>
  );
}

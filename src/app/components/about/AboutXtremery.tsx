'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WebGL from './WebGL';
import { handelsonTwo, avenir } from '@/app/fonts';

gsap.registerPlugin(ScrollTrigger);

export default function AboutXtremery() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=400',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center text-white p-0 m-0"
    >
      {/* 🔥 Interactive WebGL Fluid Background */}
      <WebGL />

      {/* 🧠 Animated Text */}
      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-6xl px-6"
      >
        <h1 className={`${handelsonTwo.className} leading-[1.1] text-6xl sm:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-white to-cyan-300 text-transparent bg-clip-text`}>
          Meet Xtremery
        </h1>
        <p className={`${avenir.className} text-2xl sm:text-3xl lg:text-4xl text-white/90 leading-relaxed max-w-5xl mx-auto font-light`}>
          Where tech frustration meets its match. We craft websites that wow, fix computers that work, 
          and deliver solutions with a smile. Because technology should feel like magic, not a migraine.
        </p>
        <div className={`${avenir.className} mt-8 text-lg sm:text-xl text-cyan-200 font-medium`}>
          Hunter Coleman • Founder & Chief Problem Solver
        </div>
      </div>
    </section>
  );
}

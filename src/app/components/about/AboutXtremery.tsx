'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      {/* 🔥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/AboutBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧠 Animated Text */}
      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-5xl px-6"
      >
        <h1 className="leading-[1.2] text-6xl sm:text-8xl font-extrabold mb-8 bg-gradient-to-r from-purple-500 via-white to-cyan-400 text-transparent bg-clip-text">
          About Xtremery
        </h1>
        <p className="text-xl sm:text-5xl text-gray-100 leading-relaxed max-w-7xl mx-auto">
          At Xtremery, we believe tech shouldn&apos;t be frustrating—it should be magic. I&apos;m Hunter, a guy who fixes PCs,
          builds stunning websites, and makes coffee disappear like it&apos;s my side hustle.
        </p>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DistortedImageCanvas from './DistortedImageCanvas';

export default function WhoAmI() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section
      ref={ref}
      className="w-[90%] mx-auto py-20 px-6 md:pl-[100px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* Left: Text with scroll animation */}
      <motion.div
        className="text-left space-y-6"
        style={{ opacity, y, scale }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-white to-cyan-700 text-transparent bg-clip-text">
          Who I Am
        </h2>
        <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
          I started Xtremery because I noticed something: a lot of tech companies talk fast and charge faster.
          I wanted to be different—accessible, reliable, and actually enjoyable to work with.
          I bring over a decade of experience in computer repair, web design, and user-first tech solutions.
          Also, my wife says I tell good dad jokes.
        </p>
        <a
          href="/services"
          className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
        >
          See What I Do
        </a>
      </motion.div>

      {/* Right: Canvas with scroll animation */}
      <motion.div
        className="flex items-center justify-center h-full min-h-[800px]"
        style={{ opacity: imageOpacity, y: imageY, scale: imageScale }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-full max-w-[700px] h-[1000px]">
          <DistortedImageCanvas />
        </div>

        <motion.div
          className="absolute -top-14 -right-14 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl z-0"
          animate={{ scale: [1, 1.15, 1], x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: '700' });

const basePolaroids = [
  { src: '/Images/polaroid-three.jpg', rotation: '10deg', top: '18%', left: '12%', caption: 'Space Explorers on the Loose 🌌' },
  { src: '/Images/polaroid-one.jpg', rotation: '-20deg', top: '30%', left: '28%', caption: 'Saddle Up for Adventure 🐴' },
  { src: '/Images/wedding-pic.jpg', rotation: '-5deg', top: '5%', left: '40%', caption: 'My Favorite People, My Favorite Job ❤️' },
  { src: '/Images/polaroid-two.jpg', rotation: '15deg', top: '25%', left: '58%', caption: 'Magic Hour with the Crew ✨' },
];

export default function OffTheClock() {
  const [frontIndex, setFrontIndex] = useState<number>(2);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-28 bg-gray-900 text-white min-h-[1000px]">
      {/* Background Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wedding-pic.jpg"
          alt="Background blur"
          layout="fill"
          objectFit="cover"
          className="blur-[10px] opacity-20"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full px-6 flex flex-col md:flex-row items-start justify-center gap-12">
        {/* Polaroid Stack Area */}
        <div className="relative w-full md:w-[1000px] h-auto md:h-[700px] flex flex-wrap md:block gap-6 justify-center">
          {[...basePolaroids.entries()].map(([index, item]) => {
            const zIndex = index === frontIndex ? 'z-50' : index;
            const style = isMounted && typeof window !== 'undefined' && window.innerWidth >= 768
              ? { transform: `rotate(${item.rotation})`, top: item.top, left: item.left }
              : undefined;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => setFrontIndex(index)}
                className={`w-[280px] h-[360px] p-4 bg-white rounded-md shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer ${zIndex} ${isMounted ? 'md:absolute' : 'relative'}`}
                style={style}
              >
                <div className="relative w-full h-[80%] rounded-sm overflow-hidden mb-2">
                  <Image
                    src={item.src}
                    alt="polaroid"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className={`text-center text-gray-700 text-base font-semibold ${cinzel.className}`}>
                  {item.caption}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center md:text-left space-y-6 max-w-xl md:mt-10"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-300 via-white to-cyan-300 text-transparent bg-clip-text">
            Off the Clock
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
            When I&apos;m not wrangling tech, I&apos;m wrangling kids—in the best way. These moments remind me what it&apos;s all for.
          </p>
          <p className="italic text-gray-400 text-lg sm:text-xl">
          &quot;Strong tech comes from strong values—honesty, effort, and a little bit of magic.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
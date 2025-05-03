'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 px-6 sm:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-md shadow-xl border-b border-purple-500'
          : 'bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900 bg-opacity-70 backdrop-blur-md border-b border-purple-500'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="flex items-center gap-2"
        >
          <Image
            src="/LogoTransparent.png"
            alt="Xtremery Logo"
            width={180}
            height={60}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-10">
          {['Home', 'About', 'Services', 'Contact'].map((label) => {
            const paths: Record<string, string> = {
              Home: '/',
              About: '/about',
              Services: '#services',
              Contact: '#contact',
            };

            return (
              <Link
                key={label}
                href={paths[label]}
                className="relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-blue-400 transition-all duration-300 group hover:scale-105"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

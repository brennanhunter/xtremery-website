'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 px-6 sm:px-12 py-4 transition-all duration-300 overflow-x-hidden ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-md shadow-xl border-b border-purple-500'
          : 'bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900 bg-opacity-70 backdrop-blur-md border-b border-purple-500'
      }`}
    >
      <div className="w-full max-w-full flex items-center px-4 sm:px-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/LogoNew.png"
              alt="Xtremery Logo"
              width={300}
              height={100}
              className="object-contain block overflow-hidden w-[180px] sm:w-[300px] h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-10 ml-auto pr-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-400 transition-all duration-300 group hover:scale-105"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden flex flex-col items-center justify-center w-10 h-10 focus:outline-none ml-auto"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="sm:hidden flex flex-col gap-6 mt-4 px-6 pb-4"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-2xl text-white font-semibold py-3 px-6 bg-gradient-to-r from-purple-700 to-blue-600 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-center"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

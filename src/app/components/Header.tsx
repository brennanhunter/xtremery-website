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
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 px-6 sm:px-12 py-2 transition-all duration-300 overflow-x-hidden ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-md shadow-xl border-b border-purple-500'
          : 'bg-gradient-to-r from-purple-900 via-gray-900 to-blue-900 bg-opacity-70 backdrop-blur-md border-b border-purple-500'
      }`}
    >
      <div className="w-full max-w-full flex items-center px-4 sm:px-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className="flex items-center gap-2"
            >
              <Image
                src="/LogoNew.png"
                alt="Xtremery Logo"
                width={180}
                height={60}
                className="object-contain block overflow-hidden w-[120px] sm:w-[180px] h-auto"
                priority
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 ml-auto pr-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-400 transition-all duration-300 group hover:scale-105"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden flex flex-col items-center justify-center w-8 h-8 focus:outline-none ml-auto"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white my-0.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
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
            className="sm:hidden flex flex-col gap-4 mt-2 px-6 pb-4"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xl text-white font-semibold py-2 px-4 bg-gradient-to-r from-purple-700 to-blue-600 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-center"
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

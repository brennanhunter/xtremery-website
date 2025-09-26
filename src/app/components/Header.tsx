'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Add usePathname

interface HeaderProps {
  resetServiceSelection?: () => void; // Add optional prop for Services page
}

export default function Header({ resetServiceSelection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Add to determine current route

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
  { label: 'Web Design (DeLand)', href: '/web-design-deland' },
    { label: 'Guides', href: '/guides' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep-navy/95 backdrop-blur-md shadow-2xl border-b border-xtremery-purple/30'
          : 'bg-deep-navy/90 backdrop-blur-sm border-b border-xtremery-purple/20'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center"
            >
              <Image
                src="/logos/logo-purple.png"
                alt="Xtremery Logo"
                width={160}
                height={50}
                className="object-contain w-[140px] sm:w-[160px] h-auto"
                priority
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            // Special handling for Services link
            if (label === 'Services' && isActive && resetServiceSelection) {
              return (
                <button
                  key={label}
                  onClick={() => {
                    resetServiceSelection();
                  }}
                  className={`relative px-3 py-2 font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                    isActive 
                      ? 'text-aqua-spark' 
                      : 'text-off-white/90 hover:text-aqua-spark'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aqua-spark to-xtremery-purple"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            }
            return (
              <Link
                key={label}
                href={href}
                className={`relative px-3 py-2 font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                  isActive 
                    ? 'text-aqua-spark' 
                    : 'text-off-white/90 hover:text-aqua-spark'
                }`}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aqua-spark to-xtremery-purple"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1 focus:outline-none focus:ring-2 focus:ring-xtremery-purple/50 rounded-sm"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <motion.span 
            className="block w-5 h-0.5 bg-off-white origin-center"
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span 
            className="block w-5 h-0.5 bg-off-white"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span 
            className="block w-5 h-0.5 bg-off-white origin-center"
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-deep-navy/98 backdrop-blur-md border-t border-xtremery-purple/30 shadow-xl"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                // Special handling for Services link in mobile menu
                if (label === 'Services' && isActive && resetServiceSelection) {
                  return (
                    <button
                      key={label}
                      onClick={() => {
                        resetServiceSelection();
                        setMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? 'bg-xtremery-purple/20 text-aqua-spark border border-xtremery-purple/50'
                          : 'text-off-white/90 hover:bg-xtremery-purple/10 hover:text-aqua-spark'
                      }`}
                    >
                      {label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-xtremery-purple/20 text-aqua-spark border border-xtremery-purple/50'
                        : 'text-off-white/90 hover:bg-xtremery-purple/10 hover:text-aqua-spark'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
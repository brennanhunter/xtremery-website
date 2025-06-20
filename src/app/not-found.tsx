'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Circuit Lines Background Component
const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#7C3AED" strokeWidth="1"/>
            <circle cx="20" cy="20" r="2" fill="#00FFD1"/>
            <circle cx="80" cy="80" r="2" fill="#00FFD1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>
    </div>
  );
};

// Floating Tech Elements
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-60 animate-pulse"
          style={{
            backgroundColor: '#00FFD1',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1.5 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center text-white font-sans overflow-hidden" 
          style={{ 
            fontFamily: 'Inter, system-ui, sans-serif',
            background: 'linear-gradient(135deg, #7C3AED 0%, #111827 50%, #1D4ED8 100%)'
          }}>
      
      <CircuitBackground />
      <FloatingElements />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30 animate-pulse" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* 404 Error Code */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-black leading-none"
              style={{ 
                fontFamily: 'Montserrat, system-ui, sans-serif',
                background: 'linear-gradient(45deg, #7C3AED 0%, #00FFD1 50%, #1D4ED8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(124, 58, 237, 0.5))'
              }}>
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4"
              style={{ 
                color: '#F9FAFB', 
                fontFamily: 'Montserrat, system-ui, sans-serif'
              }}>
            Oops! Page Not Found
          </h2>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border max-w-2xl mx-auto mb-6"
               style={{ borderColor: '#7C3AED50' }}>
            <p className="text-lg sm:text-xl leading-relaxed"
               style={{ color: '#F9FAFB' }}>
              Looks like this page wandered off somewhere... 
              Even we can't fix a missing webpage! 🔧
            </p>
          </div>
        </motion.div>

        {/* Witty Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border inline-block"
               style={{ borderColor: '#00FFD150' }}>
            <p className="text-sm font-semibold"
               style={{ color: '#00FFD1' }}>
              💡 Pro Tip: Unlike broken PCs, broken links can't be soldered back together!
            </p>
          </div>
        </motion.div>

        {/* Navigation Options */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-block px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ 
                background: 'linear-gradient(45deg, #7C3AED, #1D4ED8)',
                color: '#F9FAFB',
                fontFamily: 'Montserrat, system-ui, sans-serif'
              }}
            >
              🏠 Back to Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ 
                background: 'linear-gradient(45deg, #00FFD1, #7C3AED)',
                color: '#111827',
                fontFamily: 'Montserrat, system-ui, sans-serif'
              }}
            >
              🔧 Get PC Help
            </Link>
          </motion.div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border max-w-md mx-auto"
               style={{ borderColor: '#DC262650' }}>
            <p className="text-sm mb-2" style={{ color: '#FCA5A5' }}>
              <strong>PC Emergency?</strong>
            </p>
            <a
              href="tel:+14068685850"
              className="text-lg font-bold hover:underline transition-colors"
              style={{ color: '#00FFD1' }}
            >
              📱 Call Hunter: (406) 868-5850
            </a>
          </div>
        </motion.div>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-semibold" style={{ color: '#F9FAFB99' }}>
            "We fix the stuff other shops won't touch." - But we can't fix missing webpages! 😄
          </p>
        </motion.div>

      </div>
    </main>
  );
}
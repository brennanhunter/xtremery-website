'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Circuit Lines Background Component
const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#A78BFA" strokeWidth="1"/>
            <circle cx="20" cy="20" r="2" fill="#38BDF8"/>
            <circle cx="80" cy="80" r="2" fill="#38BDF8"/>
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
            backgroundColor: '#38BDF8',
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-xtremery-purple via-deep-navy to-xtremery-blue text-white overflow-hidden" 
          style={{ fontFamily: 'Avenir, sans-serif' }}>
      
      <CircuitBackground />
      <FloatingElements />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-xtremery-purple/30 via-transparent to-aqua-spark/10 animate-pulse" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* 404 Error Code */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-black leading-none bg-gradient-to-r from-xtremery-purple via-xtremery-blue to-aqua-spark bg-clip-text text-transparent"
              style={{ 
                fontFamily: 'Handelson Two, sans-serif',
                filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))'
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white"
              style={{ fontFamily: 'Handelson Two, sans-serif' }}>
            Oops! Page Not Found
          </h2>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-xtremery-purple/30 max-w-2xl mx-auto mb-6">
            <p className="text-lg sm:text-xl leading-relaxed text-white" style={{ fontFamily: 'Avenir, sans-serif' }}>
              Looks like this page wandered off somewhere... 
              Even we can&apos;t fix a missing webpage! 🔧
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
          <div className="bg-gradient-to-r from-xtremery-purple/20 to-xtremery-blue/20 backdrop-blur-sm rounded-xl p-4 border border-aqua-spark/30 inline-block">
            <p className="text-sm font-semibold text-aqua-spark" style={{ fontFamily: 'Avenir, sans-serif' }}>
              💡 Pro Tip: Unlike broken PCs, broken links can&apos;t be soldered back together!
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-xtremery-purple to-xtremery-blue text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:from-xtremery-purple/90 hover:to-xtremery-blue/90 transition-all duration-300"
              style={{ fontFamily: 'Avenir, sans-serif' }}
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-aqua-spark to-xtremery-blue text-deep-navy rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:from-aqua-spark/90 hover:to-xtremery-blue/90 transition-all duration-300"
              style={{ fontFamily: 'Avenir, sans-serif' }}
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
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/30 max-w-md mx-auto">
            <p className="text-sm mb-2 text-red-200" style={{ fontFamily: 'Avenir, sans-serif' }}>
              <strong>PC Emergency?</strong>
            </p>
            <a
              href="tel:+14068685850"
              className="text-lg font-bold text-aqua-spark hover:text-white hover:underline transition-colors"
              style={{ fontFamily: 'Avenir, sans-serif' }}
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
          <p className="text-sm font-semibold text-white/60" style={{ fontFamily: 'Avenir, sans-serif' }}>
            &quot;We fix the stuff other shops won&apos;t touch.&quot; - But we can&apos;t fix missing webpages! 😄
          </p>
        </motion.div>

      </div>
    </div>
  );
}
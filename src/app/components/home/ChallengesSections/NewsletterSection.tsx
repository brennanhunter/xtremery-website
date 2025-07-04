'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', newsletterEmail);
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-r from-[#7C3AED] to-[#1D4ED8] rounded-3xl p-12 lg:p-16 text-center text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#00FFD1]/20 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-6xl mb-4 block">📧</span>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Want More Stories Like These?
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get weekly impossible repair stories, tech tips, and behind-the-scenes content from DeLand&apos;s most resourceful repair shop.
          </p>
        </motion.div>
        
        {!newsletterSubmitted ? (
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleNewsletterSubmit}
            className="max-w-lg mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-900 focus:ring-4 focus:ring-white/20 outline-none transition-all duration-300 text-lg"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-[#00FFD1] text-gray-900 rounded-full font-bold hover:bg-[#00FFD1]/90 transition-all duration-300 whitespace-nowrap text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Get Stories
              </motion.button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, just good stories. Unsubscribe anytime. 🔧
            </p>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <span className="text-4xl block mb-4">🎉</span>
            Thanks! Check your email for impossible repair stories.
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
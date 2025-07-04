'use client';

import { motion } from 'framer-motion';
import ImpossibleChallenge from './ChallengesSections/ImpossibleChallenge';
import HeroStory from './ChallengesSections/HeroStory';
import BoxingEvent from './ChallengesSections/BoxingEvent';
import PS5Story from './ChallengesSections/PS5Story';
import NewsletterSection from './ChallengesSections/NewsletterSection';

export default function ChallengeGallery() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,78,216,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(0,255,209,0.2),transparent_50%)]"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Challenge Stories Container */}
        <div className="space-y-16">
          {/* Story 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <ImpossibleChallenge />
            </div>
          </motion.div>

          {/* Story 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <HeroStory />
            </div>
          </motion.div>

          {/* Story 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <BoxingEvent />
            </div>
          </motion.div>

          {/* Story 4 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <PS5Story />
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl p-1">
              <div className="bg-slate-900 rounded-3xl p-8">
                <NewsletterSection />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-50"></div>
    </section>
  );
}
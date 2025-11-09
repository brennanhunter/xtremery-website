'use client';

import { motion } from 'framer-motion';
import ImpossibleChallenge from './ChallengesSections/ImpossibleChallenge';
import HeroStory from './ChallengesSections/HeroStory';
import BoxingEvent from './ChallengesSections/BoxingEvent';
import PS5Story from './ChallengesSections/PS5Story';
import NewsletterSection from './ChallengesSections/NewsletterSection';

export default function ChallengeGallery() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(56,189,248,0.04),transparent_50%)]"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-xtremery-purple to-aqua-spark rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-handelson-two">
            Challenge Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-xtremery-purple to-aqua-spark mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-avenir">
            When others say &ldquo;impossible,&rdquo; we say &ldquo;challenge accepted.&rdquo; Here are some of our most challenging projects and how we solved them.
          </p>
        </motion.div>

        {/* Challenge Stories Container */}
        <div className="space-y-12">
          {/* Story 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-xtremery-purple/10 to-aqua-spark/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-xtremery-purple/30">
              <ImpossibleChallenge />
            </div>
          </motion.div>

          {/* Story 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-xtremery-blue/10 to-xtremery-purple/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-xtremery-blue/30">
              <HeroStory />
            </div>
          </motion.div>

          {/* Story 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-aqua-spark/10 to-xtremery-blue/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-aqua-spark/30">
              <BoxingEvent />
            </div>
          </motion.div>

          {/* Story 4 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-xtremery-purple/10 to-xtremery-blue/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-xtremery-purple/30">
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
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-xtremery-purple/20 to-aqua-spark/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-r from-xtremery-purple to-xtremery-blue rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8">
                <NewsletterSection />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-xtremery-purple to-aqua-spark rounded-full opacity-30"></div>
    </section>
  );
}
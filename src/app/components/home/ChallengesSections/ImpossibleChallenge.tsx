'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BounceTargetGame from '../../services/web/BounceTargetGame';

export default function ImpossibleChallenge() {
  const [showBounceGame, setShowBounceGame] = useState(false);

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          When Others Say <span className="text-transparent bg-gradient-to-r from-[#7C3AED] to-[#1D4ED8] bg-clip-text">"Impossible"</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We say "challenge accepted." Here are <span className="text-transparent bg-gradient-to-r from-[#7C3AED] to-[#1D4ED8] bg-clip-text font-extrabold">real stories</span> that prove we fix what other shops won't touch.
        </p>
        
        {/* Interactive Challenge Button */}
        <motion.button
          onClick={() => setShowBounceGame(!showBounceGame)}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00FFD1] to-[#7C3AED] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {showBounceGame ? '🎯 Hide Challenge' : '🎮 Try a Challenge Yourself'}
        </motion.button>
      </motion.div>

      {/* Bounce Game */}
      <AnimatePresence>
        {showBounceGame && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 overflow-hidden"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#7C3AED]/20">
              <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">
                Love a Good Challenge? So Do We!
              </h3>
              <p className="text-center text-gray-600 mb-8 text-lg">
                This bounce game captures the same precision and problem-solving spirit we bring to every repair.
              </p>
              <BounceTargetGame />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
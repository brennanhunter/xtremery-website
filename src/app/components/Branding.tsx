'use client';

import { motion } from 'framer-motion';
import { FaPalette } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const iconHover = {
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
};

export default function Branding({ index = 0 }: { index?: number }) {
  return (
    <motion.div
      id="branding"
      className="scroll-mt-32 text-center max-w-3xl mx-auto rounded-2xl p-8 bg-gradient-to-br from-pink-100 to-rose-100 border-2 border-pink-300 shadow-lg hover:shadow-xl transition-shadow duration-300"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={index}
    >
      <motion.div
        className="text-6xl text-pink-600 mb-4"
        whileHover="hover"
        variants={iconHover}
      >
        <FaPalette />
      </motion.div>
      <h2 className="text-4xl font-extrabold text-purple-800 mb-4">Branding</h2>
      <p className="text-lg text-gray-700">
        Logos, colors, voice, and vibe. We help build brand identities that resonate with your audience—and stick in their minds.
      </p>
    </motion.div>
  );
}
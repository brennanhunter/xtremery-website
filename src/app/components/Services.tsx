'use client';

import { motion } from 'framer-motion';
import { FaTools, FaCode, FaGamepad, FaVideo, FaServer, FaFacebookF } from 'react-icons/fa';

const services = [
  {
    name: 'Web Development',
    icon: (
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <FaCode />
      </motion.div>
    ),
  },
  {
    name: 'PC Repair',
    icon: (
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <FaTools />
      </motion.div>
    ),
  },
  {
    name: 'Social Media Management',
    icon: (
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <FaFacebookF />
      </motion.div>
    ),
  },
  {
    name: 'Game Design',
    icon: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      >
        <FaGamepad />
      </motion.div>
    ),
  },
  {
    name: 'Video Editing',
    icon: (
      <motion.div
        animate={{ scale: [1, 1.1, 1], y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <FaVideo />
      </motion.div>
    ),
  },
  {
    name: 'Hosting & Domains',
    icon: (
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <FaServer />
      </motion.div>
    ),
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-white to-transparent opacity-60 z-0 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-300 rounded-full blur-3xl opacity-20 z-0 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-300 rounded-full blur-3xl opacity-20 z-0 animate-pulse delay-1000" />

      {/* Actual Content */}
      <div className="relative z-10">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-16">
          What We Do Best
        </h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              className="group relative w-full h-48 perspective-[1000px]"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-shadow duration-300 flex items-center justify-center backface-hidden">
                  <span className="text-5xl text-purple-600">{service.icon}</span>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-xl rotate-y-180 backface-hidden flex flex-col items-center justify-center text-center">
                  <h4 className="text-xl font-bold text-purple-800 mb-2">{service.name}</h4>
                  <p className="text-sm text-gray-700">
                    High-quality {service.name.toLowerCase()} built for clarity and results.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { FaTools, FaCode, FaGamepad, FaVideo, FaServer, FaFacebookF } from 'react-icons/fa';

const services = [
  {
    name: 'Web Development',
    description: 'Custom websites that look great, load fast, and actually work. No cookie-cutter templates here.',
    icon: <FaCode />,
  },
  {
    name: 'PC Repair',
    description: 'Blue screen of death? Weird pop-ups? I fix it like it’s my own machine — fast, clean, and honest.',
    icon: <FaTools />,
  },
  {
    name: 'Social Media Management',
    description: 'Content, scheduling, and strategy that grows your brand without sucking up your time.',
    icon: <FaFacebookF />,
  },
  {
    name: 'Game Design',
    description: 'Unreal Engine wizardry and fun-first design for indie games that don’t play around.',
    icon: <FaGamepad />,
  },
  {
    name: 'Video Editing',
    description: 'Cuts, transitions, and effects that make your videos feel pro — even if they were shot on your phone.',
    icon: <FaVideo />,
  },
  {
    name: 'Hosting & Domains',
    description: 'Launch-ready hosting and domains with zero tech headaches and lightning-fast load times.',
    icon: <FaServer />,
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

export default function ServicesCanvas() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
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
            className="group relative w-full h-56"
            style={{ perspective: '1000px' }}
          >
            <div
              className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <span className="text-5xl text-purple-600 mb-4">{service.icon}</span>
                <h4 className="text-xl font-bold text-purple-800">{service.name}</h4>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-xl rotate-y-180 flex flex-col items-center justify-center text-center"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <h4 className="text-xl font-bold text-purple-800 mb-2">{service.name}</h4>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
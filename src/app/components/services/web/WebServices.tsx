'use client';

import { motion } from 'framer-motion';
import MagicButton from '../../MagicButton';
import Footer from '../../Footer';
import WebDesignSection from './WebDesignSection';
import GameDesignSection from './GameDesignSection';
import { useEffect, useState } from 'react';
import {
  FaPalette,
  FaImage,
  FaFacebookF,
  FaVideo,
  FaCode,
  FaGamepad,
} from 'react-icons/fa';
import Branding from './Branding';

const sections = [
  { id: 'web-design', label: 'Web Design', icon: <FaCode />, bg: 'from-purple-100 to-indigo-100', iconColor: 'text-purple-600', borderColor: 'border-purple-300' },
  { id: 'game-design', label: 'Game Design', icon: <FaGamepad />, bg: 'from-cyan-100 to-teal-100', iconColor: 'text-cyan-600', borderColor: 'border-cyan-300' },
  { id: 'branding', label: 'Branding', icon: <FaPalette />, bg: 'from-pink-100 to-rose-100', iconColor: 'text-pink-600', borderColor: 'border-pink-300' }, // Keep for nav, but won't render in loop
  { id: 'graphics', label: 'Graphics', icon: <FaImage />, bg: 'from-indigo-100 to-violet-100', iconColor: 'text-indigo-600', borderColor: 'border-indigo-300' },
  { id: 'social-media', label: 'Social Media', icon: <FaFacebookF />, bg: 'from-blue-100 to-sky-100', iconColor: 'text-blue-600', borderColor: 'border-blue-300' },
  { id: 'video-editing', label: 'Video', icon: <FaVideo />, bg: 'from-red-100 to-orange-100', iconColor: 'text-red-600', borderColor: 'border-red-300' },
];

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

export default function WebServices() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log(`Active section: ${entry.target.id}`); // Debug
          }
        });
      },
      { threshold: 0.4, rootMargin: '-100px 0px 0px 0px' }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      } else {
        console.log(`Section with id "${id}" not found`); // Debug
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-blue-100 text-gray-900">
      {/* Glowy Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      {/* Hero Full Width */}
      <div className="w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black py-32 px-6 shadow-[0_0_60px_rgba(139,92,246,0.25)] mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            Web Services That Wow
          </h1>
          <p className="text-2xl sm:text-3xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            From stunning websites to engaging games—<span className="text-white font-bold">we craft digital experiences that stand out</span> and drive results. No templates, no fluff—just creativity that clicks.
          </p>
        </div>
      </div>

      {/* Sticky Nav */}
      <nav className="sticky top-16 z-[60] bg-gradient-to-r from-purple-200/70 via-white/60 to-blue-200/70 backdrop-blur-md shadow-md py-4 px-6 flex flex-wrap justify-center gap-3 border-b border-purple-300">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-base sm:text-lg font-bold px-4 py-2 rounded-full transition-all duration-300 hover:bg-purple-100 hover:text-purple-900 ${
              activeSection === id
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-purple-700'
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Content */}
      <div className="pt-16">
        <WebDesignSection />
        <GameDesignSection />
        <Branding />

        {/* Section Descriptions */}
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
          {sections.slice(3).map(({ id, label, icon, bg, iconColor, borderColor }, i) => ( // Changed slice(2) to slice(3) to skip branding
            <motion.div
              key={id}
              id={id}
              className={`scroll-mt-32 text-center max-w-3xl mx-auto rounded-2xl p-8 bg-gradient-to-br ${bg} border-2 ${borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
            >
              <motion.div
                className={`text-6xl ${iconColor} mb-4`}
                whileHover="hover"
                variants={iconHover}
              >
                {icon}
              </motion.div>
              <h2 className="text-4xl font-extrabold text-purple-800 mb-4">{label}</h2>
              <p className="text-lg text-gray-700">
                {id === 'graphics' &&
                  'Need assets for print, social, or web? From icons to flyers, we bring creative muscle to your visual messaging.'}
                {id === 'social-media' &&
                  'Content, scheduling, and strategy that grows your brand—without draining your time. Real engagement, not spam.'}
                {id === 'video-editing' &&
                  'Pro-level edits for promos, tutorials, or social clips. We bring rhythm, clarity, and polish to every frame.'}
              </p>
            </motion.div>
          ))}

          {/* Final CTA */}
          <motion.div
            className="text-center max-w-2xl mx-auto rounded-2xl p-8 bg-gradient-to-br from-purple-100 to-blue-100 border-2 border-purple-300 shadow-lg"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
              Let’s Build Something Awesome
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Book a free strategy call and let’s start turning your ideas into something you’re proud to show off.
            </p>
            <MagicButton />
          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
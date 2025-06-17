'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaPalette, FaStar } from 'react-icons/fa';
import { useRef, memo } from 'react';

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

const cardHover = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const logoHover = {
  hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
};

const testimonialHover = {
  hover: { y: -5, transition: { duration: 0.3 } },
};

function Branding({ index = 0 }: { index?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const rippleContainer = useRef<HTMLDivElement>(null);

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldReduceMotion) return;
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.classList.add('ripple');

    rippleContainer.current?.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <motion.div
      id="branding"
      className="scroll-mt-32 text-center max-w-7xl mx-auto rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-pink-100 to-rose-100 border-2 border-pink-300 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-float-slow"
      variants={shouldReduceMotion ? {} : { ...fadeUp, ...cardHover }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={index}
      whileHover={shouldReduceMotion ? {} : 'hover'}
      tabIndex={0}
    >
      <motion.div
        className="text-6xl text-pink-600 mb-6"
        whileHover={shouldReduceMotion ? {} : 'hover'}
        variants={shouldReduceMotion ? {} : iconHover}
        role="img"
        aria-label="Palette icon representing branding services"
      >
        <FaPalette />
      </motion.div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-4 font-geist-sans">
        Craft Your Unforgettable Brand
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 mb-8 font-geist-sans max-w-3xl mx-auto">
        Your brand is more than a logo—it’s the heartbeat of your business. At Xtremery, we design bold, cohesive identities that captivate your audience. From striking logos and vibrant color palettes to typography and brand guidelines, we ensure every touchpoint screams <span className="font-bold text-pink-600">you</span>.
      </p>

      {/* Branding Showcase */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { name: 'Logo Design', color: 'bg-pink-400' },
          { name: 'Color Palette', color: 'bg-rose-400' },
          { name: 'Typography', color: 'bg-purple-400' },
          { name: 'Brand Guidelines', color: 'bg-indigo-400' },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            className={`p-4 rounded-lg ${item.color} text-white font-semibold text-center shadow-md`}
            variants={shouldReduceMotion ? {} : logoHover}
            whileHover={shouldReduceMotion ? {} : 'hover'}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            role="figure"
            aria-label={`${item.name} example`}
          >
            {item.name}
          </motion.div>
        ))}
      </div>

      <p className="text-lg text-gray-700 mb-8 font-geist-sans max-w-3xl mx-auto">
        Whether you’re a startup needing a full brand identity or an established business looking to refresh, we deliver designs that stick—and stories that resonate. Let’s make your brand unforgettable.
      </p>

      {/* Testimonial */}
      <motion.div
        className="max-w-3xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-pink-200 mb-8"
        variants={shouldReduceMotion ? {} : { ...fadeUp, ...testimonialHover }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={index + 1}
        whileHover={shouldReduceMotion ? {} : 'hover'}
        role="blockquote"
        aria-label="Testimonial from Susette Schabarker"
      >
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xl" aria-hidden="true" />
          ))}
        </div>
        <p className="text-base sm:text-lg text-gray-800 italic font-geist-sans mb-4">
          “Simply Excellent! I am utilizing Hunter at Xtremery for Web Design and Branding. I love his attention to detail, his patience, and certainly his thoroughness. In every step of the way, I am beyond happy with Hunter and the process of designing my website, which I am totally new to. His ideas, his input, his creativeness—I am just very grateful and very thankful. I would highly recommend Xtremery for any website from start to end. Thank You!” 
        </p>
        <p className="text-sm font-semibold text-purple-800 font-geist-sans">
          — Susette Schabarker, 2 weeks ago
        </p>
      </motion.div>

      <div ref={rippleContainer} className="relative">
        <button
          onClick={handleRipple}
          className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-full hover:bg-pink-400 transition-colors duration-200 shadow-md"
          data-analytics-event="branding-get-started"
        >
          <a href="/contact" aria-label="Get started with branding services">
            Get Started
          </a>
        </button>
      </div>
    </motion.div>
  );
}

export default memo(Branding);
'use client';

import { motion } from 'framer-motion';
import { FaCode, FaSearch, FaRocket, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function WebDesignSection() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }
  }, []);

  return (
    <section id="web-design" className="scroll-mt-32 text-center max-w-6xl mx-auto py-24 px-6 space-y-24">
      {/* Intro */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="text-6xl text-purple-600 mb-4">
          <FaCode />
        </div>
        <h2 className="text-4xl font-extrabold text-purple-800 mb-4">Web Design</h2>
        <p className="text-lg text-gray-700">
          Tailored websites that reflect your brand and convert visitors into customers.
          No templates, just personality-packed pixels.
        </p>
      </motion.div>

      {/* Feature List */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          { icon: <FaSearch />, text: 'SEO Optimization' },
          { icon: <FaRocket />, text: 'Lightning Load Speeds' },
          { icon: <FaMobileAlt />, text: 'Mobile-First Design' },
          { icon: <FaPaintBrush />, text: 'Custom Branding Integration' },
        ].map((feature, i) => (
          <div key={i} className="flex items-center gap-4 text-lg text-gray-700">
            <div className="text-purple-600 text-2xl">{feature.icon}</div>
            <p>{feature.text}</p>
          </div>
        ))}
      </motion.div>

      {/* Case Study Carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h3 className="text-3xl font-bold text-purple-700 mb-8">Recent Projects</h3>

        <div ref={swiperRef} className="swiper-container">
          <div className="swiper-wrapper">
            {[{
              title: 'rafaelrafael.com',
              img: '/Images/rafael.png',
              desc: 'Better SEO visibility and display of art pieces. Staged artwork in digital rooms with frames, enhanced language, and added meta descriptions.'
            }, {
              title: 'DNS Property Management',
              img: '/Images/dns.png',
              desc: 'Business site to compete locally. Helped shape branding, colors, messaging, and logo to match goals.'
            }, {
              title: 'huntercgaming.com',
              img: '/Images/hunterportfolio.png',
              desc: 'Personal portfolio used to get interviews and gain interest from employers in the gaming industry.'
            }].map((project, i) => (
              <div key={i} className="swiper-slide">
                <motion.div
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-[1.015] transition-transform duration-300"
                >
                  <Image src={project.img} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-bold text-xl text-purple-700 mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-600">{project.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

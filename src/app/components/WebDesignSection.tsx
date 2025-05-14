'use client';

import { motion } from 'framer-motion';
import { FaCode, FaSearch, FaRocket, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function WebDesignSection() {
  return (
    <section id="web-design" className="scroll-mt-32 text-center max-w-5xl mx-auto py-24 px-6 space-y-24">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <Image src="/Images/rafael.png" alt="Rafael Rafael" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-xl text-purple-700 mb-2">rafaelrafael.com</h4>
              <p className="text-sm text-gray-600">
                Better SEO visibility and display of art pieces. Staged artwork in digital rooms with frames,
                enhanced language, and added meta descriptions.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <Image src="/Images/dns.png" alt="Property Site" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-xl text-purple-700 mb-2">D&S Property Management</h4>
              <p className="text-sm text-gray-600">
                Business site to compete locally. Helped shape branding, colors, messaging, and logo to match goals.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <Image src="/Images/hunterportfolio.png" alt="Hunter Portfolio" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-xl text-purple-700 mb-2">huntercgaming.com</h4>
              <p className="text-sm text-gray-600">
                Personal portfolio used to get interviews and gain interest from employers in the gaming industry.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

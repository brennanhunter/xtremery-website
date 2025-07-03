'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTools, FaCode, FaGamepad, FaServer, FaDesktop, FaShieldAlt, FaTachometerAlt, FaHdd, FaMicrochip, FaPalette, FaGoogle, FaBrush } from 'react-icons/fa';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  category: 'pc' | 'web';
  features: string[];
}

const services: Service[] = [
  // PC Repair Services
  {
    id: 'diagnostic',
    name: 'Diagnostic Fee',
    description: 'Complete system diagnosis to identify the problem',
    price: '$50',
    icon: <FaTools />,
    category: 'pc',
    features: ['Applied to repair if you proceed', 'Detailed problem report', 'Honest assessment']
  },
  {
    id: 'screen',
    name: 'Screen Replacements',
    description: 'Laptop and desktop monitor screen repairs',
    price: '$80-150',
    icon: <FaDesktop />,
    category: 'pc',
    features: ['Depends on device type', 'Quality replacement parts', 'Warranty included']
  },
  {
    id: 'cleanup',
    name: 'Speed Tests & Cleanup',
    description: 'Make your computer run like new again',
    price: '$40',
    icon: <FaTachometerAlt />,
    category: 'pc',
    features: ['Remove junk files', 'Optimize startup', 'Performance report']
  },
  {
    id: 'virus',
    name: 'Virus Removal',
    description: 'Complete malware removal and security setup',
    price: '$70-100',
    icon: <FaShieldAlt />,
    category: 'pc',
    features: ['Deep system scan', 'Security recommendations', 'Prevention tips']
  },
  {
    id: 'data',
    name: 'Data Recovery',
    description: 'Recover lost files from damaged drives',
    price: '$60-200',
    icon: <FaHdd />,
    category: 'pc',
    features: ['Depends on complexity', 'No recovery, no charge', 'Secure process']
  },
  {
    id: 'electronic',
    name: 'Electronic Device Repair',
    description: 'Non-standard devices other shops won\'t touch',
    price: '$80-150+',
    icon: <FaMicrochip />,
    category: 'pc',
    features: ['Vintage equipment', 'Specialty electronics', 'Quoted after diagnostic']
  },
  // Web Services
  {
    id: 'web-design',
    name: 'Web Design',
    description: 'Beautiful, functional websites that convert',
    price: '$300-800',
    icon: <FaCode />,
    category: 'web',
    features: ['Responsive design', 'No templates', 'SEO optimized']
  },
  {
    id: 'web-dev',
    name: 'Full Web Development',
    description: 'Custom web applications and complex features',
    price: '$500-2000+',
    icon: <FaServer />,
    category: 'web',
    features: ['Custom functionality', 'Database integration', 'API development']
  },
  {
    id: 'google',
    name: 'Google Business Profile',
    description: 'Optimize your local search presence',
    price: '$150-250',
    icon: <FaGoogle />,
    category: 'web',
    features: ['Local SEO setup', 'Review management', 'Map optimization']
  },
  {
    id: 'branding',
    name: 'Branding Package',
    description: 'Logo, colors, and brand identity',
    price: '$200-500',
    icon: <FaPalette />,
    category: 'web',
    features: ['Logo design', 'Brand guidelines', 'Business cards']
  },
  {
    id: 'game-dev',
    name: 'Game Development',
    description: 'Custom games and interactive experiences',
    price: '$500-3000+',
    icon: <FaGamepad />,
    category: 'web',
    features: ['Unreal Engine', 'Custom mechanics', 'Scope dependent']
  },
  {
    id: 'graphic',
    name: 'Graphic Design',
    description: 'Professional graphics for any project',
    price: '$50-200',
    icon: <FaBrush />,
    category: 'web',
    features: ['Per project pricing', 'Print and digital', 'Quick turnaround']
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'pc' | 'web'>('pc');

  const pcServices = services.filter(service => service.category === 'pc');
  const webServices = services.filter(service => service.category === 'web');

  return (
    <section className="py-24 px-6 relative overflow-hidden transition-all duration-1000 bg-gradient-to-br from-cyan-50 via-white to-purple-50">
      {/* Dynamic Background that changes with active category */}
      <motion.div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        animate={{
          background: activeCategory === 'pc' 
            ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(147, 51, 234, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(124, 58, 237, 0.1) 50%, rgba(29, 78, 216, 0.05) 100%)'
        }}
      />
      
      {/* Floating colored orbs that change with category */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl"
        animate={{
          backgroundColor: activeCategory === 'pc' ? 'rgba(34, 211, 238, 0.2)' : 'rgba(147, 51, 234, 0.2)',
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          backgroundColor: { duration: 1 },
          scale: { duration: 8, repeat: Infinity },
          x: { duration: 6, repeat: Infinity }
        }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-40 h-40 rounded-full blur-3xl"
        animate={{
          backgroundColor: activeCategory === 'pc' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(124, 58, 237, 0.2)',
          scale: [1.2, 1, 1.2],
          y: [0, -40, 0],
        }}
        transition={{
          backgroundColor: { duration: 1 },
          scale: { duration: 10, repeat: Infinity },
          y: { duration: 8, repeat: Infinity }
        }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-24 h-24 rounded-full blur-2xl"
        animate={{
          backgroundColor: activeCategory === 'pc' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(168, 85, 247, 0.15)',
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          backgroundColor: { duration: 1 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity }
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            <span className="text-transparent bg-gradient-to-r from-[#7C3AED] to-[#1D4ED8] bg-clip-text">Honest Pricing</span>
            <br />
            No Hidden Fees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working from my garage keeps overhead low, so you get expert service at fair prices. 
            Here&apos;s exactly what everything costs - no surprises.
          </p>
        </motion.div>

        {/* Category Tabs with Dynamic Styling */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative rounded-full p-2 flex backdrop-blur-sm border-2 transition-all duration-1000"
            animate={{
              backgroundColor: activeCategory === 'pc' 
                ? 'rgba(34, 211, 238, 0.1)' 
                : 'rgba(147, 51, 234, 0.1)',
              borderColor: activeCategory === 'pc' 
                ? 'rgba(34, 211, 238, 0.3)' 
                : 'rgba(147, 51, 234, 0.3)'
            }}
          >
            <button
              onClick={() => setActiveCategory('pc')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-500 relative overflow-hidden ${
                activeCategory === 'pc'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {activeCategory === 'pc' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">💻 PC Repair</span>
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-500 relative overflow-hidden ${
                activeCategory === 'web'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {activeCategory === 'web' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">🌐 Web Services</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === 'pc' ? pcServices : webServices).map((service, index) => (
            <motion.div
              key={service.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                {/* Dynamic colored accent based on category */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1"
                  animate={{
                    background: activeCategory === 'pc' 
                      ? 'linear-gradient(90deg, #22d3ee, #3b82f6, #1d4ed8)'
                      : 'linear-gradient(90deg, #9333ea, #7c3aed, #6366f1)'
                  }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Dynamic glow effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  animate={{
                    background: activeCategory === 'pc'
                      ? 'radial-gradient(circle at center, rgba(34, 211, 238, 0.1), transparent 70%)'
                      : 'radial-gradient(circle at center, rgba(147, 51, 234, 0.1), transparent 70%)'
                  }}
                />

                {/* Service Icon with dynamic colors */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500"
                    animate={{
                      backgroundColor: activeCategory === 'pc' 
                        ? 'rgba(34, 211, 238, 0.1)' 
                        : 'rgba(147, 51, 234, 0.1)',
                      color: activeCategory === 'pc' 
                        ? '#0891b2' 
                        : '#9333ea'
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="text-right">
                    <motion.div 
                      className="text-2xl font-bold transition-colors duration-500"
                      animate={{
                        color: activeCategory === 'pc' ? '#0891b2' : '#9333ea'
                      }}
                    >
                      {service.price}
                    </motion.div>
                    {service.price.includes('-') && (
                      <div className="text-sm text-gray-500">varies by complexity</div>
                    )}
                  </div>
                </div>

                {/* Service Info */}
                <div className="mb-6">
                  <motion.h3 
                    className="text-xl font-bold mb-3 transition-colors duration-300"
                    animate={{
                      color: activeCategory === 'pc' ? '#0f172a' : '#0f172a'
                    }}
                  >
                    {service.name}
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features with dynamic bullet colors */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <motion.div 
                        className="w-2 h-2 rounded-full mr-3 transition-colors duration-500"
                        animate={{
                          backgroundColor: activeCategory === 'pc' ? '#22d3ee' : '#a855f7'
                        }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#7C3AED] to-[#1D4ED8] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Call now for a free estimate or to schedule your service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+14068685850"
                className="inline-flex items-center px-8 py-4 bg-[#00FFD1] text-gray-900 rounded-full font-bold text-lg hover:bg-[#00FFD1]/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call (406) 868-5850
              </motion.a>
              <motion.a
                href="https://calendar.app.google/TieHN52sEYn7CFKV8"
                className="inline-flex items-center px-8 py-4 bg-white text-[#7C3AED] rounded-full font-bold text-lg hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📅 Schedule Online
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">No Hidden Fees</h4>
            <p className="text-gray-600">The price you see is the price you pay. Always.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Garage Workshop</h4>
            <p className="text-gray-600">Low overhead means fair prices for quality work.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Local & Honest</h4>
            <p className="text-gray-600">DeLand&apos;s most trusted tech expert since 2020.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
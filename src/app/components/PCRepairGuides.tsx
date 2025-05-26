'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTools, FaLaptopCode, FaMemory, FaShieldAlt, FaWifi, FaHdd } from 'react-icons/fa';

const guides = [
  {
    title: 'Fixing a Slow PC',
    description: 'Learn simple steps to speed up your computer, from clearing junk files to optimizing startup programs.',
    icon: <FaTools className="text-4xl text-purple-400" />,
    link: '/guides/fixing-slow-pc',
  },
  {
    title: 'Troubleshooting Blue Screen Errors',
    description: 'Understand common causes of blue screen crashes and how to diagnose and fix them.',
    icon: <FaLaptopCode className="text-4xl text-cyan-400" />,
    link: '/guides/troubleshooting-blue-screen',
  },
  {
    title: 'Upgrading Your RAM',
    description: 'Boost your PC’s performance with a RAM upgrade. Follow this guide for a smooth process.',
    icon: <FaMemory className="text-4xl text-purple-400" />,
    link: '/guides/upgrading-ram',
  },
  {
    title: 'Removing Malware from Your PC',
    description: 'Detect and eliminate malware to keep your PC secure and running smoothly with free tools.',
    icon: <FaShieldAlt className="text-4xl text-cyan-400" />,
    link: '/guides/removing-malware',
  },
  {
    title: 'Setting Up a Secure Wi-Fi Network',
    description: 'Configure your router for a fast and secure Wi-Fi network to protect your data.',
    icon: <FaWifi className="text-4xl text-purple-400" />,
    link: '/guides/setting-up-wifi',
  },
  {
    title: 'Backing Up Your Data Safely',
    description: 'Protect your files from loss with easy backups to external drives or cloud storage.',
    icon: <FaHdd className="text-4xl text-cyan-400" />,
    link: '/guides/backing-up-data',
  },
];

export default function PCRepairGuides() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-950 via-black to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-white to-cyan-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          PC Repair Guides
        </motion.h1>
        <p className="text-xl text-white/80 text-center max-w-2xl mx-auto mb-16">
          Practical, step-by-step guides to fix common PC issues, brought to you by Xtremery in DeLand, FL.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-900/50 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-purple-500/30 animate-float-slow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {guide.icon}
                <h2 className="text-2xl font-semibold text-white ml-4">{guide.title}</h2>
              </div>
              <p className="text-white/70 mb-6">{guide.description}</p>
              <Link
                href={guide.link}
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-colors duration-300"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
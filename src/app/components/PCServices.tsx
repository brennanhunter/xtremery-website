'use client';

import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import Image from 'next/image';

export default function PCServices() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-100 py-24 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">PC Repair Services</h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
            We know how stressful computer issues can be. Whether you're dealing with a slow system, a surprise virus, or a screen that just won't turn on—Xtremery is here to help with honest, expert-level service that puts *you* first.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {[
            {
              title: 'Hardware Repairs',
              desc: 'From broken screens to power supply issues, we get your hardware back to working order—fast.',
              icon: '/images/pc-hardware.png',
            },
            {
              title: 'Virus & Malware Removal',
              desc: 'We clean and secure your system from threats without wiping your data.',
              icon: '/images/virus.png',
            },
            {
              title: 'System Optimization',
              desc: 'Speed up your device and boost performance without the need for new parts.',
              icon: '/images/optimize.png',
            },
            {
              title: 'Data Recovery',
              desc: 'Accidentally deleted something important? We recover files from hard drives and more.',
              icon: '/images/data-recovery.png',
            },
            {
              title: 'Software Help & Setup',
              desc: 'Installations, updates, troubleshooting—we handle it all so you can focus on using your tech.',
              icon: '/images/software.png',
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <Image src={service.icon} alt={service.title} width={64} height={64} />
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">{service.title}</h3>
                <p className="text-lg text-gray-700">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
            {[
              'Initial Consultation',
              'Thorough Diagnosis',
              'Clear Quote & Approval',
              'Expert Repair Work',
              'Ongoing Support & Advice',
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-purple-600 text-2xl font-semibold mb-2">Step {i + 1}</p>
                <p className="text-lg text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-4">Let’s Fix This</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-gray-600">
            No pressure. No pushy sales. Just straight-up tech help from someone who listens, explains, and solves.
          </p>
          <ContactModal />
        </div>
      </div>
    </section>
  );
}

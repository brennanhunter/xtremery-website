'use client';

import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import Image from 'next/image';
import WhyXtremery from './WhyXtremery';
import Footer from './Footer';

const services = [
  {
    title: 'Hardware Repairs',
    desc: 'From cracked screens to dead power supplies, we fix what’s broken—without the runaround.',
    icon: '/Images/pc-hardware.png',
  },
  {
    title: 'Virus & Malware Removal',
    desc: 'Infections happen. We remove threats and restore peace of mind—without wiping your files.',
    icon: '/Images/virus.png',
  },
  {
    title: 'System Optimization',
    desc: 'Speed boosts, startup tweaks, memory upgrades—we help your machine run like new.',
    icon: '/Images/optimize.png',
  },
  {
    title: 'Data Recovery',
    desc: 'Deleted photos? Crashed hard drive? We recover what matters most.',
    icon: '/Images/data-recovery.png',
  },
  {
    title: 'Software Help & Setup',
    desc: 'Need Office installed? Printer refusing to listen? We get your tools working together.',
    icon: '/Images/software.png',
  },
];

const steps = [
  {
    label: 'Discovery Call',
    desc: 'A quick chat to understand the issue, timeline, and your goals—without tech jargon or pressure.'
  },
  {
    label: 'Diagnosis',
    desc: 'We dig in to find the exact cause, not just the symptoms—so the fix actually sticks.'
  },
  {
    label: 'Clear Quote',
    desc: 'You’ll get a straightforward price. No surprises. No hidden add-ons.'
  },
  {
    label: 'Expert Fix',
    desc: 'We do it right the first time, using quality parts and precision tools.'
  },
  {
    label: 'Testing',
    desc: 'We double-check everything so you’re not left wondering “what now?”'
  },
  {
    label: 'Support',
    desc: 'Need follow-up help? We’re here. Tech that works *and* people who answer.'
  },
];

export default function PCServices() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 overflow-hidden">
      {/* Glow Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      {/* Hero Full Width */}
      <div className="w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black py-32 px-6 shadow-[0_0_60px_rgba(139,92,246,0.25)] mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            Stress-Free PC Repair
          </h1>
          <p className="text-2xl sm:text-3xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            From slow startups to scary errors—<span className="text-white font-bold">we turn computer chaos into calm</span> with repairs you can trust. No upsells, no ghosting—just help that makes sense.
          </p>
        </div>
      </div>

      {/* Our Offerings */}
      <div className="mb-32 text-center px-4">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4 drop-shadow-md leading-tight pb-1">
          Our Offerings
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Here’s what I can do for your tech life.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl bg-gradient-to-br from-white/30 via-purple-50/40 to-blue-50/30 p-6 shadow-lg backdrop-blur-md hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image src={service.icon} alt={service.title} width={64} height={64} className="drop-shadow-sm" />
                </motion.div>
                <h3 className="text-xl font-extrabold text-purple-700">{service.title}</h3>
                <p className="text-base text-gray-700 max-w-xs">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Repair Process */}
      <div className="mb-32 text-center px-6">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-8">What to Expect</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          From first contact to final fix, here&apos;s how I make sure you&apos;re taken care of.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative w-full h-52 perspective-[1000px] group"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center backface-hidden">
                  <p className="text-purple-600 text-xl font-bold mb-2">Step {i + 1}</p>
                  <p className="text-gray-800 text-lg font-semibold">{step.label}</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-xl rotate-y-180 backface-hidden flex items-center justify-center text-center">
                  <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <WhyXtremery />

      {/* CTA Section */}

      {/* Final CTA */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-4">Let’s Fix This</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
          Book your free consultation. No pressure. Just honest help and wizard-level service.
        </p>
        <ContactModal />
        <Footer />
      </div>
    </section>
  );
}

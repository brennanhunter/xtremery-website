'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroStory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-12 lg:p-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#7C3AED] to-[#1D4ED8] text-white rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                Hero Story
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Paperclip That Saved Christmas
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Problem:</h4>
                <p className="text-lg leading-relaxed">
                  A customer brought in their vintage Sony tape deck just before Christmas. The cassette door wouldn't close - a critical internal pin was missing. 
                  <span className="font-semibold text-[#7C3AED]"> Every repair shop said the same thing: "It's too old, no parts available, not worth fixing."</span>
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Solution:</h4>
                <p className="text-lg leading-relaxed">
                  Instead of giving up, I grabbed a paperclip from my desk. A few careful measurements, some precise cutting, and voilà - 
                  <span className="font-semibold text-[#7C3AED]"> a custom replacement pin that works perfectly.</span>
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Result:</h4>
                <p className="text-lg leading-relaxed">
                  The customer got their beloved tape deck back in time for Christmas. Total cost: $35. 
                  <span className="font-semibold text-[#7C3AED]"> Sometimes the best solutions are the simplest ones.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-[#7C3AED]/5 to-[#1D4ED8]/5 p-8 lg:p-12">
            <div className="space-y-6">
              <div className="relative">
                <video
                  controls
                  className="w-full rounded-2xl shadow-lg"
                  poster="/Images/TapeDeck.jpg"
                >
                  <source src="/Images/TapeDeck.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                  <span className="text-2xl">🎬</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/TapeDeck.jpg"
                    alt="Sony Tape Deck External"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/Images/InsideTapeDeck.jpg"
                    alt="Inside Tape Deck Repair"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
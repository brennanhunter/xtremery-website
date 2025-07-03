'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BoxingEvent() {
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
          <div className="relative bg-gradient-to-br from-[#1D4ED8]/5 to-[#00FFD1]/5 p-8 lg:p-12 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Images/SwitcherForCameras.jpg"
                  alt="Professional Camera Switcher"
                  fill
                  className="object-cover"
                />
                <div className="absolute -top-2 -left-2 bg-white rounded-full p-3 shadow-lg">
                  <span className="text-2xl">🎥</span>
                </div>
              </div>
              
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Images/OBS Camera Setup.jpg"
                  alt="OBS Streaming Setup"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="bg-gradient-to-r from-[#1D4ED8] to-[#00FFD1] rounded-xl p-4 text-white text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm">Live Viewers</div>
              </div>
            </div>
          </div>
          
          <div className="p-12 lg:p-16 order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#1D4ED8] to-[#00FFD1] text-white rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                Expertise Story
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Live From California: The Boxing Event
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Challenge:</h4>
                <p className="text-lg leading-relaxed">
                  An experienced cameraman got a call from a boxing promotion company. They needed wireless cameras, professional switching, and live streaming to 1000+ viewers. 
                  <span className="font-semibold text-[#1D4ED8]"> He knew cameras, but not the technical streaming setup.</span>
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Solution:</h4>
                <p className="text-lg leading-relaxed">
                  We configured wireless receivers and transmitters, set up the video switcher, built a custom OBS streaming setup, and 
                  <span className="font-semibold text-[#1D4ED8]"> provided real-time remote technical support during the live event.</span>
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Success:</h4>
                <p className="text-lg leading-relaxed">
                  Flawless live stream with multiple camera angles, professional transitions, and zero technical issues. 
                  <span className="font-semibold text-[#1D4ED8]"> The client now has ongoing boxing events with our remote support.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
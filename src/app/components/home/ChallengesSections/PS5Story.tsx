'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PS5Story() {
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
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#00FFD1] to-[#7C3AED] text-white rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                Trust Story
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The $500 PS5 I Didn&apos;t Charge For
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Situation:</h4>
                <p className="text-lg leading-relaxed">
                  A customer brought in their PS5 with no power. They were worried it might be an expensive repair, but hoped it was something simple. 
                  <span className="font-semibold text-[#00FFD1]"> &quot;Just tell me if it&apos;s worth fixing,&quot; they said.</span>
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Diagnosis:</h4>
                <p className="text-lg leading-relaxed">
                  After complete teardown and testing, I discovered the motherboard was dead. Replacement cost would exceed the price of a new PS5. 
                  <span className="font-semibold text-[#00FFD1]"> It simply wasn&apos;t worth fixing.</span>
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Right Thing:</h4>
                <p className="text-lg leading-relaxed">
                  I didn&apos;t charge them for the diagnostic work. Instead, I bought the dead PS5 from them for parts to help future customers. 
                  <span className="font-semibold text-[#00FFD1]"> Honesty costs nothing, but it&apos;s worth everything.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-[#00FFD1]/5 to-[#7C3AED]/5 p-8 lg:p-12">
            <div className="space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Images/PS5 Disassembled.jpg"
                  alt="PS5 Complete Disassembly"
                  fill
                  className="object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                  <span className="text-2xl">🔍</span>
                </div>
              </div>
              
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Images/PS5 Assembled.jpg"
                  alt="PS5 Assembled"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="bg-gradient-to-r from-[#00FFD1] to-[#7C3AED] rounded-xl p-4 text-white text-center">
                <div className="text-2xl font-bold">$0</div>
                <div className="text-sm">Diagnostic Fee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
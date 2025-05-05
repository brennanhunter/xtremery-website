'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';

type ServiceType = 'pc' | 'web';

const curtainVariants = {
  closed: { width: '50%' },
  openLeft: { width: 0, transition: { duration: 1, ease: 'easeInOut' } },
  openRight: { width: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedService]);

  const handleSelect = (service: ServiceType) => {
    setSelectedService(service);
  };

  const spotlightFadeOut = { opacity: 0, transition: { duration: 1, ease: 'easeInOut' } };

  return (
    <>
      <Header />

      {/* Web Services Overlay */}
      <AnimatePresence>
        {!selectedService && (
          <motion.div
            initial={{ x: '100vw', opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: '20vw', opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', stiffness: 90, damping: 16 }}
            className="fixed top-[55%] right-[5vw] w-[38vw] h-[80vh] z-[35] p-2 -translate-y-1/2 pointer-events-none animate-float-slow"
          >
            <div className="w-full h-full relative rounded-xl overflow-visible shadow-[0_0_50px_10px_rgba(168,85,247,0.35)]">
              <Image
                src="/Images/WebServices.png"
                alt="Web Services Overlay"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PC Repair Overlay */}
      <AnimatePresence>
        {!selectedService && (
          <motion.div
            initial={{ x: '-100vw', opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: '-20vw', opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', stiffness: 90, damping: 16 }}
            className="fixed top-[55%] left-[5vw] w-[38vw] h-[80vh] z-[35] p-2 -translate-y-1/2 pointer-events-none animate-float-slow"
          >
            <div className="w-full h-full relative rounded-xl overflow-visible shadow-[0_0_50px_10px_rgba(59,130,246,0.35)]">
              <Image
                src="/Images/PCRepair.png"
                alt="PC Repair Overlay"
                fill
                className="object-contain object-[35%]"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="h-screen w-screen overflow-hidden relative bg-black">
        {/* CTA Buttons */}
        <AnimatePresence>
          {!selectedService && (
            <motion.div
              className="absolute top-[55%] left-0 w-full z-50 flex justify-center gap-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
            >
              <motion.button
                key="pc"
                onClick={() => handleSelect('pc')}
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100vw', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 1 }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(59,130,246,0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold py-6 px-10 rounded-2xl shadow-2xl text-3xl animate-float-slow hover:shadow-blue-500/60 transition-all"
              >
                💻 PC Repair
              </motion.button>

              <motion.button
                key="web"
                onClick={() => handleSelect('web')}
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100vw', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 1.3 }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(168,85,247,0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-24 bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold py-6 px-10 rounded-2xl shadow-2xl text-3xl animate-float-slow hover:shadow-purple-500/60 transition-all"
                >
                🌐 Web Services
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spotlights */}
        <AnimatePresence>
          {!selectedService && (
            <>
              <motion.div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[100px] z-[40] pointer-events-none"
                initial={{ opacity: 0.6 }}
                animate={{
                  x: ['0%', '30vw', '-30vw', '0%'],
                  y: ['0%', '20vh', '-20vh', '0%'],
                  opacity: [0.6, 0.75, 0.5, 0.6],
                }}
                exit={spotlightFadeOut}
                transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-700 rounded-full blur-[100px] z-[40] pointer-events-none"
                initial={{ opacity: 0.7 }}
                animate={{
                  x: ['0%', '-25vw', '25vw', '0%'],
                  y: ['0%', '-30vh', '15vh', '0%'],
                  opacity: [0.7, 0.8, 0.6, 0.7],
                }}
                exit={spotlightFadeOut}
                transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut', delay: 1 }}
              />
              <motion.div
                className="absolute top-[40%] left-[65%] w-[500px] h-[500px] bg-white opacity-50 rounded-full blur-[100px] z-[40] pointer-events-none"
                initial={{ opacity: 0.5 }}
                animate={{
                  x: ['0%', '35vw', '-20vw', '0%'],
                  y: ['0%', '25vh', '-15vh', '0%'],
                  opacity: [0.5, 0.65, 0.4, 0.5],
                }}
                exit={spotlightFadeOut}
                transition={{ repeat: Infinity, duration: 13, ease: 'easeInOut', delay: 2 }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Curtains */}
        <AnimatePresence>
          {!selectedService && (
            <>
              <motion.div
                className="absolute top-0 left-0 h-full w-1/2 z-30 cursor-pointer"
                variants={curtainVariants}
                initial="closed"
                animate="closed"
                exit="openLeft"
                onClick={() => handleSelect('pc')}
              >
                <Image
                  src="/Images/BlueCurtain.png"
                  alt="Blue Curtain"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 h-full w-1/2 z-30 cursor-pointer"
                variants={curtainVariants}
                initial="closed"
                animate="closed"
                exit="openRight"
                onClick={() => handleSelect('web')}
              >
                <Image
                  src="/Images/PurpleCurtain.png"
                  alt="Purple Curtain"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Final Selection Message */}
        {selectedService && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {selectedService === 'pc' ? 'You chose PC Repair' : 'You chose Web Services'}
          </motion.div>
        )}
      </main>
    </>
  );
}

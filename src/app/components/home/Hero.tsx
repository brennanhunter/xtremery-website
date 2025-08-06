'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  type Particle = { id: number; x: number; delay: number; duration: number };
  const [repairModalOpen, setRepairModalOpen] = useState(false);
  const [webModalOpen, setWebModalOpen] = useState(false);
  const [repairForm, setRepairForm] = useState({ name: '', email: '', message: '' });
  const [webForm, setWebForm] = useState({ name: '', email: '', message: '' });
  const [repairSubmitted, setRepairSubmitted] = useState(false);
  const [webSubmitted, setWebSubmitted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Handlers for form changes
  const handleRepairChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRepairForm({ ...repairForm, [e.target.name]: e.target.value });
  };

  const handleWebChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWebForm({ ...webForm, [e.target.name]: e.target.value });
  };

  const handleRepairSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xwpolbjr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...repairForm, service: 'PC Repair' }),
      });

      if (response.ok) {
        toast.success('PC Repair request sent! 🔧✨');
        setRepairSubmitted(true);
        setTimeout(() => {
          setRepairSubmitted(false);
          setRepairModalOpen(false);
          setRepairForm({ name: '', email: '', message: '' });
        }, 2500);
      } else {
        toast.error('Oops! Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error sending form.');
    }
  };

  const handleWebSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xwpolbjr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...webForm, service: 'Web Design' }),
      });

      if (response.ok) {
        toast.success('Web project inquiry sent! 🚀💜');
        setWebSubmitted(true);
        setTimeout(() => {
          setWebSubmitted(false);
          setWebModalOpen(false);
          setWebForm({ name: '', email: '', message: '' });
        }, 2500);
      } else {
        toast.error('Oops! Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error sending form.');
    }
  };

  // Track mouse position for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 3 + 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative h-[100vh] sm:h-[120vh] overflow-hidden">
      
      {/* Hero Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/HeroVideo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Animated Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(124,58,237,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(29,78,216,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent,rgba(0,255,209,0.1),transparent)]"></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60 z-5"
          style={{ left: `${particle.x}%` }}
          animate={{
            y: ['100vh', '-10vh'],
            x: [0, 50],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Enhanced Glowing Blobs with Brand Colors */}
      <motion.div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 z-10 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          backgroundColor: '#7C3AED',
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 z-10 animate-pulse delay-1000"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          backgroundColor: '#1D4ED8',
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center h-full">
        
        {/* Logo */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{
              filter: [
                'drop-shadow(0 0 20px rgba(124, 58, 237, 0.3))',
                'drop-shadow(0 0 30px rgba(29, 78, 216, 0.5))',
                'drop-shadow(0 0 20px rgba(124, 58, 237, 0.3))',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Image
              src="/LogoNew.png"
              alt="Xtremery Logo"
              width={200}
              height={200}
              className="w-auto h-40 sm:h-48 max-w-none"
            />
          </motion.div>
        </motion.div>

        {/* Main Headline - Brand Aligned */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg text-balance relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block sm:inline">We Fix the Stuff</span>
          <br />
          <span className="block sm:inline text-transparent bg-gradient-to-r from-[#00FFD1] to-[#7C3AED] bg-clip-text">
            Other Shops Won&apos;t Touch
          </span>
        </motion.h1>

        {/* Subtitle - Local & Personal */}
        <motion.p
          className="text-xl sm:text-2xl text-gray-200 max-w-3xl mb-4 drop-shadow-md font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          DeLand&apos;s go-to tech expert who actually cares
        </motion.p>

        {/* Secondary message */}
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mb-8 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          From ancient PCs to custom builds, mystery crashes to web magic — I&apos;m Hunter, and I solve what others can&apos;t.
        </motion.p>

        {/* Emergency Call Button - Prominent */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="tel:+14068685850"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00FFD1] to-[#7C3AED] text-white rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: '0 20px 40px rgba(0, 255, 209, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            🚨 Emergency PC Repair: (406) 868-5850
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#1D4ED8] to-blue-600 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRepairModalOpen(true)}
          >
            🔧 Get My PC Fixed
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-purple-600 text-white rounded-full font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setWebModalOpen(true)}
          >
            🚀 Build My Website
          </motion.button>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-300 text-sm mb-2">
            ✅ Honest Pricing • ✅ Expert Repairs • ✅ Local & Reliable
          </p>
          <p className="text-gray-400 text-sm">
            Serving DeLand & surrounding areas since 2020
          </p>
        </motion.div>
      </div>

      {/* Location Badge */}
      <motion.div
        className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm border border-white/20 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        📍 Proudly Serving DeLand, FL
      </motion.div>

      {/* PC REPAIR MODAL */}
      <AnimatePresence>
        {repairModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full max-w-lg relative shadow-2xl border-2 ${
                repairSubmitted 
                  ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-400' 
                  : 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 border-blue-400'
              } rounded-2xl overflow-hidden`}
            >
              <div className="relative z-10 p-8">
                <button
                  onClick={() => setRepairModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl font-bold"
                >
                  ×
                </button>

                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{repairSubmitted ? '✅' : '🔧'}</div>
                  <h2 className={`text-3xl font-extrabold mb-2 ${
                    repairSubmitted ? 'text-green-800' : 'text-white'
                  }`}>
                    {repairSubmitted ? 'REPAIR REQUEST SENT!' : 'PC REPAIR REQUEST'}
                  </h2>
                  <p className={`text-sm ${
                    repairSubmitted ? 'text-green-700' : 'text-gray-300'
                  }`}>
                    {repairSubmitted ? 'Hunter will contact you soon!' : 'Tell me what\'s broken - I\'ll give you an honest quote'}
                  </p>
                </div>

                {!repairSubmitted && (
                  <form onSubmit={handleRepairSubmit} className="space-y-6 text-left">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-blue-200 uppercase">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={repairForm.name}
                        onChange={handleRepairChange}
                        className="w-full p-4 rounded-lg border-2 border-blue-400/30 bg-slate-800/80 text-white focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-blue-200 uppercase">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={repairForm.email}
                        onChange={handleRepairChange}
                        className="w-full p-4 rounded-lg border-2 border-blue-400/30 bg-slate-800/80 text-white focus:ring-2 focus:ring-blue-400 outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-blue-200 uppercase">What&apos;s broken?</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={repairForm.message}
                        onChange={handleRepairChange}
                        placeholder="Blue screen? Won't boot? Weird noises? Other shops said it's hopeless? Perfect - I love a challenge!"
                        className="w-full p-4 rounded-lg border-2 border-blue-400/30 bg-slate-800/80 text-white focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1D4ED8] via-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      🚀 REQUEST REPAIR QUOTE
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WEB DESIGN MODAL */}
      <AnimatePresence>
        {webModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full max-w-lg relative shadow-2xl border-2 ${
                webSubmitted 
                  ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-400' 
                  : 'bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 border-purple-400'
              } rounded-2xl overflow-hidden`}
            >
              <div className="relative z-10 p-8">
                <button
                  onClick={() => setWebModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-purple-400 text-2xl font-bold"
                >
                  ×
                </button>

                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{webSubmitted ? '🎉' : '🚀'}</div>
                  <h2 className={`text-3xl font-extrabold mb-2 bg-gradient-to-r ${
                    webSubmitted 
                      ? 'from-green-600 to-emerald-600 text-transparent bg-clip-text' 
                      : 'from-purple-300 via-pink-300 to-purple-300 text-transparent bg-clip-text'
                  }`}>
                    {webSubmitted ? 'PROJECT REQUEST SENT!' : 'WEB PROJECT REQUEST'}
                  </h2>
                  <p className={`text-sm ${
                    webSubmitted ? 'text-green-700' : 'text-purple-200'
                  }`}>
                    {webSubmitted ? 'Hunter will contact you soon!' : 'Let\'s build something amazing together'}
                  </p>
                </div>

                {!webSubmitted && (
                  <form onSubmit={handleWebSubmit} className="space-y-6 text-left">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-purple-200 uppercase">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={webForm.name}
                        onChange={handleWebChange}
                        className="w-full p-4 rounded-lg border-2 border-purple-400/30 bg-purple-900/50 text-white focus:ring-2 focus:ring-purple-400 outline-none placeholder-purple-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-purple-200 uppercase">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={webForm.email}
                        onChange={handleWebChange}
                        className="w-full p-4 rounded-lg border-2 border-purple-400/30 bg-purple-900/50 text-white focus:ring-2 focus:ring-purple-400 outline-none placeholder-purple-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-purple-200 uppercase">Tell me your vision</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={webForm.message}
                        onChange={handleWebChange}
                        placeholder="Need a business site that converts? Portfolio that wows? E-commerce that sells? Something totally unique? Let's make it happen!"
                        className="w-full p-4 rounded-lg border-2 border-purple-400/30 bg-purple-900/50 text-white focus:ring-2 focus:ring-purple-400 outline-none resize-none placeholder-purple-300"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#7C3AED] via-pink-500 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      ✨ START MY WEB PROJECT
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
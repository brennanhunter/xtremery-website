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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xwpolbjr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: selectedService }),
      });

      if (response.ok) {
        toast.success('Message sent! 🎉');
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setIsModalOpen(false);
          setForm({ name: '', email: '', message: '' });
          setSelectedService('');
        }, 2000);
      } else {
        toast.error('Oops! Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error sending form.');
    }
  };

  const openModal = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

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
    <section className="relative h-[100vh] sm:h-[120vh] overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent,rgba(138,43,226,0.1),transparent)]"></div>
      </div>

      {/* Split Screen Overlay */}
      <div className="absolute inset-0 flex z-5">
        {/* Repair Side (Left) */}
        <motion.div 
          className="flex-1 bg-gradient-to-br from-blue-500/10 to-blue-600/5 relative group backdrop-blur-sm"
          whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          }}
        >
          {/* Floating Repair Icons */}
          <motion.div
            className="absolute top-[20%] left-[10%] text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0 }}
          >
            🔧
          </motion.div>
          <motion.div
            className="absolute top-[40%] left-[25%] text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          >
            💻
          </motion.div>
          <motion.div
            className="absolute top-[70%] left-[15%] text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          >
            ⚡
          </motion.div>
          <motion.div
            className="absolute top-[60%] left-[35%] text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 3 }}
          >
            🖥️
          </motion.div>
        </motion.div>

        {/* Design Side (Right) */}
        <motion.div 
          className="flex-1 bg-gradient-to-bl from-purple-500/10 to-purple-600/5 relative group backdrop-blur-sm"
          whileHover={{ backgroundColor: 'rgba(147, 51, 234, 0.15)' }}
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          }}
        >
          {/* Floating Design Icons */}
          <motion.div
            className="absolute top-[25%] right-[10%] text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
          >
            🎨
          </motion.div>
          <motion.div
            className="absolute top-[45%] right-[25%] text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
          >
            💜
          </motion.div>
          <motion.div
            className="absolute top-[65%] right-[15%] text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2.5 }}
          >
            🚀
          </motion.div>
          <motion.div
            className="absolute top-[80%] right-[30%] text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 filter drop-shadow-lg"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 3.5 }}
          >
            ✨
          </motion.div>
        </motion.div>
      </div>

      {/* Central Divider */}
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/80 via-white/30 to-purple-400/80 transform -translate-x-px shadow-lg shadow-white/20 z-10" />

      {/* Pulse Ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border-2 border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-5"
        animate={{ scale: [0.8, 1.4], opacity: [1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
      />

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

      {/* Enhanced Glowing Blobs with Parallax */}
      <motion.div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-20 z-10 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-20 z-10 animate-pulse delay-1000"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
        }}
      />
      <motion.div 
        className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-cyan-400 rounded-full blur-3xl opacity-10 z-5 animate-pulse delay-500"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-indigo-400 rounded-full blur-3xl opacity-10 z-5 animate-pulse delay-2000"
        style={{
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
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
                'drop-shadow(0 0 20px rgba(138, 43, 226, 0.3))',
                'drop-shadow(0 0 30px rgba(0, 123, 255, 0.5))',
                'drop-shadow(0 0 20px rgba(138, 43, 226, 0.3))',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Image
              src="/LogoNew.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-auto h-40 sm:h-48 max-w-none"
            />
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg text-balance relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{
            scale: 1.02,
            textShadow: '0px 0px 8px #7f00ff, 0px 0px 12px #00c3ff',
          }}
        >
          <span className="block sm:inline">PC Repair Meets</span>
          <br />
          <span className="block sm:inline">Web Design Wizardry</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From pixel-perfect repairs to blazing-fast web apps—we deliver cutting-edge tech solutions that just work. DeLand's premier destination for all things tech.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 ml-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
onClick={() => setRepairModalOpen(true)}          >
            Get PC Repair
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
onClick={() => setWebModalOpen(true)}
          >
            Start Web Project
          </motion.button>
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
        initial={{ scale: 0, rotateX: 90 }}
        animate={{ scale: 1, rotateX: 0 }}
        exit={{ scale: 0, rotateX: -90 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-xl relative shadow-2xl border-2 ${
          repairSubmitted 
            ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-400' 
            : 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 border-blue-400'
        } rounded-2xl overflow-hidden`}
      >
        {/* Tech Circuit Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-400 rounded"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-8 right-8 w-6 h-6 border-2 border-cyan-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

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
              {repairSubmitted ? 'REPAIR REQUEST SENT!' : 'PC REPAIR SERVICES'}
            </h2>
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
                <label className="block text-sm font-bold mb-2 text-blue-200 uppercase">What needs fixing?</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={repairForm.message}
                  onChange={handleRepairChange}
                  placeholder="Describe your PC issues: won't boot, slow performance, strange noises, etc."
                  className="w-full p-4 rounded-lg border-2 border-blue-400/30 bg-slate-800/80 text-white focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                🚀 INITIATE REPAIR REQUEST
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
        initial={{ scale: 0, rotate: -180, borderRadius: "50%" }}
        animate={{ scale: 1, rotate: 0, borderRadius: "1rem" }}
        exit={{ scale: 0, rotate: 180, borderRadius: "50%" }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className={`w-full max-w-xl relative shadow-2xl border-2 ${
          webSubmitted 
            ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-400' 
            : 'bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 border-purple-400'
        } rounded-2xl overflow-hidden`}
      >
        {/* Floating Design Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-8 left-8 text-2xl opacity-30"
            animate={{ rotate: 360, scale: [1, 1.3, 1] }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity }
            }}
          >
            🎨
          </motion.div>
          <motion.div
            className="absolute top-12 right-12 text-xl opacity-40"
            animate={{ y: [-10, 10, -10], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-8 text-2xl opacity-40"
            animate={{ rotate: [-15, 15, -15], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🚀
          </motion.div>
        </div>

        <div className="relative z-10 p-8">
          <button
            onClick={() => setWebModalOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-purple-400 text-2xl font-bold"
          >
            ×
          </button>

          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{webSubmitted ? '🎉' : '🎨'}</div>
            <h2 className={`text-3xl font-extrabold mb-2 bg-gradient-to-r ${
              webSubmitted 
                ? 'from-green-600 to-emerald-600 text-transparent bg-clip-text' 
                : 'from-purple-300 via-pink-300 to-purple-300 text-transparent bg-clip-text'
            }`}>
              {webSubmitted ? 'PROJECT REQUEST SENT!' : 'WEB DESIGN MAGIC'}
            </h2>
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
                  placeholder="Your creative name"
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
                  placeholder="your.creative.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-purple-200 uppercase">Tell us your vision</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={webForm.message}
                  onChange={handleWebChange}
                  placeholder="Describe your dream website: business site, portfolio, e-commerce, or something totally unique..."
                  className="w-full p-4 rounded-lg border-2 border-purple-400/30 bg-purple-900/50 text-white focus:ring-2 focus:ring-purple-400 outline-none resize-none placeholder-purple-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                ✨ LAUNCH CREATIVE PROJECT
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
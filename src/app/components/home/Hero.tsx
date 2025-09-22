'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Hero() {
  const [webModalOpen, setWebModalOpen] = useState(false);
  const [webForm, setWebForm] = useState({ name: '', email: '', message: '' });
  const [webSubmitted, setWebSubmitted] = useState(false);

  const handleWebChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWebForm({ ...webForm, [e.target.name]: e.target.value });
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



  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* Split Layout Container */}
      <div className="flex h-full">
        
        {/* Left Side - Content with Purple Background */}
        <div className="w-1/2 bg-xtremery-purple flex items-center justify-center p-12">
          <div className="max-w-lg text-white">
            
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logos/logo-white.png"
                alt="Xtremery Logo"
                width={600}
                height={240}
                className="w-auto h-48"
              />
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span style={{fontFamily: 'Handelson Two'}}>Lightning-Fast Websites</span>
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="text-aqua-spark">That Actually Convert</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl mb-8 text-gray-200">
              Custom Next.js websites built for businesses that want results
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setWebModalOpen(true)}
              className="bg-aqua-spark text-deep-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
            >
              Get My High-Converting Website
            </button>
          </div>
        </div>
        
        {/* Right Side - Video with Left Fade */}
        <div className="w-1/2 relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/HeroVideo.mp4" type="video/mp4" />
          </video>
          
          {/* Left Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-xtremery-purple via-transparent to-transparent"></div>
        </div>
        
      </div>

      {/* WEB DESIGN MODAL */}
      <AnimatePresence>
        {webModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`w-full max-w-lg relative shadow-2xl ${
                webSubmitted 
                  ? 'bg-white border border-green-200' 
                  : 'bg-white border border-gray-200'
              } rounded-xl overflow-hidden`}
            >
              <div className="relative p-8">
                <button
                  onClick={() => setWebModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors"
                >
                  ×
                </button>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {webSubmitted ? (
                      <span className="text-2xl text-green-600">✓</span>
                    ) : (
                      <Image
                        src="/logos/icon-purple.png"
                        alt="Xtremery Icon"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    )}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">
                    {webSubmitted ? 'Request Sent Successfully!' : 'Start Your Web Project'}
                  </h2>
                  <p className="text-gray-600">
                    {webSubmitted ? 'I\'ll get back to you within 24 hours.' : 'Tell me about your vision and I\'ll create something amazing.'}
                  </p>
                </div>

                {!webSubmitted && (
                  <form onSubmit={handleWebSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={webForm.name}
                        onChange={handleWebChange}
                        className="w-full p-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:border-xtremery-blue focus:ring-1 focus:ring-xtremery-blue outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={webForm.email}
                        onChange={handleWebChange}
                        className="w-full p-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:border-xtremery-blue focus:ring-1 focus:ring-xtremery-blue outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Project Details</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={webForm.message}
                        onChange={handleWebChange}
                        placeholder="Describe your project: business website, e-commerce store, portfolio, or something custom..."
                        className="w-full p-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:border-xtremery-blue focus:ring-1 focus:ring-xtremery-blue outline-none resize-none transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-xtremery-blue text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                    >
                      Send Project Request
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
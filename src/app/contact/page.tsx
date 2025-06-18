'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Circuit Lines Background Component
const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#7C3AED" strokeWidth="1"/>
            <circle cx="20" cy="20" r="2" fill="#00FFD1"/>
            <circle cx="80" cy="80" r="2" fill="#00FFD1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>
    </div>
  );
};

// Floating Tech Elements
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-60 animate-pulse"
          style={{
            backgroundColor: '#00FFD1',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1.5 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function XtremeryContactPage() {
  const heroRef = useRef(null);
  const headerRef = useRef(null);
  const formSectionRef = useRef(null);
  const infoSectionRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    urgency: '',
    deviceInfo: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://formspree.io/f/xwpolbjr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            serviceType: '',
            message: '',
            urgency: '',
            deviceInfo: ''
          });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    'PC Won\'t Boot / Blue Screen',
    'Slow Performance / Virus Removal',
    'Hardware Upgrade (RAM, SSD, GPU)',
    'Custom PC Build',
    'Gaming PC Optimization',
    'Data Recovery',
    'Network/WiFi Issues',
    'Screen/Display Problems',
    'Overheating Issues',
    'Business Computer Setup',
    'Other PC Problem'
  ];

  return (
    <main className="text-white font-sans overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #111827 50%, #1D4ED8 100%)' }}>
        <CircuitBackground />
        <FloatingElements />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30 animate-pulse" />

        <motion.div 
          ref={headerRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-4 pt-20"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 drop-shadow-2xl"
            style={{ 
              fontFamily: 'Montserrat, system-ui, sans-serif', 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #F9FAFB 0%, #00FFD1 50%, #F9FAFB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            PC Broken?
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-3xl md:text-4xl font-bold mb-8"
            style={{ color: '#00FFD1', fontFamily: 'Montserrat, system-ui, sans-serif' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            DeLand&apos;s Go-To PC Repair Expert
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl leading-relaxed px-6 py-6 bg-white/5 backdrop-blur-md rounded-3xl border max-w-3xl mx-auto"
            style={{ color: '#F9FAFB', borderColor: '#7C3AED50' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            From ancient Windows XP machines to the latest gaming rigs, we fix what other shops won&apos;t touch. 
            Located right here in DeLand, FL - fast, honest PC repair you can trust.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ 
                background: 'linear-gradient(45deg, #7C3AED, #1D4ED8)',
                color: '#F9FAFB',
                fontFamily: 'Montserrat, system-ui, sans-serif'
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your PC Fixed Today →
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section 
        id="contact-form"
        ref={formSectionRef} 
        className="relative py-20 px-4"
        style={{ background: 'linear-gradient(180deg, #111827 0%, #7C3AED 50%, #111827 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-black mb-6" style={{ color: '#F9FAFB', fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  Let&apos;s Fix Your PC
                </h3>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#F9FAFB99' }}>
                  Whether it&apos;s a mysterious blue screen, sluggish performance, or a gaming rig that&apos;s lost its edge, 
                  we&apos;ve seen it all. Located in DeLand, we provide fast, reliable PC repair with honest pricing.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 backdrop-blur-sm rounded-2xl border shadow-lg hover:bg-white/15 transition-all duration-300"
                  style={{ backgroundColor: '#F9FAFB10', borderColor: '#7C3AED50' }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #7C3AED, #1D4ED8)' }}>
                    <span style={{ color: '#F9FAFB' }} className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#F9FAFB' }}>Email</h4>
                    <a
                      href="mailto:hunter@xtremery.com"
                      className="transition-colors"
                      style={{ color: '#00FFD1' }}
                      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#00FFD1CC'; }}
                      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#00FFD1'; }}
                    >
                      hunter@xtremery.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 backdrop-blur-sm rounded-2xl border shadow-lg hover:bg-white/15 transition-all duration-300"
                  style={{ backgroundColor: '#F9FAFB10', borderColor: '#7C3AED50' }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #7C3AED, #1D4ED8)' }}>
                    <span style={{ color: '#F9FAFB' }} className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#F9FAFB' }}>Phone</h4>
                    <a
                      href="tel:+14068685850"
                      className="transition-colors"
                      style={{ color: '#00FFD1' }}
                      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#00FFD1CC'; }}
                      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#00FFD1'; }}
                    >
                      (406) 868-5850
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 backdrop-blur-sm rounded-2xl border shadow-lg hover:bg-white/15 transition-all duration-300"
                  style={{ backgroundColor: '#F9FAFB10', borderColor: '#7C3AED50' }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #7C3AED, #1D4ED8)' }}>
                    <span style={{ color: '#F9FAFB' }} className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#F9FAFB' }}>Address</h4>
                    <a 
                      href="https://maps.google.com/?q=9037+Cape+Cod+Rd+DeLand+FL" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="transition-colors" 
                      style={{ color: '#00FFD1' }}
                      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#00FFD1CC'; }} 
                      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#00FFD1'; }}
                    >
                      9037 Cape Cod Rd<br />DeLand, FL
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 backdrop-blur-sm rounded-2xl border shadow-lg hover:bg-white/15 transition-all duration-300"
                  style={{ backgroundColor: '#F9FAFB10', borderColor: '#7C3AED50' }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #7C3AED, #1D4ED8)' }}>
                    <span style={{ color: '#F9FAFB' }} className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#F9FAFB' }}>Service Area</h4>
                    <p style={{ color: '#00FFD1' }}>DeLand & surrounding areas</p>
                  </div>
                </motion.div>
              </div>

              {/* Emergency Call Out */}
              <motion.div 
                className="border rounded-2xl p-6"
                style={{ background: 'linear-gradient(45deg, #DC262620, #EA580C20)', borderColor: '#DC262650' }}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-2" style={{ color: '#FCA5A5', fontFamily: 'Montserrat, system-ui, sans-serif' }}>PC Emergency?</h4>
                <p className="mb-4" style={{ color: '#F9FAFB99' }}>
                  Business computer down? Gaming tournament tonight? Work presentation due? Call for urgent PC repair.
                </p>
                <motion.a
                  href="tel:+14068685850"
                  className="inline-block px-6 py-2 rounded-full font-semibold"
                  style={{ background: 'linear-gradient(45deg, #DC2626, #EA580C)', color: '#F9FAFB' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📱 Emergency Call: (406) 868-5850
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="backdrop-blur-sm rounded-3xl p-8 shadow-2xl border"
              style={{ backgroundColor: '#F9FAFB10', borderColor: '#7C3AED50' }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h4 className="text-2xl font-bold mb-6" style={{ color: '#F9FAFB', fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                      Tell Us About Your PC Problem
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#F9FAFB' }}>Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border rounded-xl transition-colors"
                          style={{ 
                            backgroundColor: '#F9FAFB20', 
                            borderColor: '#F9FAFB30', 
                            color: '#F9FAFB'
                          }}
                          placeholder="Your name"
                          onFocus={(e) => { e.target.style.borderColor = '#00FFD1'; e.target.style.boxShadow = '0 0 0 2px #00FFD140'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#F9FAFB30'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#F9FAFB' }}>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border rounded-xl transition-colors"
                          style={{ 
                            backgroundColor: '#F9FAFB20', 
                            borderColor: '#F9FAFB30', 
                            color: '#F9FAFB'
                          }}
                          placeholder="your@email.com"
                          onFocus={(e) => { e.target.style.borderColor = '#00FFD1'; e.target.style.boxShadow = '0 0 0 2px #00FFD140'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#F9FAFB30'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#F9FAFB' }}>Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-xl transition-colors"
                          style={{ 
                            backgroundColor: '#F9FAFB20', 
                            borderColor: '#F9FAFB30', 
                            color: '#F9FAFB'
                          }}
                          placeholder="(386) 555-0123"
                          onFocus={(e) => { e.target.style.borderColor = '#00FFD1'; e.target.style.boxShadow = '0 0 0 2px #00FFD140'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#F9FAFB30'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#F9FAFB' }}>Problem Type</label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-xl transition-colors"
                          style={{ 
                            backgroundColor: '#F9FAFB20', 
                            borderColor: '#F9FAFB30', 
                            color: '#F9FAFB'
                          }}
                          onFocus={(e) => { e.target.style.borderColor = '#00FFD1'; e.target.style.boxShadow = '0 0 0 2px #00FFD140'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#F9FAFB30'; e.target.style.boxShadow = 'none'; }}
                        >
                          <option value="" style={{ backgroundColor: '#111827', color: '#F9FAFB' }}>What&apos;s wrong with your PC?</option>
                          {serviceTypes.map(type => (
                            <option key={type} value={type} style={{ backgroundColor: '#111827', color: '#F9FAFB' }}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#F9FAFB' }}>Device Info</label>
                        <input
                          type="text"
                          name="deviceInfo"
                          value={formData.deviceInfo}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-xl transition-colors"
                          style={{ 
                            backgroundColor: '#F9FAFB20', 
                            borderColor: '#F9FAFB30', 
                            color: '#F9FAFB'
                          }}
                          placeholder="e.g., Dell Inspiron, Custom Build, etc."
                          onFocus={(e) => { e.target.style.borderColor = '#00FFD1'; e.target.style.boxShadow = '0 0 0 2px #00FFD140'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#F9FAFB30'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#F9FAFB' }}>How Urgent?</label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border rounded-xl transition-colors"
                          style={{ 
                            backgroundColor: '#F9FAFB20', 
                            borderColor: '#F9FAFB30', 
                            color: '#F9FAFB'
                          }}
                          onFocus={(e) => { e.target.style.borderColor = '#00FFD1'; e.target.style.boxShadow = '0 0 0 2px #00FFD140'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#F9FAFB30'; e.target.style.boxShadow = 'none'; }}
                        >
                          <option value="" style={{ backgroundColor: '#111827', color: '#F9FAFB' }}>Select urgency</option>
                          <option value="low" style={{ backgroundColor: '#111827', color: '#F9FAFB' }}>No rush - when convenient</option>
                          <option value="normal" style={{ backgroundColor: '#111827', color: '#F9FAFB' }}>Normal - within a few days</option>
                          <option value="high" style={{ backgroundColor: '#111827', color: '#F9FAFB' }}>High - need it this week</option>
                          <option value="emergency" style={{ backgroundColor: '#111827', color: '#F9FAFB' }}>EMERGENCY - ASAP!</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#F9FAFB' }}>Describe the Problem *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border rounded-xl transition-colors resize-none"
                        style={{ 
                          backgroundColor: '#F9FAFB20', 
                          borderColor: '#F9FAFB30', 
                          color: '#F9FAFB'
                        }}
                        placeholder="What happened? Blue screen error codes? Won't start? Running slow? Be as detailed as possible - it helps us diagnose faster!"
                        onFocus={(e) => { e.target.style.borderColor = '#00FFD1'; e.target.style.boxShadow = '0 0 0 2px #00FFD140'; }}
                        onBlur={(e) => { e.target.style.borderColor = '#F9FAFB30'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {submitError && (
                      <div className="p-4 rounded-xl border" style={{ backgroundColor: '#DC262620', borderColor: '#DC262650', color: '#FCA5A5' }}>
                        {submitError}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ 
                        background: 'linear-gradient(45deg, #7C3AED, #1D4ED8)',
                        color: '#F9FAFB',
                        fontFamily: 'Montserrat, system-ui, sans-serif'
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: '#F9FAFB' }} />
                          Sending Your Request...
                        </span>
                      ) : (
                        'Get My PC Fixed! 🔧'
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(45deg, #10B981, #00FFD1)' }}>
                      <span style={{ color: '#F9FAFB' }} className="text-2xl">⚡</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4" style={{ color: '#F9FAFB', fontFamily: 'Montserrat, system-ui, sans-serif' }}>Request Received!</h4>
                    <p className="mb-4" style={{ color: '#F9FAFB99' }}>
                      Thanks for choosing Xtremery! We&apos;ll contact you within 2 hours to discuss your PC repair. 
                      For urgent issues, please call us directly.
                    </p>
                    <p className="text-sm" style={{ color: '#00FFD1' }}>
                      Hunter is already preparing his toolkit...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE XTREMERY SECTION */}
      <section 
        ref={infoSectionRef} 
        className="relative py-20 px-4"
        style={{ background: 'linear-gradient(180deg, #111827 0%, #1D4ED8 50%, #111827 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-black mb-6" style={{ color: '#F9FAFB', fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Why DeLand Trusts Xtremery
            </h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#F9FAFB99' }}>
              We&apos;re not your typical computer repair shop. We&apos;re local DeLand tech experts who genuinely 
              care about getting your PC back to peak performance - and we fix what others won't touch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔧",
                title: "Expert PC Diagnostics",
                description: "We don't just treat symptoms - we find the root cause of your PC problems and fix them permanently."
              },
              {
                icon: "⚡",
                title: "Same-Day Service",
                description: "Most PC repairs completed same day. Because being without your computer isn't an option in DeLand."
              },
              {
                icon: "💪",
                title: "We Fix What Others Won't",
                description: "Other shops gave up on your old PC? Perfect. We specialize in bringing 'dead' computers back to life."
              },
              {
                icon: "🏠",
                title: "Local DeLand Business",
                description: "Based right here at 9037 Cape Cod Rd. Supporting our DeLand community with honest, reliable service."
              },
              {
                icon: "💰",
                title: "No Hidden Fees",
                description: "Transparent pricing, free diagnostics, and honest recommendations. We only fix what actually needs fixing."
              },
              {
                icon: "🎮",
                title: "Gaming PC Specialists",
                description: "From budget builds to high-end gaming rigs, we optimize PCs for maximum FPS and smooth gameplay."
              },
              {
                icon: "🏢",
                title: "Business PC Support",
                description: "Keep your DeLand business running with reliable PC maintenance, upgrades, and emergency repairs."
              },
              {
                icon: "🛡️",
                title: "Guaranteed Work",
                description: "All repairs backed by our warranty. If the same problem returns, we fix it free - no questions asked."
              },
              {
                icon: "📱",
                title: "Remote Support Available",
                description: "Many PC issues can be fixed remotely. We'll connect securely and solve problems from our DeLand shop."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm rounded-2xl p-6 border hover:bg-white/15 transition-all duration-300"
                style={{ backgroundColor: '#F9FAFB10', borderColor: '#7C3AED50' }}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#F9FAFB', fontFamily: 'Montserrat, system-ui, sans-serif' }}>{feature.title}</h4>
                <p style={{ color: '#F9FAFB99' }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* DeLand Local Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-sm rounded-3xl p-8 border max-w-4xl mx-auto"
                 style={{ backgroundColor: '#F9FAFB10', borderColor: '#00FFD150' }}>
              <h4 className="text-2xl font-black mb-6" style={{ color: '#00FFD1', fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Proudly Serving DeLand & Surrounding Areas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h5 className="text-lg font-bold mb-3" style={{ color: '#F9FAFB' }}>Our Service Area:</h5>
                  <ul className="space-y-2" style={{ color: '#F9FAFB99' }}>
                    <li>• DeLand (our home base!)</li>
                    <li>• Orange City</li>
                    <li>• DeBary</li>
                    <li>• Deltona</li>
                    <li>• Lake Helen</li>
                    <li>• Cassadaga</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-3" style={{ color: '#F9FAFB' }}>What Makes Us Local:</h5>
                  <ul className="space-y-2" style={{ color: '#F9FAFB99' }}>
                    <li>• Family-owned DeLand business</li>
                    <li>• Quick response times in our area</li>
                    <li>• Personal service - you&apos;ll talk to Hunter directly</li>
                    <li>• Supporting our local community</li>
                    <li>• On-site service available for local businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-4" style={{ color: '#F9FAFB', fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Ready to Get Your PC Fixed?
            </h4>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#F9FAFB99' }}>
              Don&apos;t let a broken PC slow you down. Whether it&apos;s for work, gaming, or staying connected with family, 
              we&apos;ll get your computer running like new. Located right here in DeLand for fast, friendly service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+14068685850"
                className="px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(45deg, #DC2626, #EA580C)',
                  color: '#F9FAFB',
                  fontFamily: 'Montserrat, system-ui, sans-serif'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 Call Now: (406) 868-5850
              </motion.a>
              <motion.a
                href="mailto:hunter@xtremery.com"
                className="px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(45deg, #7C3AED, #1D4ED8)',
                  color: '#F9FAFB',
                  fontFamily: 'Montserrat, system-ui, sans-serif'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Email Hunter
              </motion.a>
            </div>
            
            <motion.div 
              className="mt-8 p-4 rounded-2xl border inline-block"
              style={{ backgroundColor: '#00FFD110', borderColor: '#00FFD150' }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm font-semibold" style={{ color: '#00FFD1' }}>
                &quot;We fix the stuff other shops won&apos;t touch.&quot; - That&apos;s our promise to DeLand.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
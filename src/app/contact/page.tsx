'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function XtremeryContactPage() {
  const heroRef = useRef(null);
  const formSectionRef = useRef(null);
  const infoSectionRef = useRef(null);
  
  const [activeService, setActiveService] = useState<'pc' | 'web' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    urgency: '',
    projectType: ''
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
            projectType: ''
          });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const pcServices = [
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

  const webServices = [
    'New Business Website',
    'E-commerce Store',
    'Website Redesign',
    'Landing Page',
    'SEO Optimization',
    'Website Maintenance',
    'Custom Web Application',
    'Portfolio Website',
    'Blog Setup',
    'Website Speed Optimization',
    'Other Web Project'
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION - Split Design */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="flex h-full">
          
          {/* Left Side - PC Repair */}
          <motion.div 
            className="w-1/2 bg-xtremery-blue flex items-center justify-center p-12 cursor-pointer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            onClick={() => setActiveService('pc')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="max-w-lg text-white text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-8xl mb-8">💻</div>
                <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{fontFamily: 'Handelson Two'}}>
                  PC Broken?
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-aqua-spark">
                  We Fix Everything
                </h2>
                <p className="text-xl mb-8 text-gray-200" style={{fontFamily: 'Avenir'}}>
                  From blue screens to gaming rigs - DeLand&apos;s trusted PC repair experts
                </p>
                <button 
                  onClick={() => {
                    setActiveService('pc');
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-aqua-spark text-deep-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
                  style={{fontFamily: 'Avenir'}}
                >
                  Get My PC Fixed
                </button>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Side - Web Design */}
          <motion.div 
            className="w-1/2 bg-xtremery-purple flex items-center justify-center p-12 cursor-pointer"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            onClick={() => setActiveService('web')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="max-w-lg text-white text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-8xl mb-8">🌐</div>
                <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{fontFamily: 'Handelson Two'}}>
                  Need a Website?
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-aqua-spark">
                  We Build Fast Sites
                </h2>
                <p className="text-xl mb-8 text-gray-200" style={{fontFamily: 'Avenir'}}>
                  Lightning-fast websites that actually convert customers
                </p>
                <button 
                  onClick={() => {
                    setActiveService('web');
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-aqua-spark text-deep-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
                  style={{fontFamily: 'Avenir'}}
                >
                  Get My Website Built
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-aqua-spark via-white to-aqua-spark transform -translate-x-1/2"></div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <p className="text-sm mb-2">Choose Your Service</p>
            <div className="text-2xl">↓</div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section 
        id="contact-form"
        ref={formSectionRef} 
        className="relative py-20 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Service Selection */}
          {!activeService && (
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6 text-gray-900" style={{fontFamily: 'Handelson Two'}}>
                What Can We Help You With?
              </h2>
              <p className="text-xl text-gray-600 mb-12" style={{fontFamily: 'Avenir'}}>
                Choose the service you need and we&apos;ll get you connected with the right expert
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.button
                  onClick={() => setActiveService('pc')}
                  className="p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-xtremery-blue hover:shadow-xl transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💻</div>
                  <h3 className="text-2xl font-bold mb-4 text-xtremery-blue" style={{fontFamily: 'Handelson Two'}}>PC Repair Services</h3>
                  <p className="text-gray-600 mb-6" style={{fontFamily: 'Avenir'}}>
                    Hardware issues, software problems, upgrades, custom builds, and more
                  </p>
                  <div className="bg-xtremery-blue text-white px-6 py-3 rounded-full font-semibold" style={{fontFamily: 'Avenir'}}>
                    Get PC Help →
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => setActiveService('web')}
                  className="p-8 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-xtremery-purple hover:shadow-xl transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🌐</div>
                  <h3 className="text-2xl font-bold mb-4 text-xtremery-purple" style={{fontFamily: 'Handelson Two'}}>Web Design Services</h3>
                  <p className="text-gray-600 mb-6" style={{fontFamily: 'Avenir'}}>
                    Custom websites, e-commerce stores, landing pages, and web applications
                  </p>
                  <div className="bg-xtremery-purple text-white px-6 py-3 rounded-full font-semibold" style={{fontFamily: 'Avenir'}}>
                    Get Website Built →
                  </div>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Selected Service Form */}
          {activeService && (
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
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                  {activeService === 'pc' ? 'Let\'s Fix Your PC' : 'Let\'s Build Your Website'}
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-gray-600" style={{ fontFamily: 'Avenir' }}>
                  {activeService === 'pc' 
                    ? 'Whether it\'s a mysterious blue screen, sluggish performance, or a gaming rig that\'s lost its edge, we\'ve seen it all. Located in DeLand, we provide fast, reliable PC repair with honest pricing.'
                    : 'From simple business websites to complex e-commerce stores, we build lightning-fast websites that actually convert visitors into customers. Every site is custom-built for your specific needs.'
                  }
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeService === 'pc' ? 'bg-xtremery-blue' : 'bg-xtremery-purple'
                  }`}>
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:hunter@xtremery.com"
                      className={`transition-colors ${
                        activeService === 'pc' ? 'text-xtremery-blue hover:text-xtremery-blue/80' : 'text-xtremery-purple hover:text-xtremery-purple/80'
                      }`}
                    >
                      hunter@xtremery.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeService === 'pc' ? 'bg-xtremery-blue' : 'bg-xtremery-purple'
                  }`}>
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a
                      href="tel:+14066968256"
                      className={`transition-colors ${
                        activeService === 'pc' ? 'text-xtremery-blue hover:text-xtremery-blue/80' : 'text-xtremery-purple hover:text-xtremery-purple/80'
                      }`}
                    >
                      (406) 696-8256
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

                {/* Google Map */}
                <motion.div 
                  className="backdrop-blur-sm rounded-2xl border shadow-lg overflow-hidden"
                  style={{ backgroundColor: '#F9FAFB10', borderColor: '#7C3AED50' }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 border-b" style={{ borderColor: '#7C3AED30' }}>
                    <h4 className="font-semibold flex items-center gap-2" style={{ color: '#F9FAFB' }}>
                      <span className="text-lg">🗺️</span>
                      Find Us in DeLand
                    </h4>
                  </div>
                  <div className="relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.7234567890!2d-81.3031!3d29.0284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e71a123456789a%3A0x1234567890abcdef!2s9037%20Cape%20Cod%20Rd%2C%20DeLand%2C%20FL%2032720!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Xtremery PC Repair Location in DeLand, FL"
                      className="w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent pointer-events-none"></div>
                  </div>
                  <div className="p-3 text-center">
                    <a 
                      href="https://maps.google.com/?q=9037+Cape+Cod+Rd+DeLand+FL" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors hover:underline"
                      style={{ color: '#00FFD1' }}
                    >
                      🧭 Get Directions to Xtremery
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

                {/* Google Reviews */}
                <motion.a
                  href="https://share.google/wOjP5Gfpb4eCl1hFg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 backdrop-blur-sm rounded-2xl border shadow-lg hover:bg-white/15 transition-all duration-300 group"
                  style={{ backgroundColor: '#F9FAFB10', borderColor: '#FBBF2450' }}
                  whileHover={{ scale: 1.02 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #FBBF24, #F59E0B)' }}>
                    <span style={{ color: '#1F2937' }} className="text-xl">⭐</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1" style={{ color: '#FBBF24' }}>See Our Google Reviews</h4>
                    <p className="text-sm" style={{ color: '#F9FAFB99' }}>Rated 5-stars by DeLand customers</p>
                  </div>
                  <div className="text-2xl group-hover:translate-x-1 transition-transform" style={{ color: '#FBBF24' }}>→</div>
                </motion.a>
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
                  href="tel:+14066968256"
                  className="inline-block px-6 py-2 rounded-full font-semibold"
                  style={{ background: 'linear-gradient(45deg, #DC2626, #EA580C)', color: '#F9FAFB' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📱 Emergency Call: (406) 696-8256
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-2xl border"
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
                    <h4 className="text-2xl font-black mb-6 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                      {activeService === 'pc' ? 'Tell Us About Your PC Problem' : 'Tell Us About Your Web Project'}
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700" style={{ fontFamily: 'Avenir' }}>Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent ${
                            activeService === 'pc' ? 'focus:ring-xtremery-blue' : 'focus:ring-xtremery-purple'
                          }`}
                          style={{ fontFamily: 'Avenir' }}
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent ${
                            activeService === 'pc' ? 'focus:ring-xtremery-blue' : 'focus:ring-xtremery-purple'
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent ${
                            activeService === 'pc' ? 'focus:ring-xtremery-blue' : 'focus:ring-xtremery-purple'
                          }`}
                          placeholder="(386) 555-0123"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          {activeService === 'pc' ? 'Problem Type' : 'Project Type'}
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent ${
                            activeService === 'pc' ? 'focus:ring-xtremery-blue' : 'focus:ring-xtremery-purple'
                          }`}
                        >
                          <option value="">
                            {activeService === 'pc' ? 'What\'s wrong with your PC?' : 'What type of website do you need?'}
                          </option>
                          {(activeService === 'pc' ? pcServices : webServices).map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          {activeService === 'pc' ? 'Device Info' : 'Project Budget (Optional)'}
                        </label>
                        <input
                          type="text"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent ${
                            activeService === 'pc' ? 'focus:ring-xtremery-blue' : 'focus:ring-xtremery-purple'
                          }`}
                          placeholder={
                            activeService === 'pc' 
                              ? "e.g., Dell Inspiron, Custom Build, etc."
                              : "e.g., $2,000-$5,000, Under $1,000, etc."
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          {activeService === 'pc' ? 'How Urgent?' : 'Timeline?'}
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent ${
                            activeService === 'pc' ? 'focus:ring-xtremery-blue' : 'focus:ring-xtremery-purple'
                          }`}
                        >
                          <option value="">
                            {activeService === 'pc' ? 'Select urgency' : 'Select timeline'}
                          </option>
                          {activeService === 'pc' ? (
                            <>
                              <option value="low">No rush - when convenient</option>
                              <option value="normal">Normal - within a few days</option>
                              <option value="high">High - need it this week</option>
                              <option value="emergency">EMERGENCY - ASAP!</option>
                            </>
                          ) : (
                            <>
                              <option value="asap">ASAP - Need it launched quickly</option>
                              <option value="month">Within a month</option>
                              <option value="quarter">Within 3 months</option>
                              <option value="planning">Just planning ahead</option>
                            </>
                          )}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        {activeService === 'pc' ? 'Describe the Problem *' : 'Describe Your Project *'}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent resize-none ${
                          activeService === 'pc' ? 'focus:ring-xtremery-blue' : 'focus:ring-xtremery-purple'
                        }`}
                        placeholder={
                          activeService === 'pc'
                            ? "What happened? Blue screen error codes? Won't start? Running slow? Be as detailed as possible - it helps us diagnose faster!"
                            : "What's your vision? Who's your target audience? Any specific features you need? The more details, the better we can help!"
                        }
                      />
                    </div>

                    {submitError && (
                      <div className="p-4 rounded-xl border bg-red-50 border-red-200 text-red-700">
                        {submitError}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white ${
                        activeService === 'pc' 
                          ? 'bg-xtremery-blue hover:bg-xtremery-blue/90' 
                          : 'bg-xtremery-purple hover:bg-xtremery-purple/90'
                      }`}
                      style={{ fontFamily: 'Handelson Two' }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                          Sending Your Request...
                        </span>
                      ) : (
                        activeService === 'pc' ? 'Get My PC Fixed! 💻' : 'Build My Website! 🌐'
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
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      activeService === 'pc' ? 'bg-xtremery-blue' : 'bg-xtremery-purple'
                    }`}>
                      <span className="text-white text-2xl">
                        {activeService === 'pc' ? '💻' : '🚀'}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
                      Request Received!
                    </h4>
                    <p className="mb-4 text-gray-600">
                      {activeService === 'pc'
                        ? 'Thanks for choosing Xtremery! We\'ll contact you within 2 hours to discuss your PC repair. For urgent issues, please call us directly.'
                        : 'Thanks for choosing Xtremery! We\'ll contact you within 24 hours to discuss your web project. Excited to build something amazing together!'
                      }
                    </p>
                    <p className={`text-sm font-semibold ${
                      activeService === 'pc' ? 'text-xtremery-blue' : 'text-xtremery-purple'
                    }`}>
                      {activeService === 'pc' 
                        ? 'Hunter is already preparing his toolkit...' 
                        : 'Hunter is already sketching your website...'
                      }
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
        
        {/* Back Button */}
        {activeService && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setActiveService(null)}
              className="text-gray-600 hover:text-gray-900 font-semibold transition-colors"
            >
              ← Choose Different Service
            </button>
          </motion.div>
        )}
        
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
              care about getting your PC back to peak performance - and we fix what others won&apos;t touch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔧",
                title: "Expert PC Diagnostics",
                description: "We don&apos;t just treat symptoms - we find the root cause of your PC problems and fix them permanently."
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
                description: "Many PC issues can be fixed remotely. We&apos;ll connect securely and solve problems from our DeLand shop."
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
                href="tel:+14066968256"
                className="px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(45deg, #DC2626, #EA580C)',
                  color: '#F9FAFB',
                  fontFamily: 'Montserrat, system-ui, sans-serif'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 Call Now: (406) 696-8256
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
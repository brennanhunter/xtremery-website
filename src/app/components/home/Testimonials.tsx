'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Shield, Zap, Heart, Users, Phone } from 'lucide-react';

type Review = {
  id: number;
  name: string;
  problem: string;
  quote: string;
  highlight: string;
  service: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  originalText?: string;
};

const ROTATE_INTERVAL = 6000; // 6 seconds

export default function Testimonials() {
  // Enhanced testimonials with accurate quotes and compelling problem/solution framing
  const heroTestimonials: Review[] = [
    {
      id: 1,
      name: "Joseph Russo",
      problem: "💀 HACKER ATTACK",
      quote: "Hunter was able to resolve my computer issues after a hacker was able to infiltrate all of my personal information. He was very helpful and friendly, willing to make multiple house calls to ensure that the issue was resolved. If you need any help with computer issues, he will do an excellent job at a great price.",
      highlight: "Multiple house calls until resolved",
      service: "Security Recovery",
      icon: Shield,
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      name: "Ryan Upchurch",
      problem: "🏢 BUSINESS SUPPORT",
      quote: "Incredible service! Showed real patience with me. Taught me alot! Its like having a private IT department! If you need anything computer repair related, this is place! Also price was very fair! Thank you Hunter!",
      highlight: "Like having a private IT department",
      service: "Business Support",
      icon: Users,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      name: "Rob Williams",
      problem: "💻 WINDOWS 10 ISSUES",
      quote: "I took my HP laptop to hunter to fix a problem with the loading of windows 10. He saw me the same day and let me wait till he fixed it for me in less than 2 hrs. He is very good at what he does and explained the fix to me. The cost was very reasonable. He also is a very nice person. He will do a good job for you.",
      highlight: "Same day service, fixed in under 2 hours",
      service: "PC Repair",
      icon: Zap,
      gradient: "from-green-500 to-blue-500"
    },
    {
      id: 4,
      name: "Susette Schabarker",
      problem: "🌐 WEBSITE DESIGN",
      quote: "Simply Excellent ! I am utilizing Hunter at Xtremery for Web Design.... I love his attention to detail.. His patience , And certainly his thoroughness. In every step of the way I am beyond happy with Hunter, and the process of designing my website which I am totally new to.... His ideas, his input his creativeness. I am just very grateful and very thankful . I would highly recommend Xtremely for any website from start to end.",
      highlight: "Simply Excellent attention to detail",
      service: "Web Design",
      icon: Zap,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 5,
      name: "Dawn Woody",
      problem: "🔧 COMPUTER HELP",
      quote: "Excellent service. Very knowledgeable. Highly recommend.",
      highlight: "Excellent service, highly recommend",
      service: "Technical Support",
      icon: Heart,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroTestimonials.length);
    }, ROTATE_INTERVAL);
    
    return () => clearInterval(interval);
  }, [isHovered, heroTestimonials.length]);

  const currentTestimonial = heroTestimonials[currentIndex];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text text-sm font-bold mb-4 tracking-wider">
              ⭐ REAL DELAND CUSTOMERS ⭐
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We Save The Day
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                When Others Can&apos;t
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. See why DeLand residents call Xtremery when they need 
              <span className="text-cyan-300 font-semibold"> problems solved, not excuses</span>.
            </p>
          </motion.div>
        </div>

        {/* Main Testimonial Showcase */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-20`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Problem/Service Icon */}
                  <div className="text-center md:text-left">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${currentTestimonial.gradient} mb-4 shadow-2xl`}>
                      <currentTestimonial.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{currentTestimonial.problem}</div>
                    <div className="text-cyan-300 font-semibold">{currentTestimonial.service}</div>
                  </div>

                  {/* Quote */}
                  <div className="md:col-span-2">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-2xl md:text-3xl text-white font-bold mb-6 leading-relaxed">
                      &quot;{currentTestimonial.quote}&quot;
                    </blockquote>
                    
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-xl font-bold mb-4">
                      &quot;{currentTestimonial.highlight}&quot;
                    </div>
                    
                    <div className="text-gray-300 font-semibold text-lg">
                      — {currentTestimonial.name}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {heroTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">⭐⭐⭐⭐⭐</div>
            <div className="text-gray-300">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Patient</div>
            <div className="text-gray-300">Teaching & Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">House Calls</div>
            <div className="text-gray-300">Until It&apos;s Fixed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">Fair Price</div>
            <div className="text-gray-300">No Surprises</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Tech Emergency = Our Specialty
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don&apos;t waste time with repair shops that give up. Join the customers who get their problems 
                <span className="font-bold"> actually solved</span> by DeLand&apos;s most trusted tech expert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="tel:+14068685850" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Emergency Call: (406) 868-5850
                </motion.a>
                <motion.a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Quote
                </motion.a>
              </div>
              <div className="text-white/80 text-sm mt-4">
                ⚡ Available for house calls • 💯 Patient teaching & support • 🌐 Web design anywhere
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
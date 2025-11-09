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
      problem: "Security Recovery",
      quote: "Hunter was able to resolve my computer issues after a hacker was able to infiltrate all of my personal information. He was very helpful and friendly, willing to make multiple house calls to ensure that the issue was resolved. If you need any help with computer issues, he will do an excellent job at a great price.",
      highlight: "Multiple house calls until resolved",
      service: "Security & Recovery",
      icon: Shield,
      gradient: "from-xtremery-purple to-xtremery-blue"
    },
    {
      id: 2,
      name: "Ryan Upchurch",
      problem: "Business Support",
      quote: "Incredible service! Showed real patience with me. Taught me alot! Its like having a private IT department! If you need anything computer repair related, this is place! Also price was very fair! Thank you Hunter!",
      highlight: "Like having a private IT department",
      service: "Business Support",
      icon: Users,
      gradient: "from-xtremery-blue to-aqua-spark"
    },
    {
      id: 3,
      name: "Rob Williams",
      problem: "Windows 10 Issues",
      quote: "I took my HP laptop to hunter to fix a problem with the loading of windows 10. He saw me the same day and let me wait till he fixed it for me in less than 2 hrs. He is very good at what he does and explained the fix to me. The cost was very reasonable. He also is a very nice person. He will do a good job for you.",
      highlight: "Same day service, fixed in under 2 hours",
      service: "PC Repair",
      icon: Zap,
      gradient: "from-aqua-spark to-xtremery-purple"
    },
    {
      id: 4,
      name: "Susette Schabarker",
      problem: "Website Design",
      quote: "Simply Excellent ! I am utilizing Hunter at Xtremery for Web Design.... I love his attention to detail.. His patience , And certainly his thoroughness. In every step of the way I am beyond happy with Hunter, and the process of designing my website which I am totally new to.... His ideas, his input his creativeness. I am just very grateful and very thankful . I would highly recommend Xtremely for any website from start to end.",
      highlight: "Simply Excellent attention to detail",
      service: "Web Design",
      icon: Zap,
      gradient: "from-xtremery-purple to-aqua-spark"
    },
    {
      id: 5,
      name: "Dawn Woody",
      problem: "Technical Support",
      quote: "Excellent service. Very knowledgeable. Highly recommend.",
      highlight: "Excellent service, highly recommend",
      service: "Technical Support",
      icon: Heart,
      gradient: "from-xtremery-blue to-xtremery-purple"
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
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.04),transparent_60%)]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-xtremery-purple to-aqua-spark text-transparent bg-clip-text text-sm font-bold mb-4 tracking-wider font-avenir">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              REAL DELAND CUSTOMERS
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 font-handelson-two">
              Trusted by DeLand
              <br />
              <span className="bg-gradient-to-r from-xtremery-purple to-aqua-spark bg-clip-text text-transparent">
                For Real Results
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-xtremery-purple to-aqua-spark mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-avenir">
              See why DeLand residents and businesses trust Xtremery when they need 
              <span className="text-xtremery-purple font-semibold"> problems solved, not excuses</span>.
            </p>
          </motion.div>
        </div>

        {/* Main Testimonial Showcase */}
        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Subtle Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Service Icon & Info */}
                  <div className="text-center md:text-left">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${currentTestimonial.gradient} mb-4 shadow-lg`}>
                      <currentTestimonial.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-2 font-handelson-two">{currentTestimonial.problem}</div>
                    <div className="text-xtremery-purple font-semibold font-avenir">{currentTestimonial.service}</div>
                  </div>

                  {/* Quote */}
                  <div className="md:col-span-2">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-6 leading-relaxed font-avenir">
                      &quot;{currentTestimonial.quote}&quot;
                    </blockquote>
                    
                    <div className="bg-gradient-to-r from-xtremery-purple to-aqua-spark bg-clip-text text-transparent text-lg font-bold mb-4 font-avenir">
                      &quot;{currentTestimonial.highlight}&quot;
                    </div>
                    
                    <div className="text-gray-600 font-semibold text-lg font-avenir">
                      — {currentTestimonial.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-xtremery-purple/10 to-aqua-spark/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mb-16 gap-3">
          {heroTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-xtremery-purple to-aqua-spark scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-gray-600 font-avenir">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-xtremery-purple mb-2 font-handelson-two">Patient</div>
            <div className="text-gray-600 font-avenir">Teaching & Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-xtremery-blue mb-2 font-handelson-two">House Calls</div>
            <div className="text-gray-600 font-avenir">Until It's Fixed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-aqua-spark mb-2 font-handelson-two">Fair Price</div>
            <div className="text-gray-600 font-avenir">No Surprises</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-xtremery-purple to-xtremery-blue rounded-2xl p-1 max-w-5xl mx-auto shadow-2xl">
            <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-xtremery-purple/5 to-aqua-spark/5"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-handelson-two">
                  Your Tech Emergency = Our Specialty
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-avenir">
                  Don't waste time with repair shops that give up. Join the customers who get their problems 
                  <span className="font-bold text-xtremery-purple"> actually solved</span> by DeLand's most trusted tech expert.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a 
                    href="tel:+14068685850" 
                    className="bg-gradient-to-r from-xtremery-purple to-xtremery-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-avenir"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    Emergency Call: (406) 868-5850
                  </motion.a>
                  <motion.a 
                    href="/contact" 
                    className="border-2 border-xtremery-purple text-xtremery-purple px-8 py-4 rounded-xl font-bold text-lg hover:bg-xtremery-purple hover:text-white transition-all duration-300 font-avenir"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free Quote
                  </motion.a>
                </div>
                <div className="text-gray-500 text-sm mt-6 font-avenir">
                  ⚡ Available for house calls • 💯 Patient teaching & support • 🌐 Web design anywhere
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
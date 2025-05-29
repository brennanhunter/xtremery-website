'use client';

import { useState, useEffect } from 'react';

export default function DigitalCardPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center p-8 text-white relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(34, 211, 238, 0.4) 0%, 
          transparent 50%), 
          linear-gradient(135deg, 
          #1A0A2E 0%, 
          #553C9A 25%, 
          #7C3AED 50%, 
          #0891B2 75%, 
          #22D3EE 100%)`
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-700/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        ></div>
      ))}

      {/* Main content */}
      <div className={`text-center transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Name with multiple effects */}
        <h1 className="mb-6 relative">
          <span 
            className="text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-700 via-purple-500 to-cyan-600 bg-clip-text text-transparent animate-pulse"
            style={{
              textShadow: '0 0 30px rgba(124, 58, 237, 0.6), 0 0 60px rgba(124, 58, 237, 0.4)',
              filter: 'drop-shadow(0 4px 20px rgba(124, 58, 237, 0.5))'
            }}
          >
            HUNTER
          </span>
          <br />
          <span 
            className="text-6xl md:text-7xl font-black bg-gradient-to-l from-cyan-600 via-cyan-500 to-purple-700 bg-clip-text text-transparent animate-pulse"
            style={{
              textShadow: '0 0 30px rgba(8, 145, 178, 0.6), 0 0 60px rgba(8, 145, 178, 0.4)',
              filter: 'drop-shadow(0 4px 20px rgba(8, 145, 178, 0.5))',
              animationDelay: '0.5s'
            }}
          >
            COLEMAN
          </span>
          
          {/* Glowing outline effect */}
          <div className="absolute inset-0 -z-10">
            <span 
              className="text-8xl md:text-9xl font-black text-purple-300/20 blur-lg"
              style={{ transform: 'scale(1.05)' }}
            >
              HUNTER
            </span>
            <br />
            <span 
              className="text-6xl md:text-7xl font-black text-cyan-300/20 blur-lg"
              style={{ transform: 'scale(1.05)' }}
            >
              COLEMAN
            </span>
          </div>
        </h1>

        {/* Subtitle with neon effect */}
        <p 
          className="mb-12 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent relative"
          style={{
            textShadow: '0 0 20px rgba(34, 211, 238, 0.7)',
            filter: 'drop-shadow(0 2px 10px rgba(34, 211, 238, 0.4))'
          }}
        >
          ✨ DIGITAL BUSINESS CARD ✨
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent animate-ping opacity-50"></div>
        </p>
      </div>

      {/* Enhanced card container */}
      <div
        className={`relative transition-all duration-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ 
          willChange: 'transform',
          transitionDelay: '0.5s'
        }}
      >
        <div
          className="w-full max-w-4xl aspect-video rounded-3xl shadow-2xl overflow-hidden relative group"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 80px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-700 via-cyan-600 to-purple-700 animate-spin-slow blur-md" style={{ animation: 'spin 8s linear infinite' }}></div>
          </div>
          
          <iframe
            loading="lazy"
            className="w-full h-full border-none rounded-3xl relative z-10"
            src="https://www.canva.com/design/DAGkkreutiE/GuhwItIXgdS-FGuz-o3u4w/view?embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Stunning CTA Button */}
      <div className={`mt-12 transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1s' }}>
        <a
          href="https://www.canva.com/design/DAGkkreutiE/GuhwItIXgdS-FGuz-o3u4w/view"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-black text-white transition-all duration-300 transform hover:scale-105 active:scale-98"
          style={{
            background: 'linear-gradient(145deg, #7C3AED, #0891B2)',
            borderRadius: '50px',
            boxShadow: '0 15px 35px rgba(124, 58, 237, 0.4), 0 5px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Button glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
            style={{
              background: 'linear-gradient(145deg, #7C3AED, #0891B2)',
              animation: 'pulse 2s infinite'
            }}
          ></div>
          
          {/* Button text */}
          <span className="relative z-10 flex items-center gap-3">
            🚀 VIEW FULL CARD
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </span>
          
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:animate-pulse"></div>
        </a>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </main>
  );
}
'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

const colors = ['#a855f7', '#ec4899', '#3b82f6']; // purple, pink, blue

export default function MagicButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hovering, setHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const particleId = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const createRipple = (event: React.MouseEvent) => {
    const button = btnRef.current;
    if (!button) return;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.className = 'ripple';

    const existingRipple = button.getElementsByClassName('ripple')[0];
    if (existingRipple) existingRipple.remove();

    button.appendChild(circle);
  };

  useEffect(() => {
    if (!btnRef.current) return;

    const button = btnRef.current;
    const rect = button.getBoundingClientRect();

    if (hovering) {
      intervalRef.current = setInterval(() => {
        const edge = Math.floor(Math.random() * 4);
        let spawnX = rect.width / 2;
        let spawnY = rect.height / 2;

        const offset = Math.random() * rect.width * 0.8;

        switch (edge) {
          case 0:
            spawnX = offset;
            spawnY = 0;
            break;
          case 1:
            spawnX = rect.width;
            spawnY = offset;
            break;
          case 2:
            spawnX = offset;
            spawnY = rect.height;
            break;
          case 3:
            spawnX = 0;
            spawnY = offset;
            break;
        }

        const angle = Math.random() * 2 * Math.PI;
        const distance = 40 + Math.random() * 20;

        setParticles((prev) => [
          ...prev,
          {
            id: particleId.current++,
            x: spawnX + Math.cos(angle) * distance - rect.width / 2,
            y: spawnY + Math.sin(angle) * distance - rect.height / 2,
            color: colors[Math.floor(Math.random() * colors.length)],
          },
        ]);
      }, 40);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovering]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles((prev) => prev.slice(-60));
    }, 500);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative inline-block"
    >
      <button
        ref={btnRef}
        onClick={(e) => {
          createRipple(e);
          setIsOpen(true);
        }}
        className="relative overflow-hidden px-8 py-3 rounded-lg text-white font-bold shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-blue-500 hover:to-purple-600 hover:shadow-xl hover:scale-105 focus:outline-none"
      >
        <span className="relative z-10">Work With Us</span>
      </button>

      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0.6 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute w-3 h-3 rounded-full pointer-events-none drop-shadow-lg"
          style={{
            backgroundColor: p.color,
            left: '50%',
            top: '50%',
            opacity: 0.9,
          }}
        />
      ))}

      {isOpen && <ContactModal />}
    </div>
  );
}

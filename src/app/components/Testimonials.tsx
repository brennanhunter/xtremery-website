'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          rotateZ: -20,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          rotateZ: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const testimonials = [
    {
      name: 'Dane Patch',
      meta: '2 reviews • ⭐⭐⭐⭐⭐ • 2 weeks ago',
      text:
        'Hunter was very helpful when I was setting up my website. Giving me tips how to improve my site function. He was a good listener when I was having trouble setting up certain aspects of my site.',
    },
    {
      name: 'Ryan Upchurch',
      meta: '7 reviews • ⭐⭐⭐⭐⭐ • 2 weeks ago',
      text:
        'Incredible service! Showed real patience with me. Taught me a lot! It’s like having a private IT department! If you need anything computer repair related, this is the place! Also, price was very fair! Thank you Hunter!',
    },
    {
      name: 'Joseph Russo',
      meta: '9 reviews • ⭐⭐⭐⭐⭐ • 1 week ago',
      text:
        'Hunter was able to resolve my computer issues after a hacker infiltrated my info. He was helpful, friendly, and made multiple house calls to ensure it was resolved. Excellent work at a great price.',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-16">
          What Our Clients Say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-2xl shadow-lg"
            >
              <h4 className="text-lg font-bold text-purple-700 mb-1">{testimonial.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{testimonial.meta}</p>
              <p className="text-sm text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Glowing decorative blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-20 z-0 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-20 z-0 animate-pulse delay-1000" />
    </section>
  );
}

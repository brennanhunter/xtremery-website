'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Review = {
  name: string;
  meta: string;
  text: string;
};

const ROTATE_INTERVAL = 7000; // 7 seconds

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data.slice(0, 5))); // Limit to most recent 5
  }, []);

  useEffect(() => {
    if (reviews.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, [reviews]);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-16">
          What Our Clients Say
        </h3>

        <div className="relative min-h-[290px]">
          <AnimatePresence mode="wait">
            {reviews.length > 0 && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-lg absolute inset-0"
              >
                <h4 className="text-xl font-bold text-purple-700 mb-2">
                  {reviews[index].name}
                </h4>
                <p className="text-sm text-gray-500 mb-3">{reviews[index].meta}</p>
                <p className="text-base text-gray-700 italic">"{reviews[index].text}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-20 z-0 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-20 z-0 animate-pulse delay-1000" />
    </section>
  );
}

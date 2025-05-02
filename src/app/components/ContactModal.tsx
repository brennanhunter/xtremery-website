'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xwpolbjr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success('Message sent! 🎉');
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setIsOpen(false);
          setForm({ name: '', email: '', message: '' });
        }, 2000);
      } else {
        toast.error('Oops! Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error sending form.');
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-100 transition"
      >
        Get a Free Quote
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0, borderRadius: '999px' }}
              animate={{ scale: 1, borderRadius: '1rem' }}
              exit={{ scale: 0, borderRadius: '999px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full max-w-xl p-8 relative shadow-2xl transition-colors duration-500 ${
                submitted ? 'bg-green-100' : 'bg-white'
              }`}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-purple-600 text-xl font-bold"
              >
                ×
              </button>

              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                {submitted ? '✅ Message Sent!' : 'Contact Me'}
              </h2>

              {!submitted && (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                    />
                  </div>

                  <input type="hidden" name="_replyto" value={form.email} />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

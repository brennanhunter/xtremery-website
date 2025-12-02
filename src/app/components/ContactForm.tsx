"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const services = [
    'Security & Hacker Recovery',
    'PC Upgrades & Optimization', 
    'Website Building & Setup',
    'General Computer Support',
    'System Setup & Configuration',
    'Ongoing Tech Support',
    'Other - I\'ll explain in the message'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xwpolbjr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New quote request from ${formData.name} - ${formData.service}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          urgency: 'normal'
        });
      } else {
        alert('There was an error sending your message. Please try calling instead.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitted(false);
  };

  return (
    <>
      <div className="text-center">
        <button 
          onClick={() => setShowModal(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors transform hover:scale-105 shadow-lg"
        >
          ✨ Get Your Free Quote Now
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">Get Your Free Quote! 💻</h3>
                  <p className="text-purple-100 mt-1">Tell me about your computer problem and I&apos;ll get back to you within 2 hours</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="text-2xl font-bold text-green-600 mb-4">Quote Request Sent!</h4>
                  <p className="text-gray-600 mb-6">
                    Thanks {formData.name}! I&apos;ll review your request and get back to you within 2 hours with a quote and next steps.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-purple-700">
                      <strong>Need faster help?</strong> Call me directly at{' '}
                      <a href="tel:+14068685850" className="underline font-semibold">
                        (406) 868-5850
                      </a>
                    </p>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Urgency Selector */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      How urgent is this? 🚨
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="urgency"
                          value="emergency"
                          checked={formData.urgency === 'emergency'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-sm">🚨 Emergency (within 2 hours)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="urgency"
                          value="normal"
                          checked={formData.urgency === 'normal'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-sm">⚡ Normal (24-48 hours)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="urgency"
                          value="planning"
                          checked={formData.urgency === 'planning'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-sm">📅 Just planning ahead</span>
                      </label>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="(406) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      What kind of help do you need? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell me about your computer problem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Describe what's happening with your computer, what you were doing when it started, any error messages, etc. The more details, the better I can help!"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                    >
                      {isSubmitting ? '📤 Sending...' : '🚀 Send My Quote Request'}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-6 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>

                  {/* Alternative Contact */}
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">
                      Prefer to talk directly? 
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a 
                        href="tel:+14068685850"
                        className="inline-flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        📞 Call (406) 868-5850
                      </a>
                      <a 
                        href="sms:+14068685850?body=Hi! I need help with my computer."
                        className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        💬 Text Message
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
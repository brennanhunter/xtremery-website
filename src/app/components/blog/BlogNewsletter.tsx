'use client';

import { useState } from 'react';

export default function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);
    
    try {
      // Simulate API call for now - replace with your email service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just show success message
      setIsSubmitted(true);
      setEmail('');
      
      // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
      console.log('Newsletter signup:', email);
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div id="newsletter-signup" className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            🎉 You&apos;re In!
          </h3>
          <p className="text-green-100 text-sm leading-relaxed">
            Thanks for subscribing! You&apos;ll get our best tech tips, local DeLand computer insights, and exclusive deals delivered weekly.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-green-300 hover:text-green-200 text-sm underline transition-colors"
          >
            Subscribe another email?
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="newsletter-signup" className="bg-gradient-to-br from-purple-800/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">
          🚀 DeLand Tech Tips
        </h3>
        <p className="text-purple-100 text-sm mb-4 leading-relaxed">
          Get weekly computer tips, local tech news, and exclusive deals. No spam, just useful stuff that actually works.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white/95 border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Subscribing...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Get Free Tech Tips
              </>
            )}
          </button>
        </form>
        
        <p className="text-purple-200 text-xs mt-3">
          ✅ No spam ✅ Unsubscribe anytime ✅ Local DeLand focus
        </p>
      </div>
    </div>
  );
}
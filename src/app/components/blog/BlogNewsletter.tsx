import { useState } from 'react';

export default function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call - replace with your actual newsletter signup logic
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-800/40 to-green-900/40 backdrop-blur-sm rounded-xl p-6 border border-green-600/30">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">You&apos;re All Set!</h3>
          <p className="text-green-200 text-sm">
            Check your email for a confirmation link. We&apos;ll send you our best tech tips and local DeLand updates.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-green-300 hover:text-green-200 text-sm underline"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-800/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
      
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">
          Get Tech Tips Weekly
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Join 500+ DeLand locals getting practical tech advice, repair tips, and local tech news.
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </>
          ) : (
            <>
              Subscribe Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Benefits List */}
      <div className="mt-6 pt-4 border-t border-gray-600/30">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Weekly tech tips that actually work</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Local DeLand tech news & deals</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>No spam, unsubscribe anytime</span>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400">
          "Best tech advice in DeLand!" - Sarah M.
        </p>
      </div>

    </div>
  );
}
import Link from 'next/link';

export default function BlogPostCTA() {
  return (
    <div className="space-y-6">
      
      {/* Main Service CTA */}
      <div className="bg-gradient-to-br from-purple-800/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3">
            Need PC Help?
          </h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Don't struggle with tech problems. Get honest help from DeLand's trusted computer experts.
          </p>
          
          <Link 
            href="/services/pc-repair"
            className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 mb-3"
          >
            Get PC Repair Help
          </Link>
          
          <p className="text-xs text-gray-400">
            "We fix the stuff other shops won't touch."
          </p>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-cyan-800/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-2">
            More Tech Tips
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Get weekly tips that actually work, straight to your inbox.
          </p>
          
          <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm">
            Subscribe Free
          </button>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Quick Contact
        </h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-600/30 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href="mailto:hunter@xtremery.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-xs break-all">
              hunter@xtremery.com
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600/30 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <a href="tel:+14068685850" className="text-gray-300 hover:text-cyan-400 transition-colors">
              (406) 868-5850
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-600/30 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-gray-300">DeLand, FL</span>
          </div>
        </div>
      </div>

    </div>
  );
}
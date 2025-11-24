import Link from 'next/link';

export default function BlogPostCTA() {
  return (
    <div className="space-y-6">
      
      {/* Main Service CTA */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Handelson_Two']">
            Need PC Help?
          </h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed font-['Avenir']">
            Don&apos;t struggle with tech problems. Get honest help from DeLand&apos;s trusted computer experts.
          </p>
          
          <Link 
            href="/pc-repair-deland"
            className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 mb-3 font-['Avenir']"
          >
            Get PC Repair Help
          </Link>
          
          <p className="text-xs text-gray-500 font-['Avenir']">
            &quot;We fix the stuff other shops won&apos;t touch.&quot;
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 font-['Handelson_Two']">
          <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Quick Contact
        </h3>
        
        <div className="space-y-3 text-sm font-['Avenir']">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href="mailto:hunter@xtremery.com" className="text-gray-700 hover:text-purple-600 transition-colors text-xs break-all">
              hunter@xtremery.com
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <a href="tel:+14066968256" className="text-gray-700 hover:text-blue-600 transition-colors">
              (406) 696-8256
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-gray-700">DeLand, FL</span>
          </div>
        </div>
      </div>

    </div>
  );
}
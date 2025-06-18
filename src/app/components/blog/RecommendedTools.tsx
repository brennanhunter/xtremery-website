export default function RecommendedTools() {
  return (
    <div className="bg-gradient-to-br from-green-800/20 to-green-900/20 backdrop-blur-sm rounded-xl p-8 border border-green-600/20 my-8">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        Recommended Tools
      </h3>
      
      <p className="text-gray-300 mb-6">
        Based on years of fixing computers in DeLand, these are the tools and upgrades that actually make a difference:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-all duration-300">
          <h4 className="text-white font-semibold text-lg mb-2">SanDisk 1TB SSD</h4>
          <p className="text-gray-400 text-sm mb-3">
            The single best upgrade for any computer. Instantly speeds up boot times, file transfers, and overall performance.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            View on Amazon
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        
        <div className="p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-all duration-300">
          <h4 className="text-white font-semibold text-lg mb-2">Corsair 16GB RAM</h4>
          <p className="text-gray-400 text-sm mb-3">
            If you&apos;re running multiple programs or browser tabs, more RAM prevents slowdowns and crashes.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            View on Amazon
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-600/30 text-center">
        <p className="text-sm text-gray-400">
          <em>We earn a commission if you make a purchase, at no extra cost to you. These are products we actually recommend to our DeLand customers.</em>
        </p>
      </div>
    </div>
  );
}
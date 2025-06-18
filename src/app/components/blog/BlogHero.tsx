export default function BlogHero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-blue-800/20"></div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-white to-cyan-300 text-transparent bg-clip-text drop-shadow-lg">
          Tech Tips & Fixes
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Real solutions from your local DeLand tech experts. No corporate BS, just stuff that actually works.
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          From quick fixes you can try at home to knowing when it&apos;s time to call the pros—we&apos;ve got you covered.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => {
              setTimeout(() => {
                const featuredSection = document.getElementById('featured-post');
                console.log('Featured section found:', featuredSection); // Debug log
                if (featuredSection) {
                  featuredSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }, 100);
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Browse All Posts
          </button>
          <button 
            onClick={() => {
              setTimeout(() => {
                const newsletterSection = document.getElementById('newsletter-signup');
                if (newsletterSection) {
                  newsletterSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }, 100);
            }}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Get Tech Tips by Email
          </button>
        </div>
        
        {/* Tagline */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <p className="text-cyan-300 text-sm font-medium">
            &quot;We fix the stuff other shops won&apos;t touch.&quot;
          </p>
        </div>
        
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      
    </section>
  );
}
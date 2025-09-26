export default function BlogHero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-gray-900 to-purple-600 text-transparent bg-clip-text" style={{ fontFamily: 'Handelson Two' }}>
          Tech Tips & Insights
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
          Expert insights on gaming, web design, tech reviews, and DeLand business solutions
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10" style={{ fontFamily: 'Avenir' }}>
          Discover the latest trends, tutorials, and professional insights from your trusted DeLand technology experts
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ fontFamily: 'Avenir' }}
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
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md"
            style={{ fontFamily: 'Avenir' }}
          >
            Get Updates
          </button>
        </div>
        
        {/* Tagline */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-blue-600 text-sm font-medium" style={{ fontFamily: 'Avenir' }}>
            &quot;Professional insights for the digital age&quot;
          </p>
        </div>
        
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/40 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/40 rounded-full blur-xl"></div>
      
    </section>
  );
}
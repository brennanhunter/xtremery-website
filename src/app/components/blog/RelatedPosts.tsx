import Link from 'next/link';
import Image from 'next/image';

interface RelatedPostsProps {
  currentSlug: string;
  currentCategory: string;
}

export default function RelatedPosts({ currentSlug, currentCategory }: RelatedPostsProps) {
  // Mock related posts data - replace with your actual data source
  const allPosts = [
    {
      title: "5 Signs Your PC Needs Professional Help in DeLand",
      slug: "5-signs-pc-needs-help-deland",
      excerpt: "Your computer's acting weird? Here's how to tell if it's time to call in the pros.",
      image: "/blog/pc-help-signs.jpg",
      category: "PC Repair",
      readTime: "4 min read",
      date: "June 15, 2025"
    },
    {
      title: "Best Budget Gaming Monitors Under $300 (2025 Guide)",
      slug: "best-budget-gaming-monitors-2025",
      excerpt: "Want great gaming without breaking the bank? We tested the top budget monitors.",
      image: "/blog/gaming-monitors.jpg",
      category: "Tech Reviews",
      readTime: "6 min read",
      date: "June 12, 2025"
    },
    {
      title: "What to Backup Before Your Computer Dies",
      slug: "what-to-backup-before-computer-dies",
      excerpt: "Don't wait for disaster to strike. Here's your essential backup checklist.",
      image: "/blog/backup-guide.jpg",
      category: "Data Recovery",
      readTime: "5 min read",
      date: "June 10, 2025"
    },
    {
      title: "Why Your WiFi Sucks (And How to Fix It)",
      slug: "why-wifi-sucks-how-to-fix",
      excerpt: "Tired of buffering? These simple fixes will get your internet working.",
      image: "/blog/wifi-fix.jpg",
      category: "Networking",
      readTime: "7 min read",
      date: "June 8, 2025"
    },
    {
      title: "Gaming PC vs Console: What's Right for You?",
      slug: "gaming-pc-vs-console-guide",
      excerpt: "Thinking about making the switch? Here's the honest truth about PC vs console gaming.",
      image: "/blog/pc-vs-console.jpg",
      category: "Gaming",
      readTime: "8 min read",
      date: "June 5, 2025"
    },
    {
      title: "Simple Security Tips That Actually Work",
      slug: "simple-security-tips-that-work",
      excerpt: "Skip the complicated stuff. These basic security steps protect you from 99% of threats.",
      image: "/blog/security-tips.jpg",
      category: "Security",
      readTime: "4 min read",
      date: "June 3, 2025"
    },
    {
      title: "When to Upgrade vs Buy New: A DeLand Guide",
      slug: "upgrade-vs-buy-new-deland",
      excerpt: "Save money and get better performance. Here's when upgrading makes sense.",
      image: "/blog/upgrade-guide.jpg",
      category: "PC Repair",
      readTime: "6 min read",
      date: "May 30, 2025"
    }
  ];

  // Filter out current post and get related posts
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category posts
      if (a.category === currentCategory && b.category !== currentCategory) return -1;
      if (b.category === currentCategory && a.category !== currentCategory) return 1;
      return 0;
    })
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-6 border-t border-gray-700/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Keep Reading
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            More helpful tech tips and guides from your DeLand experts
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4"></div>
        </div>

        {/* Related Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${
                    post.category === currentCategory 
                      ? 'bg-purple-600/90' 
                      : 'bg-gray-600/90'
                  }`}>
                    {post.category}
                  </span>
                </div>

                {/* Related indicator for same category */}
                {post.category === currentCategory && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      Related
                    </div>
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-4">
                
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyan-300 transition-colors">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group text-sm"
                >
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

              </div>
            </article>
          ))}
        </div>

        {/* Browse All Posts CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Browse All Tech Tips
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m0 0l4-4m-4 4l4 4" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
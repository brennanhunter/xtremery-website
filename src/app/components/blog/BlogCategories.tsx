import { useState } from 'react';
import Link from 'next/link';

export default function BlogCategories() {
  // Mock category data with post counts - you'll replace with actual data
  const [categories] = useState([
    { name: 'PC Repair', count: 12, slug: 'pc-repair' },
    { name: 'Tech Reviews', count: 8, slug: 'tech-reviews' },
    { name: 'Data Recovery', count: 6, slug: 'data-recovery' },
    { name: 'Gaming', count: 7, slug: 'gaming' },
    { name: 'Networking', count: 5, slug: 'networking' },
    { name: 'Security', count: 4, slug: 'security' },
    { name: 'DeLand Tech Tips', count: 9, slug: 'deland-tech-tips' }
  ]);

  const [recentPosts] = useState([
    {
      title: "5 Signs Your PC Needs Help",
      slug: "5-signs-pc-needs-help-deland",
      date: "June 15"
    },
    {
      title: "Best Budget Gaming Monitors",
      slug: "best-budget-gaming-monitors-2025",
      date: "June 12"
    },
    {
      title: "Essential Backup Guide",
      slug: "what-to-backup-before-computer-dies",
      date: "June 10"
    },
    {
      title: "WiFi Troubleshooting",
      slug: "why-wifi-sucks-how-to-fix",
      date: "June 8"
    }
  ]);

  return (
    <div className="space-y-8">
      
      {/* Categories Widget */}
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Categories
        </h3>
        
        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-700/30 hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30 transition-all duration-300 group"
            >
              <span className="text-gray-300 group-hover:text-white font-medium">
                {category.name}
              </span>
              <span className="text-xs bg-purple-600/70 text-white px-2 py-1 rounded-full group-hover:bg-purple-500">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Recent Posts
        </h3>
        
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="block p-3 rounded-lg bg-gray-700/30 hover:bg-cyan-600/10 border border-transparent hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <h4 className="text-gray-300 group-hover:text-cyan-300 font-medium text-sm leading-tight mb-2">
                {post.title}
              </h4>
              <span className="text-xs text-gray-500 group-hover:text-gray-400">
                {post.date}
              </span>
            </Link>
          ))}
        </div>
        
        <Link 
          href="/blog"
          className="block mt-4 text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
        >
          View All Posts →
        </Link>
      </div>

      {/* Quick Links Widget */}
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.102m-.758 4.899L7.343 7.343" />
          </svg>
          Quick Links
        </h3>
        
        <div className="space-y-3">
          <a
            href="/services/pc-repair"
            className="block p-3 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
          >
            <span className="text-white font-medium text-sm">Need PC Repair?</span>
            <p className="text-purple-200 text-xs mt-1">Get help from DeLand&apos;s tech experts</p>
          </a>
          
          <a
            href="/contact"
            className="block p-3 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
          >
            <span className="text-white font-medium text-sm">Ask a Question</span>
            <p className="text-cyan-200 text-xs mt-1">Free tech advice &amp; quotes</p>
          </a>
        </div>
      </div>

    </div>
  );
}
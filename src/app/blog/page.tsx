'use client';

import BlogHero from '../components/blog/BlogHero';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogGrid from '../components/blog/BlogGridComponent';
import BlogNewsletter from '../components/blog/BlogNewsletter';

export default function BlogPage() {
  return (
    <main className="bg-white text-gray-900">
      
      <BlogHero />
      
      <FeaturedPost />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Blog Content */}
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          
          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <BlogNewsletter />
            </div>
          </div>
          
        </div>
      </div>
      
    </main>
  );
}
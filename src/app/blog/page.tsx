'use client';

import BlogHero from '../components/blog/BlogHero';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogGrid from '../components/blog/BlogGridComponent';
import BlogCategories from '../components/blog/BlogCategories';
import BlogNewsletter from '../components/blog/BlogNewsletter';

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-br from-purple-950 via-gray-900 to-blue-950 text-white">
      
      <BlogHero />
      
      <FeaturedPost />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Blog Content */}
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogNewsletter />
          </div>
          
        </div>
      </div>
      
    </main>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { BlogPost } from '@/types/blog';

interface CategoryPageClientProps {
  posts: BlogPost[];
  displayName: string;
}

export default function CategoryPageClient({ posts, displayName }: CategoryPageClientProps) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Category Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-xtremery-purple via-xtremery-blue to-deep-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-aqua-spark/10 via-transparent to-xtremery-purple/10"></div>
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/70 mb-6" style={{ fontFamily: 'Avenir' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>→</span>
            <span className="text-white">{displayName}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: 'Handelson Two' }}>
            {displayName}
          </h1>
          <p className="text-xl md:text-2xl text-aqua-spark mb-4" style={{ fontFamily: 'Avenir' }}>
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-xtremery-purple/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  {post.featuredImage ? (
                    <Image
                      src={urlFor(post.featuredImage).width(600).height(300).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-xtremery-purple to-xtremery-blue flex items-center justify-center">
                      <span className="text-white text-4xl">📝</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-xtremery-purple/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {displayName}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-gray-500 text-sm" style={{ fontFamily: 'Avenir' }}>
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-xtremery-purple transition-colors" style={{ fontFamily: 'Handelson Two' }}>
                    <Link href={`/blog/${post.slug.current}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Avenir' }}>
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link 
                    href={`/blog/${post.slug.current}`}
                    className="inline-flex items-center gap-2 text-xtremery-blue hover:text-xtremery-purple font-medium transition-colors group"
                    style={{ fontFamily: 'Avenir' }}
                  >
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-xtremery-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-xtremery-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Handelson Two' }}>
              No posts yet in this category
            </h2>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Avenir' }}>
              Check back soon for new {displayName.toLowerCase()} content!
            </p>
            <Link 
              href="/blog"
              className="inline-block bg-xtremery-purple hover:bg-xtremery-purple/90 text-white font-bold px-8 py-3 rounded-lg transition-colors"
              style={{ fontFamily: 'Avenir' }}
            >
              Back to All Posts
            </Link>
          </div>
        )}

        {/* Back to Blog Link */}
        {posts.length > 0 && (
          <div className="mt-12 text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-xtremery-blue hover:text-xtremery-purple font-semibold transition-colors"
              style={{ fontFamily: 'Avenir' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Blog Posts
            </Link>
          </div>
        )}
      </section>

    </main>
  );
}

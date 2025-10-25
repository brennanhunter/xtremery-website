'use client';

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import BlogPostContent from '../../components/blog/BlogPostContent';
import RelatedPosts from '../../components/blog/RelatedPosts';
import BlogPostCTA from '../../components/blog/BlogPostCTA';
import BlogNewsletter from '../../components/blog/BlogNewsletter';
import BlogArticleSchema from '../../components/blog/BlogArticleSchema';
import InternalLinkSuggestions from '../../components/blog/InternalLinkSuggestions';
import { BlogPost } from '@/types/blog';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <main className="bg-white text-gray-900">
      
      {/* Structured Data for SEO */}
      <BlogArticleSchema post={post} />
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600" style={{ fontFamily: 'Avenir' }}>
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>→</span>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <span>→</span>
              <span className="text-gray-700">{post.category}</span>
            </div>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full" style={{ fontFamily: 'Avenir' }}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-gray-900" style={{ fontFamily: 'Handelson Two' }}>
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8" style={{ fontFamily: 'Avenir' }}>
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8 border-l-4 border-blue-500 pl-6 bg-blue-50 py-4 rounded-r-lg" style={{ fontFamily: 'Avenir' }}>
            {post.excerpt}
          </p>

        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 mb-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            {post.featuredImage ? (
              <Image
                src={urlFor(post.featuredImage).width(1200).height(600).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-6xl">📝</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="px-6 pb-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:italic">
                <BlogPostContent content={post.content} />
              </div>
              
              {/* Internal Link Suggestions */}
              <InternalLinkSuggestions 
                currentSlug={post.slug.current}
                currentCategory={post.category}
                keywords={post.tags}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <BlogPostCTA />
                <BlogNewsletter />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPosts currentSlug={post.slug.current} currentCategory={post.category} />

    </main>
  );
}

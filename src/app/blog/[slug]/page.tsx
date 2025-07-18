'use client';

import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { client, getPostBySlug, urlFor }  from '@/lib/sanity';
import BlogPostContent from '../../components/blog/BlogPostContent';
import RelatedPosts from '../../components/blog/RelatedPosts';
import BlogPostCTA from '../../components/blog/BlogPostCTA';
import RecommendedTools from '../../components/blog/RecommendedTools';
import { BlogPost } from '@/types/blog';


interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(getPostBySlug, { slug });
        if (data) {
          setPost(data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="bg-gradient-to-br from-purple-950 via-gray-900 to-blue-950 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading post...</p>
        </div>
      </main>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-gradient-to-br from-purple-950 via-gray-900 to-blue-950 text-white">
      
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>→</span>
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
              <span>→</span>
              <span className="text-gray-300">{post.category}</span>
            </div>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
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
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>

        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
            {post.featuredImage ? (
              <>
                {console.log('Featured image data:', post.featuredImage)}
                <Image
                  src={urlFor(post.featuredImage).width(1200).height(600).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white text-6xl">📝</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <BlogPostContent content={post.content} />
              <RecommendedTools />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <BlogPostCTA />
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
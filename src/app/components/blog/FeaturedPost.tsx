import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client, urlFor } from '@/lib/sanity';
import { BlogPost } from '@/types/blog';

export default function FeaturedPost() {
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedPost = async () => {
      try {
        // Try to get a post marked as featured first
        let query = `*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0]`;
        let data = await client.fetch(query);
        
        // If no featured post exists, get the most recent post
        if (!data) {
          console.log('No featured post found, using most recent post');
          query = `*[_type == "blogPost"] | order(publishedAt desc)[0]`;
          data = await client.fetch(query);
        }
        
        console.log('Featured post data:', data);
        setFeaturedPost(data);
        setLoading(false);
      } catch (error) {
        console.error('Sanity fetch error:', error);
        setLoading(false);
      }
    };

    fetchFeaturedPost();
  }, []);

  if (loading) {
    return (
      <section id="featured-post" className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse bg-gray-800/50 rounded-2xl h-96"></div>
        </div>
      </section>
    );
  }

  if (!featuredPost) {
    return (
      <section id="featured-post" className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gray-800/50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">No Posts Yet</h2>
            <p className="text-gray-400">Create your first blog post in Sanity Studio!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured-post" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {featuredPost.featured ? 'Featured Post' : 'Latest Post'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto"></div>
        </div>

        {/* Featured Post Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              {featuredPost.featuredImage ? (
                <Image
                  src={urlFor(featuredPost.featuredImage).width(800).height(600).url()}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-6xl">
                    {featuredPost.featured ? '⭐' : '📝'}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
              </div>

              {/* Featured Badge */}
              {featuredPost.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
                <span>•</span>
                <span>{featuredPost.author}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-300 transition-colors">
                {featuredPost.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>

              {/* Read More Button */}
              <Link 
                href={`/blog/${featuredPost.slug.current}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 w-fit"
              >
                Read Full Post
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
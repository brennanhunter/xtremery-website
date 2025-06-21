import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { client, urlFor } from '@/lib/sanity';
import { BlogPost } from '@/types/blog';

export default function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [actualCategories, setActualCategories] = useState<string[]>([]);
  
  // Function to make category names display-friendly
  const formatCategoryDisplay = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const allPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          featuredImage,
          category,
          publishedAt,
          readTime,
          author,
          featured
        }`;
        
        const allData = await client.fetch(allPostsQuery);
        setAllPosts(allData);
        
        // Extract unique categories from your actual data
        const uniqueCategories = [...new Set(allData.map((post: BlogPost) => post.category).filter(Boolean))] as string[];
        setActualCategories(uniqueCategories);
        
        console.log('🔍 DEBUG: All posts:', allData);
        console.log('🔍 DEBUG: Actual categories in Sanity:', uniqueCategories);
        
        // Filter posts
        if (filter === 'All') {
          setPosts(allData);
        } else {
          const filtered = allData.filter((post: BlogPost) => post.category === filter);
          console.log(`🎯 Filter "${filter}" found ${filtered.length} posts`);
          setPosts(filtered);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, [filter]);

  if (loading) {
    return (
      <section className="space-y-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading posts...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">

      {/* Section Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-3xl font-extrabold text-white">
          {filter === 'All' ? 'Latest Posts' : `${formatCategoryDisplay(filter)} Posts`} ({posts.length})
        </h2>
        
        {/* Dynamic Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'All'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700/50 text-gray-300 hover:bg-purple-600/50 hover:text-white'
            }`}
          >
            All ({allPosts.length})
          </button>
          
          {/* Show actual categories from Sanity */}
          {actualCategories.map((category) => {
            const count = allPosts.filter(p => p.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-purple-600/50 hover:text-white'
                }`}
              >
                {formatCategoryDisplay(category)} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
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
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-4xl">📝</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {formatCategoryDisplay(post.category)}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-4">
                
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-cyan-300 transition-colors">
                  <Link href={`/blog/${post.slug.current}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
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
          <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-400 text-lg mb-2">No {filter === 'All' ? 'posts' : formatCategoryDisplay(filter).toLowerCase() + ' posts'} found.</p>
          <p className="text-gray-500 text-sm">
            Check back soon for more content!
          </p>
        </div>
      )}

      {/* Load More Button - Future enhancement */}
      {posts.length > 0 && posts.length % 10 === 0 && (
        <div className="text-center pt-8">
          <button 
            onClick={() => {
              console.log('Load more functionality - implement pagination here');
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Load More Posts
          </button>
        </div>
      )}

    </section>
  );
}
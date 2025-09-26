import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { client, urlFor } from '@/lib/sanity';
import { BlogPost } from '@/types/blog';

interface RelatedPostsProps {
  currentSlug: string;
  currentCategory?: string;
}

export default function RelatedPosts({ currentSlug, currentCategory }: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        // Fetch all posts except the current one
        const postsQuery = `*[_type == "blogPost" && slug.current != "${currentSlug}"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          featuredImage,
          category,
          publishedAt,
          readTime,
          author
        }`;
        
        const allPosts = await client.fetch(postsQuery);
        
        // Prioritize posts from the same category, then get 3 random posts
        const sameCategoryPosts = currentCategory 
          ? allPosts.filter((post: BlogPost) => post.category === currentCategory)
          : [];
        
        const otherPosts = currentCategory 
          ? allPosts.filter((post: BlogPost) => post.category !== currentCategory)
          : allPosts;
        
        // Shuffle and combine posts
        const shuffledSameCategory = sameCategoryPosts.sort(() => 0.5 - Math.random());
        const shuffledOtherPosts = otherPosts.sort(() => 0.5 - Math.random());
        
        // Take up to 2 from same category, then fill to 3 total with other posts
        const finalPosts = [
          ...shuffledSameCategory.slice(0, 2),
          ...shuffledOtherPosts.slice(0, 3 - shuffledSameCategory.slice(0, 2).length)
        ].slice(0, 3);
        
        setRelatedPosts(finalPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching related posts:', error);
        setLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [currentSlug, currentCategory]);

  // Function to format category display
  const formatCategoryDisplay = (category: string) => {
    if (!category) return 'General';
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (loading) {
    return (
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-gray-500 mt-4">Loading related posts...</p>
        </div>
      </section>
    );
  }
  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 font-['Handelson_Two']">
            Keep Reading
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Avenir']">
            More helpful tech tips and guides from your DeLand experts
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4"></div>
        </div>

        {/* Related Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <article
              key={post.slug.current}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                {post.featuredImage ? (
                  <Image
                    src={urlFor(post.featuredImage).width(400).height(200).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-4xl">📝</span>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm font-['Avenir'] ${
                    post.category === currentCategory 
                      ? 'bg-purple-600/90' 
                      : 'bg-gray-700/90'
                  }`}>
                    {formatCategoryDisplay(post.category)}
                  </span>
                </div>

                {/* Related indicator for same category */}
                {post.category === currentCategory && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 font-['Avenir']">
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
                <div className="flex items-center gap-3 text-gray-500 text-sm font-['Avenir']">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime || '5 min read'}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-purple-700 transition-colors font-['Handelson_Two']">
                  <Link href={`/blog/${post.slug.current}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed font-['Avenir']">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors group text-sm font-['Avenir']"
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-['Avenir']"
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
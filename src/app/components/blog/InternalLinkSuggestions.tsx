'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';

interface BlogPostLink {
  title: string;
  slug: { current: string };
  category: string;
}

interface InternalLinkSuggestionsProps {
  currentSlug: string;
  currentCategory?: string;
  keywords?: string[]; // Reserved for future keyword-based matching
}

/**
 * Displays contextual internal links to other blog posts
 * Helps with SEO by creating a strong internal linking structure
 */
export default function InternalLinkSuggestions({ 
  currentSlug, 
  currentCategory,
}: InternalLinkSuggestionsProps) {
  const [suggestedLinks, setSuggestedLinks] = useState<BlogPostLink[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        // Fetch posts from the same category or related keywords
        const query = `*[_type == "blogPost" && slug.current != "${currentSlug}"] | order(publishedAt desc) [0...5] {
          title,
          slug,
          category
        }`;
        
        const posts = await client.fetch<BlogPostLink[]>(query);
        
        // Prioritize same category posts
        const sameCategoryPosts = currentCategory 
          ? posts.filter(post => post.category === currentCategory)
          : [];
        
        const otherPosts = posts.filter(post => post.category !== currentCategory);
        
        // Combine and limit to 3 suggestions
        const suggestions = [...sameCategoryPosts.slice(0, 2), ...otherPosts].slice(0, 3);
        setSuggestedLinks(suggestions);
      } catch (error) {
        console.error('Error fetching link suggestions:', error);
      }
    };

    fetchSuggestions();
  }, [currentSlug, currentCategory]);

  if (suggestedLinks.length === 0) return null;

  return (
    <aside className="my-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Handelson Two' }}>
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Related Articles You Might Find Helpful
      </h3>
      <ul className="space-y-2">
        {suggestedLinks.map((post) => (
          <li key={post.slug.current}>
            <Link 
              href={`/blog/${post.slug.current}`}
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2 transition-colors"
              style={{ fontFamily: 'Avenir' }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

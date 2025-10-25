import React from 'react';
import { BlogPost } from '@/types/blog';
import { urlFor } from '@/lib/sanity';

interface BlogArticleSchemaProps {
  post: BlogPost;
}

const BlogArticleSchema: React.FC<BlogArticleSchemaProps> = ({ post }) => {
  const baseUrl = 'https://www.xtremery.com';
  
  // Get featured image URL if available
  const imageUrl = post.featuredImage 
    ? urlFor(post.featuredImage).width(1200).height(630).url()
    : `${baseUrl}/logos/LogoNew.png`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt, // You can add _updatedAt field if available
    author: {
      '@type': 'Person',
      name: post.author || 'Hunter',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Xtremery',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logos/LogoNew.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug.current}`,
    },
    articleSection: post.category || 'Technology',
    keywords: post.tags?.join(', ') || '',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };

  // Add breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${baseUrl}/blog/${post.slug.current}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default BlogArticleSchema;

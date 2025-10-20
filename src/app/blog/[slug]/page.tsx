import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client, getPostBySlug } from '@/lib/sanity';
import { BlogPost } from '@/types/blog';
import BlogPostClient from './BlogPostClient';


interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post: BlogPost = await client.fetch(getPostBySlug, { slug });
    
    if (!post) {
      return {
        title: 'Post Not Found | Xtremery',
        description: 'The blog post you are looking for could not be found.',
      };
    }

    // Use custom SEO fields if available, otherwise construct from post data
    const title = post.seoTitle || `${post.title} | Xtremery DeLand`;
    const description = post.seoDescription || post.excerpt;
    
    return {
      title,
      description,
      keywords: post.tags || [],
      alternates: {
        canonical: `https://www.xtremery.com/blog/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author],
        tags: post.tags,
        url: `https://www.xtremery.com/blog/${slug}`,
        siteName: 'Xtremery',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog | Xtremery',
      description: 'Read the latest tech tips and insights from Xtremery.',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  let post: BlogPost | null = null;
  
  try {
    post = await client.fetch(getPostBySlug, { slug });
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
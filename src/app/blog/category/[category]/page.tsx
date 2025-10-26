import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity';
import { BlogPost } from '@/types/blog';
import CategoryPageClient from './CategoryPageClient';

// Define valid categories (must match Sanity schema)
const VALID_CATEGORIES = [
  'pc-repair',
  'web-design',
  'tech-reviews',
  'data-recovery',
  'networking',
  'gaming',
  'security',
  'deland-tech-tips'
] as const;

type CategorySlug = typeof VALID_CATEGORIES[number];

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Format category for display
function formatCategoryDisplay(category: string): string {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate static params for all categories at build time
export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({
    category: category,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  
  if (!VALID_CATEGORIES.includes(category as CategorySlug)) {
    return {
      title: 'Category Not Found',
    };
  }

  const displayName = formatCategoryDisplay(category);
  
  // Fetch post count for this category
  const posts = await client.fetch<BlogPost[]>(
    `*[_type == "blogPost" && category == $category] | order(publishedAt desc)`,
    { category }
  );

  const postCount = posts.length;

  // Category-specific descriptions
  const descriptions: Record<string, string> = {
    'pc-repair': `Expert PC repair guides and tips from DeLand's trusted computer technician. ${postCount} articles covering diagnostics, repairs, and upgrades.`,
    'web-design': `Professional web design insights and tutorials for creating stunning websites. ${postCount} articles on modern web development.`,
    'tech-reviews': `Honest tech reviews and product recommendations from a certified technician. ${postCount} in-depth reviews to help you buy smart.`,
    'data-recovery': `Data recovery guides and solutions for retrieving lost files. ${postCount} articles on recovering your precious data safely.`,
    'networking': `Network setup, troubleshooting, and optimization guides. ${postCount} articles to keep your network running smoothly.`,
    'gaming': `Gaming PC builds, optimization tips, and reviews. ${postCount} articles for gamers in DeLand and beyond.`,
    'security': `Cybersecurity tips, best practices, and threat protection guides. ${postCount} articles to keep your systems secure.`,
    'deland-tech-tips': `Local tech tips and insights specifically for DeLand, FL residents. ${postCount} articles from your neighborhood tech expert.`,
  };

  return {
    title: `${displayName} Articles | Xtremery Blog`,
    description: descriptions[category] || `Browse all ${displayName} articles on the Xtremery blog. Expert tech insights from DeLand, FL.`,
    keywords: [displayName, 'Xtremery', 'DeLand FL', 'tech blog', 'computer repair', 'web design'],
    alternates: {
      canonical: `https://www.xtremery.com/blog/category/${category}`,
    },
    openGraph: {
      title: `${displayName} Articles | Xtremery Blog`,
      description: descriptions[category] || `Browse all ${displayName} articles on the Xtremery blog.`,
      url: `https://www.xtremery.com/blog/category/${category}`,
      type: 'website',
      siteName: 'Xtremery',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayName} Articles | Xtremery Blog`,
      description: descriptions[category] || `Browse all ${displayName} articles on the Xtremery blog.`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  // Validate category
  if (!VALID_CATEGORIES.includes(category as CategorySlug)) {
    notFound();
  }

  // Fetch all posts in this category
  const posts = await client.fetch<BlogPost[]>(
    `*[_type == "blogPost" && category == $category] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      featuredImage,
      category,
      publishedAt,
      readTime,
      author
    }`,
    { category }
  );

  const displayName = formatCategoryDisplay(category);

  return <CategoryPageClient posts={posts} displayName={displayName} />;
}

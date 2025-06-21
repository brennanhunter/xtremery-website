import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Helper for generating image URLs with proper typing
const builder = imageUrlBuilder(client)
export const urlFor = (source: Parameters<typeof builder.image>[0]) => builder.image(source)

// GROQ queries
export const getAllPosts = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  category,
  readTime,
  publishedAt,
  author,
  featured
}`

export const getPostBySlug = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  category,
  readTime,
  publishedAt,
  author,
  content,
  seoTitle,
  seoDescription,
  tags
}`

// Get posts by category (NEW)
export const getPostsByCategory = `*[_type == "blogPost" && category == $category && !featured] | order(publishedAt desc) {
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

// Get all non-featured posts (NEW)
export const getAllNonFeaturedPosts = `*[_type == "blogPost" && !featured] | order(publishedAt desc) {
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

// Get unique categories (NEW - useful for dynamically generating filter buttons)
export const getCategories = `*[_type == "blogPost"] | order(category asc) {
  "category": category
} | {
  "categories": array::unique(category[])
}`;

// Get category with post count (NEW - for your sidebar)
export const getCategoriesWithCount = `{
  "categories": *[_type == "blogPost"] | group(category) | {
    "name": category,
    "count": count(),
    "slug": lower(category)
  } | order(name asc)
}`;

// Enhanced featured post query
export const getFeaturedPost = `*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0] {
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

// Related posts by category (for your blog post pages)
export const getRelatedPosts = `*[_type == "blogPost" && category == $category && slug.current != $currentSlug && !featured] | order(publishedAt desc)[0...3] {
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
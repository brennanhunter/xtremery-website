import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Helper for generating image URLs
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

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
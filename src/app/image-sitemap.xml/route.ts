import { NextResponse } from 'next/server'
import { client, urlFor } from '@/lib/sanity'

interface BlogPostImage {
  slug: { current: string }
  title: string
  featuredImage?: {
    asset: {
      _ref: string
    }
  }
}

export async function GET() {
  try {
    const baseUrl = 'https://www.xtremery.com'
    
    // Fetch all blog posts with images
    const blogPosts = await client.fetch<BlogPostImage[]>(`
      *[_type == "blogPost" && defined(featuredImage)] {
        slug,
        title,
        featuredImage
      }
    `)
    
    // Build image sitemap XML
    const imageSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Homepage Images -->
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${baseUrl}/logos/LogoNew.png</image:loc>
      <image:title>Xtremery Logo</image:title>
    </image:image>
  </url>
  
  <!-- Blog Post Images -->
  ${blogPosts
    .filter(post => post.featuredImage)
    .map(post => {
      const imageUrl = urlFor(post.featuredImage!).width(1200).url()
      return `
  <url>
    <loc>${baseUrl}/blog/${post.slug.current}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title><![CDATA[${post.title}]]></image:title>
    </image:image>
  </url>`
    })
    .join('')}
    
</urlset>`

    return new NextResponse(imageSitemapXml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('Image sitemap error:', error)
    return new NextResponse('Error generating image sitemap', { status: 500 })
  }
}


// Create: src/app/blog/rss.xml/route.ts

import { client } from '@/lib/sanity';
import { NextResponse } from 'next/server';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: { current: string };
  publishedAt: string;
  author?: string;
  category?: string;
}

export async function GET() {
  try {
    // Fetch your latest blog posts
    const posts: BlogPost[] = await client.fetch(`
      *[_type == "blogPost" && publishedAt != null] | order(publishedAt desc)[0...20] {
        title,
        excerpt,
        slug,
        publishedAt,
        author,
        category
      }
    `);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://xtremery.com';
    
    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Xtremery Tech Blog - DeLand's Computer Experts</title>
    <description>Real tech solutions from your local DeLand experts. No corporate BS, just stuff that actually works.</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <managingEditor>hunter@xtremery.com (Hunter)</managingEditor>
    <webMaster>hunter@xtremery.com (Hunter)</webMaster>
    <image>
      <url>${siteUrl}/LogoNew.png</url>
      <title>Xtremery Tech Blog</title>
      <link>${siteUrl}/blog</link>
    </image>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/blog/${post.slug.current}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug.current}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>hunter@xtremery.com (${post.author || 'Hunter'})</author>
      <category><![CDATA[${post.category}]]></category>
    </item>
    `).join('')}
    
  </channel>
</rss>`;

    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('RSS feed error:', error);
    return new NextResponse('Error generating RSS feed', { status: 500 });
  }
}
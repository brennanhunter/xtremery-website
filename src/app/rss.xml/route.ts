import { client } from '@/lib/sanity';
import { NextResponse } from 'next/server';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: { current: string };
  publishedAt: string;
  author?: string;
  category?: string;
  featuredImage?: {
    asset: {
      _ref: string;
    };
  };
}

export async function GET() {
  try {
    // Fetch all published blog posts
    const posts: BlogPost[] = await client.fetch(`
      *[_type == "blogPost" && publishedAt != null] | order(publishedAt desc) {
        title,
        excerpt,
        slug,
        publishedAt,
        author,
        category,
        featuredImage
      }
    `);

    const siteUrl = 'https://www.xtremery.com';
    
    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Xtremery Tech Blog - DeLand's Computer Experts</title>
    <description>Real tech solutions from your local DeLand experts. PC repair, web design, and tech tips that actually work.</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <managingEditor>hunter@xtremery.com (Hunter)</managingEditor>
    <webMaster>hunter@xtremery.com (Hunter)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Xtremery. All rights reserved.</copyright>
    <image>
      <url>${siteUrl}/logos/LogoNew.png</url>
      <title>Xtremery Tech Blog</title>
      <link>${siteUrl}/blog</link>
    </image>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
    
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/blog/${post.slug.current}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug.current}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${post.author || 'Hunter'}]]></dc:creator>
      <category><![CDATA[${post.category || 'Tech'}]]></category>
    </item>
    `).join('')}
    
  </channel>
</rss>`;

    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });

  } catch (error) {
    console.error('RSS feed error:', error);
    return new NextResponse('Error generating RSS feed', { status: 500 });
  }
}
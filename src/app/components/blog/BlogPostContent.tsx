import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import { 
  PortableTextBlock, 
  PortableTextImageValue, 
  AffiliateProductValue, 
  TipBoxValue, 
  LinkMark, 
  AffiliateLinkMark 
} from '@/types/blog';
import Image from 'next/image';

interface BlogPostContentProps {
  content: PortableTextBlock[];
}

// Component prop types
interface ComponentProps {
  children?: React.ReactNode;
}

const components = {
  types: {
    image: ({ value }: { value: PortableTextImageValue }) => (
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src={urlFor(value).width(800).height(400).url()}
          alt={value.alt || ''}
          width={800}
          height={400}
          className="w-full h-auto"
        />
        {value.caption && (
          <p className="text-sm text-gray-400 text-center mt-2 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
    affiliateProduct: ({ value }: { value: AffiliateProductValue }) => (
      <div className="my-8 bg-gradient-to-br from-green-800/20 to-green-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-600/20">
        <div className="flex flex-col md:flex-row gap-4">
          {value.image && (
            <div className="w-full md:w-1/3">
              <Image
                src={urlFor(value.image).width(300).height(200).url()}
                alt={value.productName || ''}
                width={300}
                height={200}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2">{value.productName}</h4>
            <p className="text-gray-300 mb-4">{value.description}</p>
            {value.price && (
              <p className="text-green-400 font-semibold mb-4">{value.price}</p>
            )}
            <a
              href={value.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View on Amazon
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    ),
    tipBox: ({ value }: { value: TipBoxValue }) => (
      <div className="my-8 bg-gradient-to-br from-cyan-800/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-600/20">
        <h4 className="text-cyan-300 font-bold text-lg mb-3 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {value.title}
        </h4>
        <p className="text-gray-300 leading-relaxed">{value.content}</p>
      </div>
    ),
  },
  block: {
    // Headings
    h2: ({ children }: ComponentProps) => (
      <h2 className="text-3xl font-bold text-white mt-12 mb-6 pb-3 border-b-2 border-purple-500">
        {children}
      </h2>
    ),
    h3: ({ children }: ComponentProps) => (
      <h3 className="text-2xl font-semibold text-cyan-300 mt-8 mb-4">
        {children}
      </h3>
    ),
    // Normal paragraph
    normal: ({ children }: ComponentProps) => (
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        {children}
      </p>
    ),
    // Blockquote
    blockquote: ({ children }: ComponentProps) => (
      <blockquote className="my-8 bg-gradient-to-r from-purple-800/20 to-blue-800/20 border-l-4 border-purple-500 pl-6 py-4 rounded-r-lg">
        <p className="text-gray-200 text-lg italic leading-relaxed">
          {children}
        </p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: ComponentProps) => (
      <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-gray-300 text-lg">
        {children}
      </ul>
    ),
    number: ({ children }: ComponentProps) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 ml-4 text-gray-300 text-lg">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: ComponentProps) => (
      <li className="text-gray-300 leading-relaxed">{children}</li>
    ),
    number: ({ children }: ComponentProps) => (
      <li className="text-gray-300 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: ComponentProps) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }: ComponentProps) => (
      <em className="italic text-cyan-200">{children}</em>
    ),
    link: ({ children, value = { _type: 'link', href: '#' } }: { children: React.ReactNode; value?: LinkMark }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
      >
        {children}
      </a>
    ),
    affiliateLink: ({
      children,
      value = { _type: 'affiliateLink', affiliateUrl: '#' },
    }: { children: React.ReactNode; value?: AffiliateLinkMark }) => (
      <a
        href={value.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105"
      >
        {children}
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    ),
  },
};

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <article className="prose prose-lg prose-invert max-w-none">
      <div className="blog-content">
        {content && <PortableText value={content} components={components} />}
      </div>
    </article>
  );
}
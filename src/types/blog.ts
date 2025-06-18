export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featuredImage: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  } | null;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  content: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
  featured?: boolean;
}

export interface PortableTextBlock {
  _type: string;
  _key: string;
  children?: PortableTextChild[];
  style?: string;
  markDefs?: MarkDef[];
  [key: string]: unknown;
}

export interface PortableTextChild {
  _type: 'span';
  text: string;
  marks?: string[];
  _key: string;
}

export interface MarkDef {
  _type: string;
  _key: string;
  [key: string]: unknown;
}
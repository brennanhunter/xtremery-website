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

export interface PortableTextImageValue {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface AffiliateProductValue {
  _type: 'affiliateProduct';
  productName: string;
  description: string;
  affiliateUrl: string;
  price?: string;
  image?: PortableTextImageValue;
}

export interface TipBoxValue {
  _type: 'tipBox';
  title: string;
  content: string;
}

export interface LinkMark {
  _type: 'link';
  href: string;
}

export interface AffiliateLinkMark {
  _type: 'affiliateLink';
  affiliateUrl: string;
  productName?: string;
  price?: string;
}
// src/lib/analytics.ts

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetOrEventName: string,
      params?: Record<string, undefined | string | number>
    ) => void;
  }
}

// Simple, safe way to get the GA ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Track page views
export const pageview = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// ... rest of your functions stay the same

// Track custom events
export const event = ({ action, category, label, value }: EventParams): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track blog-specific events
export const trackBlogEvent = (
  eventName: string, 
  postTitle: string, 
  category: string = 'Blog'
): void => {
  event({
    action: eventName,
    category: category,
    label: postTitle,
  });
};

// Track affiliate clicks
export const trackAffiliateClick = (
  productName: string, 
  affiliateProgram: string
): void => {
  event({
    action: 'affiliate_click',
    category: 'Affiliate',
    label: `${affiliateProgram}: ${productName}`,
  });
};

// Track service inquiries from blog
export const trackServiceInquiry = (source: string): void => {
  event({
    action: 'service_inquiry',
    category: 'Lead Generation',
    label: source,
  });
};
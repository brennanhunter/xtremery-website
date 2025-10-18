// Product type definitions for the Xtremery store
// This is a real store - all data must be accurate and implementable

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number; // Price in cents for Stripe
  displayPrice: string; // Formatted price for display
  type: 'digital';
  category: 'guide' | 'kit' | 'course';
  image: string;
  features: string[];
  deliveryMethod: 'download';
  // Stripe will be configured by user - these are placeholders for structure
  stripeProductId?: string;
  stripePriceId?: string;
}

// Note: These are conceptual products for MVP demonstration
// Hunter will need to create actual content and set real Stripe IDs
export const STORE_PRODUCTS: Product[] = [
  {
    id: 'pc-health-guide',
    name: 'PC Health Check Guide',
    description: 'Complete diagnostic checklist to keep your computer running smoothly',
    longDescription: 'A comprehensive 20-page guide covering systematic computer diagnostics, performance optimization, and preventive maintenance. Includes step-by-step checklists, warning signs to watch for, and professional tips for extending your PC\'s lifespan.',
    price: 1900, // $19.00 in cents
    displayPrice: '$19',
    type: 'digital',
    category: 'guide',
    image: '/store/pc-health-guide.jpg', // Will need actual image
    features: [
      '20-page comprehensive guide',
      'Step-by-step diagnostic checklist',
      'Performance optimization tips',
      'Preventive maintenance schedule',
      'Professional troubleshooting methods',
      'Instant PDF download'
    ],
    deliveryMethod: 'download',
    stripeProductId: 'prod_TCt2XOfIGmCYSO',
    stripePriceId: 'price_1SGTGCBsbBlwWW8nMe9jvfAl'
  },
  {
    id: 'website-emergency-kit',
    name: 'Website Emergency Kit',
    description: 'Essential tools and guides for website disasters and recovery',
    longDescription: 'Everything you need when your website goes down. Includes emergency contact templates, backup procedures, security breach response guides, and recovery checklists. Created from real-world experience handling website emergencies.',
    price: 4900, // $49.00 in cents
    displayPrice: '$49',
    type: 'digital',
    category: 'kit',
    image: '/store/website-emergency-kit.jpg', // Will need actual image
    features: [
      'Emergency response checklist',
      'Backup and recovery procedures',
      'Security breach response guide',
      'Contact templates for hosting issues',
      'Website monitoring setup guide',
      'Complete digital bundle'
    ],
    deliveryMethod: 'download',
    stripeProductId: 'prod_TCt2CiTH762EiJ',
    stripePriceId: 'price_1SGTGbBsbBlwWW8n8GpxficK'
  }
];

// Store configuration
export const STORE_CONFIG = {
  name: 'Xtremery Store',
  description: 'Professional-grade tools and guides for tech professionals',
  currency: 'USD',
  taxRate: 0, // Will need to configure based on business location
  shippingRequired: false, // Digital products only for MVP
  
  // Payment methods (when Stripe is configured)
  paymentMethods: ['card'],
  
  // Business info for receipts
  businessInfo: {
    name: 'Xtremery',
    address: '', // Hunter needs to provide
    email: 'support@xtremery.com',
    phone: '', // Hunter needs to provide
  }
};

// Utility functions for the store
export const formatPrice = (priceInCents: number): string => {
  return `$${(priceInCents / 100).toFixed(2)}`;
};

export const getProductById = (id: string): Product | undefined => {
  return STORE_PRODUCTS.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return STORE_PRODUCTS.filter(product => product.category === category);
};
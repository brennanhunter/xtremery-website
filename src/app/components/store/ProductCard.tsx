'use client';

import { handelsonTwo, avenir } from '@/app/fonts';
import { Product } from '@/lib/store-data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handlePurchase = async () => {
    try {
      if (!product.stripePriceId) {
        alert('This product is not yet configured for purchase. Please contact us directly!');
        return;
      }

      // Simple fetch to create checkout session - like Stripe docs
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: product.stripePriceId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout - simple and direct
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Purchase error:', error);
      alert('Error: ' + (error instanceof Error ? error.message : 'Something went wrong'));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
        {/* Placeholder until real images are added */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-50">
            {product.category === 'guide' ? '📋' : '🛠️'}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`${handelsonTwo.className} text-xl font-bold text-gray-800`}>
            {product.name}
          </h3>
          <span className={`${avenir.className} text-2xl font-bold text-purple-600`}>
            {product.displayPrice}
          </span>
        </div>

        <p className={`${avenir.className} text-gray-600 mb-4 leading-relaxed`}>
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className={`${avenir.className} text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide`}>
            What&apos;s Included:
          </h4>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className={`${avenir.className} text-sm text-gray-600 flex items-center`}>
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
            {product.features.length > 3 && (
              <li className={`${avenir.className} text-sm text-gray-500 italic`}>
                +{product.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Purchase Button */}
        <button
          onClick={handlePurchase}
          className={`${avenir.className} w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
        >
          Get Instant Access
        </button>

        {/* Delivery Info */}
        <div className="mt-3 text-center">
          <p className={`${avenir.className} text-xs text-gray-500`}>
            ⚡ Instant download • 💳 Secure payment • 🔒 Digital delivery
          </p>
        </div>
      </div>
    </div>
  );
}
'use client';

import { handelsonTwo, avenir } from '@/app/fonts';
import ProductGrid from '../components/store/ProductGrid';

export default function StorePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className={`${handelsonTwo.className} text-5xl lg:text-6xl font-bold mb-6`}>
            Xtremery Store
          </h1>
          <p className={`${avenir.className} text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-light`}>
            Professional-grade tools and guides to keep your tech running smoothly. 
            Created by experts, trusted by professionals.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`${handelsonTwo.className} text-4xl lg:text-5xl font-bold text-gray-800 mb-4`}>
              Digital Products
            </h2>
            <p className={`${avenir.className} text-xl text-gray-600 max-w-2xl mx-auto`}>
              Instant downloads. Professional expertise. Real solutions.
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid />
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`${handelsonTwo.className} text-3xl font-bold text-gray-800 mb-8`}>
            Why Choose Xtremery Products?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className={`${avenir.className} text-lg font-semibold text-gray-800 mb-2`}>
                Expert Created
              </h4>
              <p className={`${avenir.className} text-gray-600`}>
                Developed by Hunter Coleman with over a decade of hands-on experience
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className={`${avenir.className} text-lg font-semibold text-gray-800 mb-2`}>
                Instant Access
              </h4>
              <p className={`${avenir.className} text-gray-600`}>
                Immediate download after purchase. No waiting, no shipping delays
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className={`${avenir.className} text-lg font-semibold text-gray-800 mb-2`}>
                Proven Solutions
              </h4>
              <p className={`${avenir.className} text-gray-600`}>
                Real-world tested methods that actually work in practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`${handelsonTwo.className} text-3xl font-bold text-gray-800 mb-4`}>
            Need Custom Solutions?
          </h3>
          <p className={`${avenir.className} text-lg text-gray-600 mb-8`}>
            Can&apos;t find what you need? We create custom solutions for businesses.
          </p>
          <a
            href="/contact"
            className={`${avenir.className} inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
          >
            Get Custom Quote
          </a>
        </div>
      </section>
    </main>
  );
}
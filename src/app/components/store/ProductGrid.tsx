'use client';

import { STORE_PRODUCTS } from '@/lib/store-data';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {STORE_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
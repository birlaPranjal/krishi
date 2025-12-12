'use client';

import { useState } from 'react';
import { productData } from '@/data/products';
import { categorizeProduct } from '@/lib/categories';
import ProductCard from './ProductCard';

export default function BulkSection() {
  const [showAll, setShowAll] = useState(false);
  
  // Since there are no products with "bulk" in name, show products with large quantities or high discounts
  // as a fallback for Bulk section
  const bulkProducts = Object.values(productData)
    .filter((product) => {
      const category = categorizeProduct(product);
      // If product is already categorized as Bulk, use it
      if (category === 'Bulk') return true;
      // Otherwise, show products with very large quantities or very high discounts as "bulk deals"
      const hasLargeQuantity = product.variants.some(v => 
        v.quantity && (v.quantity.includes('kg') || v.quantity.includes('liter') || v.quantity.includes('Ltr'))
      );
      return hasLargeQuantity && product.discountPercent > 50;
    });

  if (bulkProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Bulk</h2>
          {bulkProducts.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#16a34a] hover:text-[#15803d] font-semibold text-base md:text-lg transition-colors whitespace-nowrap hover:underline cursor-pointer"
            >
              {showAll ? 'Show Less ↑' : 'View All →'}
            </button>
          )}
        </div>
        <div className="agri-product-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 md:gap-3">
          {(showAll ? bulkProducts : bulkProducts.slice(0, 6)).map((product) => (
            <div key={product.id} className="w-full h-full flex flex-col">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


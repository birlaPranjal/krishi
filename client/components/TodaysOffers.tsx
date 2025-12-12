'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { productData } from '@/data/products';

export default function TodaysOffers() {
  const [showAll, setShowAll] = useState(false);
  
  // Today's Offers - products with high discounts or special offers
  const todaysOffers = Object.values(productData)
    .filter((product) => 
      product.discountPercent > 40 || // High discount
      product.isBestSeller // Best sellers are often on offer
    )
    .sort((a, b) => (b.discountPercent || 0) - (a.discountPercent || 0));

  if (todaysOffers.length === 0) {
    return null;
  }

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Today&apos;s Offers</h2>
          {todaysOffers.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#16a34a] hover:text-[#15803d] font-semibold text-base md:text-lg transition-colors whitespace-nowrap hover:underline cursor-pointer"
            >
              {showAll ? 'Show Less ↑' : 'View All →'}
            </button>
          )}
        </div>
        <div className="agri-product-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 md:gap-3">
          {(showAll ? todaysOffers : todaysOffers.slice(0, 6)).map((product) => (
            <div key={product.id} className="w-full h-full flex flex-col">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


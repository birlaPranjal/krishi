'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { productData } from '@/data/products';
import { categorizeProduct, categorySlugs, type CategoryType } from '@/lib/categories';

interface CategorySectionProps {
  categoryName: CategoryType;
  title?: string;
  limit?: number;
  bgColor?: 'white' | 'gray';
}

export default function CategorySection({ 
  categoryName, 
  title,
  limit = 10,
  bgColor = 'white'
}: CategorySectionProps) {
  const [showAll, setShowAll] = useState(false);
  
  // Filter products by category
  const categoryProducts = Object.values(productData)
    .filter((product) => {
      const productCategory = categorizeProduct(product);
      return productCategory === categoryName;
    });

  const displayTitle = title || categoryName;
  const categorySlug = categorySlugs[categoryName];

  // Don't render if no products found
  if (categoryProducts.length === 0) {
    return null;
  }

  return (
    <section className={`section-container ${bgColor === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="category-section-header">
          <h2>{displayTitle}</h2>
          {categoryProducts.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#16a34a] hover:text-[#15803d] font-semibold text-base md:text-lg transition-colors whitespace-nowrap hover:underline cursor-pointer"
            >
              {showAll ? 'Show Less ↑' : 'View All →'}
            </button>
          )}
        </div>
        <div className="agri-product-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 md:gap-3">
          {(showAll ? categoryProducts : categoryProducts.slice(0, 6)).map((product) => (
            <div key={product.id} className="w-full h-full flex flex-col">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


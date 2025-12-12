'use client';

import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity?: string;
  discount?: number;
  slug?: string;
}

interface ProductGridProps {
  products: Product[];
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    large?: number;
  };
}

export default function ProductGrid({ 
  products, 
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    large: 4,
  }
}: ProductGridProps) {
  return (
    <div 
      className={`grid gap-6 p-6
        grid-cols-${columns.mobile || 1}
        sm:grid-cols-${columns.tablet || 2}
        lg:grid-cols-${columns.desktop || 3}
        xl:grid-cols-${columns.large || 4}
      `}
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}


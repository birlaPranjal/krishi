'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity?: string;
  discount?: number;
  slug?: string;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  quantity,
  discount,
  slug,
}: ProductCardProps) {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Link href={slug ? `/products/${slug}` : `/products/${id}`}>
      <div className="group bg-white border border-neutral-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 cursor-pointer">
        {/* Product Image */}
        <div className="relative aspect-square w-full mb-4 rounded-lg overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {discount && discount > 0 && (
            <div className="absolute top-2 right-2 bg-error-500 text-white px-2 py-1 rounded text-caption font-semibold">
              {discount}% OFF
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Product Name */}
          <h3 className="text-body-sm font-medium text-neutral-900 line-clamp-2 min-h-[2.5rem] group-hover:text-primary-600 transition-colors">
            {name}
          </h3>

          {/* Quantity */}
          {quantity && (
            <p className="text-caption text-neutral-500">{quantity}</p>
          )}

          {/* Price Section */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-h4 font-bold text-primary-500">
              {formatPrice(price)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-body-sm text-neutral-400 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              // Handle add to cart
            }}
            className="w-full mt-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}


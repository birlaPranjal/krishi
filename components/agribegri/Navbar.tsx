'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, Beaker } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header Bar (Blue) */}
      <div className="bg-secondary-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-body-sm">
            <div className="flex items-center gap-4">
              <span>Missed call to order: <a href="tel:7065060162" className="hover:underline">7065060162</a></span>
            </div>
            <div className="flex items-center gap-4">
              <span>Need help? Call us: <a href="tel:7428208822" className="hover:underline">7428208822</a></span>
              <select className="bg-transparent border-none text-white cursor-pointer">
                <option>EN</option>
                <option>HI</option>
              </select>
              <Link href="/partner" className="hover:underline">Be a Partner</Link>
              <Link href="/experts" className="hover:underline">Ask Agro Experts</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (White) */}
      <nav className="bg-white border-b border-neutral-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="text-primary-500 font-bold text-2xl">
                AgriBegri
              </div>
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🌱</span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <form className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 text-body transition-all"
                />
                <button
                  type="submit"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                <Beaker className="h-5 w-5" />
                <span className="hidden md:inline">Technical</span>
              </button>
              
              <Link
                href="/cart"
                className="flex items-center gap-2 text-neutral-700 hover:text-primary-500 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline">Cart</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 text-neutral-700 hover:text-primary-500 transition-colors md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span>More</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


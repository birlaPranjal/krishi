/**
 * Products API Client
 */

import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003/api/v1';

interface ProductFilters {
  page?: number;
  limit?: number;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
}

// Get all products
export const getProducts = async (filters: ProductFilters = {}) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });

  const response = await axios.get(`${API_BASE_URL}/products?${params.toString()}`);
  return response.data;
};

// Get product by ID
export const getProductById = async (productId: string) => {
  const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
  return response.data;
};

// Get product by slug
export const getProductBySlug = async (slug: string) => {
  const response = await axios.get(`${API_BASE_URL}/products/slug/${slug}`);
  return response.data;
};

// Get featured products
export const getFeaturedProducts = async (limit: number = 10) => {
  const response = await axios.get(`${API_BASE_URL}/products/featured?limit=${limit}`);
  return response.data;
};

// Get bestseller products
export const getBestsellerProducts = async (limit: number = 10) => {
  const response = await axios.get(`${API_BASE_URL}/products/bestsellers?limit=${limit}`);
  return response.data;
};

// Search products
export const searchProducts = async (query: string, filters: ProductFilters = {}) => {
  const params = new URLSearchParams({ q: query });
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });

  const response = await axios.get(`${API_BASE_URL}/products/search?${params.toString()}`);
  return response.data;
};


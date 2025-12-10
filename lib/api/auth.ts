/**
 * Authentication API Client
 */

import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003/api/v1';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  phone?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

interface AuthResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName?: string;
    role: string;
    emailVerified: boolean;
  };
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
}

// Register new user
export const register = async (data: RegisterRequest): Promise<ApiResponse<AuthResponse>> => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
  return response.data;
};

// Login user
export const login = async (data: LoginRequest): Promise<ApiResponse<AuthResponse>> => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
  return response.data;
};

// Logout user
export const logout = async (): Promise<void> => {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    await axios.post(`${API_BASE_URL}/auth/logout`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    // Clear tokens regardless of API call success
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};

// Get current user profile
export const getProfile = async (): Promise<ApiResponse<any>> => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  const response = await axios.get(`${API_BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};



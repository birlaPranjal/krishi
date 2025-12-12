'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md';
  children: ReactNode;
  className?: string;
}

export default function Badge({
  variant = 'neutral',
  size = 'md',
  children,
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full font-semibold uppercase tracking-wide';
  
  const variants = {
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-neutral-900',
    error: 'bg-error-500 text-white',
    info: 'bg-secondary-500 text-white',
    neutral: 'bg-neutral-200 text-neutral-700',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-caption',
    md: 'px-3 py-1 text-body-sm',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}


'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-body-sm font-medium text-neutral-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 
            border-2 rounded-lg
            text-body
            transition-all duration-200
            focus:outline-none focus:ring-2
            ${error 
              ? 'border-error-500 focus:border-error-500 focus:ring-error-500/20' 
              : 'border-neutral-200 focus:border-primary-500 focus:ring-primary-500/20'
            }
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-caption text-error-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-caption text-neutral-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;


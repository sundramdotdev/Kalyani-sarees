'use client';

import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'editorial';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

    const variants = {
      primary:
        'bg-[#6B1F2A] text-white hover:bg-[#541720] shadow-sm uppercase tracking-wider',
      secondary:
        'bg-[#B08D57] text-white hover:bg-[#957544] shadow-sm uppercase tracking-wider',
      outline:
        'border border-[#6B1F2A] text-[#6B1F2A] hover:bg-[#6B1F2A] hover:text-white uppercase tracking-wider',
      ghost:
        'text-[#252525] hover:bg-[#EFE5D5] hover:text-[#6B1F2A]',
      editorial:
        'text-[#6B1F2A] underline underline-offset-8 decoration-1 hover:decoration-2 hover:opacity-85 tracking-widest uppercase font-semibold p-0',
    };

    const sizes = {
      sm: 'text-xs h-9 px-4 rounded-sm',
      md: 'text-xs md:text-sm h-11 px-6 rounded-sm',
      lg: 'text-sm md:text-base h-13 px-8 rounded-sm',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== 'editorial' && sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

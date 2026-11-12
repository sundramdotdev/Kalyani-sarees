import React from 'react';
import { ProductBadge } from '../../types/product';
import { cn } from '../../lib/utils';

interface BadgeProps {
  type: ProductBadge;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, className }) => {
  const styles = {
    NEW: 'bg-[#252525] text-white',
    BESTSELLER: 'bg-[#6B1F2A] text-white',
    FESTIVE: 'bg-[#B08D57] text-white',
    LIMITED: 'bg-[#9E3D24] text-white',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-[2px] shadow-xs',
        styles[type],
        className
      )}
    >
      {type}
    </span>
  );
};

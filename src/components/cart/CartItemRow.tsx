'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from '../../types/cart';
import { formatPrice } from '../../lib/utils';
import { useCart } from '../../context/CartContext';

interface CartItemRowProps {
  item: CartItem;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({ item }) => {
  const { updateQuantity, removeItem, closeCart } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-[#DED5C8]/80 items-start">
      {/* Thumbnail */}
      <Link
        href={`/product/${item.productSlug}`}
        onClick={closeCart}
        className="relative w-18 h-24 bg-[#EFE5D5] rounded overflow-hidden shrink-0"
      >
        <Image
          src={item.image.url}
          alt={item.name}
          fill
          className="object-cover"
          sizes="72px"
        />
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between h-24">
        <div>
          <Link
            href={`/product/${item.productSlug}`}
            onClick={closeCart}
            className="text-xs sm:text-sm font-medium text-[#252525] hover:text-[#6B1F2A] line-clamp-1 transition-colors"
          >
            {item.name}
          </Link>
          <div className="flex items-center gap-2 mt-1 text-[11px] text-[#6F6A63]">
            <span>Color: {item.selectedColor}</span>
            <span>•</span>
            <span>Size: {item.selectedSize}</span>
          </div>
        </div>

        {/* Price and Stepper */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center border border-[#DED5C8] rounded bg-white">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1 hover:bg-[#EFE5D5] text-[#252525] transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-xs font-semibold text-[#252525] min-w-[20px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:bg-[#EFE5D5] text-[#252525] transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold text-[#6B1F2A]">
              {formatPrice(item.price * item.quantity)}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="text-[#6F6A63] hover:text-[#9E2A2B] transition-colors p-1"
              aria-label="Remove item from bag"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '../../types/product';
import { Badge } from '../ui/Badge';
import { formatPrice, calculateDiscount } from '../../lib/utils';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  priority = false,
  onQuickView,
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();

  const isFavorited = isInWishlist(product.id);
  const discount = calculateDiscount(product.price, product.compareAtPrice);

  const primaryImage = product.images[0] || {
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    alt: product.name,
  };
  const secondaryImage = product.images[1] || primaryImage;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, {
      color: product.colors[selectedColorIndex]?.name,
      size: product.sizes[0],
      quantity: 1,
    });
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div
      className="group relative flex flex-col bg-white border border-[#DED5C8] rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with 3:4 Aspect Ratio */}
      <div className="relative aspect-3/4 w-full bg-[#EFE5D5] overflow-hidden">
        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1">
          {product.badges.map((badge) => (
            <Badge key={badge} type={badge} />
          ))}
          {discount > 0 && (
            <span className="bg-[#9E3D24] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] uppercase tracking-wider">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorited
              ? 'bg-[#6B1F2A] text-white shadow-md'
              : 'bg-white/80 text-[#252525] hover:bg-white hover:text-[#6B1F2A] shadow-xs'
          }`}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Primary and Hover Secondary Images */}
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt || product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
            className={`object-cover object-top transition-transform duration-700 ease-out ${
              isHovered && secondaryImage ? 'opacity-0 scale-105' : 'opacity-100'
            }`}
          />
          {secondaryImage && (
            <Image
              src={secondaryImage.url}
              alt={secondaryImage.alt || `${product.name} alternate drape view`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={`object-cover object-top transition-all duration-700 ease-out absolute inset-0 ${
                isHovered ? 'opacity-100 scale-105' : 'opacity-0'
              }`}
            />
          )}
        </Link>

        {/* Quick Actions Overlay (Desktop Slide-up) */}
        <div className="hidden lg:flex absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 gap-2">
          {onQuickView && (
            <button
              onClick={handleQuickView}
              className="flex-1 py-2 bg-white/95 hover:bg-white text-[#252525] text-xs font-semibold uppercase tracking-wider rounded-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-[#B08D57]" />
              Quick View
            </button>
          )}
          <button
            onClick={handleQuickAdd}
            className="flex-1 py-2 bg-[#6B1F2A] hover:bg-[#541720] text-white text-xs font-semibold uppercase tracking-wider rounded-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Fabric / Subcategory Tag */}
          <p className="text-[11px] text-[#B08D57] font-semibold tracking-wider uppercase mb-1">
            {product.fabric}
          </p>

          {/* Title */}
          <Link href={`/product/${product.slug}`} className="block group-hover:text-[#6B1F2A] transition-colors">
            <h3 className="text-xs sm:text-sm font-medium text-[#252525] line-clamp-1 font-serif">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Pricing & Swatches */}
        <div className="mt-2.5 pt-2 border-t border-[#DED5C8]/40 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs sm:text-sm font-bold text-[#6B1F2A]">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-[11px] text-[#6F6A63] line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          {/* Color Dots */}
          {product.colors.length > 1 && (
            <div className="flex items-center gap-1">
              {product.colors.slice(0, 3).map((col, idx) => (
                <button
                  key={col.name}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedColorIndex(idx);
                  }}
                  title={col.name}
                  className={`w-2.5 h-2.5 rounded-full border transition-all ${
                    selectedColorIndex === idx ? 'ring-1 ring-[#6B1F2A] scale-110' : 'border-black/20'
                  }`}
                  style={{ backgroundColor: col.hex }}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-[9px] text-[#6F6A63]">+{product.colors.length - 3}</span>
              )}
            </div>
          )}
        </div>

        {/* Mobile Quick Add Button */}
        <div className="mt-2.5 pt-2 lg:hidden">
          <button
            onClick={handleQuickAdd}
            className="w-full py-2 bg-[#F8F3EA] border border-[#DED5C8] hover:bg-[#6B1F2A] hover:text-white text-[#252525] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

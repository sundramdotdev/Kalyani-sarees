'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../../types/product';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { formatPrice, calculateDiscount } from '../../lib/utils';
import { useCart } from '../../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) return null;

  const discount = calculateDiscount(product.price, product.compareAtPrice);
  const activeColor = selectedColor || product.colors[0]?.name || 'Standard';
  const activeSize = selectedSize || product.sizes[0] || 'Free Size';

  const handleAddToCart = () => {
    addItem(product, {
      color: activeColor,
      size: activeSize,
      quantity,
    });
    onClose();
  };

  return (
    <Modal isOpen={!!product} onClose={onClose} maxWidth="xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="relative aspect-3/4 bg-[#EFE5D5] rounded overflow-hidden">
          <Image
            src={product.images[0]?.url || ''}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
              {product.fabric}
            </span>
            <h3 className="font-serif text-xl font-medium text-[#252525] mt-1">{product.name}</h3>

            {/* Price */}
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-xl font-bold text-[#6B1F2A]">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && product.compareAtPrice > product.price && (
                <span className="text-sm text-[#6F6A63] line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-xs font-semibold text-[#9E3D24]">
                  ({discount}% OFF)
                </span>
              )}
            </div>

            <p className="text-xs text-[#6F6A63] mt-3 line-clamp-3 leading-relaxed">
              {product.shortDescription || product.description}
            </p>
          </div>

          {/* Color Selector */}
          {product.colors.length > 0 && (
            <div>
              <span className="text-xs font-medium text-[#252525] block mb-1.5">
                Color: <strong className="font-semibold text-[#6B1F2A]">{activeColor}</strong>
              </span>
              <div className="flex items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      activeColor === c.name
                        ? 'border-[#6B1F2A] scale-110 shadow-sm'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes.length > 0 && (
            <div>
              <span className="text-xs font-medium text-[#252525] block mb-1.5">Size</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`text-xs px-3 py-1.5 border rounded-sm transition-colors ${
                      activeSize === s
                        ? 'border-[#6B1F2A] bg-[#6B1F2A] text-white'
                        : 'border-[#DED5C8] bg-white text-[#252525] hover:border-[#6B1F2A]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CTA & Full Details Link */}
          <div className="pt-4 border-t border-[#DED5C8] space-y-2">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={handleAddToCart}
              className="gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Shopping Bag</span>
            </Button>

            <Link
              href={`/product/${product.slug}`}
              onClick={onClose}
              className="text-xs text-center text-[#6B1F2A] hover:underline block font-semibold pt-1 flex items-center justify-center gap-1"
            >
              <span>View Full Product Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Heart,
  ShoppingBag,
  Zap,
  Truck,
  ShieldCheck,
  RotateCcw,
  Ruler,
  ChevronDown,
} from 'lucide-react';
import { Product } from '../../types/product';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { formatPrice, calculateDiscount } from '../../lib/utils';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Free Size');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('fabric');

  const { addItem, openCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const router = useRouter();

  const isFavorited = isInWishlist(product.id);
  const discount = calculateDiscount(product.price, product.compareAtPrice);

  const handleAddToCart = () => {
    addItem(product, {
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

  const handleBuyNow = () => {
    addItem(product, {
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
    router.push('/cart');
  };

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="space-y-6">
      {/* Badges & Category */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {product.badges.map((b) => (
            <Badge key={b} type={b} />
          ))}
          <span className="text-xs text-[#B08D57] font-semibold tracking-wider uppercase">
            {product.fabric}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#252525] leading-tight">
          {product.name}
        </h1>
        <p className="text-xs text-[#6F6A63]">SKU: {product.sku}</p>
      </div>

      {/* Pricing */}
      <div className="p-3.5 bg-[#EFE5D5]/50 border border-[#DED5C8] rounded-md">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl sm:text-3xl font-bold text-[#6B1F2A]">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="text-base text-[#6F6A63] line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          {discount > 0 && (
            <span className="text-xs font-bold text-[#9E3D24] uppercase tracking-wider bg-[#9E3D24]/10 px-2 py-0.5 rounded">
              {discount}% OFF
            </span>
          )}
        </div>
        <p className="text-[11px] text-[#6F6A63] mt-1">
          Inclusive of all taxes. Free express shipping on orders over ₹2,999.
        </p>
      </div>

      {/* Color Selection */}
      {product.colors.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#252525]">
              Color Variant: <strong className="font-semibold text-[#6B1F2A]">{selectedColor}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                title={c.name}
                className={`w-7 h-7 rounded-full border-2 transition-transform ${
                  selectedColor === c.name
                    ? 'border-[#6B1F2A] ring-2 ring-[#6B1F2A]/30 scale-110 shadow-sm'
                    : 'border-white hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[#252525]">Select Size / Fit</span>
          <button
            onClick={() => setIsSizeGuideOpen(true)}
            className="text-xs font-semibold text-[#6B1F2A] hover:underline flex items-center gap-1"
          >
            <Ruler className="w-3.5 h-3.5 text-[#B08D57]" />
            Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`text-xs px-4 py-2 border rounded-sm font-medium transition-colors ${
                selectedSize === s
                  ? 'border-[#6B1F2A] bg-[#6B1F2A] text-white shadow-xs'
                  : 'border-[#DED5C8] bg-white text-[#252525] hover:border-[#6B1F2A]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Buy Actions */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-[#DED5C8] rounded-sm bg-white h-11 px-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 text-sm font-semibold hover:text-[#6B1F2A]"
            >
              -
            </button>
            <span className="px-3 text-xs font-bold text-[#252525] min-w-[20px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 text-sm font-semibold hover:text-[#6B1F2A]"
            >
              +
            </button>
          </div>

          <button
            onClick={() => toggleWishlist(product)}
            className={`h-11 px-4 border rounded-sm flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
              isFavorited
                ? 'border-[#6B1F2A] bg-[#6B1F2A] text-white'
                : 'border-[#DED5C8] bg-white text-[#252525] hover:border-[#6B1F2A]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            <span>{isFavorited ? 'Saved' : 'Wishlist'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <Button
            variant="outline"
            size="lg"
            onClick={handleAddToCart}
            className="gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Bag</span>
          </Button>

          <Button
            variant="primary"
            size="lg"
            onClick={handleBuyNow}
            className="gap-2"
          >
            <Zap className="w-4 h-4" />
            <span>Buy It Now</span>
          </Button>
        </div>
      </div>

      {/* Trust Highlights */}
      <div className="grid grid-cols-3 gap-2 py-4 border-y border-[#DED5C8] text-center">
        <div className="flex flex-col items-center text-[#252525]">
          <ShieldCheck className="w-5 h-5 text-[#B08D57] mb-1" />
          <span className="text-[11px] font-semibold">100% Authentic</span>
          <span className="text-[10px] text-[#6F6A63]">Direct handloom</span>
        </div>
        <div className="flex flex-col items-center text-[#252525]">
          <Truck className="w-5 h-5 text-[#B08D57] mb-1" />
          <span className="text-[11px] font-semibold">Pan-India Courier</span>
          <span className="text-[10px] text-[#6F6A63]">Dispatched in 48h</span>
        </div>
        <div className="flex flex-col items-center text-[#252525]">
          <RotateCcw className="w-5 h-5 text-[#B08D57] mb-1" />
          <span className="text-[11px] font-semibold">7-Day Exchange</span>
          <span className="text-[10px] text-[#6F6A63]">Hassle-free policy</span>
        </div>
      </div>

      {/* Accordions for Product Story, Fabric Specs, Care, and Shipping */}
      <div className="divide-y divide-[#DED5C8] border-b border-[#DED5C8]">
        {/* Description Accordion */}
        <div className="py-3">
          <button
            onClick={() => toggleAccordion('desc')}
            className="w-full flex items-center justify-between text-left text-xs uppercase font-semibold text-[#252525]"
          >
            <span>Product Description</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${openAccordion === 'desc' ? 'rotate-180' : ''}`}
            />
          </button>
          {openAccordion === 'desc' && (
            <p className="mt-2.5 text-xs text-[#6F6A63] leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Fabric & Specs Accordion */}
        <div className="py-3">
          <button
            onClick={() => toggleAccordion('fabric')}
            className="w-full flex items-center justify-between text-left text-xs uppercase font-semibold text-[#252525]"
          >
            <span>Fabric & Weave Specifications</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${openAccordion === 'fabric' ? 'rotate-180' : ''}`}
            />
          </button>
          {openAccordion === 'fabric' && (
            <div className="mt-2.5 text-xs text-[#6F6A63] space-y-1.5">
              <div className="flex justify-between py-1 border-b border-[#DED5C8]/40">
                <span className="font-medium text-[#252525]">Fabric Material</span>
                <span>{product.fabric}</span>
              </div>
              {product.weaveType && (
                <div className="flex justify-between py-1 border-b border-[#DED5C8]/40">
                  <span className="font-medium text-[#252525]">Weaving Technique</span>
                  <span>{product.weaveType}</span>
                </div>
              )}
              {product.sareeLengthMeters && (
                <div className="flex justify-between py-1 border-b border-[#DED5C8]/40">
                  <span className="font-medium text-[#252525]">Saree Length</span>
                  <span>{product.sareeLengthMeters} Meters</span>
                </div>
              )}
              {product.includesBlousePiece && (
                <div className="flex justify-between py-1 border-b border-[#DED5C8]/40">
                  <span className="font-medium text-[#252525]">Blouse Piece</span>
                  <span>Included ({product.blouseLengthMeters || 0.8}m Unstitched)</span>
                </div>
              )}
              <div className="flex justify-between py-1">
                <span className="font-medium text-[#252525]">Suitable Occasions</span>
                <span>{product.occasion.join(', ')}</span>
              </div>
            </div>
          )}
        </div>

        {/* Care Instructions */}
        <div className="py-3">
          <button
            onClick={() => toggleAccordion('care')}
            className="w-full flex items-center justify-between text-left text-xs uppercase font-semibold text-[#252525]"
          >
            <span>Wash & Care Guidance</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${openAccordion === 'care' ? 'rotate-180' : ''}`}
            />
          </button>
          {openAccordion === 'care' && (
            <ul className="mt-2.5 list-disc list-inside text-xs text-[#6F6A63] space-y-1">
              {product.careInstructions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Delivery & Returns */}
        <div className="py-3">
          <button
            onClick={() => toggleAccordion('shipping')}
            className="w-full flex items-center justify-between text-left text-xs uppercase font-semibold text-[#252525]"
          >
            <span>Delivery & Returns Policy</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${openAccordion === 'shipping' ? 'rotate-180' : ''}`}
            />
          </button>
          {openAccordion === 'shipping' && (
            <div className="mt-2.5 text-xs text-[#6F6A63] space-y-1.5 leading-relaxed">
              <p>
                • <strong>Dispatch:</strong> Orders are dispatched within 24–48 hours from our Dhanpatganj central distribution center.
              </p>
              <p>
                • <strong>Delivery Time:</strong> 3–6 business days across India.
              </p>
              <p>
                • <strong>Exchanges:</strong> We offer a 7-day hassle-free exchange on unused garments in original condition.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Size Guide Modal */}
      <Modal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        title="Ethnic Wear Sizing Chart"
        maxWidth="lg"
      >
        <div className="space-y-4 text-xs text-[#252525]">
          <p className="text-[#6F6A63]">
            All measurements are provided in inches. For sarees, the standard length is 5.5 meters accompanied by an unstitched 0.8 meter blouse fabric.
          </p>

          <table className="w-full border-collapse border border-[#DED5C8] text-center text-xs">
            <thead>
              <tr className="bg-[#EFE5D5]">
                <th className="border border-[#DED5C8] p-2 font-semibold">Size</th>
                <th className="border border-[#DED5C8] p-2 font-semibold">Bust</th>
                <th className="border border-[#DED5C8] p-2 font-semibold">Waist</th>
                <th className="border border-[#DED5C8] p-2 font-semibold">Hip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#DED5C8] p-2 font-semibold">S (36)</td>
                <td className="border border-[#DED5C8] p-2">36&quot;</td>
                <td className="border border-[#DED5C8] p-2">30&quot;</td>
                <td className="border border-[#DED5C8] p-2">38&quot;</td>
              </tr>
              <tr className="bg-white/40">
                <td className="border border-[#DED5C8] p-2 font-semibold">M (38)</td>
                <td className="border border-[#DED5C8] p-2">38&quot;</td>
                <td className="border border-[#DED5C8] p-2">32&quot;</td>
                <td className="border border-[#DED5C8] p-2">40&quot;</td>
              </tr>
              <tr>
                <td className="border border-[#DED5C8] p-2 font-semibold">L (40)</td>
                <td className="border border-[#DED5C8] p-2">40&quot;</td>
                <td className="border border-[#DED5C8] p-2">34&quot;</td>
                <td className="border border-[#DED5C8] p-2">42&quot;</td>
              </tr>
              <tr className="bg-white/40">
                <td className="border border-[#DED5C8] p-2 font-semibold">XL (42)</td>
                <td className="border border-[#DED5C8] p-2">42&quot;</td>
                <td className="border border-[#DED5C8] p-2">36&quot;</td>
                <td className="border border-[#DED5C8] p-2">44&quot;</td>
              </tr>
              <tr>
                <td className="border border-[#DED5C8] p-2 font-semibold">XXL (44)</td>
                <td className="border border-[#DED5C8] p-2">44&quot;</td>
                <td className="border border-[#DED5C8] p-2">38&quot;</td>
                <td className="border border-[#DED5C8] p-2">46&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
};

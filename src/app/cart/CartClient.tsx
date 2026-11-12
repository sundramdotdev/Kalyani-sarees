'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, ArrowLeft, Sparkles, Tag, ShieldCheck, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { CartItemRow } from '../../components/cart/CartItemRow';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { formatPrice } from '../../lib/utils';

export const CartClient: React.FC = () => {
  const {
    items,
    itemCount,
    subtotal,
    freeShippingThreshold,
    qualifiesForFreeShipping,
    clearCart,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);
  const discountAmount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'FESTIVE10') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon. Try code "FESTIVE10" for 10% off demo order.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Shopping Bag' }]} />

      <div className="py-6 border-b border-[#DED5C8] mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
            Order Review
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#252525] mt-1">
            Shopping Bag ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </h1>
        </div>

        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs text-[#6F6A63] hover:text-[#9E2A2B] underline"
          >
            Clear Entire Bag
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="py-20 text-center bg-white border border-[#DED5C8] rounded-sm p-8 space-y-4 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#EFE5D5] flex items-center justify-center mx-auto text-[#B08D57]">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-xl font-medium text-[#252525]">Your shopping bag is empty</h3>
          <p className="text-xs text-[#6F6A63] max-w-sm mx-auto leading-relaxed">
            You haven&apos;t added any items to your bag yet. Explore our handcrafted sarees and festive attire.
          </p>
          <div className="pt-2">
            <Link href="/sarees">
              <Button variant="primary" size="md">
                Shop Sarees
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 bg-white border border-[#DED5C8] rounded-sm p-6 space-y-4">
            {/* Free Shipping Notification */}
            <div className="p-3 bg-[#EFE5D5]/50 border border-[#DED5C8] rounded-sm flex items-center gap-2 text-xs text-[#252525]">
              <Sparkles className="w-4 h-4 text-[#B08D57] shrink-0" />
              {qualifiesForFreeShipping ? (
                <span className="font-medium text-[#2D6A4F]">
                  You have unlocked complimentary express shipping on this order!
                </span>
              ) : (
                <span>
                  Add <strong className="text-[#6B1F2A]">{formatPrice(amountNeeded)}</strong> more to get Free Express Shipping!
                </span>
              )}
            </div>

            {/* List */}
            <div className="divide-y divide-[#DED5C8]">
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>

            {/* Back to Shopping */}
            <div className="pt-4 border-t border-[#DED5C8] flex justify-between items-center">
              <Link
                href="/shop"
                className="text-xs font-semibold text-[#6B1F2A] hover:underline flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 bg-white border border-[#DED5C8] rounded-sm p-6 space-y-6 lg:sticky lg:top-28">
            <h3 className="font-serif text-lg font-semibold text-[#252525] border-b border-[#DED5C8] pb-3">
              Order Summary
            </h3>

            {/* Pricing Details */}
            <div className="space-y-2.5 text-xs text-[#252525]">
              <div className="flex justify-between">
                <span className="text-[#6F6A63]">Bag Subtotal</span>
                <span className="font-semibold text-sm">{formatPrice(subtotal)}</span>
              </div>

              {couponApplied && (
                <div className="flex justify-between text-[#2D6A4F] font-semibold">
                  <span>Festive Discount (10%)</span>
                  <span>- {formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-[#6F6A63]">Estimated Shipping</span>
                <span>
                  {qualifiesForFreeShipping ? (
                    <span className="text-[#2D6A4F] font-semibold">FREE</span>
                  ) : (
                    <span>₹150</span>
                  )}
                </span>
              </div>

              <div className="flex justify-between pt-3 border-t border-[#DED5C8] text-sm font-bold text-[#6B1F2A]">
                <span>Total Amount</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
              <p className="text-[11px] text-[#6F6A63]">Inclusive of all applicable GST taxes.</p>
            </div>

            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="pt-2">
              <label className="text-xs font-semibold text-[#252525] block mb-1.5 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>Promotional Coupon</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter 'FESTIVE10'"
                  className="flex-1 px-3 py-2 border border-[#DED5C8] rounded-sm text-xs text-[#252525] uppercase focus:outline-none focus:ring-1 focus:ring-[#6B1F2A]"
                />
                <Button type="submit" variant="outline" size="sm">
                  Apply
                </Button>
              </div>
              {couponError && <p className="text-[11px] text-[#9E2A2B] mt-1">{couponError}</p>}
              {couponApplied && (
                <p className="text-[11px] text-[#2D6A4F] mt-1">
                  ✓ Code FESTIVE10 applied successfully!
                </p>
              )}
            </form>

            {/* Checkout Action Button */}
            <div className="pt-2 space-y-3">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => setIsCheckoutModalOpen(true)}
                className="gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6F6A63]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Safe & Secure Indian Payment Gateways</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Phase 1 Informational Checkout Modal */}
      <Modal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        title="Ready for Checkout — Kalyani Sarees"
        maxWidth="md"
      >
        <div className="space-y-4 text-xs text-[#252525] leading-relaxed">
          <div className="p-3 bg-[#EFE5D5] border border-[#DED5C8] rounded-sm flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#6B1F2A]">Showroom & Online Orders</strong>
              <span>
                To place an order or arrange personalized bridal trousseau delivery from our Dhanpatganj showroom, please contact our team directly.
              </span>
            </div>
          </div>

          <div className="space-y-1.5">
            <p className="font-semibold text-sm text-[#252525]">Your Order Details:</p>
            <p className="text-[#6F6A63]">Items in bag: {itemCount}</p>
            <p className="text-[#6F6A63]">Order Total: <strong className="text-[#6B1F2A]">{formatPrice(finalTotal)}</strong></p>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link href="/contact" onClick={() => setIsCheckoutModalOpen(false)}>
              <Button variant="primary" size="md" fullWidth>
                Contact Dhanpatganj Showroom
              </Button>
            </Link>
            <Button
              variant="outline"
              size="md"
              fullWidth
              onClick={() => setIsCheckoutModalOpen(false)}
            >
              Continue Browsing
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

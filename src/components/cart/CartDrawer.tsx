'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { Drawer } from '../ui/Drawer';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';
import { CartItemRow } from './CartItemRow';
import { formatPrice } from '../../lib/utils';

export const CartDrawer: React.FC = () => {
  const {
    isOpen,
    closeCart,
    items,
    itemCount,
    subtotal,
    freeShippingThreshold,
    qualifiesForFreeShipping,
  } = useCart();

  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeCart}
      position="right"
      title={`Shopping Bag (${itemCount})`}
      footer={
        items.length > 0 ? (
          <div className="space-y-3">
            <div className="space-y-1.5 text-xs text-[#252525]">
              <div className="flex justify-between">
                <span className="text-[#6F6A63]">Subtotal</span>
                <span className="font-semibold text-sm text-[#252525]">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6F6A63]">Shipping</span>
                <span>
                  {qualifiesForFreeShipping ? (
                    <span className="text-[#2D6A4F] font-semibold">FREE</span>
                  ) : (
                    <span>Calculated at checkout</span>
                  )}
                </span>
              </div>
              <p className="text-[11px] text-[#6F6A63]">Taxes included where applicable.</p>
            </div>

            <div className="pt-2 space-y-2">
              <Link href="/cart" onClick={closeCart} className="block w-full">
                <Button variant="outline" size="md" fullWidth>
                  View Full Bag
                </Button>
              </Link>
              <Link href="/cart" onClick={closeCart} className="block w-full">
                <Button variant="primary" size="lg" fullWidth className="gap-2">
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        ) : null
      }
    >
      {/* Free Shipping Meter */}
      {items.length > 0 && (
        <div className="bg-[#EFE5D5]/60 p-3 rounded-md mb-4 border border-[#DED5C8]">
          <div className="flex items-center gap-1.5 text-xs text-[#252525] font-medium">
            <Sparkles className="w-4 h-4 text-[#B08D57]" />
            {qualifiesForFreeShipping ? (
              <span className="text-[#2D6A4F] font-semibold">
                You&apos;ve unlocked Complimentary Express Shipping!
              </span>
            ) : (
              <span>
                Add <strong className="text-[#6B1F2A]">{formatPrice(amountNeeded)}</strong> more to get Free Express Shipping!
              </span>
            )}
          </div>
          <div className="w-full bg-[#DED5C8] h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-[#6B1F2A] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Cart Content */}
      {items.length === 0 ? (
        <div className="py-16 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#EFE5D5] flex items-center justify-center mx-auto text-[#B08D57]">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#252525]">Your bag is empty</h4>
            <p className="text-xs text-[#6F6A63] mt-1 max-w-xs mx-auto">
              Discover our exquisite Banarasi drapes, festive kurtis, and children&apos;s ethnic wear.
            </p>
          </div>
          <div className="pt-4">
            <Link href="/sarees" onClick={closeCart}>
              <Button variant="primary" size="md">
                Shop Sarees
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="divide-y divide-[#DED5C8]">
          {items.map((item) => (
            <CartItemRow key={item.id} item={item} />
          ))}
        </div>
      )}
    </Drawer>
  );
};

'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { ProductGrid } from '../../components/product/ProductGrid';
import { Button } from '../../components/ui/Button';

export const WishlistClient: React.FC = () => {
  const { wishlist, wishlistCount } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Saved Wishlist' }]} />

      <div className="py-6 border-b border-[#DED5C8] mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-[#B08D57]" />
            Personal Trousseau Curation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#252525] mt-1">
            Saved Wishlist ({wishlistCount})
          </h1>
          <p className="text-xs sm:text-sm text-[#6F6A63] mt-1">
            Garments saved for your upcoming celebrations and weddings.
          </p>
        </div>

        {wishlistCount > 0 && (
          <Link href="/sarees">
            <Button variant="outline" size="sm" className="gap-1.5">
              <span>Continue Shopping</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        )}
      </div>

      {wishlistCount === 0 ? (
        <div className="py-20 text-center bg-white border border-[#DED5C8] rounded-sm p-8 space-y-4 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#EFE5D5] flex items-center justify-center mx-auto text-[#6B1F2A]">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-xl font-medium text-[#252525]">Your wishlist is empty</h3>
          <p className="text-xs text-[#6F6A63] max-w-sm mx-auto leading-relaxed">
            Click the heart icon on any saree or ethnic garment to save it here while curating your festive wardrobe.
          </p>
          <div className="pt-2">
            <Link href="/sarees">
              <Button variant="primary" size="md">
                Browse Saree Edits
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <ProductGrid products={wishlist} columns={4} />
      )}
    </div>
  );
};

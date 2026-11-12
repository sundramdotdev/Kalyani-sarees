'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MapPin, Phone, Heart, ShoppingBag } from 'lucide-react';
import { Drawer } from '../ui/Drawer';
import { MAIN_NAVIGATION } from '../../constants/navigation';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { wishlistCount } = useWishlist();
  const { itemCount, openCart } = useCart();

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  const handleCartClick = () => {
    onClose();
    openCart();
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="left" title="Kalyani Sarees">
      <div className="flex flex-col h-full justify-between">
        {/* Navigation Links */}
        <nav className="space-y-1">
          {MAIN_NAVIGATION.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedSection === item.label;

            return (
              <div key={item.label} className="border-b border-[#DED5C8]/60 pb-1">
                {hasChildren ? (
                  <div>
                    <button
                      onClick={() => toggleSection(item.label)}
                      className="w-full py-3 flex items-center justify-between text-left text-sm font-medium text-[#252525] hover:text-[#6B1F2A]"
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        {item.isBadge && (
                          <span className="text-[10px] bg-[#6B1F2A] text-white px-1.5 py-0.5 rounded font-semibold uppercase">
                            {item.isBadge}
                          </span>
                        )}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#6F6A63] transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#6B1F2A]' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-4 pb-2 space-y-2 bg-[#EFE5D5]/40 rounded-md py-2 mb-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={onClose}
                            className="block text-xs text-[#6F6A63] hover:text-[#6B1F2A] py-1"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="py-3 flex items-center justify-between text-sm font-medium text-[#252525] hover:text-[#6B1F2A]"
                  >
                    <span>{item.label}</span>
                    {item.isBadge && (
                      <span className="text-[10px] bg-[#6B1F2A] text-white px-1.5 py-0.5 rounded font-semibold uppercase">
                        {item.isBadge}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Quick Commerce Utility Links */}
          <div className="pt-4 space-y-2">
            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex items-center justify-between py-2 text-sm text-[#252525] hover:text-[#6B1F2A]"
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#B08D57]" />
                Saved Wishlist
              </span>
              {wishlistCount > 0 && (
                <span className="text-xs bg-[#6B1F2A] text-white px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={handleCartClick}
              className="w-full flex items-center justify-between py-2 text-sm text-[#252525] hover:text-[#6B1F2A]"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#B08D57]" />
                Shopping Bag
              </span>
              {itemCount > 0 && (
                <span className="text-xs bg-[#6B1F2A] text-white px-2 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Local Showroom Section in Drawer */}
        <div className="mt-8 pt-6 border-t border-[#DED5C8] space-y-3">
          <div className="bg-[#EFE5D5] p-3.5 rounded-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#6B1F2A] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>Dhanpatganj Showroom</span>
            </div>
            <p className="text-xs text-[#6F6A63] mt-1 leading-relaxed">
              Visit our retail store in Dhanpatganj, Sultanpur for personal bridal draping & celebrations.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Link
                href="/contact"
                onClick={onClose}
                className="text-xs bg-[#6B1F2A] text-white px-3 py-1.5 rounded font-medium hover:bg-[#541720]"
              >
                Store Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

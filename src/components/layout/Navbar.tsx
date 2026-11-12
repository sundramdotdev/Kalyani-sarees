'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../constants/navigation';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { itemCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F3EA]/95 backdrop-blur-md shadow-xs border-b border-[#DED5C8]'
            : 'bg-[#F8F3EA] border-b border-[#DED5C8]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-[#252525] hover:text-[#6B1F2A] transition-colors -ml-2"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <Link href="/" className="inline-block group">
                <span className="block font-serif text-xl sm:text-2xl md:text-2xl font-bold tracking-wider text-[#6B1F2A] group-hover:opacity-90 transition-opacity">
                  KALYANI SAREES
                </span>
                <span className="block text-[9px] sm:text-[10px] tracking-[0.25em] text-[#B08D57] font-medium uppercase -mt-0.5">
                  DHANPATGANJ
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {MAIN_NAVIGATION.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                return (
                  <div
                    key={item.label}
                    className="relative py-6"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="text-xs uppercase tracking-widest font-semibold text-[#252525] hover:text-[#6B1F2A] transition-colors flex items-center gap-1"
                    >
                      <span>{item.label}</span>
                      {hasChildren && <ChevronDown className="w-3 h-3 text-[#6F6A63]" />}
                      {item.isBadge && (
                        <span className="text-[9px] bg-[#6B1F2A] text-white px-1.5 py-0.2 rounded font-semibold ml-1">
                          {item.isBadge}
                        </span>
                      )}
                    </Link>

                    {/* Desktop Dropdown Mega-Panel */}
                    {hasChildren && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 w-72 bg-[#F8F3EA] border border-[#DED5C8] rounded-md shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 hover:bg-[#EFE5D5] transition-colors group"
                          >
                            <span className="block text-xs font-semibold text-[#252525] group-hover:text-[#6B1F2A]">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="block text-[11px] text-[#6F6A63] mt-0.5">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#252525] hover:text-[#6B1F2A] transition-colors"
                aria-label="Search garments"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="p-2 text-[#252525] hover:text-[#6B1F2A] transition-colors relative"
                aria-label={`Wishlist with ${wishlistCount} items`}
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#6B1F2A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openCart}
                className="p-2 text-[#252525] hover:text-[#6B1F2A] transition-colors relative"
                aria-label={`Shopping bag with ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#6B1F2A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-in Mobile Drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Global Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

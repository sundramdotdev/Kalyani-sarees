'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X, ArrowRight } from 'lucide-react';
import { catalogService } from '../../lib/catalog-service';
import { Product } from '../../types/product';
import { formatPrice } from '../../lib/utils';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setIsSearching(true);
      const res = await catalogService.searchProducts(query);
      setResults(res);
      setIsSearching(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 min-h-screen px-4 pt-16 pb-20 flex justify-center">
        <div className="w-full max-w-2xl bg-[#F8F3EA] border border-[#DED5C8] rounded-lg shadow-2xl p-6 h-fit">
          <div className="flex items-center justify-between pb-4 border-b border-[#DED5C8]">
            <h3 className="font-serif text-lg font-semibold text-[#6B1F2A]">
              Search Kalyani Sarees
            </h3>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6F6A63] hover:text-[#252525] hover:bg-[#EFE5D5] rounded-full transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B08D57]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Banarasi, Katan silk, Kurtis, Kids wear..."
                autoFocus
                className="w-full pl-12 pr-10 py-3.5 bg-white border border-[#DED5C8] rounded-md text-sm text-[#252525] placeholder-[#6F6A63] focus:outline-none focus:ring-2 focus:ring-[#6B1F2A]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6F6A63] hover:text-[#252525]"
                >
                  Clear
                </button>
              )}
            </div>
          </form>

          {/* Quick Suggestions when empty */}
          {!query && (
            <div className="mt-6">
              <span className="text-xs uppercase tracking-wider text-[#6F6A63] font-semibold">
                Popular Searches
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {['Banarasi Silk', 'Chanderi Saree', 'Embroidered Kurti', 'Boys Kurta', 'Bridal Saree'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs px-3 py-1.5 bg-[#EFE5D5] hover:bg-[#DED5C8] text-[#252525] rounded-full transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Search Results Preview */}
          {query && (
            <div className="mt-6">
              <div className="flex items-center justify-between pb-2 border-b border-[#DED5C8]">
                <span className="text-xs text-[#6F6A63]">
                  {isSearching ? 'Searching...' : `Found ${results.length} item(s)`}
                </span>
                {results.length > 0 && (
                  <button
                    onClick={handleSubmit}
                    className="text-xs font-semibold text-[#6B1F2A] hover:underline flex items-center gap-1"
                  >
                    View All Results <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="mt-3 max-h-96 overflow-y-auto divide-y divide-[#DED5C8]">
                {results.length === 0 && !isSearching && (
                  <div className="py-8 text-center text-sm text-[#6F6A63]">
                    No garments found matching &quot;{query}&quot;. Try searching for &quot;Silk&quot;, &quot;Saree&quot;, or &quot;Kurta&quot;.
                  </div>
                )}

                {results.slice(0, 5).map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    onClick={onClose}
                    className="py-3 flex items-center gap-4 hover:bg-[#EFE5D5]/50 px-2 rounded-md transition-colors"
                  >
                    <div className="relative w-12 h-16 bg-[#EFE5D5] rounded overflow-hidden shrink-0">
                      <Image
                        src={product.images[0]?.url || ''}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#B08D57] uppercase tracking-wider font-medium">
                        {product.fabric}
                      </p>
                      <h4 className="text-sm font-medium text-[#252525] truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#6B1F2A] mt-0.5">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

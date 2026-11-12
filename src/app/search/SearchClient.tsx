'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
import { Product } from '../../types/product';
import { catalogService } from '../../lib/catalog-service';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { ProductGrid } from '../../components/product/ProductGrid';

export const SearchClient: React.FC = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      const res = await catalogService.searchProducts(query);
      setResults(res);
      setLoading(false);
    };

    fetchResults();
  }, [query]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Search Results' }]} />

      {/* Search Header Form */}
      <div className="py-6 border-b border-[#DED5C8] mb-10 max-w-2xl">
        <h1 className="font-serif text-3xl text-[#252525]">Search Our Collections</h1>
        <p className="text-xs sm:text-sm text-[#6F6A63] mt-1 mb-4">
          Looking for a specific saree fabric, embroidery, or festive outfit?
        </p>

        <form onSubmit={handleSearchSubmit} className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B08D57]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by weave, fabric, color, or category..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-[#DED5C8] rounded-md text-xs sm:text-sm text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#6B1F2A]"
          />
        </form>
      </div>

      {/* Results Header */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs text-[#6F6A63]">
          {query.trim()
            ? `Found ${results.length} result(s) for "${query}"`
            : 'Type above to explore our collections'}
        </span>
      </div>

      {/* Grid or Empty */}
      {loading ? (
        <div className="py-16 text-center text-xs text-[#6F6A63]">Searching catalog...</div>
      ) : (
        <ProductGrid
          products={results}
          columns={4}
          emptyMessage={
            query.trim()
              ? `No garments matched your search for "${query}". Try searching for "Banarasi", "Katan", "Silk", or "Kurti".`
              : 'Enter a keyword above to discover sarees and outfits.'
          }
        />
      )}
    </div>
  );
};

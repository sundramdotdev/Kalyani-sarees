'use client';

import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product } from '../../types/product';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { ProductGrid } from '../../components/product/ProductGrid';
import { ProductFilters, FilterState } from '../../components/product/ProductFilters';

interface ShopClientProps {
  initialProducts: Product[];
  initialCategory?: string;
  categoryTitle?: string;
  categoryDescription?: string;
}

const CATEGORY_TABS = [
  { label: 'All Garments', value: 'all' },
  { label: 'Sarees', value: 'sarees' },
  { label: "Ladies' Wear", value: 'ladies-wear' },
  { label: "Kids' Wear", value: 'kids-wear' },
  { label: 'Indian Attire', value: 'indian-attire' },
];

export const ShopClient: React.FC<ShopClientProps> = ({
  initialProducts,
  initialCategory = 'all',
  categoryTitle = 'Complete Festive Catalog',
  categoryDescription = 'Discover authentic handloom sarees, designer ethnic suits, and children’s festive wear.',
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');
  const [filters, setFilters] = useState<FilterState>({});
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filtered & Sorted Product computation
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Filter by Category Tab
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Fabric
    if (filters.fabric) {
      result = result.filter((p) => p.fabric.toLowerCase().includes(filters.fabric!.toLowerCase()));
    }

    // Filter by Occasion
    if (filters.occasion) {
      result = result.filter((p) =>
        p.occasion.some((o) => o.toLowerCase() === filters.occasion!.toLowerCase())
      );
    }

    // Filter by Price Range
    if (filters.priceRange) {
      if (filters.priceRange === 'under-5000') {
        result = result.filter((p) => p.price < 5000);
      } else if (filters.priceRange === '5000-10000') {
        result = result.filter((p) => p.price >= 5000 && p.price <= 10000);
      } else if (filters.priceRange === '10000-15000') {
        result = result.filter((p) => p.price > 10000 && p.price <= 15000);
      } else if (filters.priceRange === 'above-15000') {
        result = result.filter((p) => p.price > 15000);
      }
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [initialProducts, selectedCategory, filters, sortBy]);

  const breadcrumbs = [
    { label: 'Shop', href: '/shop' },
    ...(selectedCategory !== 'all'
      ? [{ label: CATEGORY_TABS.find((t) => t.value === selectedCategory)?.label || selectedCategory }]
      : []),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <Breadcrumb items={breadcrumbs} />

      {/* Header Banner */}
      <div className="py-6 border-b border-[#DED5C8] mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#252525]">{categoryTitle}</h1>
        <p className="text-xs sm:text-sm text-[#6F6A63] mt-2 max-w-2xl">{categoryDescription}</p>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-2 scrollbar-none">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedCategory(tab.value)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all whitespace-nowrap ${
                selectedCategory === tab.value
                  ? 'bg-[#6B1F2A] text-white shadow-xs'
                  : 'bg-white border border-[#DED5C8] text-[#252525] hover:border-[#6B1F2A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Action Control Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-[#DED5C8]/60 mb-8">
        <span className="text-xs text-[#6F6A63]">
          Showing <strong className="text-[#252525] font-semibold">{filteredProducts.length}</strong> items
        </span>

        <div className="flex items-center gap-3">
          {/* Mobile Filter Trigger */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-white border border-[#DED5C8] rounded-sm hover:border-[#6B1F2A]"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B08D57]" />
            <span>Filters</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#B08D57] hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#DED5C8] rounded-sm px-3 py-2 text-xs text-[#252525] focus:outline-none focus:ring-1 focus:ring-[#6B1F2A]"
            >
              <option value="featured">Featured Picks</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Catalog Viewport */}
      <div className="flex gap-8 items-start">
        {/* Desktop Sticky Filters Sidebar */}
        <ProductFilters
          filters={filters}
          onChange={setFilters}
          isOpenMobile={isMobileFilterOpen}
          onCloseMobile={() => setIsMobileFilterOpen(false)}
          totalCount={filteredProducts.length}
        />

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          <ProductGrid
            products={filteredProducts}
            columns={3}
            emptyMessage="No garments match your active filters. Try resetting the filters or switching categories."
          />
        </div>
      </div>
    </div>
  );
};

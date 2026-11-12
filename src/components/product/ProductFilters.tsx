'use client';

import React from 'react';
import { Filter, X, RotateCcw } from 'lucide-react';
import { Drawer } from '../ui/Drawer';
import { Button } from '../ui/Button';

export interface FilterState {
  category?: string;
  fabric?: string;
  occasion?: string;
  priceRange?: string; // 'under-5000' | '5000-10000' | '10000-15000' | 'above-15000'
}

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  totalCount: number;
}

const FABRICS = [
  'Banarasi Katan Silk',
  'Pure Kanjivaram Silk',
  'Chanderi Silk',
  'Georgette',
  'Organza',
  'Cotton Handloom',
  'Brocade',
];

const OCCASIONS = ['Wedding', 'Festive', 'Celebration', 'Puja', 'Daily Wear'];

const PRICE_RANGES = [
  { label: 'Under ₹5,000', value: 'under-5000' },
  { label: '₹5,000 – ₹10,000', value: '5000-10000' },
  { label: '₹10,000 – ₹15,000', value: '10000-15000' },
  { label: 'Above ₹15,000', value: 'above-15000' },
];

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onChange,
  isOpenMobile,
  onCloseMobile,
  totalCount,
}) => {
  const handleFabricToggle = (fabric: string) => {
    onChange({
      ...filters,
      fabric: filters.fabric === fabric ? undefined : fabric,
    });
  };

  const handleOccasionToggle = (occ: string) => {
    onChange({
      ...filters,
      occasion: filters.occasion === occ ? undefined : occ,
    });
  };

  const handlePriceToggle = (range: string) => {
    onChange({
      ...filters,
      priceRange: filters.priceRange === range ? undefined : range,
    });
  };

  const handleClearAll = () => {
    onChange({});
  };

  const hasActiveFilters = Boolean(filters.fabric || filters.occasion || filters.priceRange);

  const filterContent = (
    <div className="space-y-6">
      {/* Active filters clear row */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between pb-3 border-b border-[#DED5C8]">
          <span className="text-xs font-semibold text-[#6B1F2A] uppercase tracking-wider">
            Active Filters
          </span>
          <button
            onClick={handleClearAll}
            className="text-xs text-[#6F6A63] hover:text-[#9E2A2B] flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Reset All
          </button>
        </div>
      )}

      {/* Fabric Section */}
      <div>
        <h4 className="text-xs font-semibold text-[#252525] uppercase tracking-wider mb-3">
          Fabric & Weave
        </h4>
        <div className="space-y-2">
          {FABRICS.map((fabric) => (
            <label
              key={fabric}
              className="flex items-center gap-2.5 text-xs text-[#252525] cursor-pointer hover:text-[#6B1F2A]"
            >
              <input
                type="checkbox"
                checked={filters.fabric === fabric}
                onChange={() => handleFabricToggle(fabric)}
                className="w-4 h-4 rounded border-[#DED5C8] text-[#6B1F2A] focus:ring-[#6B1F2A]"
              />
              <span>{fabric}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Occasion Section */}
      <div className="pt-4 border-t border-[#DED5C8]">
        <h4 className="text-xs font-semibold text-[#252525] uppercase tracking-wider mb-3">
          Occasion
        </h4>
        <div className="space-y-2">
          {OCCASIONS.map((occ) => (
            <label
              key={occ}
              className="flex items-center gap-2.5 text-xs text-[#252525] cursor-pointer hover:text-[#6B1F2A]"
            >
              <input
                type="checkbox"
                checked={filters.occasion === occ}
                onChange={() => handleOccasionToggle(occ)}
                className="w-4 h-4 rounded border-[#DED5C8] text-[#6B1F2A] focus:ring-[#6B1F2A]"
              />
              <span>{occ}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="pt-4 border-t border-[#DED5C8]">
        <h4 className="text-xs font-semibold text-[#252525] uppercase tracking-wider mb-3">
          Price Range
        </h4>
        <div className="space-y-2">
          {PRICE_RANGES.map((pr) => (
            <label
              key={pr.value}
              className="flex items-center gap-2.5 text-xs text-[#252525] cursor-pointer hover:text-[#6B1F2A]"
            >
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === pr.value}
                onChange={() => handlePriceToggle(pr.value)}
                className="w-4 h-4 border-[#DED5C8] text-[#6B1F2A] focus:ring-[#6B1F2A]"
              />
              <span>{pr.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 bg-white border border-[#DED5C8] rounded-sm p-5 h-fit sticky top-28">
        <div className="flex items-center justify-between pb-3 border-b border-[#DED5C8] mb-4">
          <span className="font-serif text-sm font-semibold text-[#252525] flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#B08D57]" />
            Filters
          </span>
          <span className="text-[11px] text-[#6F6A63]">{totalCount} items</span>
        </div>
        {filterContent}
      </aside>

      {/* Mobile Filter Drawer */}
      <Drawer
        isOpen={isOpenMobile}
        onClose={onCloseMobile}
        position="bottom"
        title="Filter & Refine"
        footer={
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="md"
              fullWidth
              onClick={() => {
                handleClearAll();
                onCloseMobile();
              }}
            >
              Clear
            </Button>
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={onCloseMobile}
            >
              Apply ({totalCount})
            </Button>
          </div>
        }
      >
        <div className="py-2">{filterContent}</div>
      </Drawer>
    </>
  );
};

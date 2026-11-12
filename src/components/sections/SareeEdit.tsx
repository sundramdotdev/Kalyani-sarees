import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types/product';
import { ProductGrid } from '../product/ProductGrid';

interface SareeEditProps {
  products: Product[];
}

export const SareeEdit: React.FC<SareeEditProps> = ({ products }) => {
  const sareeProducts = products.filter((p) => p.category === 'sarees').slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#DED5C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              Heritage Weaves
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#252525]">
              The Saree Edit
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6A63]">
              An exquisite curation of pure Banarasi katan silks, delicate georgettes, and resplendent wedding drapes.
            </p>
          </div>

          <Link
            href="/sarees"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B1F2A] hover:text-[#541720] uppercase tracking-wider group"
          >
            <span>View All Sarees</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <ProductGrid products={sareeProducts} columns={4} />
      </div>
    </section>
  );
};

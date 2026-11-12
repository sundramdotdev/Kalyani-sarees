'use client';

import React, { useState } from 'react';
import { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  columns?: 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = 'No garments found matching your criteria.',
  columns = 4,
}) => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  if (products.length === 0) {
    return (
      <div className="py-16 text-center bg-white/60 border border-[#DED5C8] rounded-md p-8">
        <h4 className="font-serif text-lg font-medium text-[#252525]">No Products Found</h4>
        <p className="text-xs text-[#6F6A63] mt-1.5 max-w-sm mx-auto">{emptyMessage}</p>
      </div>
    );
  }

  const columnClass =
    columns === 3
      ? 'grid-cols-2 md:grid-cols-3'
      : 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  return (
    <>
      <div className={`grid ${columnClass} gap-3 sm:gap-4 md:gap-6`}>
        {products.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={idx < 4}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        ))}
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
};

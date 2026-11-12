import React from 'react';
import { Metadata } from 'next';
import { catalogService } from '../../lib/catalog-service';
import { ShopClient } from '../shop/ShopClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Pure Silk & Banarasi Sarees Collection',
  description:
    'Explore exquisite handcrafted Banarasi Katan silk, Kanjivaram, Chanderi, and festive bridal sarees from Kalyani Sarees Dhanpatganj.',
  path: '/sarees',
});

export default async function SareesPage() {
  const allProducts = await catalogService.getAllProducts();
  const sareeProducts = allProducts.filter((p) => p.category === 'sarees');

  return (
    <ShopClient
      initialProducts={sareeProducts}
      initialCategory="sarees"
      categoryTitle="The Saree Collection"
      categoryDescription="Six yards of timeless heritage. Explore authentic Banarasi brocades, royal Kanjivaram drapes, and lightweight festive silks."
    />
  );
}

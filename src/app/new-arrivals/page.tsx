import React from 'react';
import { Metadata } from 'next';
import { catalogService } from '../../lib/catalog-service';
import { ShopClient } from '../shop/ShopClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'New Arrivals | Latest Festive Collection',
  description:
    'Discover the freshest seasonal arrivals in pure silk sarees, suit sets, and children’s festive clothing from Kalyani Sarees Dhanpatganj.',
  path: '/new-arrivals',
});

export default async function NewArrivalsPage() {
  const allProducts = await catalogService.getAllProducts();
  const newArrivals = allProducts.filter((p) => p.badges.includes('NEW'));

  return (
    <ShopClient
      initialProducts={newArrivals.length > 0 ? newArrivals : allProducts}
      categoryTitle="Fresh Festive Arrivals"
      categoryDescription="Newly curated handlooms and designer silhouettes straight from our master weaving partners."
    />
  );
}

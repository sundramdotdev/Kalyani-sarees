import React from 'react';
import { Metadata } from 'next';
import { catalogService } from '../../lib/catalog-service';
import { ShopClient } from './ShopClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Shop All Indian Ethnic Garments & Sarees',
  description:
    'Browse our complete catalog of Banarasi silk sarees, designer kurtis, lehengas, and children’s festive outfits from Kalyani Sarees Dhanpatganj.',
  path: '/shop',
});

export default async function ShopPage() {
  const products = await catalogService.getAllProducts();

  return (
    <ShopClient
      initialProducts={products}
      categoryTitle="The Complete Ethnic Catalog"
      categoryDescription="Handcrafted Banarasi sarees, embroidered suit sets, and festive attire for every auspicious celebration."
    />
  );
}

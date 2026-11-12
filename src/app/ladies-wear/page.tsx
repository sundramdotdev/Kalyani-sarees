import React from 'react';
import { Metadata } from 'next';
import { catalogService } from '../../lib/catalog-service';
import { ShopClient } from '../shop/ShopClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Ladies' Ethnic Wear, Kurtis & Suit Sets",
  description:
    'Shop embroidered suit sets, festive anarkalis, daily kurtis, and designer lehengas at Kalyani Sarees Dhanpatganj.',
  path: '/ladies-wear',
});

export default async function LadiesWearPage() {
  const allProducts = await catalogService.getAllProducts();
  const ladiesProducts = allProducts.filter((p) => p.category === 'ladies-wear');

  return (
    <ShopClient
      initialProducts={ladiesProducts}
      initialCategory="ladies-wear"
      categoryTitle="Ladies' Ethnic Collection"
      categoryDescription="Silhouettes crafted for grace and comfort. Discover 3-piece embroidered suit sets, festive anarkalis, and elegant kurtis."
    />
  );
}

import React from 'react';
import { Metadata } from 'next';
import { catalogService } from '../../lib/catalog-service';
import { ShopClient } from '../shop/ShopClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Indian Attire, Festive & Wedding Outfits',
  description:
    'Traditional ceremonial wear, bridal silks, and wedding outfits from Kalyani Sarees Dhanpatganj.',
  path: '/indian-attire',
});

export default async function IndianAttirePage() {
  const allProducts = await catalogService.getAllProducts();
  const attireProducts = allProducts.filter(
    (p) => p.category === 'indian-attire' || p.occasion.includes('Wedding') || p.occasion.includes('Festive')
  );

  return (
    <ShopClient
      initialProducts={attireProducts}
      initialCategory="indian-attire"
      categoryTitle="Indian Attire & Occasion Wear"
      categoryDescription="Grand celebration outfits crafted for weddings, pujas, and family milestones."
    />
  );
}

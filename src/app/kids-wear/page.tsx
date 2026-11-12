import React from 'react';
import { Metadata } from 'next';
import { catalogService } from '../../lib/catalog-service';
import { ShopClient } from '../shop/ShopClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: "Kids' Ethnic Wear & Festive Outfits",
  description:
    'Celebrate festive moments with boys’ brocade kurta pyjamas and girls’ comfortable silk lehengas from Kalyani Sarees Dhanpatganj.',
  path: '/kids-wear',
});

export default async function KidsWearPage() {
  const allProducts = await catalogService.getAllProducts();
  const kidsProducts = allProducts.filter((p) => p.category === 'kids-wear');

  return (
    <ShopClient
      initialProducts={kidsProducts}
      initialCategory="kids-wear"
      categoryTitle="Little Festive Moments"
      categoryDescription="Charming celebration wear for children, tailored with pure cotton linings so they can celebrate in comfort."
    />
  );
}

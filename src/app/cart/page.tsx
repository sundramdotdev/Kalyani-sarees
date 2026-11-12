import React from 'react';
import { Metadata } from 'next';
import { CartClient } from './CartClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Shopping Bag & Checkout',
  description: 'Review your selected sarees, kurtis, and festive attire in your shopping bag.',
  path: '/cart',
  noIndex: true,
});

export default function CartPage() {
  return <CartClient />;
}

import React from 'react';
import { Metadata } from 'next';
import { WishlistClient } from './WishlistClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'My Saved Wishlist',
  description: 'View your saved sarees and ethnic outfits from Kalyani Sarees Dhanpatganj.',
  path: '/wishlist',
  noIndex: true,
});

export default function WishlistPage() {
  return <WishlistClient />;
}

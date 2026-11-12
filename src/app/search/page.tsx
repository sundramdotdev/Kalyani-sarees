import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { SearchClient } from './SearchClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Search Sarees & Ethnic Clothing',
  description: 'Search across our collection of authentic Indian sarees and ethnic garments.',
  path: '/search',
  noIndex: true, // Internal search pages should be excluded from search indexing
});

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-xs text-[#6F6A63]">Loading search...</div>}>
      <SearchClient />
    </Suspense>
  );
}

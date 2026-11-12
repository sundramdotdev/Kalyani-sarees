import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Curated Festive & Bridal Collections',
  description:
    'Explore curated edits for bridal trousseaus, festival celebrations, and reception evenings from Kalyani Sarees Dhanpatganj.',
  path: '/collections',
});

interface CollectionItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
}

const FEATURED_COLLECTIONS: CollectionItem[] = [
  {
    slug: 'bridal-heritage',
    name: 'The Bridal Heritage Edit 2026',
    tagline: 'Varanasi Brocades & Pure Katan Silks',
    description:
      'Auspicious crimson and vermilion sarees woven with antique gold zari, accompanied by royal bridal lehengas.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    href: '/sarees',
  },
  {
    slug: 'festive-celebration',
    name: 'Auspicious Festivals & Pujas',
    tagline: 'Luminous Chanderi & Organza Silks',
    description:
      'Lightweight, breathable handloom sarees and straight kurti sets designed for Diwali, Navratri, and prayer ceremonies.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    href: '/indian-attire',
  },
  {
    slug: 'little-festive',
    name: 'Little Festive Celebrations',
    tagline: 'Comfort-Lined Celebration Outfits for Children',
    description:
      'Festive kurta pyjamas with brocade jackets for boys, and light festive lehengas for girls.',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80',
    href: '/kids-wear',
  },
];

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Collections' }]} />

      <div className="py-6 border-b border-[#DED5C8] mb-12">
        <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
          Editorial Series
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#252525] mt-1">
          Curated Festive & Bridal Collections
        </h1>
        <p className="text-xs sm:text-sm text-[#6F6A63] mt-2 max-w-2xl">
          Seasonal stories and celebration edits gathered from India’s finest artisanal weaving clusters.
        </p>
      </div>

      <div className="space-y-12">
        {FEATURED_COLLECTIONS.map((col, idx) => (
          <div
            key={col.slug}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#DED5C8] rounded-sm overflow-hidden p-6 sm:p-8 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`lg:col-span-7 relative aspect-16/9 sm:aspect-21/9 lg:aspect-16/10 rounded-sm overflow-hidden bg-[#EFE5D5]`}>
              <Image
                src={col.image}
                alt={col.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs text-[#B08D57] font-semibold uppercase tracking-wider block">
                {col.tagline}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#252525]">{col.name}</h2>
              <p className="text-xs sm:text-sm text-[#6F6A63] leading-relaxed">
                {col.description}
              </p>
              <div className="pt-2">
                <Link
                  href={col.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B1F2A] hover:text-[#541720] uppercase tracking-wider group"
                >
                  <span>Explore Edit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

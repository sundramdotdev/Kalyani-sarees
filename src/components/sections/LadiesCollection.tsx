import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface SubCategoryCard {
  name: string;
  count: string;
  href: string;
  image: string;
}

const LADIES_CATEGORIES: SubCategoryCard[] = [
  {
    name: 'Kurtis',
    count: 'Straight cut, A-line & daily wear',
    href: '/ladies-wear?category=kurtis',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Suit Sets',
    count: '3-Piece embroidered kurta & dupatta sets',
    href: '/ladies-wear?category=suit-sets',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ethnic Dresses',
    count: 'Floor-length flared Indo-western silhouettes',
    href: '/ladies-wear?category=dresses',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Lehengas',
    count: 'Festive celebration & wedding lehengas',
    href: '/ladies-wear?category=lehengas',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
  },
];

export const LadiesCollection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              Women&apos;s Wardrobe
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#252525]">
              For Every Occasion
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6A63]">
              From breezy handloom cotton kurtis to intricately embroidered wedding suit sets.
            </p>
          </div>

          <Link
            href="/ladies-wear"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B1F2A] hover:text-[#541720] uppercase tracking-wider group"
          >
            <span>View All Ladies Wear</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {LADIES_CATEGORIES.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative rounded-sm overflow-hidden bg-white border border-[#DED5C8] shadow-xs flex flex-col"
            >
              <div className="relative aspect-3/4 w-full bg-[#EFE5D5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="p-4 bg-white flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-base font-medium text-[#252525] group-hover:text-[#6B1F2A] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#6F6A63] mt-0.5 line-clamp-1">{item.count}</p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-[#B08D57] font-semibold uppercase tracking-wider">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

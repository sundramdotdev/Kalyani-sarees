import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CategoryItem {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  isFeatured?: boolean;
}

const CATEGORIES: CategoryItem[] = [
  {
    title: 'Sarees',
    subtitle: 'Banarasi, Kanjivaram, Georgette & Wedding Drapes',
    href: '/sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
  },
  {
    title: "Ladies' Wear",
    subtitle: 'Designer Suit Sets, Kurtis, Anarkalis & Lehengas',
    href: '/ladies-wear',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: "Kids' Wear",
    subtitle: 'Charming Kurta Pyjamas & Festive Lehengas for Little Ones',
    href: '/kids-wear',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Indian Attire',
    subtitle: 'Occasion Ensembles for Weddings & Religious Festivities',
    href: '/indian-attire',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
  },
];

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
            Curated Categories
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#252525]">
            Shop by Category
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6A63]">
            Explore our collections designed for every auspicious Indian moment.
          </p>
        </div>

        {/* Dynamic Category Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Sarees Feature Card (Spans 6 cols on large screens for prominent visual weight) */}
          <Link
            href={CATEGORIES[0].href}
            className="group relative lg:col-span-6 rounded-sm overflow-hidden aspect-4/5 sm:aspect-16/11 lg:aspect-auto lg:h-[480px] bg-[#EFE5D5] border border-[#DED5C8] shadow-xs"
          >
            <Image
              src={CATEGORIES[0].image}
              alt="Shop Sarees at Kalyani Sarees Dhanpatganj"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white space-y-2">
              <span className="inline-block px-2.5 py-0.5 bg-[#6B1F2A] text-white text-[10px] uppercase font-bold tracking-wider rounded-[2px]">
                Flagship Category
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide">
                {CATEGORIES[0].title}
              </h3>
              <p className="text-xs text-[#DED5C8]/90 max-w-md line-clamp-2">
                {CATEGORIES[0].subtitle}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#B08D57] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Explore Saree Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Right Column Grid for Ladies, Kids, Indian Attire */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Ladies Wear (Spans full width of right col or top) */}
            <Link
              href={CATEGORIES[1].href}
              className="group relative sm:col-span-2 rounded-sm overflow-hidden aspect-16/9 sm:aspect-21/9 lg:aspect-auto lg:h-[228px] bg-[#EFE5D5] border border-[#DED5C8] shadow-xs"
            >
              <Image
                src={CATEGORIES[1].image}
                alt="Shop Ladies Wear at Kalyani Sarees"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <h3 className="font-serif text-xl sm:text-2xl font-medium">
                  {CATEGORIES[1].title}
                </h3>
                <p className="text-[11px] text-[#DED5C8]/90 line-clamp-1 mt-0.5">
                  {CATEGORIES[1].subtitle}
                </p>
                <div className="pt-1.5 flex items-center gap-1 text-[11px] text-[#B08D57] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Shop Ladies Wear</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>

            {/* Kids Wear */}
            <Link
              href={CATEGORIES[2].href}
              className="group relative rounded-sm overflow-hidden aspect-4/5 sm:aspect-auto lg:h-[228px] bg-[#EFE5D5] border border-[#DED5C8] shadow-xs"
            >
              <Image
                src={CATEGORIES[2].image}
                alt="Shop Kids Ethnic Wear at Kalyani Sarees"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <h3 className="font-serif text-lg font-medium">{CATEGORIES[2].title}</h3>
                <p className="text-[10px] text-[#DED5C8]/80 line-clamp-1 mt-0.5">
                  Little Festive Moments
                </p>
                <div className="pt-1 flex items-center gap-1 text-[10px] text-[#B08D57] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Shop Kids</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>

            {/* Indian Attire */}
            <Link
              href={CATEGORIES[3].href}
              className="group relative rounded-sm overflow-hidden aspect-4/5 sm:aspect-auto lg:h-[228px] bg-[#EFE5D5] border border-[#DED5C8] shadow-xs"
            >
              <Image
                src={CATEGORIES[3].image}
                alt="Shop Traditional Indian Attire at Kalyani Sarees"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <h3 className="font-serif text-lg font-medium">{CATEGORIES[3].title}</h3>
                <p className="text-[10px] text-[#DED5C8]/80 line-clamp-1 mt-0.5">
                  Traditional Celebrations
                </p>
                <div className="pt-1 flex items-center gap-1 text-[10px] text-[#B08D57] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Attire</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

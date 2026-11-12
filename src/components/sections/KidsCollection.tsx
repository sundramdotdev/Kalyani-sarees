import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react';

interface KidsCard {
  title: string;
  desc: string;
  href: string;
  image: string;
}

const KIDS_CARDS: KidsCard[] = [
  {
    title: "Girls' Festive Wear",
    desc: 'Comfort-lined silk lehengas, anarkalis & shararas',
    href: '/kids-wear?category=girls',
    image: 'https://images.unsplash.com/photo-1621644827827-2b7e19391cf8?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: "Boys' Ethnic Wear",
    desc: 'Cotton-silk kurta pyjamas & brocade Nehru jackets',
    href: '/kids-wear?category=boys',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Siblings Festive Edit',
    desc: 'Coordinated occasion ensembles for family weddings',
    href: '/kids-wear?category=festive',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80',
  },
];

export const KidsCollection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#EFE5D5]/50 border-t border-[#DED5C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-[#B08D57]" />
              Children&apos;s Celebration Edit
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#252525]">
              Little Festive Moments
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6A63]">
              Traditional Indian clothing designed with soft, breathable cotton linings so kids can celebrate freely.
            </p>
          </div>

          <Link
            href="/kids-wear"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B1F2A] hover:text-[#541720] uppercase tracking-wider group"
          >
            <span>View All Kids Wear</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KIDS_CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative rounded-sm overflow-hidden bg-white border border-[#DED5C8] shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-4/5 w-full bg-[#EFE5D5] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-medium">{card.title}</h3>
                  <p className="text-xs text-[#DED5C8]/90 mt-1 line-clamp-2">{card.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-[#B08D57] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Shop Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

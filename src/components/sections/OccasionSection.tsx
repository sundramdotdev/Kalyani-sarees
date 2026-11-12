import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

interface OccasionCard {
  title: string;
  subtitle: string;
  href: string;
  image: string;
}

const OCCASIONS: OccasionCard[] = [
  {
    title: 'Festivals',
    subtitle: 'Vibrant colors & zari drapes for Diwali, Navratri & Chhath',
    href: '/indian-attire?type=festive',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Weddings',
    subtitle: 'Regal Banarasi katan silks & bridal trousseau ensembles',
    href: '/indian-attire?type=wedding',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Family Celebrations',
    subtitle: 'Contemporary silhouettes for sangeets, receptions & pujas',
    href: '/indian-attire?type=celebration',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Everyday Ethnic',
    subtitle: 'Breathable handloom cottons & georgettes for daily poise',
    href: '/sarees?type=daily',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
  },
];

export const OccasionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#DED5C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
            Shop by Occasion
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#252525]">
            Dress for the Moment
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6A63]">
            Curated edits crafted to match the sanctity and splendor of Indian rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((occ) => (
            <Link
              key={occ.title}
              href={occ.href}
              className="group relative rounded-sm overflow-hidden aspect-4/5 bg-[#EFE5D5] border border-[#DED5C8] shadow-xs"
            >
              <Image
                src={occ.image}
                alt={occ.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <h3 className="font-serif text-xl font-medium tracking-wide">{occ.title}</h3>
                <p className="text-[11px] text-[#DED5C8]/80 mt-1 line-clamp-2">{occ.subtitle}</p>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-[#B08D57] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Explore Edits</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

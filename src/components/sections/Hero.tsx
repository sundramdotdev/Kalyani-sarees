import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#252525] text-white">
      {/* Background Editorial Visual with responsive aspect ratio */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=85"
          alt="Indian bride in royal maroon Banarasi silk saree - Kalyani Sarees Dhanpatganj"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] opacity-45"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Hero Editorial Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-xl space-y-6">
            {/* Overline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs border border-white/20 rounded-full text-xs font-semibold text-[#B08D57] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Festive & Wedding Edit 2026</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15]">
              TIMELESS INDIAN <span className="italic font-normal text-[#FAF5EC]">ELEGANCE</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#DED5C8]/90 font-light leading-relaxed max-w-lg">
              Discover authentic Banarasi silks, handpicked bridal trousseaus, and curated ethnic wear for every family celebration.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link href="/sarees">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                  <span>Shop Sarees</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/collections">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#252525]"
                >
                  Explore Collection
                </Button>
              </Link>
            </div>

            {/* Local Trust Note */}
            <div className="pt-4 border-t border-white/15 flex items-center gap-3 text-xs text-[#DED5C8]/70">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-ping" />
              <span>Visit our flagship showroom in Dhanpatganj, Sultanpur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

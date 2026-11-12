import React from 'react';
import Link from 'next/link';
import { Sparkles, MapPin } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#6B1F2A] text-white py-2 px-4 text-xs font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-1.5 text-white/80">
          <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
          <span>Showroom: Dhanpatganj, Sultanpur (UP)</span>
        </div>

        <div className="w-full sm:w-auto text-center flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B08D57] animate-pulse" />
          <span>Discover the New Festive & Wedding Collection 2026</span>
          <Link
            href="/sarees"
            className="underline underline-offset-2 hover:text-[#B08D57] transition-colors ml-1 font-semibold"
          >
            Explore Sarees
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 text-white/80">
          <span>Complimentary Fall & Pico on All Sarees</span>
        </div>
      </div>
    </div>
  );
};

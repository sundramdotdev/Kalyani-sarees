import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export default function ProductNotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#EFE5D5] flex items-center justify-center mx-auto text-[#6B1F2A]">
        <Sparkles className="w-8 h-8" />
      </div>
      <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
        Garment Not Found
      </span>
      <h1 className="font-serif text-3xl sm:text-4xl text-[#252525]">
        This Saree or Outfit is Unavailable
      </h1>
      <p className="text-xs sm:text-sm text-[#6F6A63] max-w-md mx-auto leading-relaxed">
        The design you are looking for may have been archived or is part of a previous festival collection.
        Discover our latest handloom sarees and festive clothing.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link href="/sarees">
          <Button variant="primary" size="md">
            Explore Sarees
          </Button>
        </Link>
        <Link href="/shop">
          <Button variant="outline" size="md" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Catalog</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

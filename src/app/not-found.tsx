import React from 'react';
import Link from 'next/link';
import { Sparkles, Home, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#EFE5D5] flex items-center justify-center mx-auto text-[#6B1F2A]">
        <Sparkles className="w-8 h-8" />
      </div>
      <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
        Page Not Found • Error 404
      </span>
      <h1 className="font-serif text-3xl sm:text-5xl text-[#252525]">
        The Drape You Are Looking For Is Not Here
      </h1>
      <p className="text-xs sm:text-sm text-[#6F6A63] max-w-md mx-auto leading-relaxed">
        The link you followed may be expired or the collection page has been moved. Discover our current celebratory handlooms.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link href="/">
          <Button variant="primary" size="md" className="gap-2">
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Button>
        </Link>
        <Link href="/sarees">
          <Button variant="outline" size="md" className="gap-2">
            <span>Shop Saree Edits</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F3EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Editorial Artisanal Imagery */}
          <div className="relative">
            <div className="relative aspect-4/5 sm:aspect-16/11 lg:aspect-4/5 rounded-sm overflow-hidden border border-[#DED5C8] bg-[#EFE5D5] shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80"
                alt="Master weaver crafting zari border for Kalyani Sarees"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            {/* Decorative Offset Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-6 rounded-sm border border-[#DED5C8] shadow-lg max-w-xs">
              <span className="text-[10px] uppercase font-bold text-[#B08D57] tracking-widest block mb-1">
                Artisanal Roots
              </span>
              <p className="text-xs text-[#252525] font-serif leading-relaxed italic">
                &ldquo;Every thread carries a blessing; every drape celebrates an Indian heritage.&rdquo;
              </p>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
                Our Heritage & Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] leading-tight font-light">
                ROOTED IN TRADITION. <br />
                <span className="font-normal text-[#6B1F2A]">DESIGNED FOR TODAY.</span>
              </h2>
            </div>

            <p className="text-sm text-[#6F6A63] leading-relaxed">
              Every Indian celebration begins with a thread of intention. At Kalyani Sarees Dhanpatganj, we believe a saree is never merely six yards of fabric—it is an heirloom of memory, a symbol of auspicious beginnings, and a canvas of master weaving traditions.
            </p>

            <p className="text-sm text-[#6F6A63] leading-relaxed">
              From the sacred ghats of Varanasi weaving pure Katan silks to regional handloom clusters, our collection balances ceremonial grandeur with modern ease. Whether you visit our Dhanpatganj showroom or discover our designs online, we invite you to experience the timeless warmth of Indian craftsmanship.
            </p>

            <div className="pt-2">
              <Link href="/about">
                <Button variant="primary" size="md" className="gap-2">
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Button } from '../../components/ui/Button';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Our Heritage Story & Dhanpatganj Roots',
  description:
    'Learn about Kalyani Sarees Dhanpatganj: our dedication to authentic Indian handloom traditions, artisan weaving clusters, and celebratory festive fashion.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Our Story' }]} />

      {/* Hero Narrative */}
      <div className="py-8 md:py-16 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
          Our Heritage & Roots
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#252525] leading-tight font-light">
          ROOTED IN TRADITION. <br />
          <span className="font-normal text-[#6B1F2A]">DESIGNED FOR TODAY.</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#6F6A63] leading-relaxed max-w-2xl mx-auto pt-2">
          At Kalyani Sarees Dhanpatganj, we celebrate the sacred art of Indian textiles. A saree is never merely six yards of cloth; it is an heirloom of memory, an embodiment of grace, and a blessing for life’s grandest celebrations.
        </p>
      </div>

      {/* Visual Showcase */}
      <div className="relative aspect-16/9 sm:aspect-21/9 rounded-sm overflow-hidden border border-[#DED5C8] bg-[#EFE5D5] mb-16">
        <Image
          src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=80"
          alt="Authentic Varanasi handloom weaving traditions - Kalyani Sarees Dhanpatganj"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#B08D57]">
            Artisan Heritage
          </p>
          <h2 className="font-serif text-lg sm:text-xl font-medium">Preserving Classical Weaving Techniques</h2>
        </div>
      </div>

      {/* 3 Pillars of Kalyani Sarees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white border border-[#DED5C8] p-8 rounded-sm space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#EFE5D5] flex items-center justify-center text-[#6B1F2A]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#252525]">Direct Handloom Sourcing</h3>
          <p className="text-xs text-[#6F6A63] leading-relaxed">
            We partner with master weavers across Varanasi, Kanchipuram, and Chanderi to deliver authentic, high-grade silk drapes free from synthetic counterfeits.
          </p>
        </div>

        <div className="bg-white border border-[#DED5C8] p-8 rounded-sm space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#EFE5D5] flex items-center justify-center text-[#6B1F2A]">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#252525]">Celebrations for the Family</h3>
          <p className="text-xs text-[#6F6A63] leading-relaxed">
            From the bride’s royal Katan silk to charming festive wear for daughters and sons, we outfit the entire family under one welcoming roof.
          </p>
        </div>

        <div className="bg-white border border-[#DED5C8] p-8 rounded-sm space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#EFE5D5] flex items-center justify-center text-[#6B1F2A]">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#252525]">Rooted in Dhanpatganj</h3>
          <p className="text-xs text-[#6F6A63] leading-relaxed">
            Our physical showroom in Dhanpatganj, Sultanpur District (UP) provides warm Indian hospitality, personal draping consultations, and bridal trousseau guidance.
          </p>
        </div>
      </div>

      {/* Invitation CTA */}
      <div className="bg-[#6B1F2A] text-white p-8 sm:p-12 rounded-sm text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-light">
          Visit Us for Your Next Auspicious Celebration
        </h2>
        <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
          Step into our Dhanpatganj showroom or explore our online catalog to discover sarees that will be cherished across generations.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/sarees">
            <Button variant="secondary" size="md">
              Shop Sarees
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-[#252525]">
              Contact Showroom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

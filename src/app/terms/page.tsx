import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service',
  description: 'Terms and conditions governing online and retail orders at Kalyani Sarees Dhanpatganj.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />

      <div className="py-6 border-b border-[#DED5C8] mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#252525]">Terms of Service</h1>
        <p className="text-xs text-[#6F6A63] mt-1">Last Updated: October 2026</p>
      </div>

      <div className="bg-white border border-[#DED5C8] p-6 sm:p-8 rounded-sm space-y-6 text-xs sm:text-sm text-[#6F6A63] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-base font-semibold text-[#252525]">1. Acceptance of Terms</h2>
          <p>
            By accessing the website of Kalyani Sarees Dhanpatganj, you agree to comply with and be bound by these terms of service, all applicable Indian laws, and commercial regulations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-semibold text-[#252525]">2. Handloom & Weave Nuances</h2>
          <p>
            Authentic handloom items, such as pure Banarasi Katan silk and Chanderi sarees, are handcrafted by master weavers. Slight variations in yarn texture, zari tension, and natural dye shades are hallmarks of genuine artisanal production and are not considered manufacturing flaws.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-semibold text-[#252525]">3. Pricing & Currency</h2>
          <p>
            All listed prices are denominated in Indian Rupees (INR) and are inclusive of applicable goods and services taxes (GST).
          </p>
        </section>
      </div>
    </div>
  );
}

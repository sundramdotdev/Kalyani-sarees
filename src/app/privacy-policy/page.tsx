import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy and data protection disclosures for Kalyani Sarees Dhanpatganj.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <div className="py-6 border-b border-[#DED5C8] mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#252525]">Privacy Policy</h1>
        <p className="text-xs text-[#6F6A63] mt-1">Last Updated: October 2026</p>
      </div>

      <div className="bg-white border border-[#DED5C8] p-6 sm:p-8 rounded-sm space-y-6 text-xs sm:text-sm text-[#6F6A63] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-base font-semibold text-[#252525]">1. Information We Collect</h2>
          <p>
            When you visit Kalyani Sarees Dhanpatganj, save favorites to your wishlist, or submit in-store consultation requests, we only collect necessary contact information (name, phone number, email address, delivery location) to fulfill your service requests.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-semibold text-[#252525]">2. Usage of Information</h2>
          <p>
            We use your data solely to:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Process your orders and dispatch courier tracking updates.</li>
            <li>Coordinate appointments at our Dhanpatganj showroom.</li>
            <li>Send requested notifications regarding new seasonal festive handlooms.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-semibold text-[#252525]">3. No Sale of Personal Data</h2>
          <p>
            We never sell, rent, or lease your private personal contact details to third-party marketing companies.
          </p>
        </section>
      </div>
    </div>
  );
}

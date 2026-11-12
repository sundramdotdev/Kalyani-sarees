import React from 'react';
import { Metadata } from 'next';
import { Truck, RotateCcw, ShieldCheck, Clock } from 'lucide-react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Shipping & Returns Policies',
  description:
    'Pan-India delivery timelines, complimentary shipping thresholds, cash on delivery terms, and 7-day exchange policies from Kalyani Sarees Dhanpatganj.',
  path: '/shipping-returns',
});

export default function ShippingReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Shipping & Returns' }]} />

      <div className="py-6 border-b border-[#DED5C8] mb-10">
        <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 text-[#B08D57]" />
          Customer Care
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#252525] mt-1">
          Shipping, Delivery & Returns Policy
        </h1>
        <p className="text-xs sm:text-sm text-[#6F6A63] mt-2">
          Transparent, secure, and reliable policies for every order placed with Kalyani Sarees Dhanpatganj.
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-[#252525]">
        {/* Shipping Section */}
        <section className="bg-white border border-[#DED5C8] p-6 sm:p-8 rounded-sm space-y-4">
          <div className="flex items-center gap-2.5 text-[#6B1F2A]">
            <Truck className="w-5 h-5 text-[#B08D57]" />
            <h2 className="font-serif text-xl font-semibold">1. Domestic Shipping & Delivery Timelines</h2>
          </div>
          <div className="space-y-3 text-[#6F6A63] leading-relaxed">
            <p>
              • <strong>Dispatch Schedule:</strong> All orders are securely inspected, wrapped in moisture-resistant protective packaging, and dispatched within <strong>24 to 48 business hours</strong> from our Dhanpatganj facility.
            </p>
            <p>
              • <strong>Delivery Window:</strong> Standard domestic delivery takes <strong>3 to 6 business days</strong> depending on your delivery postal code. Express delivery options are available for major metros and Tier 1 cities.
            </p>
            <p>
              • <strong>Shipping Charges:</strong> We provide <strong>Complimentary Express Shipping</strong> on all prepaid and COD orders totaling ₹2,999 or above. Orders below ₹2,999 incur a flat ₹150 logistics fee across India.
            </p>
          </div>
        </section>

        {/* Exchange & Returns Section */}
        <section className="bg-white border border-[#DED5C8] p-6 sm:p-8 rounded-sm space-y-4">
          <div className="flex items-center gap-2.5 text-[#6B1F2A]">
            <RotateCcw className="w-5 h-5 text-[#B08D57]" />
            <h2 className="font-serif text-xl font-semibold">2. 7-Day Hassle-Free Exchange Policy</h2>
          </div>
          <div className="space-y-3 text-[#6F6A63] leading-relaxed">
            <p>
              We want you to love your drape. If the color, weave, or size does not meet your expectations, we gladly offer an exchange within <strong>7 days</strong> of delivery.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Garments must be unworn, unwashed, and returned in their original packaging with all security tags intact.</li>
              <li>Sarees with unstitched blouse pieces cut or altered cannot be accepted for return or exchange.</li>
              <li>To initiate an exchange, please contact our customer care via WhatsApp or email with your order details.</li>
            </ul>
          </div>
        </section>

        {/* Packaging & Safety */}
        <section className="bg-white border border-[#DED5C8] p-6 sm:p-8 rounded-sm space-y-4">
          <div className="flex items-center gap-2.5 text-[#6B1F2A]">
            <ShieldCheck className="w-5 h-5 text-[#B08D57]" />
            <h2 className="font-serif text-xl font-semibold">3. Tamper-Evident Bridal Packaging</h2>
          </div>
          <p className="text-[#6F6A63] leading-relaxed">
            High-value Banarasi silk sarees and bridal lehengas are dispatched inside hard-bound protective keepsake boxes and wrapped in breathable muslin cloth to prevent any friction damage to delicate gold and silver zari threads during transit.
          </p>
        </section>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Phone, Navigation, Sparkles } from 'lucide-react';
import { STORE_INFORMATION } from '../../constants/store';
import { Button } from '../ui/Button';

export const StoreSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#DED5C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F3EA] border border-[#DED5C8] rounded-sm p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Store Information Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
                  Flagship Retail Showroom
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#252525]">
                  Kalyani Sarees Dhanpatganj
                </h2>
                <p className="text-xs sm:text-sm text-[#6F6A63] leading-relaxed">
                  Experience our sarees in person. Touch the pure silk yarn, inspect the intricate gold zari pallu, and receive personalized bridal trousseau consultations in our Dhanpatganj showroom.
                </p>
              </div>

              {/* Verified Details Grid (Using verification placeholders) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Location Box */}
                <div className="bg-white p-4 rounded-sm border border-[#DED5C8] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#6B1F2A] uppercase">
                    <MapPin className="w-4 h-4 text-[#B08D57]" />
                    <span>Store Location</span>
                  </div>
                  <p className="text-xs text-[#252525]">
                    {STORE_INFORMATION.locality}, {STORE_INFORMATION.district} District
                  </p>
                  <p className="text-[11px] text-[#6F6A63]">
                    {STORE_INFORMATION.state}, {STORE_INFORMATION.country}
                  </p>
                </div>

                {/* Operating Hours Box */}
                <div className="bg-white p-4 rounded-sm border border-[#DED5C8] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#6B1F2A] uppercase">
                    <Clock className="w-4 h-4 text-[#B08D57]" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-xs text-[#252525]">Monday – Sunday</p>
                  <p className="text-[11px] text-[#6F6A63]">10:00 AM – 8:30 PM IST</p>
                </div>
              </div>

              {/* Consultation & Directions CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link href="/contact">
                  <Button variant="primary" size="md" className="w-full sm:w-auto gap-2">
                    <Navigation className="w-4 h-4" />
                    <span>Get Showroom Directions</span>
                  </Button>
                </Link>

                <Link href="/contact#consultation">
                  <Button variant="outline" size="md" className="w-full sm:w-auto gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Contact Showroom</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Card / In-Store Experience Visual Perks */}
            <div className="lg:col-span-5 bg-white border border-[#DED5C8] rounded-sm p-6 sm:p-8 space-y-5">
              <h3 className="font-serif text-lg font-semibold text-[#252525] border-b border-[#DED5C8] pb-3">
                In-Store Showroom Experience
              </h3>

              <ul className="space-y-3.5 text-xs text-[#6F6A63]">
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#252525]">Bridal Trousseau Styling:</strong> Dedicated bridal saree drape specialists to assist your family.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#252525]">Authentic Fabric Inspection:</strong> Feel pure Katan silk, Chanderi, and temple zari borders in real lighting.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#252525]">Complete Family Festive Wear:</strong> Coordinated collections for women, children, and wedding guests.
                  </span>
                </li>
              </ul>

              <div className="p-3 bg-[#EFE5D5]/60 rounded-xs text-[11px] text-[#6F6A63] border border-[#DED5C8]/80">
                📍 Serving families in Dhanpatganj, Sultanpur, Kurebhar, Baldirai, and Ayodhya regions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

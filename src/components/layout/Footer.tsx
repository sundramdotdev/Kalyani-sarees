import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, RefreshCw, Truck } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants/navigation';
import { STORE_INFORMATION } from '../../constants/store';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252525] text-[#DED5C8] pt-16 pb-12 border-t border-[#DED5C8]/20">
      {/* Brand Value Propositions Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#6B1F2A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#B08D57]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide">
                Authentic Handcrafted Weaves
              </h4>
              <p className="text-xs text-[#DED5C8]/70 mt-0.5">
                100% genuine silks, Varanasi brocades & artisan weaves.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#6B1F2A] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-[#B08D57]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide">
                Pan-India Express Delivery
              </h4>
              <p className="text-xs text-[#DED5C8]/70 mt-0.5">
                Complimentary shipping on orders above ₹2,999.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#6B1F2A] flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6 text-[#B08D57]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide">
                Hassle-Free 7-Day Exchange
              </h4>
              <p className="text-xs text-[#DED5C8]/70 mt-0.5">
                Dedicated customer assistance for every celebration drape.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="block font-serif text-2xl font-bold tracking-wider text-white">
                KALYANI SAREES
              </span>
              <span className="block text-xs tracking-[0.25em] text-[#B08D57] font-semibold uppercase -mt-1">
                DHANPATGANJ
              </span>
            </Link>
            <p className="text-xs text-[#DED5C8]/80 leading-relaxed max-w-sm">
              Rooted in Indian textile craftsmanship. From royal Banarasi silks to charming kids&apos; ethnic wear, we celebrate every auspicious Indian occasion with timeless grace and family warmth.
            </p>

            {/* Local Store Card */}
            <div className="pt-2">
              <div className="bg-white/5 border border-white/10 rounded-md p-4 space-y-2">
                <div className="flex items-start gap-2.5 text-xs text-[#DED5C8]">
                  <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Showroom:</span>
                    <p className="text-white/70 mt-0.5">
                      Dhanpatganj, Sultanpur District, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-[#DED5C8]/80">
                  <Clock className="w-4 h-4 text-[#B08D57] shrink-0" />
                  <span>Mon – Sun: 10:00 AM – 8:30 PM IST</span>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="text-xs text-[#B08D57] hover:text-white underline underline-offset-4 font-semibold"
                  >
                    View Showroom Location & Directions →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Shop Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#B08D57] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Column */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_LINKS.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#B08D57] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Policies */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase mb-4">
              About & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#B08D57] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#B08D57] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#DED5C8]/60 gap-4">
        <p>© 2026 Kalyani Sarees Dhanpatganj. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Store Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Send, CheckCircle2 } from 'lucide-react';
import { STORE_INFORMATION } from '../../constants/store';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Button } from '../../components/ui/Button';

export const ContactClient: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    occasion: 'Wedding Trousseau',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name.trim() && formState.phone.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Breadcrumb items={[{ label: 'Contact Showroom' }]} />

      <div className="py-6 border-b border-[#DED5C8] mb-12">
        <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
          Dhanpatganj Showroom
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#252525] mt-1">
          Visit Us or Reach Out
        </h1>
        <p className="text-xs sm:text-sm text-[#6F6A63] mt-2 max-w-2xl">
          Whether you would like to book a bridal trousseau consultation or inquire about our collections, our team is delighted to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Store Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#DED5C8] rounded-sm p-6 space-y-5">
            <h2 className="font-serif text-xl font-semibold text-[#6B1F2A] border-b border-[#DED5C8] pb-3">
              Kalyani Sarees Dhanpatganj
            </h2>

            <div className="space-y-4 text-xs text-[#252525]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#252525]">Showroom Address:</strong>
                  <p className="text-[#6F6A63] mt-0.5">
                    Dhanpatganj, Sultanpur District, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#252525]">Store Timings:</strong>
                  <p className="text-[#6F6A63] mt-0.5">Monday to Sunday: 10:00 AM – 8:30 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#252525]">Phone & WhatsApp Inquiries:</strong>
                  <p className="text-[#6F6A63] mt-0.5">
                    Please use the consultation form below to connect directly with our showroom team.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#252525]">Customer Support Email:</strong>
                  <p className="text-[#6F6A63] mt-0.5">care@kalyanisarees.com</p>
                </div>
              </div>
            </div>

            {/* Directions Note */}
            <div className="pt-2 border-t border-[#DED5C8]">
              <div className="bg-[#EFE5D5]/60 p-3.5 rounded-xs text-[11px] text-[#6F6A63] space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-[#6B1F2A]">
                  <Navigation className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>How to Reach Us</span>
                </div>
                <p>
                  Conveniently situated in the main Dhanpatganj market, accessible from Sultanpur, Ayodhya, Kurebhar, and Baldirai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: In-Store Consultation Booking Form */}
        <div className="lg:col-span-7 bg-white border border-[#DED5C8] rounded-sm p-6 sm:p-8" id="consultation">
          <h2 className="font-serif text-xl font-semibold text-[#252525] mb-1">
            Book an In-Store Consultation
          </h2>
          <p className="text-xs text-[#6F6A63] mb-6">
            Planning a bridal trousseau or family celebration? Let our drape specialists prepare handpicked options for your visit.
          </p>

          {submitted ? (
            <div className="p-8 text-center bg-[#EFE5D5]/50 border border-[#DED5C8] rounded-sm space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#2D6A4F] mx-auto" />
              <h3 className="font-serif text-lg font-semibold text-[#252525]">
                Consultation Request Received
              </h3>
              <p className="text-xs text-[#6F6A63] max-w-md mx-auto">
                Thank you, {formState.name}. Our Dhanpatganj store representative will reach out to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-3.5 py-2.5 border border-[#DED5C8] rounded-sm text-xs text-[#252525] focus:outline-none focus:ring-1 focus:ring-[#6B1F2A]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">Phone Number / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 border border-[#DED5C8] rounded-sm text-xs text-[#252525] focus:outline-none focus:ring-1 focus:ring-[#6B1F2A]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">Occasion / Interest</label>
                <select
                  value={formState.occasion}
                  onChange={(e) => setFormState({ ...formState, occasion: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-[#DED5C8] rounded-sm text-xs text-[#252525] focus:outline-none focus:ring-1 focus:ring-[#6B1F2A]"
                >
                  <option value="Wedding Trousseau">Bridal & Wedding Trousseau</option>
                  <option value="Festive Sarees">Festive & Puja Sarees</option>
                  <option value="Kids Ethnic Wear">Children’s Celebration Outfits</option>
                  <option value="Bulk Family Shopping">Family Occasion Bulk Shopping</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">Message or Specific Requests</label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us what weaves or colors you are looking for..."
                  className="w-full px-3.5 py-2.5 border border-[#DED5C8] rounded-sm text-xs text-[#252525] focus:outline-none focus:ring-1 focus:ring-[#6B1F2A]"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="md" className="gap-2">
                  <span>Send Consultation Request</span>
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#6B1F2A] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
          VIP Festive Styling
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light">
          Receive Exclusive Invitations to New Weaves
        </h2>
        <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
          Be the first to preview festive handloom collections, seasonal saree edits, and special wedding trousseau launches from Kalyani Sarees Dhanpatganj.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full text-xs font-semibold text-[#B08D57] border border-white/20">
            <CheckCircle2 className="w-4 h-4 text-[#B08D57]" />
            <span>Thank you for joining our festive community.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-xs text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
            />
            <Button
              type="submit"
              variant="secondary"
              size="md"
              className="gap-2 shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </Button>
          </form>
        )}

        <p className="text-[11px] text-white/50">
          We honor your privacy. Unsubscribe at any time with a single click.
        </p>
      </div>
    </section>
  );
};

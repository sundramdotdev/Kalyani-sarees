import React from 'react';
import { Metadata } from 'next';
import { ContactClient } from './ContactClient';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Showroom & Visit Details | Dhanpatganj',
  description:
    'Visit the Kalyani Sarees showroom in Dhanpatganj, Sultanpur District, Uttar Pradesh. Operating hours, location directions, and bridal consultation requests.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactClient />;
}

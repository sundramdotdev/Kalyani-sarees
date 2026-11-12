import { StoreInfo } from '../types/store';

/**
 * SOURCE OF TRUTH FOR DHANPATGANJ STORE INFORMATION
 * Note: Never invent business addresses, phone numbers, opening hours, or coordinates.
 * Unverified fields strictly use '[VERIFICATION_REQUIRED]'.
 */
export const STORE_INFORMATION: StoreInfo = {
  brandName: 'Kalyani Sarees Dhanpatganj',
  tagline: 'Timeless Indian Elegance for Every Celebration',
  locality: 'Dhanpatganj',
  district: 'Sultanpur',
  state: 'Uttar Pradesh',
  country: 'India',

  // Verification Required Fields
  postalCode: '[VERIFICATION_REQUIRED]',
  fullAddress: '[VERIFICATION_REQUIRED: Client to provide exact showroom address in Dhanpatganj]',
  primaryPhone: '[VERIFICATION_REQUIRED: Client to provide store contact phone number]',
  whatsappNumber: '[VERIFICATION_REQUIRED: Client to provide business WhatsApp number]',
  email: '[VERIFICATION_REQUIRED: Client to provide store email]',
  googleBusinessProfileUrl: '[VERIFICATION_REQUIRED: Client to provide GBP link]',
  googleMapsEmbedUrl: '[VERIFICATION_REQUIRED: Client to provide Google Maps embed link]',

  coordinates: {
    latitude: null,
    longitude: null,
  },

  openingHours: '[VERIFICATION_REQUIRED]',

  socialLinks: {
    instagram: undefined,
    facebook: undefined,
    youtube: undefined,
  },
};

export interface StoreHours {
  dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  opens: string;
  closes: string;
  isClosed: boolean;
}

export interface StoreInfo {
  brandName: 'Kalyani Sarees Dhanpatganj';
  tagline: string;
  locality: 'Dhanpatganj';
  district: 'Sultanpur';
  state: 'Uttar Pradesh';
  country: 'India';
  // Strict Client-Verification Required Placeholders
  postalCode: string | '[VERIFICATION_REQUIRED]';
  fullAddress: string | '[VERIFICATION_REQUIRED]';
  primaryPhone: string | '[VERIFICATION_REQUIRED]';
  whatsappNumber: string | '[VERIFICATION_REQUIRED]';
  email: string | '[VERIFICATION_REQUIRED]';
  googleBusinessProfileUrl: string | '[VERIFICATION_REQUIRED]';
  googleMapsEmbedUrl: string | '[VERIFICATION_REQUIRED]';
  coordinates: {
    latitude: number | null;
    longitude: number | null;
  };
  openingHours: StoreHours[] | '[VERIFICATION_REQUIRED]';
  socialLinks: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

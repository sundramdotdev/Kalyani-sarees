export interface Subcategory {
  id: string;
  slug: string;
  name: string;
  description?: string;
  productCount?: number;
}

export interface Category {
  id: string;
  slug: string; // 'sarees' | 'ladies-wear' | 'kids-wear' | 'indian-attire'
  name: string;
  headline: string;
  description: string;
  heroImage: string;
  subcategories: Subcategory[];
  featuredOrder: number;
  isPrimaryNav: boolean;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bannerImage: string;
  productIds: string[];
  isSeasonal: boolean;
  startDate?: string;
  endDate?: string;
}

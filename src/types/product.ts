export type ProductBadge = 'NEW' | 'BESTSELLER' | 'FESTIVE' | 'LIMITED';

export type ProductOccasion =
  | 'Wedding'
  | 'Festive'
  | 'Celebration'
  | 'Daily Wear'
  | 'Party Wear'
  | 'Puja';

export type FabricType =
  | 'Banarasi Katan Silk'
  | 'Pure Kanjivaram Silk'
  | 'Chanderi Silk'
  | 'Tussar Silk'
  | 'Georgette'
  | 'Organza'
  | 'Chiffon'
  | 'Cotton Handloom'
  | 'Art Silk'
  | 'Brocade';

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  viewType?: 'front' | 'pallu' | 'border' | 'back' | 'lifestyle';
  width?: number;
  height?: number;
}

export interface ProductColor {
  name: string;
  hex: string;
  imageUrl?: string;
}

export interface ProductVariant {
  id: string;
  sku: string;
  colorName: string;
  colorHex: string;
  size: string; // e.g. "Free Size", "S", "M", "L", "XL", "Unstitched"
  price: number;
  compareAtPrice?: number;
  stockCount: number;
  available: boolean;
  image?: ProductImage;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  category: string; // 'sarees' | 'ladies-wear' | 'kids-wear' | 'indian-attire'
  subcategory: string; // 'silk-sarees' | 'banarasi-sarees' | 'kurtis' | 'suit-sets' | 'girls' | 'boys'
  images: ProductImage[];
  price: number;
  compareAtPrice?: number;
  currency: 'INR';
  available: boolean;
  sizes: string[];
  colors: ProductColor[];
  fabric: FabricType | string;
  weaveType?: string;
  occasion: ProductOccasion[];
  badges: ProductBadge[];
  sku: string;
  includesBlousePiece?: boolean;
  sareeLengthMeters?: number;
  blouseLengthMeters?: number;
  careInstructions: string[];
  metadata?: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
}

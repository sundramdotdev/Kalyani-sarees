# Data Architecture & TypeScript Domain Models — Kalyani Sarees Dhanpatganj

## 1. Domain Modeling Philosophy

The data architecture provides a **strongly typed domain contract** that decouples frontend UI presentation from any underlying database (PostgreSQL, Supabase, Shopify, Medusa, MongoDB).

All interfaces reside in `src/types/` and enforce strict type checking across the application.

---

## 2. Core Domain Interfaces

### 2.1 `Product` & `ProductVariant`

```typescript
// src/types/product.ts

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
  colors: { name: string; hex: string }[];
  fabric: FabricType | string;
  weaveType?: string; // e.g. 'Handloom', 'Jacquard', 'Zari Brocade'
  occasion: ProductOccasion[];
  badges: ProductBadge[];
  sku: string;
  includesBlousePiece?: boolean;
  sareeLengthMeters?: number; // e.g., 5.5
  blouseLengthMeters?: number; // e.g., 0.8
  careInstructions: string[];
  metadata?: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
}
```

### 2.2 `Category` & `Collection`

```typescript
// src/types/category.ts

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
  slug: string; // 'bridal-heritage-2026' | 'diwali-celebration-edit'
  name: string;
  tagline: string;
  description: string;
  bannerImage: string;
  productIds: string[];
  isSeasonal: boolean;
  startDate?: string;
  endDate?: string;
}
```

### 2.3 `CartItem` & `CartState`

```typescript
// src/types/cart.ts

import { Product, ProductImage } from './product';

export interface CartItem {
  id: string; // composite key: `${product.id}_${selectedColor}_${selectedSize}`
  productId: string;
  productSlug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  selectedColor: string;
  selectedSize: string;
  image: ProductImage;
  quantity: number;
  maxStock: number;
}

export interface CartState {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  discountTotal: number;
  estimatedShipping: number;
  freeShippingThreshold: number; // e.g., 2999
  qualifiesForFreeShipping: boolean;
  isOpen: boolean;
}
```

### 2.4 `StoreInfo` & Local Presence

```typescript
// src/types/store.ts

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
  // Strict Client-Verification Required Placeholders:
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
```

### 2.5 `Review` & Social Proof

```typescript
// src/types/review.ts

export interface Review {
  id: string;
  productId: string;
  authorName: string;
  rating: number; // 1 to 5
  title: string;
  comment: string;
  verifiedBuyer: boolean;
  createdAt: string;
  images?: string[];
}
```

---

## 3. Data Access Abstraction Layer (`CatalogService`)

To guarantee backend independence, frontend components invoke methods on an abstract catalog interface:

```typescript
// src/lib/catalog-service.ts
export interface ICatalogService {
  getAllProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getProductsByCategory(categorySlug: string): Promise<Product[]>;
  getFeaturedSarees(): Promise<Product[]>;
  getCategories(): Promise<Category[]>;
  searchProducts(query: string, filters?: any): Promise<Product[]>;
}
```

In Phase 1, an implementation class `StaticCatalogService` reads directly from typed mock data in `src/data/mock-products.ts`. In Phase 2, this implementation is replaced with `ApiCatalogService` querying the production database, requiring zero changes to UI components.

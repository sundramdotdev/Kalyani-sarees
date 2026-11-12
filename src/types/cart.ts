import { ProductImage } from './product';

export interface CartItem {
  id: string; // composite key: `${productId}_${selectedColor}_${selectedSize}`
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
  freeShippingThreshold: number; // e.g., 2999 INR
  qualifiesForFreeShipping: boolean;
  isOpen: boolean;
}

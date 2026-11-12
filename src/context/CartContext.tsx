'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types/cart';
import { Product } from '../types/product';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, options?: { color?: string; size?: string; quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  freeShippingThreshold: number;
  qualifiesForFreeShipping: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 2999;
const STORAGE_KEY = 'kalyani_sarees_cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // Ignore storage errors in private browsing
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        // Ignore
      }
    }
  }, [items, isLoaded]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (
    product: Product,
    options?: { color?: string; size?: string; quantity?: number }
  ) => {
    const selectedColor = options?.color || product.colors[0]?.name || 'Default';
    const selectedSize = options?.size || product.sizes[0] || 'Free Size';
    const qty = options?.quantity || 1;
    const compositeId = `${product.id}-${selectedColor}-${selectedSize}`;

    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === compositeId);
      if (existing) {
        return prevItems.map((item) =>
          item.id === compositeId
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: compositeId,
          productId: product.id,
          productSlug: product.slug,
          name: product.name,
          price: product.price,
          compareAtPrice: product.compareAtPrice,
          selectedColor,
          selectedSize,
          image: product.images[0] || {
            id: 'placeholder',
            url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
            alt: product.name,
            isPrimary: true,
          },
          quantity: qty,
          maxStock: 10,
        };
        return [...prevItems, newItem];
      }
    });

    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.min(newQuantity, item.maxStock) } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const qualifiesForFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        qualifiesForFreeShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

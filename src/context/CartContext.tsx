'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductItem } from '@/config/ecommerceProducts';

export interface CartItem {
  id: string; // unique key e.g. `${product.id}-${size}-${color}`
  product: ProductItem;
  size: string;
  color: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: ProductItem, size?: string, color?: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize with initial sample items if empty to provide immediate rich demo experience
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('velora_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      } else {
        // Preload 1 luxury default product so the cart has lively content on first load!
        import('@/config/ecommerceProducts').then(({ ECOMMERCE_PRODUCTS }) => {
          const p = ECOMMERCE_PRODUCTS[0];
          setItems([
            {
              id: `${p.id}-M-Camel`,
              product: p,
              size: 'M',
              color: 'Camel Heather',
              quantity: 1,
            },
          ]);
        });
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('velora_cart', JSON.stringify(items));
      } catch (e) {
        // ignore
      }
    }
  }, [items, isMounted]);

  const addToCart = (
    product: ProductItem,
    size: string = product.sizes[0] || 'Standard',
    color: string = product.colors[0]?.colorName.en || 'Natural',
    quantity: number = 1
  ) => {
    const key = `${product.id}-${size}-${color}`;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === key);
      if (existing) {
        return prev.map((item) =>
          item.id === key ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: key, product, size, color, quantity }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}


"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  price: number | string;
  image: string;
  rating: number;
  reviews: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

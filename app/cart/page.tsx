"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import styles from './Cart.module.css';

export default function CartPage() {
  const { cart, cartCount, setCart } = useCart();
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});

  const updateQuantity = (itemId: string, quantity: number) => {
    setQuantities(prev => ({ ...prev, [itemId]: quantity }));
  };

  const removeItem = (itemId: string) => {
    setCart((prev: any[]) => prev.filter((_: any, index: number) => `${prev[index].id}-${index}` !== itemId));
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item, index) => {
      const itemId = `${item.id}-${index}`;
      const quantity = quantities[itemId] || 1;
      const price = Number(item.price);
      return total + (price * quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item, index) => {
      const itemId = `${item.id}-${index}`;
      const quantity = quantities[itemId] || 1;
      return total + quantity;
    }, 0);
  };

  if (cartCount === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className="container">
          <div className={styles.emptyContent}>
            <h1>Your Shopping Cart is empty</h1>
            <p>Continue shopping on the Easy Get homepage.</p>
            <Link href="/" className={styles.continueButton}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1 className={styles.title}>Shopping Cart</h1>
        
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cart.map((item, index) => {
              const itemId = `${item.id}-${index}`;
              const quantity = quantities[itemId] || 1;
              const itemTotal = Number(item.price) * quantity;
              
              return (
                <div key={itemId} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemPrice}>
                      PKR {Number(item.price).toLocaleString()}
                    </p>
                  </div>
                  
                  <div className={styles.itemControls}>
                    <div className={styles.quantityControl}>
                      <label>Qty:</label>
                      <select 
                        value={quantity} 
                        onChange={(e) => updateQuantity(itemId, Number(e.target.value))}
                        className={styles.quantitySelect}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(itemId)}
                      className={styles.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className={styles.itemSubtotal}>
                    <span>PKR {itemTotal.toLocaleString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className={styles.cartSummary}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              
              <div className={styles.summaryRow}>
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>PKR {calculateTotal().toLocaleString()}</span>
              </div>
              
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              
              <div className={styles.summaryDivider}></div>
              
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>PKR {calculateTotal().toLocaleString()}</span>
              </div>
              
              <Link href="/checkout" className={styles.checkoutButton}>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

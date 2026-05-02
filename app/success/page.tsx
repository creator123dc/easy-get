"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Success.module.css';

export default function SuccessPage() {
  return (
    <div className={styles.successPage}>
      <div className="container">
        <div className={styles.successContent}>
          <div className={styles.successIcon}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#127A1A" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          
          <h1 className={styles.successTitle}>Order Placed ✅</h1>
          
          <p className={styles.successMessage}>
            We will contact you soon
          </p>
          
          <div className={styles.successDetails}>
            <p>Thank you for your order! Our team will contact you within 24 hours to confirm your order details and arrange delivery.</p>
            <p>You can also track your order status by calling our customer service.</p>
          </div>
          
          <div className={styles.actionButtons}>
            <Link href="/" className={styles.continueButton}>
              Continue Shopping
            </Link>
            <Link href="/cart" className={styles.viewCartButton}>
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

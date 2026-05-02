import React from 'react';
import styles from './TrustBadges.module.css';

export function TrustBadges() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          
          <div className={styles.badgeCard}>
            <div className={styles.icon}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div className={styles.content}>
              <h4>Fast Delivery</h4>
              <p>Delivery in 2-5 days</p>
            </div>
          </div>

          <div className={styles.badgeCard}>
            <div className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
            </div>
            <div className={styles.content}>
              <h4>Cash on Delivery</h4>
              <p>Pay upon receiving</p>
            </div>
          </div>

          <div className={styles.badgeCard}>
            <div className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className={styles.content}>
              <h4>Easy Returns</h4>
              <p>14-day return policy</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

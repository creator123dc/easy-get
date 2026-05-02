"use client";

import React from 'react';
import Link from 'next/link';
import { Globe, Music2 } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to top
      </div>
      
      <div className="container" style={{maxWidth: '100%'}}>
        <div className={styles.grid}>
          
          <div className={styles.column}>
            <h4>Get to Know Us</h4>
            <div className={styles.linkList}>
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Press Releases</Link>
              <Link href="/">Easy Get Science</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a 
                href="https://www.instagram.com/easy.get99" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Follow us on Instagram"
              >
                <Globe size={20} />
              </a>
              <a 
                href="https://tiktok.com/@easy.get24" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Follow us on TikTok"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Let Us Help You</h4>
            <div className={styles.linkList}>
              <Link href="/track-order">Track Order</Link>
              <Link href="/return-policy">Returns Center</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/">Help & FAQ</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomLinks}>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/return-policy">Return Policy</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <p>© {new Date().getFullYear()}, Easy Get, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

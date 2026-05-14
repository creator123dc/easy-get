"use client";

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Building2, Users, FileText, HelpCircle, ArrowUp, Package, Shield, ChevronRight } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUp size={16} className={styles.backToTopIcon} />
        Back to top
      </div>
      
      <div className="container" style={{maxWidth: '100%'}}>
        <div className={styles.grid}>
          
          <div className={styles.column}>
            <h4>Get to Know Us</h4>
            <div className={styles.linkList}>
              <Link href="/about" className={styles.linkItem}>
                <Building2 size={16} className={styles.linkIcon} />
                About Us
              </Link>
              <Link href="/careers" className={styles.linkItem}>
                <Users size={16} className={styles.linkIcon} />
                Careers
              </Link>
              <Link href="/press" className={styles.linkItem}>
                <FileText size={16} className={styles.linkIcon} />
                Press Releases
              </Link>
                          </div>
          </div>

          <div className={styles.column}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a 
                href="https://www.instagram.com/easy_getstore?igsh=MWdkdXhtNWIwaGFsbA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://tiktok.com/@easy.get24" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Follow us on TikTok"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Let Us Help You</h4>
            <div className={styles.linkList}>
              <Link href="/track-order" className={styles.linkItem}>
                <Package size={16} className={styles.linkIcon} />
                Track Order
              </Link>
              <Link href="/return-policy" className={styles.linkItem}>
                <Shield size={16} className={styles.linkIcon} />
                Returns Center
              </Link>
              <Link href="/contact-us" className={styles.linkItem}>
                <HelpCircle size={16} className={styles.linkIcon} />
                Contact Us
              </Link>
              <Link href="/help" className={styles.linkItem}>
                <HelpCircle size={16} className={styles.linkIcon} />
                Help & FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomLinks}>
          <Link href="/terms-and-conditions" className={styles.bottomLink}>
            <ChevronRight size={14} className={styles.bottomLinkIcon} />
            Terms & Conditions
          </Link>
          <Link href="/privacy" className={styles.bottomLink}>
            <ChevronRight size={14} className={styles.bottomLinkIcon} />
            Privacy Policy
          </Link>
          <Link href="/return-policy" className={styles.bottomLink}>
            <ChevronRight size={14} className={styles.bottomLinkIcon} />
            Return Policy
          </Link>
          <Link href="/contact-us" className={styles.bottomLink}>
            <ChevronRight size={14} className={styles.bottomLinkIcon} />
            Contact Us
          </Link>
        </div>
        <p>© {new Date().getFullYear()} EasyGet. All rights reserved. Designed for a better shopping experience.</p>
      </div>
    </footer>
  );
}

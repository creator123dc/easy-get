"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Bell } from 'lucide-react';
import styles from './Press.module.css';

export default function PressPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Back to Home */}
        <Link 
          href="/" 
          className={styles.backLink}
        >
          <ArrowLeft className={styles.backIcon} />
          Back to Home
        </Link>

        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <FileText className={styles.icon} />
            </div>
            <h1 className={styles.title}>Press Releases</h1>
          </div>

          <div className={styles.mainContent}>
            <div className={styles.message}>
              <div className={styles.statusContainer}>
                <Bell className={styles.statusIcon} />
                <p className={styles.statusText}>No official press releases available yet.</p>
              </div>
              
              <div className={styles.updateSection}>
                <h3>Stay tuned for updates</h3>
                <p className={styles.updateText}>
                  We're working on exciting developments and will share official press releases here as they become available.
                </p>
                
                <div className={styles.contactInfo}>
                  <p>For media inquiries, please contact us at:</p>
                  <a href="mailto:press@easyget.com" className={styles.emailLink}>
                    press@easyget.com
                  </a>
                </div>
              </div>

              <div className={styles.infoBox}>
                <h4>Media Kit</h4>
                <p>Our official media kit including brand assets, company information, and high-resolution images will be available soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

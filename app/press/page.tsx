"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, TrendingUp, Calendar, CheckCircle } from 'lucide-react';
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
            <h1 className={styles.title}>Easy Get Expands Digital Sales Network Across Pakistan</h1>
            <p className={styles.subtitle}>Latest news and updates from Easy Get</p>
          </div>

          <div className={styles.mainContent}>
            <div className={styles.releaseCard}>
              <div className={styles.releaseHeader}>
                <div className={styles.releaseIconWrapper}>
                  <TrendingUp className={styles.releaseIcon} />
                </div>
                <div className={styles.releaseMeta}>
                  <span className={styles.releaseCategory}>Expansion</span>
                  <div className={styles.releaseDate}>
                    <Calendar className={styles.calendarIcon} size={14} />
                    May 2026
                  </div>
                </div>
              </div>
              
              <div className={styles.releaseBody}>
                <p className={styles.releaseParagraph}>
                  Easy Get is rapidly growing as a modern e-commerce platform focused on providing high-quality and affordable products across Pakistan.
                </p>
                
                <p className={styles.releaseParagraph}>
                  As part of our expansion strategy, we are now building a nationwide network of digital sales partners.
                </p>
                
                <p className={styles.releaseParagraph}>
                  Our mission is not only to deliver great products but also to create earning opportunities for young individuals, students, and aspiring entrepreneurs.
                </p>
                
                <div className={styles.offersSection}>
                  <h3 className={styles.offersTitle}>We are proud to support a new generation of digital earners by offering:</h3>
                  <div className={styles.offersList}>
                    <div className={styles.offerItem}>
                      <CheckCircle className={styles.offerIcon} />
                      <span>Flexible earning opportunities</span>
                    </div>
                    <div className={styles.offerItem}>
                      <CheckCircle className={styles.offerIcon} />
                      <span>Zero investment model</span>
                    </div>
                    <div className={styles.offerItem}>
                      <CheckCircle className={styles.offerIcon} />
                      <span>Performance-based rewards</span>
                    </div>
                  </div>
                </div>
                
                <p className={styles.releaseParagraph}>
                  This initiative aims to empower individuals to earn online using social media and modern digital tools.
                </p>
              </div>
            </div>

            <div className={styles.contactSection}>
              <h3 className={styles.contactTitle}>Media Inquiries</h3>
              <p className={styles.contactText}>
                For press inquiries, interviews, or additional information, please contact our media relations team.
              </p>
              <a 
                href="https://www.instagram.com/easy_getstore?igsh=MWdkdXhtNWIwaGFsbA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.instagramLink}
              >
                DM us on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Mail } from 'lucide-react';
import styles from './Careers.module.css';

export default function CareersPage() {
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
              <Briefcase className={styles.icon} />
            </div>
            <h1 className={styles.title}>Careers at EasyGet</h1>
          </div>

          <div className={styles.mainContent}>
            <div className={styles.message}>
              <p className={styles.statusText}>We are currently not hiring.</p>
              
              <div className={styles.contactSection}>
                <h3>For future opportunities, please contact:</h3>
                <div className={styles.contactInfo}>
                  <div className={styles.instagramIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <a 
                    href="https://www.instagram.com/easy.get99" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    @easy.get99
                  </a>
                </div>
              </div>

              <div className={styles.note}>
                <p>We appreciate your interest in joining our team. Feel free to reach out with your resume and we'll keep you in mind for future openings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

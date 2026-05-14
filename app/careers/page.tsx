"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Briefcase, DollarSign, Gift, Tag, Users, TrendingUp, CheckCircle } from 'lucide-react';
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
            <h1 className={styles.title}>Join Our Team & Start Earning Online 💰</h1>
          </div>

          <div className={styles.mainContent}>
            <div className={styles.message}>
              <div className={styles.introSection}>
                <p className={styles.introText}>
                  We are expanding across Pakistan and looking for motivated individuals to join our digital sales team.
                </p>
                <p className={styles.introText}>
                  This is a simple opportunity to earn from home by promoting our products.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>What You Get</h2>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <DollarSign className={styles.benefitIcon} />
                    <div className={styles.benefitText}>
                      <h3>No investment required</h3>
                      <p>Start earning without any upfront costs</p>
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <Tag className={styles.benefitIcon} />
                    <div className={styles.benefitText}>
                      <h3>Your own unique promo code</h3>
                      <p>Share your unique code with customers</p>
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <Gift className={styles.benefitIcon} />
                    <div className={styles.benefitText}>
                      <h3>Earn commission on every sale</h3>
                      <p>Get paid for each product you sell</p>
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <TrendingUp className={styles.benefitIcon} />
                    <div className={styles.benefitText}>
                      <h3>Weekly bonus: Sell 35 products → Get PKR 500 extra</h3>
                      <p>Additional rewards for top performers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Who Can Apply</h2>
                <div className={styles.eligibilityList}>
                  <div className={styles.eligibilityItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Students</span>
                  </div>
                  <div className={styles.eligibilityItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Part-time workers</span>
                  </div>
                  <div className={styles.eligibilityItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>Anyone active on social media</span>
                  </div>
                </div>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>How It Works</h2>
                <div className={styles.stepsList}>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepText}>
                      <h3>You promote our products</h3>
                      <p>Share products with your network</p>
                    </div>
                  </div>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepText}>
                      <h3>Customers use your promo code</h3>
                      <p>They get discounts, you get credit</p>
                    </div>
                  </div>
                  <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepText}>
                      <h3>You earn on every successful order</h3>
                      <p>Commission paid weekly</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Apply Now</h2>
                <p className={styles.ctaText}>
                  👉 DM us on Instagram with message: "JOIN"
                </p>
                <a 
                  href="https://www.instagram.com/easy_getstore?igsh=MWdkdXhtNWIwaGFsbA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={styles.ctaIcon}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Start Earning Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

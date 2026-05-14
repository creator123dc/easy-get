"use client";

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaTruck, FaShieldAlt, FaStar, FaUndo, FaHeadset, FaUsers, FaCheck } from 'react-icons/fa';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        {/* Back to Home Button */}
        <div className={styles.backToHome}>
          <Link href="/" className={styles.backButton}>
            <FiArrowRight className={styles.backIcon} />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.title}>About EasyGet</h1>
          <p className={styles.subtitle}>Pakistan's Most Trusted Online Shopping Platform</p>
        </section>

        {/* Trust Indicators */}
        <section className={styles.trustSection}>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <FaUsers className={styles.trustIcon} />
              <div className={styles.trustContent}>
                <h3>1000+ Happy Customers</h3>
                <p>Trusted by Pakistani shoppers nationwide</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <FaTruck className={styles.trustIcon} />
              <div className={styles.trustContent}>
                <h3>Free Delivery Pakistan</h3>
                <p>Karachi, Lahore, Islamabad & all cities</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <FaShieldAlt className={styles.trustIcon} />
              <div className={styles.trustContent}>
                <h3>100% Original Products</h3>
                <p>Quality guaranteed by EasyGet</p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Card */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Welcome to EasyGet</h2>
          <p className={styles.cardText}>
            Looking for quality products without leaving home? You're in the right place.
          </p>
          <p className={styles.cardText}>
            We bring amazing products right to your doorstep with just a few taps. No stress, no hassle - just happy shopping delivered to you.
          </p>
        </section>

        {/* Mission Card */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Our Mission</h2>
          <p className={styles.cardText}>
            We're here to save your time, money, and energy.
          </p>
          <p className={styles.cardText}>
            Think of us as your personal shopping assistant - finding the best deals and delivering them to your door, so you can focus on what matters most to you.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Why Choose EasyGet</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaTruck size={32} />
              </div>
              <h3 className={styles.featureTitle}>Free Delivery</h3>
              <p className={styles.featureText}>
                Yes, really! No hidden fees or surprise charges. The price you see is exactly what you pay.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaShieldAlt size={32} />
              </div>
              <h3 className={styles.featureTitle}>Cash on Delivery</h3>
              <p className={styles.featureText}>
                Cash on Delivery means you only pay when you're holding your new items. Safe, simple, and totally secure.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaStar size={32} />
              </div>
              <h3 className={styles.featureTitle}>Quality You Can Trust</h3>
              <p className={styles.featureText}>
                We test every product ourselves. If we wouldn't buy it, we won't sell it. Simple as that!
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUndo size={32} />
              </div>
              <h3 className={styles.featureTitle}>Easy Returns</h3>
              <p className={styles.featureText}>
                No problem! 7-day easy returns. We get it - sometimes things just don't work out. No stress, no hassle.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaHeadset size={32} />
              </div>
              <h3 className={styles.featureTitle}>Fast Support</h3>
              <p className={styles.featureText}>
                Got questions? Need help? Our friendly team is just a message away. We actually reply quickly!
              </p>
            </div>
          </div>
        </section>

        {/* Vision Card */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Our Vision</h2>
          <p className={styles.cardText}>
            We want to be Pakistan's most loved online shopping destination - the place you think of first when you need anything.
          </p>
          <p className={styles.cardText}>
            Imagine being able to get whatever you need, whenever you need it, with just a few clicks. That's the future we're building for you.
          </p>
        </section>

        {/* Social Contact Card */}
        <section className={`${styles.card} ${styles.socialCard}`}>
          <h2 className={styles.cardTitle}>Connect With Us</h2>
          <p className={styles.cardText}>
            Want to see our latest products and deals? Follow us on Instagram or TikTok for fast updates and support.
          </p>
          <div className={styles.socialButtons}>
            <a 
              href="https://www.instagram.com/easy_getstore?igsh=MWdkdXhtNWIwaGFsbA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <FaInstagram size={20} />
              <span>Follow on Instagram</span>
            </a>
            <a 
              href="https://tiktok.com/@easy.get24" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <FaTiktok size={20} />
              <span>Follow on TikTok</span>
            </a>
          </div>
        </section>

        {/* CTA Card */}
        <section className={`${styles.card} ${styles.ctaCard}`}>
          <h2 className={styles.cardTitle}>Ready to Start Shopping</h2>
          <p className={styles.cardText}>
            Browse our amazing collection and find your next favorite thing!
          </p>
          <Link href="/" className={styles.ctaButton}>
            <FiShoppingBag size={20} />
            <span>Start Shopping Now</span>
            <FiArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}

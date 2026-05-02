import React from 'react';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.banner}>
        <div className="container" style={{display: 'flex', width: '100%', maxWidth: '1400px', justifyContent: 'flex-start'}}>
          <div className={styles.bannerContent}>
            <span className={styles.badge}>Premium Collection</span>
            <h1 className={styles.title}>Elevate Your Everyday Style</h1>
            <p className={styles.description}>
              Experience unparalleled quality. Handpicked selections, flawless designs, and premium materials tailored for those who demand excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

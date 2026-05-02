import React from 'react';
import Link from 'next/link';
import styles from './Categories.module.css';

const CATEGORIES = [
  { 
    id: 1, 
    name: 'Kitchen & Home', 
    linkText: 'Shop now',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=200&q=80'
  },
  { 
    id: 2, 
    name: 'Tech & Electronics', 
    linkText: 'See more',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&q=80'
  },
  { 
    id: 3, 
    name: 'Fashion', 
    linkText: 'Explore fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&q=80'
  },
  { 
    id: 4, 
    name: 'Skin Care', 
    linkText: 'Shop beauty',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=200&q=80'
  },
];

export function Categories() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {CATEGORIES.map((category) => {
            // Use exact database category name with proper encoding
            const encodedCategory = encodeURIComponent(category.name);
            
            return (
              <Link key={category.id} href={`/category/${encodedCategory}`} className={styles.cardLink}>
                <div className={styles.card}>
                  <div className={styles.imageCircle}>
                    <img src={category.image} alt={category.name} loading="lazy" />
                  </div>
                  <h3 className={styles.cardTitle}>{category.name}</h3>
                  <p className={styles.cardCount}>{category.linkText}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

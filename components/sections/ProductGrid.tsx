"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './ProductGrid.module.css';
import supabase from '@/lib/supabase';
import { useCart } from '@/contexts/CartContext';
import { Tag } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number | string;
  discount_price?: number | string;
  original_price?: number | string;
  image: string;
  rating: number;
  reviews: string;
}

function renderStars(rating: number) {
  return (
    <>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity={rating < 4.8 ? "0.4" : "1"}></path>
      </svg>
    </>
  );
}

function calculateDiscountPercentage(product: Product) {
  if (!product.discount_price || !product.original_price) {
    return 0;
  }
  const originalPrice = Number(product.original_price);
  const discountPrice = Number(product.discount_price);
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*');
        
        if (error) {
          console.error('Error fetching products:', error);
          return;
        }
        
        setProducts(data || []);
        console.log(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.title}>Recommended based on your shopping trends</h2>
          <div className={styles.grid}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imagePlaceholder}>
                  <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0' }} />
                </div>
                <div className={styles.content}>
                  <div style={{ width: '80%', height: '20px', backgroundColor: '#f0f0f0', marginBottom: '10px' }} />
                  <div style={{ width: '60%', height: '16px', backgroundColor: '#f0f0f0', marginBottom: '10px' }} />
                  <div style={{ width: '40%', height: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }} />
                  <div style={{ width: '100%', height: '36px', backgroundColor: '#f0f0f0' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Recommended based on your shopping trends</h2>
        <div className={styles.grid}>
          {products.map(product => (
            <Link key={product.id} href={`/product/${product.id}`} className={styles.cardLink}>
              <div className={styles.card}>
              
              <div className={styles.imagePlaceholder}>
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
              
              <div className={styles.content}>
                
                <h3 className={styles.productTitle}>{product.title}</h3>
                
                <div className={styles.ratingRow}>
                  <div className={styles.stars}>
                    {renderStars(product.rating)}
                  </div>
                  <span className={styles.reviewCount}>{product.reviews}</span>
                </div>

                <div className={styles.priceSection}>
                  {product.discount_price && product.original_price ? (
                    <>
                      <div className={styles.discountPrices}>
                        <span className={styles.discountPrice}>PKR {Number(product.discount_price).toLocaleString()}</span>
                        <span className={styles.originalPrice}>PKR {Number(product.original_price).toLocaleString()}</span>
                      </div>
                      <div className={styles.discountBadge}>
                        <Tag size={16} className={styles.discountIcon} />
                        {calculateDiscountPercentage(product)}% OFF
                      </div>
                    </>
                  ) : (
                    <p className={styles.price}>
                      PKR {Number(product.price).toLocaleString()}
                    </p>
                  )}
                </div>

                <div className={styles.trustLabels}>
                  <p className={styles.label}>Get it as soon as <span>Tomorrow</span></p>
                  <p className={styles.label}><span>FREE Delivery</span> by Easy Get</p>
                </div>

                <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className={styles.actionButton}>Add to Cart</button>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

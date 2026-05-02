"use client";

import React, { useState, useEffect } from 'react';
import styles from './Deals.module.css';
import Link from 'next/link';
import supabase from '@/lib/supabase';
import { useCart } from '@/contexts/CartContext';
import { 
  Tag, 
  ShoppingCart, 
  Eye, 
  Clock, 
  Zap, 
  TrendingUp,
  Package 
} from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number | string;
  discount_price?: number | string;
  original_price?: number | string;
  image: string;
  rating: number;
  reviews: string;
  is_deal?: boolean;
}

function calculateDiscountPercentage(product: Product) {
  if (!product.discount_price || !product.original_price) {
    return 0;
  }
  const originalPrice = Number(product.original_price);
  const discountPrice = Number(product.discount_price);
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

export function Deals() {
  const [deals, setDeals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);
  const { addToCart } = useCart();

  const fetchDeals = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_deal', true)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching deals:', error);
        return;
      }
      
      setDeals(data || []);
    } catch (error) {
      console.error('Error fetching deals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  if (loading) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>
              Weekly Offers & Hot Deals
            </h2>
            <Link href="/" className={styles.viewAll}>
              View All Offers
            </Link>
          </div>
          
          <div className={styles.scrollContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className={styles.dealCard}>
                <div className={styles.imagePlaceholder}>
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0' }} />
                </div>
                <div className={styles.dealContent}>
                  <div style={{ width: '80%', height: '16px', backgroundColor: '#f0f0f0', marginBottom: '8px' }} />
                  <div style={{ width: '60%', height: '20px', backgroundColor: '#f0f0f0' }} />
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
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <Tag size={24} className={styles.titleIcon} />
            <div className={styles.titleContent}>
              <h2 className={styles.title}>
                Top Deals
              </h2>
              <p className={styles.subtitle}>
                Limited time offers
              </p>
            </div>
          </div>
          <Link href="/deals" className={styles.viewAll}>
            View All
            <Tag size={14} className={styles.viewAllIcon} />
          </Link>
        </div>
        
        <div className={styles.scrollContainer}>
          {deals.slice(0, visibleCount).map(product => (
            <Link key={product.id} href={`/product/${product.id}`} className={styles.cardLink}>
              <div className={styles.productCard}>
                {product.discount_price && product.original_price && (
                  <div className={styles.discountBadge}>
                    <Tag size={16} className={styles.badgeIcon} />
                    {calculateDiscountPercentage(product)}% OFF
                  </div>
                )}
                
                <div className={styles.cardImage}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x300/e9ecef/6c757d?text=Product';
                    }}
                  />
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    
                    <div className={styles.priceSection}>
                      {product.discount_price && product.original_price ? (
                        <>
                          <div className={styles.discountPrices}>
                            <span className={styles.discountPrice}>
                              PKR {Number(product.discount_price).toLocaleString()}
                            </span>
                            <span className={styles.originalPrice}>
                              PKR {Number(product.original_price).toLocaleString()}
                            </span>
                          </div>
                          <div className={styles.discountBadge}>
                            <Tag size={16} className={styles.badgeIcon} />
                            {calculateDiscountPercentage(product)}% OFF
                          </div>
                        </>
                      ) : (
                        <p className={styles.currentPrice}>
                          PKR {Number(product.price).toLocaleString()}
                        </p>
                      )}
                    </div>

                    <div className={styles.trustLabels}>
                      <p className={styles.label}>Get it as soon as <span>Tomorrow</span></p>
                      <p className={styles.label}><span>FREE Delivery</span> by Easy Get</p>
                    </div>

                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        addToCart(product); 
                      }} 
                      className={styles.buyNowButton}
                    >
                      <ShoppingCart size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {deals.length > visibleCount && (
            <div className={styles.loadMoreContainer}>
              <button 
                onClick={() => setVisibleCount(prev => prev + 8)}
                className={styles.loadMoreButton}
              >
                Load More Deals
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

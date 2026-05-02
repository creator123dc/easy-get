"use client";

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import styles from '@/components/sections/ProductGrid.module.css';
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
  category?: string;
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

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = use(params);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');
  const { addToCart } = useCart();

  if (!slug) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <Link href="/" className={styles.viewAllLink}>
              ← Back to Home
            </Link>
            <h2 className={styles.title}>Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  useEffect(() => {
    async function fetchCategoryProducts() {
      try {
        // Decode the slug to get exact category name
        const categoryName = decodeURIComponent(slug);
        
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', categoryName)
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error('Error fetching category products:', error);
          return;
        }
        
        setProducts(data || []);
        setCategoryName(categoryName);
      } catch (error) {
        console.error('Error fetching category products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryProducts();
  }, [slug]);

  if (loading) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <Link href="/" className={styles.viewAllLink}>
              ← Back to Home
            </Link>
            <h2 className={styles.title}>Loading...</h2>
          </div>
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
        <div className={styles.header}>
          <Link href="/" className={styles.viewAllLink}>
            ← Back to Home
          </Link>
          <h2 className={styles.title}>{categoryName} Products</h2>
        </div>
        
        {products.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No products found in this category</h3>
            <p>Try browsing our other categories or check back later.</p>
            <Link href="/" className={styles.viewAllLink}>
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {products.map(product => (
              <Link key={product.id} href={`/product/${product.id}`} className={styles.cardLink}>
                <div className={styles.card}>
                
                <div className={styles.imagePlaceholder}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x300/e9ecef/6c757d?text=Product';
                    }}
                  />
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
        )}
      </div>
    </section>
  );
}

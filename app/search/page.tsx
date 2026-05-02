"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Search.module.css';
import supabase from '@/lib/supabase';

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

export default function SearchPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const query = router.query.q as string;
    
    if (query) {
      const fetchProducts = async () => {
        try {
          const { data, error } = await supabase
            .from('products')
            .select('*')
            .ilike('title', `%${query}%`)
            .order('created_at', { ascending: false });

          if (error) {
            console.error('Error fetching products:', error);
            setError('Failed to fetch products');
            return;
          }

          setProducts(data || []);
        } catch (error) {
          console.error('Error fetching products:', error);
          setError('Something went wrong. Please try again.');
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    } else {
      setLoading(false);
    }
  }, [router.query.q]);

  const calculateDiscountPercentage = (product: Product) => {
    if (!product.discount_price || !product.original_price) {
      return 0;
    }
    const originalPrice = Number(product.original_price);
    const discountPrice = Number(product.discount_price);
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
  };

  if (loading) {
    return (
      <div className={styles.searchPage}>
        <div className="container">
          <h1 className={styles.title}>Search Results</h1>
          <p className={styles.subtitle}>
            {router.query.q ? `Showing results for "${router.query.q}"` : 'No search query'}
          </p>
          
          <div className={styles.loadingState}>
            <div className={styles.loadingCard}>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
            </div>
            <div className={styles.loadingCard}>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
            </div>
            <div className={styles.loadingCard}>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.searchPage}>
        <div className="container">
          <h1 className={styles.title}>Search Results</h1>
          <div className={styles.errorState}>
            <p>{error}</p>
            <button onClick={() => router.push('/')} className={styles.retryButton}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.searchPage}>
        <div className="container">
          <h1 className={styles.title}>Search Results</h1>
          <p className={styles.subtitle}>
            {router.query.q ? `No results found for "${router.query.q}"` : 'No search query'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.searchPage}>
      <div className="container">
        <h1 className={styles.title}>Search Results</h1>
        <p className={styles.subtitle}>
          {router.query.q ? `Found ${products.length} result${products.length === 1 ? '' : 's'} for "${router.query.q}"` : 'No search query'}
        </p>
        
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <div className={styles.priceSection}>
                  {product.discount_price && product.original_price ? (
                    <>
                      <span className={styles.discountPrice}>PKR {Number(product.discount_price).toLocaleString()}</span>
                      <span className={styles.originalPrice}>PKR {Number(product.original_price).toLocaleString()}</span>
                      <div className={styles.discountBadge}>
                        -{calculateDiscountPercentage(product)}%
                      </div>
                    </>
                  ) : (
                    <span className={styles.price}>PKR {Number(product.price).toLocaleString()}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

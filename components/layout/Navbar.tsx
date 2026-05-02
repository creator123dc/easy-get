"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';
import { useCart } from '../../contexts/CartContext';
import { Package, ShoppingCart, Search } from 'lucide-react';
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

export function Navbar() {
  const router = useRouter();
  const { cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced search function
  const debouncedSearch = useCallback((query: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    if (query.length <= 1) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      try {
        setIsSearching(true);
        const { data } = await supabase
          .from('products')
          .select('*')
          .ilike('title', `%${query}%`)
          .limit(5);

        setSearchResults(data || []);
        setShowDropdown(true);
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);
  }, []);

  // Handle input change with debouncing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
      setShowDropdown(false);
    }
  };

  // Handle dropdown item click
  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
    setShowDropdown(false);
    setSearchQuery('');
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || searchResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedItemIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedItemIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedItemIndex >= 0) {
          handleProductClick(searchResults[selectedItemIndex].id);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setSelectedItemIndex(-1);
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        setSelectedItemIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Clear dropdown when search is cleared
  useEffect(() => {
    if (!searchQuery) {
      setShowDropdown(false);
      setSelectedItemIndex(-1);
    }
  }, [searchQuery]);

  return (
    <header className={styles.navbarWrapper}>
      
      <div className={styles.navContainer}>
        
        <div className={styles.logoArea}>
          <button className={styles.hamburgerBtn} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <Link href="/" className={styles.logo}>
            <img 
              src="/logo.png" 
              alt="Easy Get" 
              className={styles.logoImage}
            />
          </Link>
        </div>
        
        <div className={styles.searchContainer} ref={searchInputRef}>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            ref={searchInputRef}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton} aria-label="Search">
            <Search size={20} className={styles.searchIcon} />
          </button>
          
          {/* Search Dropdown */}
          {showDropdown && (
            <div className={styles.searchDropdown} ref={dropdownRef}>
              {isSearching ? (
                <div className={styles.searchLoading}>
                  <div className={styles.loadingSpinner}></div>
                  <span>Searching...</span>
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((product, index) => (
                  <div
                    key={product.id}
                    className={`${styles.searchResult} ${selectedItemIndex === index ? styles.selected : ''}`}
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className={styles.searchResultImage}>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className={styles.searchResultInfo}>
                      <div className={styles.searchResultTitle}>{product.title}</div>
                      <div className={styles.searchResultPrice}>
                        {product.discount_price && product.original_price ? (
                          <>
                            <span className={styles.discountPrice}>PKR {Number(product.discount_price).toLocaleString()}</span>
                            <span className={styles.originalPrice}>PKR {Number(product.original_price).toLocaleString()}</span>
                          </>
                        ) : (
                          <span>PKR {Number(product.price).toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : searchQuery.length > 1 ? (
                <div className={styles.searchNoResults}>
                  <span>No products found for "{searchQuery}"</span>
                </div>
              ) : null}
            </div>
          )}
        </div>

        <div className={styles.actions}>
          
          <div className={styles.actionItem}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M12 12c0 1.1 0 0 2.6 1.1 0 0-2.6 1.1v4a1.1 0 0 0 2.6 1.1L12 21.23l-2.6 1.1 0 0 2.6 1.1z"></path>
              </svg>
            </div>
            <span>Profile</span>
          </div>
          
          <Link href="/cart" className={styles.actionItem}>
            <div className={styles.iconWrapper}>
              <span className={styles.badge}>{cartCount}</span>
              <ShoppingCart size={24} className={styles.cartIcon} />
            </div>
            <span>Cart</span>
          </Link>
          
          <Link href="/track-order" className={styles.actionItem}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2"></rect>
                <path d="M9 7H7v4a1 1 0 0 1 1v4a1 1 0 0 1 1h2"></path>
                <circle cx="17" cy="16" r="2"></circle>
              </svg>
            </div>
            <span>Track Order</span>
          </Link>
        </div>

      </div>
    </header>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import supabase from '@/lib/supabase';
import styles from './Product.module.css';
import { Tag, Package, Truck, ShieldCheck, CreditCard, AlertTriangle, Flame, ShoppingCart, Zap } from 'lucide-react';
import ProductSchema from '@/components/seo/ProductSchema';

interface Product {
  id: number;
  title: string;
  price: number | string;
  discount_price?: number | string;
  original_price?: number | string;
  image: string;
  images?: string[];
  rating: number;
  reviews: string;
  description?: string;
  colors?: {
    name: string;
    image: string;
  }[];
}

interface ProductClientProps {
  id: string;
}

export default function ProductClient({ id }: ProductClientProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<any>(null);

  // Fetch product data on mount
  useEffect(() => {
    async function fetchProduct() {
      try {
        let query = supabase.from('products').select('*');
        
        // Try with numeric ID
        const numericId = parseInt(id);
        if (!isNaN(numericId)) {
          query = query.eq('id', numericId);
        } else {
          query = query.eq('id', id);
        }
        
        const { data, error } = await query.single();
        
        if (error || !data) {
          console.error('Product not found:', error);
          setProduct(null);
        } else {
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  // EXTENDED COLOR MAP - Real-world colors
  const colorMap: { [key: string]: string } = {
    // Basic colors
    red: "#FF0000",
    blue: "#0000FF",
    green: "#008000",
    yellow: "#FFFF00",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#808080",
    grey: "#808080",
    
    // Extended colors
    orange: "#FFA500",
    purple: "#800080",
    pink: "#FFC0CB",
    brown: "#A52A2A",
    beige: "#F5F5DC",
    cream: "#FFFDD0",
    gold: "#FFD700",
    golden: "#FFD700",
    silver: "#C0C0C0",
    maroon: "#800000",
    navy: "#000080",
    "navy blue": "#000080",
    sky: "#87CEEB",
    "sky blue": "#87CEEB",
    teal: "#008080",
    lime: "#00FF00",
    aqua: "#00FFFF",
    fuchsia: "#FF00FF",
    olive: "#808000",
    
    // More variations
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    indigo: "#4B0082",
    violet: "#EE82EE",
    coral: "#FF7F50",
    salmon: "#FA8072",
    khaki: "#F0E68C",
    tan: "#D2B48C",
    chocolate: "#D2691E",
    sienna: "#A0522D",
    lavender: "#E6E6FA",
    plum: "#DDA0DD",
    thistle: "#D8BFD8",
    orchid: "#DA70D6",
    tomato: "#FF6347",
    crimson: "#DC143C",
    firebrick: "#B22222",
    darkred: "#8B0000",
    darkblue: "#00008B",
    darkgreen: "#006400",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    lightblue: "#ADD8E6",
    lightgreen: "#90EE90",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    lightyellow: "#FFFFE0",
    lightpink: "#FFB6C1",
    lightsalmon: "#FFA07A",
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#B0C4DE",
    mediumblue: "#0000CD",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    mediumseagreen: "#3CB371",
    mediumslateblue: "#7B68EE",
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: "#C71585",
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: "#FFE4B5",
    navajowhite: "#FFDEAD",
    oldlace: "#FDF5E6",
    olivedrab: "#6B8E23",
    orangered: "#FF4500",
    palegoldenrod: "#EEE8AA",
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: "#FFEFD5",
    peachpuff: "#FFDAB9",
    peru: "#CD853F",
    powderblue: "#B0E0E6",
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    sandybrown: "#F4A460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    steelblue: "#4682B4",
    wheat: "#F5DEB3",
    whitesmoke: "#F5F5F5",
    yellowgreen: "#9ACD32"
  };

  // Normalize color input
  const normalizeColor = (color: string): string => {
    return color?.toLowerCase().trim() || '';
  };

  // Advanced color matching with exact and partial matching
  const getColorCode = (colorName: string): string => {
    const normalized = normalizeColor(colorName);
    
    // First try exact match
    if (colorMap[normalized]) {
      return colorMap[normalized];
    }
    
    // Then try partial match (find color name that contains the input)
    const found = Object.keys(colorMap).find(key => 
      normalized.includes(key) || key.includes(normalized)
    );
    
    return found ? colorMap[found] : "#ccc"; // Fallback to light gray
  };

  // Initialize current image and selected color when component mounts
  React.useEffect(() => {
    if (!product) return;
    
    // Set current image using combined array
    const allImages = product.images && product.images.length > 0
      ? [product.image, ...product.images]
      : [product.image];
    setCurrentImage(allImages[0]);
    
    // Initialize selected color if colors exist
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;
    
    for (let i = 0; i < quantity; i++) {
      const cartItem = {
        ...product,
        selectedColor: selectedColor?.name
      };
      addToCart(cartItem);
    }
  };

  const handleBuyNow = () => {
    if (!product) return;
    
    // Create a single item cart for checkout
    const buyNowItem = {
      ...product,
      selectedColor: selectedColor?.name,
      quantity: quantity
    };
    
    // Store the buy now item in session storage for checkout
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('buyNowItem', JSON.stringify(buyNowItem));
    }
    
    // Navigate to checkout
    router.push('/checkout');
  };

  // Create combined array including main image and gallery images
  const allImages = product && product.images && product.images.length > 0
    ? [product.image, ...product.images]
    : product ? [product.image] : [];

  // Calculate discount percentage
  const calculateDiscountPercentage = () => {
    if (!product || !product.discount_price || !product.original_price) {
      return 0;
    }
    const originalPrice = Number(product.original_price);
    const discountPrice = Number(product.discount_price);
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
  };

  const discountPercentage = calculateDiscountPercentage();
  const hasDiscount = product && product.discount_price && product.original_price;

  // Show loading state while fetching product
  if (loading) {
    return (
      <div className={styles.productPage}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '60vh',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #007bff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <p style={{ color: '#6c757d', fontSize: '16px' }}>Loading product...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state if product not found
  if (!product) {
    return (
      <div className={styles.productPage}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '60vh',
            flexDirection: 'column',
            gap: '20px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f8f9fa',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Package size={40} color="#6c757d" />
            </div>
            <h2 style={{ color: '#212529', margin: 0 }}>Product Not Found</h2>
            <p style={{ color: '#6c757d', margin: '0 0 20px 0' }}>
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '16px'
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productPage}>
      <ProductSchema product={product} />
      <div className="container">
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{product.title}</span>
        </nav>

        <div className={styles.productMain}>
          {/* Product Gallery - Always shows with combined images */}
          <div className={styles.productGallery}>
            {/* Main Image */}
            <div className={styles.mainImageContainer}>
              {(() => {
                // Debug: Log current image to verify field
                console.log('Product Page Current Image:', currentImage);
                console.log('Product Object:', product);
                
                const hasValidImage = currentImage && currentImage.trim() !== '';
                
                return (
                  <img 
                    src={hasValidImage 
                      ? currentImage 
                      : 'https://via.placeholder.com/600x600/e9ecef/6c757d?text=No+Image'} 
                    alt={`${product?.title || 'Product'} - Main product image showing the ${product?.title || 'item'} from Easy Get Pakistan`} 
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      console.log('Main image failed to load:', currentImage);
                      e.currentTarget.src = 'https://via.placeholder.com/600x600/e9ecef/6c757d?text=Image+Error';
                    }}
                    onLoad={() => {
                      if (hasValidImage) {
                        console.log('Main image loaded successfully:', currentImage);
                      }
                    }}
                  />
                );
              })()}
            </div>
            
            {/* Thumbnails - Show ALL images including main image */}
            <div className={styles.thumbnailsContainer}>
              {allImages.map((image, index) => {
                const hasValidImage = image && image.trim() !== '';
                
                return (
                  <button
                    key={index}
                    className={`${styles.thumbnail} ${currentImage === image ? styles.active : ''}`}
                    onClick={() => setCurrentImage(image)}
                  >
                    <img 
                      src={hasValidImage 
                        ? image 
                        : 'https://via.placeholder.com/100x100/e9ecef/6c757d?text=No+Img'} 
                      alt={`${product?.title || 'Product'} - Thumbnail image ${index + 1} showing ${product?.title || 'item'} from Easy Get Pakistan`} 
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        console.log(`Thumbnail ${index + 1} failed to load:`, image);
                        e.currentTarget.src = 'https://via.placeholder.com/100x100/e9ecef/6c757d?text=Error';
                      }}
                      onLoad={() => {
                        if (hasValidImage) {
                          console.log(`Thumbnail ${index + 1} loaded successfully:`, image);
                        }
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            
            <div className={styles.priceSection}>
              {hasDiscount ? (
                <>
                  <div className={styles.discountPrices}>
                    <span className={styles.discountPrice}>PKR {Number(product.discount_price).toLocaleString()}</span>
                    <span className={styles.originalPrice}>PKR {Number(product.original_price).toLocaleString()}</span>
                  </div>
                  <div className={styles.discountBadge}>
                    <Tag size={16} className={styles.discountIcon} />
                    {discountPercentage}% OFF
                  </div>
                </>
              ) : (
                <span className={styles.price}>PKR {Number(product.price).toLocaleString()}</span>
              )}
            </div>

            {/* Stock & Demand Badges */}
            <div className={styles.stockBadgesSection}>
              <div className={styles.stockBadges}>
                <div className={`${styles.stockBadge} ${styles.limitedStock}`}>
                  <AlertTriangle size={12} className={styles.stockBadgeIcon} />
                  <span>Hurry! Few left</span>
                </div>
                <div className={`${styles.stockBadge} ${styles.highDemand}`}>
                  <Flame size={12} className={styles.stockBadgeIcon} />
                  <span>Trending now</span>
                </div>
              </div>
            </div>

            <div className={styles.trustBadgesSection}>
              <div className={styles.trustBadges}>
                <div className={styles.trustBadge}>
                  <ShieldCheck size={18} className={styles.trustIcon} />
                  <span>Secure Checkout</span>
                </div>
                <div className={styles.trustBadge}>
                  <Truck size={18} className={styles.trustIcon} />
                  <span>Fast Delivery</span>
                </div>
                <div className={styles.trustBadge}>
                  <CreditCard size={18} className={styles.trustIcon} />
                  <span>Cash on Delivery</span>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 1 && (
              <div className={styles.colorSection}>
                <h3 className={styles.colorLabel}>Color: {selectedColor?.name || 'Select Color'}</h3>
                <div className={styles.colorOptions}>
                  {product.colors.map((color: any, index: number) => (
                    <div key={index} className={styles.colorSwatch}>
                      <button
                        className={`${styles.colorButton} ${selectedColor?.name === color.name ? styles.selected : ''}`}
                        onClick={() => setSelectedColor(color)}
                        style={{ backgroundColor: getColorCode(color.name) }}
                        title={color.name}
                      />
                      <span className={styles.colorName}>{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.shortDescription}>
              <p>Experience the quality and reliability of {product.title}. This product is carefully crafted to meet your needs and exceed your expectations. Perfect for everyday use, it combines functionality with style to deliver exceptional value.</p>
            </div>

            <div className={styles.stockSection}>
              <div className={styles.stockInfo}>
                <span className={styles.inStock}>✓ In Stock</span>
              </div>
              <div className={styles.trustBadges}>
                <span>✔ Cash on Delivery</span>
                <span>✔ No advance payment</span>
                <span>✔ We will call to confirm your order</span>
                <span>✔ 7-Day Return Policy</span>
                <span>✔ Original Product</span>
              </div>
            </div>

            <div className={styles.purchaseSection}>
              <div className={styles.quantitySelector}>
                <label>Quantity:</label>
                <select 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className={styles.quantitySelect}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div className={styles.buttonGroup}>
                <button onClick={handleAddToCart} className={styles.addToCartButton}>
                  <ShoppingCart size={16} className={styles.buttonIcon} />
                  <span>Add to Cart</span>
                </button>
                <button onClick={handleBuyNow} className={styles.buyNowButton}>
                  <Zap size={16} className={styles.buttonIcon} />
                  <span>Buy Now</span>
                </button>
              </div>

              <div className={styles.deliveryInfo}>
                <p><span>FREE Delivery</span> by Easy Get</p>
                <p><span>Delivery in 3–5 days</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fullDescription}>
          <h2>Product Description</h2>
          <div className={styles.descriptionContent}>
            <h3>Specifications</h3>
            <p>
              {product.description || `The ${product.title} is a high-quality product that meets international standards. 
              It features advanced technology and innovative design to provide exceptional performance and reliability. 
              This product has been thoroughly tested to ensure it meets the highest quality standards and delivers 
              the best value for your investment. Perfect for both personal and professional use.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

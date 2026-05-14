"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import supabase from '@/lib/supabase';
import styles from './Checkout.module.css';
import { ShieldCheck, Truck, CreditCard, Tag, X } from 'lucide-react';
import { validatePromoCode, applyPromoCodeDiscount, updatePromoCodeUsage, formatPromoCode, testFetchAllPromoCodes, type PromoCode } from '@/lib/promoCode';

interface OrderForm {
  fullName: string;
  phoneNumber: string;
  address: string;
  city: string;
}

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
  quantity?: number;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartCount, setCart } = useCart();
  const [orderForm, setOrderForm] = useState<OrderForm>({
    fullName: '',
    phoneNumber: '',
    address: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [buyNowItem, setBuyNowItem] = useState<any>(null);
  
  // Promo code state
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromoCode, setAppliedPromoCode] = useState<PromoCode | null>(null);
  const [promoCodeError, setPromoCodeError] = useState('');
  const [promoCodeSuccess, setPromoCodeSuccess] = useState('');
  const [isApplyingPromoCode, setIsApplyingPromoCode] = useState(false);
  const [showPromoCodeInput, setShowPromoCodeInput] = useState(false);

  useEffect(() => {
    const buyNowItem = sessionStorage.getItem('buyNowItem');

    if (buyNowItem) {
      const item = JSON.parse(buyNowItem);
      setBuyNowItem(item);
      setCart([item]); // override cart with single item
    }

    // Test Supabase connection
    testFetchAllPromoCodes();
  }, []);

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => {
      const cartItem = item as any;
      const price = Number(cartItem.discount_price || cartItem.price);
      return total + (price * (cartItem.quantity || 1));
    }, 0);
    
    // Apply promo code discount if applicable
    if (appliedPromoCode) {
      return applyPromoCodeDiscount(subtotal, appliedPromoCode.discount);
    }
    
    return subtotal;
  };

  const handleApplyPromoCode = async () => {
    setPromoCodeError('');
    setPromoCodeSuccess('');
    setIsApplyingPromoCode(true);

    try {
      const result = await validatePromoCode(promoCodeInput);
      
      if (result.valid && result.promoCode) {
        setAppliedPromoCode(result.promoCode);
        setPromoCodeSuccess(`Code applied ✅`);
        setPromoCodeInput('');
        setShowPromoCodeInput(false);
      } else {
        setPromoCodeError(result.error || 'Invalid promo code');
      }
    } catch (error) {
      console.error('Error applying promo code:', error);
      setPromoCodeError('Failed to apply promo code. Please try again.');
    } finally {
      setIsApplyingPromoCode(false);
    }
  };

  const handleRemovePromoCode = () => {
    setAppliedPromoCode(null);
    setPromoCodeSuccess('');
    setPromoCodeError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!orderForm.fullName.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!orderForm.phoneNumber.trim()) {
      setError('Please enter your phone number');
      return false;
    }
    if (!orderForm.address.trim()) {
      setError('Please enter your address');
      return false;
    }
    if (!orderForm.city.trim()) {
      setError('Please enter your city');
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    if (!buyNowItem && cart.length === 0) {
      setError('Your cart is empty');
      return;
    }

    setIsSubmitting(true);

    try {
      // Determine products array (cart or buy now item)
      const products = buyNowItem ? [buyNowItem] : cart;
      
      const finalPrice = calculateTotal();
      
      const orderData = {
        product_id: products[0]?.id || null,
        quantity: products[0]?.quantity || 1,
        total_price: finalPrice,
        promo_code: appliedPromoCode ? appliedPromoCode.code : null,
        discount_amount: appliedPromoCode ? appliedPromoCode.discount : null,
        user_info: {
          full_name: orderForm.fullName,
          phone_number: orderForm.phoneNumber,
          address: orderForm.address,
          city: orderForm.city
        },
        payment_method: paymentMethod,
        status: 'pending',
        selected_color: products[0]?.selectedColor || null,
        created_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('orders')
        .insert([orderData])
        .select()
        .single();

      if (error) {
        console.error('Error placing order:', error);
        setError('Failed to place order. Please try again.');
        return;
      }

      // Update promo code usage if a promo code was applied
      if (appliedPromoCode) {
        await updatePromoCodeUsage(appliedPromoCode.code);
      }

      // Clear cart and buy now item after successful order
      setCart([]);
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('buyNowItem');
      }
      
      // Redirect to success page with Order ID
      router.push(`/order-success?orderId=${data.id}`);
    } catch (err) {
      console.error('Error placing order:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartCount === 0) {
    return (
      <div className={styles.emptyCheckout}>
        <div className="container">
          <div className={styles.emptyContent}>
            <h1>Your cart is empty</h1>
            <p>Add items to your cart to proceed with checkout.</p>
            <Link href="/" className={styles.continueButton}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  
  return (
    <div className={styles.checkoutPage}>
      <div className="container">
        <h1 className={styles.title}>Checkout</h1>
        
        <div className={styles.checkoutContent}>
          {/* Left Side - Cart Products */}
          <div className={styles.orderItems}>
            <h2 className={styles.sectionTitle}>Order Items ({cart.length})</h2>
            <div className={styles.itemsList}>
              {cart.map((item, index) => {
                const cartItem = item as any;
                return (
                <div key={`${cartItem.id}-${index}`} className={styles.orderItem}>
                  <div className={styles.itemImage}>
                    <img src={cartItem.image} alt={cartItem.title} />
                  </div>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemTitle}>{cartItem.title}</h3>
                    <p className={styles.itemPrice}>
                      PKR {Number(cartItem.discount_price || cartItem.price).toLocaleString()}
                    </p>
                  </div>
                  <div className={styles.itemQuantity}>
                    <span>Qty: {cartItem.quantity || 1}</span>
                  </div>
                  <div className={styles.itemSubtotal}>
                    <span>PKR {(Number(cartItem.discount_price || cartItem.price) * (cartItem.quantity || 1)).toLocaleString()}</span>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Order Summary & Checkout Form */}
          <div className={styles.checkoutForm}>
            <div className={styles.orderSummary}>
              <h2 className={styles.sectionTitle}>Order Summary</h2>
              
              <div className={styles.summaryRow}>
                <span>Subtotal ({cart.length} items)</span>
                <span>PKR {calculateTotal().toLocaleString()}</span>
              </div>
              
              {/* Promo Code Section */}
              <div className={styles.promoCodeSection}>
                {!appliedPromoCode ? (
                  <>
                    {!showPromoCodeInput ? (
                      <button
                        onClick={() => setShowPromoCodeInput(true)}
                        className={styles.havePromoCodeButton}
                      >
                        Have a promo code?
                      </button>
                    ) : (
                      <div className={styles.promoCodeInputContainer}>
                        <div className={styles.promoCodeInputWrapper}>
                          <input
                            type="text"
                            value={promoCodeInput}
                            onChange={(e) => setPromoCodeInput(e.target.value)}
                            placeholder="Enter promo code"
                            className={styles.promoCodeInput}
                            onKeyPress={(e) => e.key === 'Enter' && handleApplyPromoCode()}
                          />
                          <button
                            onClick={handleApplyPromoCode}
                            disabled={isApplyingPromoCode || !promoCodeInput.trim()}
                            className={styles.applyPromoButton}
                          >
                            {isApplyingPromoCode ? 'Applying...' : 'Apply'}
                          </button>
                        </div>
                        {promoCodeError && (
                          <div className={styles.promoCodeError}>{promoCodeError}</div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <div className={styles.appliedPromoCode}>
                    <div className={styles.appliedPromoCodeInfo}>
                      <span className={styles.appliedPromoCodeLabel}>{promoCodeSuccess}</span>
                      <span className={styles.appliedPromoCodeDiscount}>- PKR {appliedPromoCode.discount}</span>
                    </div>
                    <button
                      onClick={handleRemovePromoCode}
                      className={styles.removePromoButton}
                      title="Remove promo code"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
              
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              
              <div className={styles.summaryDivider}></div>
              
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span>PKR {calculateTotal().toLocaleString()}</span>
              </div>
            </div>

            <div className={styles.checkoutDetails}>
              <h2 className={styles.sectionTitle}>Shipping Information</h2>
              
              {error && <div className={styles.errorMessage}>{error}</div>}
              
              <form onSubmit={handlePlaceOrder} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.label}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={orderForm.fullName}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phoneNumber" className={styles.label}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={orderForm.phoneNumber}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="03XX-XXXXXXX"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address" className={styles.label}>
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={orderForm.address}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Street address, apartment, etc."
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.label}>
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={orderForm.city}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Karachi, Lahore, Islamabad, etc."
                    required
                  />
                </div>

                <div className={styles.paymentSection}>
                  <h3 className={styles.sectionTitle}>Payment Method</h3>
                  <div className={styles.paymentCard}>
                    <label className={styles.paymentOption}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="COD"
                        checked={paymentMethod === 'COD'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className={styles.paymentRadio}
                      />
                      <span className={styles.paymentCheckmark}>✔</span>
                      <div className={styles.paymentContent}>
                        <div className={styles.paymentTitle}>Cash on Delivery (COD)</div>
                        <div className={styles.paymentDescription}>
                          Pay when you receive your order
                        </div>
                      </div>
                    </label>
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

                <button
                  type="submit"
                  className={`${styles.placeOrderButton} ${isSubmitting ? styles.submitting : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}></span>
                      Placing Order...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle, Copy, Truck, ArrowRight, Package, Clock, MapPin, Mail, Shield, Star, MessageCircle } from 'lucide-react';

export default function OrderSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  // Get Order ID from URL query parameters
  const orderId = searchParams.get('orderId');

  const handleCopyOrderId = async () => {
    if (!orderId) return;
    
    try {
      await navigator.clipboard.writeText(orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy Order ID:', err);
    }
  };

  const handleTrackOrder = () => {
    if (!orderId) return;
    
    // Navigate to track order page with Order ID pre-filled
    router.push(`/track-order?orderId=${encodeURIComponent(orderId)}`);
  };

  const handleContinueShopping = () => {
    router.push('/');
  };

  const handleContactInstagram = () => {
    window.open('https://www.instagram.com/easy_getstore?igsh=MWdkdXhtNWIwaGFsbA==', '_blank');
  };

  return (
    <div style={{ 
      backgroundColor: 'var(--color-background)', 
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(135deg, var(--color-background) 0%, #E8F0FE 100%)'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
      }}>
        
        {/* Main Success Card */}
        <div style={{ 
          width: '100%',
          maxWidth: '800px',
          backgroundColor: 'var(--color-surface)', 
          borderRadius: 'var(--radius-lg)', 
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease'
        }}>
          
          {/* Success Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #146C2E 0%, #1E7E34 100%)',
            color: 'white',
            padding: '24px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
              opacity: 0.3
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '12px',
                marginBottom: '8px'
              }}>
                <CheckCircle style={{ width: '32px', height: '32px' }} />
                <span style={{ fontSize: '24px', fontWeight: '600' }}>
                  Order Placed Successfully!
                </span>
              </div>
              <p style={{ fontSize: '16px', opacity: 0.9, margin: 0 }}>
                Thank you for your purchase. Your order is confirmed!
              </p>
            </div>
          </div>
          
          {/* Main Content */}
          <div style={{ padding: '40px' }}>
            
            {/* Success Message */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#E8F5E8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <CheckCircle style={{ width: '40px', height: '40px', color: '#146C2E' }} />
              </div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '600', 
                color: 'var(--color-dark)', 
                marginBottom: '12px',
                lineHeight: '1.2'
              }}>
                Thank You for Your Order!
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: 'var(--color-text-muted)', 
                lineHeight: '1.6',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                Your order has been successfully placed and will be processed shortly. 
                You'll receive an email confirmation with all the details.
              </p>
            </div>

            {/* Order ID Section */}
            <div style={{ 
              backgroundColor: '#F8F9FA', 
              border: '2px solid #E9ECEF',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              marginBottom: '32px'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ 
                    fontSize: '14px', 
                    color: 'var(--color-text-muted)', 
                    marginBottom: '8px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Order Number
                  </div>
                  <div style={{ 
                    fontSize: '20px', 
                    fontWeight: '700', 
                    color: 'var(--color-dark)',
                    fontFamily: 'monospace',
                    letterSpacing: '1px'
                  }}>
                    #{orderId || 'Loading...'}
                  </div>
                </div>
                <button
                  onClick={handleCopyOrderId}
                  disabled={!orderId}
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    opacity: !orderId ? '0.5' : '1',
                    cursor: !orderId ? 'not-allowed' : 'pointer',
                    boxShadow: !orderId ? 'none' : '0 4px 12px rgba(255, 153, 0, 0.3)'
                  }}
                  onMouseEnter={(e: any) => {
                    if (orderId) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 153, 0, 0.4)';
                    }
                  }}
                  onMouseLeave={(e: any) => {
                    if (orderId) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 153, 0, 0.3)';
                    }
                  }}
                >
                  <Copy style={{ width: '16px', height: '16px' }} />
                  {copied ? 'Copied!' : 'Copy Order ID'}
                </button>
              </div>
              <div style={{ 
                fontSize: '13px', 
                color: 'var(--color-text-muted)', 
                marginTop: '16px',
                fontStyle: 'italic'
              }}>
                💡 Save this order number to track your order status and delivery updates.
              </div>
            </div>

            {/* Order Status Timeline */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                color: 'var(--color-dark)', 
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                Order Status
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px',
                position: 'relative'
              }}>
                {/* Progress Line */}
                <div style={{
                  position: 'absolute',
                  left: '32px',
                  top: '32px',
                  bottom: '32px',
                  width: '2px',
                  backgroundColor: '#E9ECEF',
                  zIndex: 1
                }} />
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ 
                    backgroundColor: '#146C2E', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '32px', 
                    height: '32px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(20, 108, 46, 0.3)'
                  }}>
                    <CheckCircle style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Order Confirmed
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                      Your order has been received and is being processed
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ 
                    backgroundColor: '#E77E21', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '32px', 
                    height: '32px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(231, 126, 33, 0.3)'
                  }}>
                    <Package style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-dark)', marginBottom: '4px' }}>
                      Processing
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                      We're preparing your order for shipment
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative', zIndex: 2 }}>
                  <div style={{ 
                    backgroundColor: '#D5D9D9', 
                    color: 'var(--color-text-muted)', 
                    borderRadius: '50%', 
                    width: '32px', 
                    height: '32px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Truck style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                      Shipping
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                      Your order will be shipped soon
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help Section */}
            <div style={{
              background: 'linear-gradient(135deg, #FFF5F5 0%, #FFF0F0 100%)',
              border: '1px solid #FFE5E5',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <MessageCircle style={{ width: '20px', height: '20px', color: '#E11D48' }} />
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: '#E11D48',
                    margin: 0
                  }}>
                    Need help with your order?
                  </h3>
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#6B7280', 
                  marginBottom: '16px',
                  margin: '0 0 16px 0'
                }}>
                  We're here to help! Contact us on Instagram for quick support with your order.
                </p>
                <button
                  onClick={handleContactInstagram}
                  style={{
                    backgroundColor: '#E11D48',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 24px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(225, 29, 72, 0.3)'
                  }}
                  onMouseEnter={(e: any) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(225, 29, 72, 0.4)';
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(225, 29, 72, 0.3)';
                  }}
                >
                  <MessageCircle style={{ width: '16px', height: '16px' }} />
                  Contact us on Instagram
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              flexDirection: 'column'
            }}>
              <button
                onClick={handleTrackOrder}
                disabled={!orderId}
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                  opacity: !orderId ? '0.5' : '1',
                  cursor: !orderId ? 'not-allowed' : 'pointer',
                  boxShadow: !orderId ? 'none' : '0 4px 12px rgba(255, 153, 0, 0.3)',
                  flex: 1
                }}
                onMouseEnter={(e: any) => {
                  if (orderId) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 153, 0, 0.4)';
                  }
                }}
                onMouseLeave={(e: any) => {
                  if (orderId) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 153, 0, 0.3)';
                  }
                }}
              >
                <Truck style={{ width: '20px', height: '20px' }} />
                Track Order
              </button>
              
              <button
                onClick={handleContinueShopping}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  border: '2px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                  flex: 1
                }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Continue Shopping
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

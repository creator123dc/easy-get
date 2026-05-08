"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './TrackOrder.module.css';
import supabase from '@/lib/supabase';
import { Search, Package, ExternalLink, X } from 'lucide-react';
import Link from 'next/link';

interface Order {
  id: string;
  created_at: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'out_for_delivery' | 'delivered' | 'cancelled';
  total_price: number;
  user_info: {
    full_name: string;
    phone_number: string;
    address: string;
    city: string;
  };
  product_id: string;
  quantity: number;
  selected_color: string;
  product?: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
}

export default function TrackOrderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  // Auto-fill Order ID from URL parameters
  useEffect(() => {
    const orderIdParam = searchParams.get('orderId');
    if (orderIdParam) {
      setOrderId(orderIdParam);
    }
  }, [searchParams]);

  const handleReportIssue = () => {
    // Open the modal
    setShowReportModal(true);
  };

  const handleReportNow = () => {
    // Open Instagram and close modal
    window.open('https://www.instagram.com/easy.get99', '_blank');
    setShowReportModal(false);
  };

  const handleCloseModal = () => {
    setShowReportModal(false);
  };

  const handleTrackOrder = async () => {
    if (!orderId.trim() || !phoneNumber.trim()) {
      setError('Please enter both Order ID and Phone Number');
      return;
    }

    // Clean phone input: remove spaces, dashes, parentheses, etc.
    const cleanPhone = phoneNumber.replace(/\D/g, '').replace(/[^\d]/g, '');
    
    // Clean Order ID: remove "Order #" prefix and any spaces
    let cleanOrderId = orderId.trim();
    if (cleanOrderId.toLowerCase().startsWith('order #')) {
      cleanOrderId = cleanOrderId.substring(7).trim();
    } else if (cleanOrderId.toLowerCase().startsWith('order#')) {
      cleanOrderId = cleanOrderId.substring(6).trim();
    }

    // Validate UUID format (basic validation)
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(cleanOrderId)) {
      setError('Invalid Order ID format. Please check your Order ID.');
      return;
    }

    setLoading(true);
    setError('');
    setSearched(true);
    setOrder(null);

    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          product:products (
            id,
            title,
            price,
            image
          )
        `)
        .eq('id', cleanOrderId)
        .eq('user_info->>phone_number', cleanPhone)
        .single();

      if (error) {
        console.error('Error fetching order:', error);
        setError('No order found. Please check your Order ID and phone number.');
      } else {
        setOrder(data);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An error occurred while fetching orders');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#6B7280'; // Gray
      case 'confirmed':
        return '#2563EB'; // Blue
      case 'shipped':
        return '#F97316'; // Orange
      case 'out_for_delivery':
        return '#F59E0B'; // Amber/Orange
      case 'delivered':
        return '#10B981'; // Green
      case 'cancelled':
        return '#DC3545'; // Red
      default:
        return '#6B7280';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'confirmed':
        return 'Confirmed';
      case 'shipped':
        return 'Shipped';
      case 'out_for_delivery':
        return 'Out for Delivery';
      case 'delivered':
        return 'Delivered';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Search Section */}
        <div className={styles.searchSection}>
          <div className={styles.searchCard}>
            <h1 className={styles.title}>Track Your Order</h1>
            <p className={styles.subtitle}>Enter your order details to track your package</p>
            
            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="orderId" className={styles.formLabel}>
                  Order ID
                </label>
                <input
                  type="text"
                  id="orderId"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="e.g., Order #12345678-1234-1234-1234-123456789012"
                  className={styles.formInput}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleTrackOrder();
                    }
                  }}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className={styles.formInput}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleTrackOrder();
                    }
                  }}
                />
              </div>
              
              <button
                onClick={handleTrackOrder}
                disabled={loading}
                className={styles.trackButton}
              >
                {loading ? (
                  <>
                    <div className={styles.loadingSpinner}></div>
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search size={18} />
                    Track Order
                  </>
                )}
              </button>
              
              {error && (
                <div className={styles.error}>
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        {searched && (
          <div className={styles.resultsSection}>
            {loading && (
              <div className={styles.loadingState}>
                <div className={styles.loadingSpinner}></div>
                <p>Searching for your order...</p>
              </div>
            )}

            {!loading && !order && !error && (
              <div className={styles.noOrderCard}>
                <div className={styles.noOrderIcon}>
                  <Package size={48} />
                </div>
                <h3>No Order Found</h3>
                <p>We couldn't find any order with the provided details. Please check your Order ID and phone number.</p>
                <Link href="/" className={styles.backButton}>
                  ← Back to Home
                </Link>
              </div>
            )}

            {order && (
              <div className={styles.orderCard}>
                {/* Order Header */}
                <div className={styles.orderHeader}>
                  <h2 className={styles.orderTitle}>Track Your Order</h2>
                  <div className={styles.orderMeta}>
                    <div className={styles.orderId}>
                      <span className={styles.orderIdLabel}>Order ID:</span>
                      <span className={styles.orderIdValue}>#{order.id}</span>
                    </div>
                    <div className={styles.orderDate}>
                      <span className={styles.orderDateLabel}>Placed on:</span>
                      <span className={styles.orderDateValue}>{formatDate(order.created_at)}</span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={styles.statusSection}>
                  <div className={styles.statusLabel}>Current Status</div>
                  <div 
                    className={styles.statusBadge}
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  >
                    {getStatusText(order.status)}
                  </div>
                </div>

                {/* Order Details */}
                <div className={styles.orderDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Total Amount</span>
                    <span className={styles.detailValue}>PKR {Number(order.total_price || 0).toLocaleString()}</span>
                  </div>
                </div>

                {/* Products List */}
                <div className={styles.productsSection}>
                  <h3 className={styles.sectionTitle}>Products</h3>
                  <div className={styles.productList}>
                    <div className={styles.productItem}>
                      <div className={styles.productInfo}>
                        <div className={styles.productName}>
                          {order.product?.title || `Product ${order.product_id}`}
                        </div>
                        <div className={styles.productDetails}>
                          <span className={styles.productQuantity}>Quantity: {order.quantity}</span>
                          {order.selected_color && (
                            <span className={styles.productColor}>Color: {order.selected_color}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div className={styles.customerSection}>
                  <h3 className={styles.sectionTitle}>Customer Information</h3>
                  <div className={styles.customerInfo}>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Name</span>
                      <span className={styles.infoValue}>{order.user_info?.full_name || 'N/A'}</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Phone</span>
                      <span className={styles.infoValue}>{order.user_info?.phone_number || 'N/A'}</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Address</span>
                      <span className={styles.infoValue}>
                        {order.user_info?.address || 'N/A'}, {order.user_info?.city || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Report Issue Button - Only show for delivered orders */}
                {order.status === 'delivered' && (
                  <div className={styles.helpSection}>
                    <button
                      onClick={handleReportIssue}
                      className={styles.helpButton}
                    >
                      <ExternalLink size={16} />
                      Report Issue
                    </button>
                  </div>
                )}

                {/* Back Button */}
                <div className={styles.actionsSection}>
                  <Link href="/" className={styles.backButton}>
                    ← Back to Home
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Report Issue Modal */}
        {showReportModal && (
          <div className={styles.modalOverlay} onClick={handleCloseModal}>
            <div 
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Report an Issue</h3>
                <button 
                  className={styles.modalCloseButton}
                  onClick={handleCloseModal}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className={styles.modalBody}>
                <p className={styles.modalText}>
                  Please send your Order ID along with photo/video proof so we can verify your issue.
                </p>
                <p className={styles.modalNote}>
                  Without proof, your request may not be accepted.
                </p>
              </div>

              {/* Modal Footer */}
              <div className={styles.modalFooter}>
                <button 
                  className={styles.modalSecondaryButton}
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button 
                  className={styles.modalPrimaryButton}
                  onClick={handleReportNow}
                >
                  Report Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

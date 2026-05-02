"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import supabase from '@/lib/supabase';
import styles from './Orders.module.css';
import { Package, Truck, Phone, MapPin, User, ShoppingBag, Calendar, DollarSign } from 'lucide-react';

interface UserInfo {
  full_name: string;
  phone_number: string;
  address: string;
  city: string;
}

interface Order {
  id: string;
  product_id: string;
  quantity: number;
  selected_color: string;
  user_info: UserInfo;
  total_price: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'out_for_delivery' | 'delivered';
  created_at: string;
  // Joined product data
  product?: {
    id: string;
    title: string;
    image: string;
    price: number;
  };
}

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const pass = prompt("Enter Admin Password:");

    if (pass !== "admin123") {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    filterOrders();
  }, [orders, activeFilter, searchQuery]);

  const filterOrders = () => {
    let filtered = [...orders];

    // Apply status filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(order => order.status === activeFilter);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(order => 
        order.user_info.full_name.toLowerCase().includes(query) ||
        order.user_info.phone_number.toLowerCase().includes(query)
      );
    }

    setFilteredOrders(filtered);
  };

  const calculateStats = () => {
    const totalOrders = orders?.length || 0;
    const totalRevenue = (orders || []).reduce((sum, order) => sum + order.total_price, 0);
    const pendingOrders = (orders || []).filter(order => order.status === 'pending').length;
    const deliveredOrders = (orders || []).filter(order => order.status === 'delivered').length;

    return { totalOrders, totalRevenue, pendingOrders, deliveredOrders };
  };

  const processRevenueChartData = () => {
    if (!orders || orders.length === 0) return [];

    // Group orders by date
    const groupedData = (orders || []).reduce((acc: any, order) => {
      const date = new Date(order.created_at).toLocaleDateString('en-PK');
      if (!acc[date]) {
        acc[date] = { date, revenue: 0 };
      }
      acc[date].revenue += order.total_price;
      return acc;
    }, {});

    // Convert to array and sort by date
    return Object.values(groupedData)
      .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-30); // Last 30 days
  };

  const processOrderStatusData = () => {
    if (!orders || orders.length === 0) return [];

    const statusCounts = (orders || []).reduce((acc: any, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});

    // Convert to array format for pie chart
    return Object.entries(statusCounts).map(([status, count]) => ({
      name: status.charAt(0).toUpperCase() + status.slice(1),
      value: count,
      color: getStatusColor(status)
    }));
  };

  const calculateDailyAndWeeklySales = () => {
    if (!orders || orders.length === 0) return { todayRevenue: 0, weeklyRevenue: 0 };

    const today = new Date();
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const weekAgo = new Date(todayStart.getTime() - 7 * 24 * 60 * 60 * 1000);

    const todayRevenue = (orders || [])
      .filter(order => new Date(order.created_at) >= todayStart)
      .reduce((sum, order) => sum + order.total_price, 0);

    const weeklyRevenue = (orders || [])
      .filter(order => new Date(order.created_at) >= weekAgo)
      .reduce((sum, order) => sum + order.total_price, 0);

    return { todayRevenue, weeklyRevenue };
  };

  const calculateBestSellingProducts = () => {
    if (!orders || orders.length === 0) return [];

    const productCounts: { [key: string]: number } = {};
    
    // Count total quantity sold per product across all orders
    (orders || []).forEach(order => {
      // Handle single product orders (not products array)
      const productName = order.product?.title || `Product ${order.product_id}`;
      const quantity = Number(order.quantity) || 1;
      productCounts[productName] = (productCounts[productName] || 0) + quantity;
    });

    // Convert to array and sort by count (descending)
    const sortedProducts = Object.entries(productCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // Top 5 products

    return sortedProducts;
  };

  const calculateGrowthMetrics = () => {
    if (!orders || orders.length === 0) {
      return {
        thisWeekOrders: 0,
        lastWeekOrders: 0,
        thisWeekRevenue: 0,
        lastWeekRevenue: 0,
        ordersGrowth: 0,
        revenueGrowth: 0
      };
    }

    const today = new Date();
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const weekAgo = new Date(todayStart.getTime() - 7 * 24 * 60 * 60 * 1000);
    const twoWeeksAgo = new Date(todayStart.getTime() - 14 * 24 * 60 * 60 * 1000);

    // This week data
    const thisWeekOrders = (orders || []).filter(order => new Date(order.created_at) >= weekAgo);
    const thisWeekRevenue = thisWeekOrders.reduce((sum, order) => sum + order.total_price, 0);

    // Last week data
    const lastWeekOrders = (orders || []).filter(order => {
      const orderDate = new Date(order.created_at);
      return orderDate >= twoWeeksAgo && orderDate < weekAgo;
    });
    const lastWeekRevenue = lastWeekOrders.reduce((sum, order) => sum + order.total_price, 0);

    // Calculate growth percentages
    const ordersGrowth = lastWeekOrders.length > 0 
      ? ((thisWeekOrders.length - lastWeekOrders.length) / lastWeekOrders.length) * 100 
      : 0;

    const revenueGrowth = lastWeekRevenue > 0 
      ? ((thisWeekRevenue - lastWeekRevenue) / lastWeekRevenue) * 100 
      : 0;

    return {
      thisWeekOrders: thisWeekOrders.length,
      lastWeekOrders: lastWeekOrders.length,
      thisWeekRevenue,
      lastWeekRevenue,
      ordersGrowth,
      revenueGrowth
    };
  };

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          product:products (
            id,
            title,
            image,
            price
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to load orders');
        return;
      }

      setOrders(data || []);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    setUpdatingStatus(orderId);
    
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: newStatus })
        .eq('id', orderId);

      if (error) {
        console.error('Error updating order status:', error);
        setError('Failed to update order status');
        return;
      }

      // Update local state
      setOrders(prev => 
        prev.map(order => 
          order.id === orderId ? { ...order, status: newStatus as Order['status'] } : order
        )
      );
    } catch (err) {
      console.error('Error updating order status:', err);
      setError('Failed to update order status');
    } finally {
      setUpdatingStatus(null);
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
      default:
        return '#6B7280';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-PK', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className={styles.adminOrdersPage}>
        <div className="container">
          <h1 className={styles.title}>Orders Management</h1>
          <div className={styles.loadingState}>
            <div className={styles.loadingCard}>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
            </div>
            <div className={styles.loadingCard}>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
            </div>
            <div className={styles.loadingCard}>
              <div className={styles.loadingRow}></div>
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
      <div className={styles.adminOrdersPage}>
        <div className="container">
          <h1 className={styles.title}>Orders Management</h1>
          <div className={styles.errorState}>
            <p>{error}</p>
            <button onClick={fetchOrders} className={styles.retryButton}>
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const stats = calculateStats();
  const salesData = calculateDailyAndWeeklySales();
  const revenueChartData = processRevenueChartData();
  const orderStatusData = processOrderStatusData();
  const bestSellingProducts = calculateBestSellingProducts();
  const growthMetrics = calculateGrowthMetrics();

  return (
    <div className={styles.adminOrdersPage}>
      <div className="container">
        <h1 className={styles.title}>Orders Dashboard</h1>
        
        {/* Top Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📊</div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>{stats.totalOrders}</div>
              <div className={styles.statLabel}>Total Orders</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💰</div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>PKR {stats.totalRevenue.toLocaleString()}</div>
              <div className={styles.statLabel}>Total Revenue</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>�</div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>PKR {salesData.todayRevenue.toLocaleString()}</div>
              <div className={styles.statLabel}>Today Revenue</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📈</div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>PKR {salesData.weeklyRevenue.toLocaleString()}</div>
              <div className={styles.statLabel}>Last 7 Days</div>
            </div>
          </div>
        </div>

        {/* Growth Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📊</div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>
                {growthMetrics.ordersGrowth >= 0 ? (
                  <span className={styles.growthPositive}>
                    ↑ {growthMetrics.ordersGrowth.toFixed(1)}%
                  </span>
                ) : (
                  <span className={styles.growthNegative}>
                    ↓ {Math.abs(growthMetrics.ordersGrowth).toFixed(1)}%
                  </span>
                )}
              </div>
              <div className={styles.statLabel}>Orders Growth</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💰</div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>
                {growthMetrics.revenueGrowth >= 0 ? (
                  <span className={styles.growthPositive}>
                    ↑ {growthMetrics.revenueGrowth.toFixed(1)}%
                  </span>
                ) : (
                  <span className={styles.growthNegative}>
                    ↓ {Math.abs(growthMetrics.revenueGrowth).toFixed(1)}%
                  </span>
                )}
              </div>
              <div className={styles.statLabel}>Revenue Growth</div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className={styles.chartsSection}>
          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>Revenue Trend (Last 30 Days)</h3>
            <div className={styles.chartContent}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }}
                    stroke="#666"
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    stroke="#666"
                  />
                  <Tooltip 
                    formatter={(value: any) => [`PKR ${value.toLocaleString()}`, 'Revenue']}
                    contentStyle={{ 
                      backgroundColor: '#fff',
                      border: '1px solid #ddd',
                      borderRadius: '4px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#FF9900" 
                    strokeWidth={2}
                    dot={{ fill: '#FF9900', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>Orders by Status</h3>
            <div className={styles.chartContent}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {orderStatusData.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => [value, 'Orders']}
                    contentStyle={{ 
                      backgroundColor: '#fff',
                      border: '1px solid #ddd',
                      borderRadius: '4px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Best Selling Products Section */}
        <div className={styles.bestSellingSection}>
          <div className={styles.bestSellingCard}>
            <h3 className={styles.sectionTitle}>Top Selling Products</h3>
            <div className={styles.productsList}>
              {bestSellingProducts.length > 0 ? (
                bestSellingProducts.map((product, index) => (
                  <div key={index} className={styles.productItem}>
                    <div className={styles.productRank}>
                      <span className={styles.rankNumber}>{index + 1}</span>
                    </div>
                    <div className={styles.productInfo}>
                      <div className={styles.productName}>{product.name}</div>
                      <div className={styles.productCount}>{product.count} sold</div>
                    </div>
                    <div className={styles.productIcon}>🏆</div>
                  </div>
                ))
              ) : (
                <div className={styles.noProducts}>
                  <p>No products sold yet</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Filter and Search Section */}
        <div className={styles.controlsSection}>
          <div className={styles.filterTabs}>
            <button
              className={`${styles.filterTab} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All ({orders.length})
            </button>
            <button
              className={`${styles.filterTab} ${activeFilter === 'pending' ? styles.active : ''}`}
              onClick={() => setActiveFilter('pending')}
            >
              Pending ({orders.filter(o => o.status === 'pending').length})
            </button>
            <button
              className={`${styles.filterTab} ${activeFilter === 'confirmed' ? styles.active : ''}`}
              onClick={() => setActiveFilter('confirmed')}
            >
              Confirmed ({orders.filter(o => o.status === 'confirmed').length})
            </button>
            <button
              className={`${styles.filterTab} ${activeFilter === 'shipped' ? styles.active : ''}`}
              onClick={() => setActiveFilter('shipped')}
            >
              Shipped ({orders.filter(o => o.status === 'shipped').length})
            </button>
            <button
              className={`${styles.filterTab} ${activeFilter === 'out_for_delivery' ? styles.active : ''}`}
              onClick={() => setActiveFilter('out_for_delivery')}
            >
              Out for Delivery ({orders.filter(o => o.status === 'out_for_delivery').length})
            </button>
            <button
              className={`${styles.filterTab} ${activeFilter === 'delivered' ? styles.active : ''}`}
              onClick={() => setActiveFilter('delivered')}
            >
              Delivered ({orders.filter(o => o.status === 'delivered').length})
            </button>
          </div>
          
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search by name or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* Orders Table */}
        {loading ? (
          <div className={styles.loadingState}>
            <div className={styles.loadingCard}>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
            </div>
            <div className={styles.loadingCard}>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
            </div>
            <div className={styles.loadingCard}>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
              <div className={styles.loadingRow}></div>
            </div>
          </div>
        ) : error ? (
          <div className={styles.errorState}>
            <p>{error}</p>
            <button onClick={fetchOrders} className={styles.retryButton}>
              Retry
            </button>
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No orders found</p>
          </div>
        ) : (
          <div className={styles.ordersTable}>
            <div className={styles.tableHeader}>
              <div>Product</div>
              <div>Customer</div>
              <div>Contact</div>
              <div>Address</div>
              <div>Details</div>
              <div>Status</div>
              <div>Date</div>
              <div>Actions</div>
            </div>
            {filteredOrders.map((order) => {
              const userInfo = typeof order.user_info === 'string' 
                ? JSON.parse(order.user_info) 
                : order.user_info;
              
              return (
                <div key={order.id} className={styles.tableRow}>
                  <div className={styles.productInfo}>
                    <div className={styles.productImage}>
                      {(() => {
                        // Debug: Log product object to verify image field
                        console.log('Admin Order Product:', order.product);
                        
                        const imageUrl = order.product?.image;
                        const hasValidImage = imageUrl && imageUrl.trim() !== '';
                        
                        return (
                          <img 
                            src={hasValidImage 
                              ? imageUrl 
                              : 'https://via.placeholder.com/300x300/e9ecef/6c757d?text=No+Image'} 
                            alt={order.product?.title || 'Product'} 
                            onError={(e) => {
                              console.log('Image failed to load:', imageUrl);
                              e.currentTarget.src = 'https://via.placeholder.com/300x300/e9ecef/6c757d?text=Image+Error';
                            }}
                            onLoad={() => {
                              if (hasValidImage) {
                                console.log('Image loaded successfully:', imageUrl);
                              }
                            }}
                          />
                        );
                      })()}
                    </div>
                    <div className={styles.productDetails}>
                      <h4 className={styles.productTitle}>
                        {order.product?.title || `Product ${order.product_id}`}
                      </h4>
                      <div className={styles.productMeta}>
                        <ShoppingBag size={14} className={styles.metaIcon} />
                        <span>Qty: {order.quantity}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.customerInfo}>
                    <div className={styles.customerName}>
                      <User size={16} className={styles.nameIcon} />
                      {userInfo?.full_name || 'Unknown'}
                    </div>
                  </div>
                  
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <Phone size={16} className={styles.contactIcon} />
                      <span>{userInfo?.phone_number || 'N/A'}</span>
                    </div>
                  </div>
                  
                  <div className={styles.addressInfo}>
                    <div className={styles.addressItem}>
                      <MapPin size={16} className={styles.addressIcon} />
                      <div>
                        <div className={styles.addressLine}>
                          {userInfo?.address || 'No address'}
                        </div>
                        <div className={styles.cityLine}>
                          {userInfo?.city || 'No city'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.orderDetails}>
                    <div className={styles.colorInfo}>
                      <span className={styles.colorLabel}>Color:</span>
                      <span className={styles.colorValue}>
                        {order.selected_color || 'N/A'}
                      </span>
                    </div>
                    <div className={styles.priceInfo}>
                      <DollarSign size={14} className={styles.priceIcon} />
                      <span className={styles.price}>
                        PKR {order.total_price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className={styles.orderStatus}>
                    <span 
                      className={styles.statusBadge}
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {order.status}
                    </span>
                  </div>
                  
                  <div className={styles.orderDate}>
                    <Calendar size={14} className={styles.dateIcon} />
                    <span>{formatDate(order.created_at)}</span>
                  </div>
                  
                  <div className={styles.orderActions}>
                    <div className={styles.statusActions}>
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        disabled={updatingStatus === order.id}
                        className={styles.statusSelect}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="shipped">Shipped</option>
                        <option value="out_for_delivery">Out for Delivery</option>
                        <option value="delivered">Delivered</option>
                      </select>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

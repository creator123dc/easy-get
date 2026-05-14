"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaTruck, FaShieldAlt, FaUndo, FaQuestionCircle, FaUsers, FaCheck } from 'react-icons/fa';
import { FiSearch, FiChevronDown, FiChevronUp, FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import styles from './Help.module.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Orders & Delivery
  {
    id: 'delivery-1',
    question: 'How long does delivery take?',
    answer: 'Delivery usually takes 3-5 business days in major cities like Lahore, Karachi, and Islamabad. For other areas, it might take 5-7 days. We\'ll send you tracking info so you can follow your package every step of the way.',
    category: 'Orders & Delivery'
  },
  {
    id: 'delivery-2',
    question: 'Is delivery really free?',
    answer: 'Yes, absolutely! No hidden fees, no surprise charges. The price you see is exactly what you pay. We believe in transparent pricing - what you see is what you get.',
    category: 'Orders & Delivery'
  },
  {
    id: 'delivery-3',
    question: 'Can I track my order?',
    answer: 'Once your order ships, we\'ll send you a tracking number via SMS. You can check where your package is right from our website. Track your order in real-time.',
    category: 'Orders & Delivery'
  },
  {
    id: 'delivery-4',
    question: 'What if I\'m not home when delivery arrives?',
    answer: 'Our delivery team will call you first. If you miss them, they\'ll try again the next day. You can also leave special delivery instructions during checkout.',
    category: 'Orders & Delivery'
  },

  // Payment
  {
    id: 'payment-1',
    question: 'Can I pay when I get my order?',
    answer: 'Absolutely! Cash on Delivery (COD) is our most popular payment method. You only pay when you\'re holding your new items in your hands. Safe, simple, and totally secure.',
    category: 'Payment'
  },
  {
    id: 'payment-2',
    question: 'Can I pay online with card?',
    answer: 'Right now we focus on Cash on Delivery to keep things simple and secure for everyone. But we\'re working on adding online payments soon! Follow us on Instagram for updates.',
    category: 'Payment'
  },
  {
    id: 'payment-3',
    question: 'Any extra charges for COD?',
    answer: 'No! Zero extra charges. The price at checkout is exactly what you pay when your order arrives. No surprises, no hidden fees - that\'s our promise.',
    category: 'Payment'
  },

  // Returns & Refunds
  {
    id: 'returns-1',
    question: 'What is your return policy?',
    answer: 'You have 7 days to return anything you\'re not happy with. Just make sure it\'s in original condition, and we\'ll either refund you or exchange it. No stress, no hassle.',
    category: 'Returns & Refunds'
  },
  {
    id: 'returns-2',
    question: 'How do I return something?',
    answer: 'Just message us on Instagram or TikTok within 7 days. We\'ll arrange pickup and guide you through the whole process. Refunds usually take 3-5 business days to process.',
    category: 'Returns & Refunds'
  },
  {
    id: 'returns-3',
    question: 'What products cannot be returned?',
    answer: 'You can\'t return items that are damaged, used, or not in original packaging. Also, things like food items or customized products can\'t be returned unless they\'re defective.',
    category: 'Returns & Refunds'
  },
  {
    id: 'returns-4',
    question: 'Who pays for return shipping?',
    answer: 'If we messed up (wrong item, defective product), we cover return shipping. If you just changed your mind, you might need to cover the return cost. Message us for details.',
    category: 'Returns & Refunds'
  },

  // Account & Support
  {
    id: 'support-1',
    question: 'How can I contact support?',
    answer: 'The fastest way is to DM us on Instagram or TikTok - we reply super fast! We\'re available Monday to Saturday, 9 AM to 9 PM. No phone queues, no waiting forever.',
    category: 'Account & Support'
  },
  {
    id: 'support-2',
    question: 'What if I entered the wrong address?',
    answer: 'Message us immediately on social media. If your order hasn\'t shipped yet, we can easily update it. Once it\'s on the way, it gets trickier, but we\'ll still help you.',
    category: 'Account & Support'
  },
  {
    id: 'support-3',
    question: 'Do I need to create an account?',
    answer: 'Not at all! You can shop as a guest. But if you create an account, you get features like order tracking and saved addresses. It\'s optional.',
    category: 'Account & Support'
  },
  {
    id: 'support-4',
    question: 'How do I cancel my order?',
    answer: 'Message us on social media right away. If your order hasn\'t shipped yet, we can cancel it instantly. Once it ships, we\'ll need to handle it as a return instead.',
    category: 'Account & Support'
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedItems(new Set(filteredFAQs.map(item => item.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return (
    <div className={styles.helpPage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Help & FAQ</h1>
          <p className={styles.subtitle}>Find answers to common questions about EasyGet</p>
        </div>

        {/* Trust Indicators */}
        <div className={styles.trustIndicators}>
          <div className={styles.trustIndicator}>
            <FaUsers className={styles.trustIcon} />
            <span>1000+ Happy Customers</span>
          </div>
          <div className={styles.trustIndicator}>
            <FaTruck className={styles.trustIcon} />
            <span>Free Delivery Pakistan</span>
          </div>
          <div className={styles.trustIndicator}>
            <FaShieldAlt className={styles.trustIcon} />
            <span>100% Original Products</span>
          </div>
          <div className={styles.trustIndicator}>
            <FaUndo className={styles.trustIcon} />
            <span>7-Day Easy Returns</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <FiSearch size={20} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className={styles.categorySection}>
          <div className={styles.categoryButtons}>
            <button
              className={`${styles.categoryButton} ${selectedCategory === 'All' ? styles.active : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Topics
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={styles.expandButtons}>
            <button onClick={expandAll} className={styles.expandButton}>
              Expand All
            </button>
            <button onClick={collapseAll} className={styles.expandButton}>
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className={styles.faqSection}>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <div key={item.id} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleExpanded(item.id)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  {expandedItems.has(item.id) ? (
                    <FiChevronUp size={20} className={styles.chevron} />
                  ) : (
                    <FiChevronDown size={20} className={styles.chevron} />
                  )}
                </button>
                <div
                  className={`${styles.faqAnswer} ${expandedItems.has(item.id) ? styles.expanded : ''}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <FaQuestionCircle size={48} className={styles.noResultsIcon} />
              <h3>No results found</h3>
              <p>Try adjusting your search terms or browse all topics.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} 
                className={styles.clearButton}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Social Contact Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactCard}>
            <h2 className={styles.contactTitle}>Still Need Help</h2>
            <p className={styles.contactText}>
              Can't find what you're looking for? We're here to help you out.
            </p>
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <FaInstagram size={20} className={styles.contactIcon} />
                <div>
                  <h4>DM us on Instagram</h4>
                  <p>@easy_getstore</p>
                  <small>We reply super fast</small>
                </div>
              </div>
              <div className={styles.contactMethod}>
                <FaTiktok size={20} className={styles.contactIcon} />
                <div>
                  <h4>Message on TikTok</h4>
                  <p>@easy.get24</p>
                  <small>Quick replies guaranteed</small>
                </div>
              </div>
            </div>
            <div className={styles.socialButtons}>
              <a 
                href="https://www.instagram.com/easy_getstore?igsh=MWdkdXhtNWIwaGFsbA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <FaInstagram size={20} />
                <span>Message on Instagram</span>
              </a>
              <a 
                href="https://tiktok.com/@easy.get24" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <FaTiktok size={20} />
                <span>Message on TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Start Shopping</h2>
            <p className={styles.ctaText}>
              Found everything you needed? Let's get you shopping for amazing products!
            </p>
            <Link href="/" className={styles.ctaButton}>
              <FiShoppingBag size={20} />
              <span>Go to Home</span>
              <FiArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

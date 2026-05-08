"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-8 md:px-6 md:py-12">
        {/* Back to Home */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 text-sm">Get in touch for support, order issues, or any questions</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">How to Reach Us</h2>
            <div className="space-y-4 text-sm text-gray-600 leading-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Instagram</h3>
                <p className="mb-3">
                  Send us a direct message for quick support. We typically respond within 2-4 hours during business hours.
                </p>
                <a 
                  href="https://www.instagram.com/easy.get99" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  Send DM on Instagram
                </a>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                <p className="mb-3">
                  Send us an email for detailed inquiries, order issues, or if you need to attach documents or photos.
                </p>
                <a 
                  href="mailto:support@easyget.com" 
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </section>

          {/* Response Times */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Response Times</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Instagram:</strong> Usually within 2-4 hours</p>
                <p><strong>Email:</strong> Within 24 hours</p>
                <p><strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </section>

          {/* What We Help With */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">How We Can Help</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Order Support</h3>
                <p className="text-sm text-gray-600">Track orders, modify orders, shipping issues</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Returns & Exchanges</h3>
                <p className="text-sm text-gray-600">Damaged items, wrong products, return requests</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Product Questions</h3>
                <p className="text-sm text-gray-600">Product details, availability, recommendations</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">General Support</h3>
                <p className="text-sm text-gray-600">Account issues, payment problems, website help</p>
              </div>
            </div>
          </section>

          {/* Order Issues */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">For Order Issues</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>When contacting us about order issues, please include:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li>• Your Order ID</li>
                  <li>• Photo or Video Proof (if applicable)</li>
                  <li>• Detailed Description of the Issue</li>
                </ul>
              </div>
              <p className="text-gray-500 text-xs">
                This helps us resolve your issue faster and more efficiently.
              </p>
            </div>
          </section>

          {/* Service Area */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Service Area</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                We serve customers across Pakistan with nationwide shipping. Our team is ready to assist you 
                whether you're in Karachi, Lahore, Islamabad, or any other city.
              </p>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Return & Exchange Policy</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Learn about our 7-day return policy and what qualifies for returns.
                </p>
                <Link 
                  href="/return-policy" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Return Policy →
                </Link>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Track Your Order</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Check the status of your order and get real-time updates.
                </p>
                <Link 
                  href="/track-order" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Track Order →
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                We're here to help! Whether you have questions about products, need assistance with your order, 
                or want to report an issue, our team is ready to assist you.
              </p>
              <p>
                For the fastest response, please contact us through Instagram. For detailed inquiries or if you need 
                to attach documents, email is the best option.
              </p>
              <p>
                We strive to provide excellent customer service and will respond to your inquiries as quickly as possible.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

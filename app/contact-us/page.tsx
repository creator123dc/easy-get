"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageCircle, Package, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back to Home */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Contact Us</h1>
                <p className="text-gray-600">Get in touch for support, order issues, or any questions</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Contact Methods Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Get in Touch</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Instagram */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Instagram</h3>
                      <p className="text-sm text-gray-600">Fast response time</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">
                    Send us a direct message for quick support. We typically respond within a few hours during business hours.
                  </p>
                  <a 
                    href="https://www.instagram.com/your_instagram_handle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send DM on Instagram
                  </a>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-sm text-gray-600">Detailed inquiries</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">
                    Send us an email for detailed inquiries, order issues, or if you need to attach documents or photos.
                  </p>
                  <a 
                    href="mailto:your_email@gmail.com" 
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* What We Help With Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">How We Can Help</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Order Support</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Track orders, modify orders, shipping issues</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-5 h-5 text-orange-600" />
                    <h3 className="font-semibold text-gray-900">Returns & Exchanges</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Damaged items, wrong products, return requests</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Product Questions</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Product details, availability, recommendations</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">General Support</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Account issues, payment problems, website help</p>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Order Issues Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">For Order Issues</h2>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4 text-sm">
                  When contacting us about order issues, please include:
                </p>
                <div className="bg-white rounded-lg p-4 border border-orange-300">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="font-medium">Your Order ID</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="font-medium">Photo or Video Proof</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                      <span className="font-medium">Detailed Description of the Issue</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  This helps us resolve your issue faster and more efficiently.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Business Hours Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Business Hours</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Response Times</h3>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Instagram:</strong> Usually within 2-4 hours</p>
                    <p><strong>Email:</strong> Within 24 hours</p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We serve customers across Pakistan with nationwide shipping.
                  </p>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Quick Links Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Quick Links</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Return & Exchange Policy</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Learn about our 7-day return policy and what qualifies for returns.
                  </p>
                  <Link 
                    href="/return-policy" 
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Package className="w-4 h-4" />
                    View Return Policy
                  </Link>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Track Your Order</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Check the status of your order and get real-time updates.
                  </p>
                  <Link 
                    href="/track-order" 
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <Package className="w-4 h-4" />
                    Track Order
                  </Link>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Contact Message Section */}
            <section>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contact us for support or order issues</h3>
                  <p className="text-gray-700 text-sm max-w-md mx-auto">
                    We're here to help! Whether you have questions about products, need assistance with your order, 
                    or want to report an issue, our team is ready to assist you.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="https://www.instagram.com/your_instagram_handle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Instagram
                    </a>
                    <a 
                      href="mailto:your_email@gmail.com" 
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, AlertTriangle, Package, XCircle, CheckCircle, Gavel } from 'lucide-react';

export default function TermsAndConditionsPage() {
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
          <div className="bg-gradient-to-r from-red-50 to-orange-50 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Terms and Conditions</h1>
                <p className="text-gray-600">Important terms that govern your use of our e-commerce platform</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Agreement Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-13">
                By accessing and using EasyGet's e-commerce platform, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3 pl-13">
                These terms apply to all users of our platform, including without limitation users who are browsers, vendors, 
                customers, merchants, and/or contributors of content.
              </p>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Product Information Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Product Information</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">Please note the following regarding product information:</p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-3">Important Disclaimers</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Color Variations:</span>
                      <span className="text-gray-600"> We are not responsible for minor color differences due to screen settings or lighting conditions</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Size Selection:</span>
                      <span className="text-gray-600"> Wrong size selection by customer is not eligible for return</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Product Images:</span>
                      <span className="text-gray-600"> Product images are for reference only and actual products may vary slightly</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Order and Payment Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Orders and Payment</h2>
              </div>
              <div className="space-y-4 pl-13">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Order Confirmation</h3>
                  <p className="text-gray-600 text-sm">
                    Once you place an order, you will receive a confirmation email. This confirmation does not guarantee 
                    product availability. We reserve right to cancel orders if products are unavailable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Terms</h3>
                  <p className="text-gray-600 text-sm">
                    All payments are processed securely. We accept cash on delivery and other payment methods as specified 
                    during checkout. Prices are subject to change without notice.
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Order Cancellation</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Important:</strong> Orders cannot be cancelled after they have been shipped. 
                    If you need to cancel, please contact us immediately before shipping.
                  </p>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Return Policy Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Return Policy</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">Our return policy is designed to be fair to both customers and our business:</p>
              <div className="space-y-3 pl-13">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Return Requirements</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Returns are only accepted with valid proof (photos/videos)</li>
                    <li>• Returns must be requested within 7 days of delivery</li>
                    <li>• Products must be unused and in original condition</li>
                    <li>• Only damaged products or wrong items are eligible for return</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Fake Claims</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Warning:</strong> Fake return claims will be rejected. We reserve right to 
                    investigate suspicious claims and take appropriate action against fraudulent activities.
                  </p>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Limitation of Liability Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">Please understand our limitations:</p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>We are not liable for indirect, incidental, or consequential damages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>We are not responsible for delivery delays caused by couriers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>We are not liable for product misuse by customers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Maximum liability is limited to product purchase price</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 mt-4 text-sm pl-13">
                In no event shall EasyGet, its directors, employees, partners, agents, suppliers, or affiliates be liable 
                for any indirect, incidental, special, or consequential damages.
              </p>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Intellectual Property Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Intellectual Property</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">
                All content on our platform, including logos, text, images, and software, is owned by EasyGet 
                or our content suppliers and is protected by intellectual property laws.
              </p>
              <p className="text-gray-600 text-sm pl-13">
                You may not use, reproduce, or distribute any content from our platform without our written permission.
              </p>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Prohibited Uses Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Prohibited Uses</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">You may not use our platform for:</p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-3 h-3 text-red-600" />
                    <span>Any unlawful or fraudulent purposes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-3 h-3 text-red-600" />
                    <span>To harass, abuse, or harm others</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-3 h-3 text-red-600" />
                    <span>To submit false or misleading information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-3 h-3 text-red-600" />
                    <span>To interfere with or disrupt our services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-3 h-3 text-red-600" />
                    <span>To violate any applicable laws or regulations</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Contact Information Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Questions About These Terms</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">If you have any questions about these Terms and Conditions, please contact us:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Instagram</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Send us a direct message</p>
                  <a 
                    href="https://www.instagram.com/your_instagram_handle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium"
                  >
                    <Package className="w-4 h-4" />
                    Send DM on Instagram
                  </a>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Send us an email with your questions</p>
                  <a 
                    href="mailto:your_email@gmail.com" 
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Shield className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Important Business Notice Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Important Business Notice</h2>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-gray-700">
                  These terms are designed to protect both our customers and our business. By using our platform, 
                  you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
                <p className="text-gray-700 mt-3">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

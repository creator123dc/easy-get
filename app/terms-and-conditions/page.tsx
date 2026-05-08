"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-10">
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
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-gray-600 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Use of Website */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Use of Website</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                By accessing and using EasyGet's e-commerce platform, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
              <p>
                This website is provided for general informational purposes. We reserve the right to modify, suspend, 
                or discontinue the platform at any time without notice.
              </p>
            </div>
          </section>

          {/* Orders & Payments */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Orders & Payments</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                All orders are subject to product availability. We reserve the right to refuse or cancel any order 
                for any reason, including but not limited to: product availability, errors in pricing, or suspected fraud.
              </p>
              <p>
                Payment must be completed before orders are processed. We accept various payment methods as specified 
                during checkout. Prices are subject to change without notice.
              </p>
              <p>
                Order confirmation does not guarantee product availability. We will notify you if any items in your 
                order are unavailable.
              </p>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">User Responsibilities</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                You are responsible for maintaining the confidentiality of your account information and for all activities 
                that occur under your account.
              </p>
              <p>
                You agree to provide accurate, current, and complete information when using our platform. You must 
                not use false or misleading information.
              </p>
              <p>
                You agree not to use our platform for any unlawful purposes or in any way that could damage, 
                disable, or impair the service.
              </p>
            </div>
          </section>

          {/* Product Information */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Product Information</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                We strive to be as accurate as possible in the descriptions of products. However, we do not warrant 
                that product descriptions, colors, or other content are accurate, complete, reliable, or error-free.
              </p>
              <p>
                Product images are for reference only and may not exactly represent the actual product. 
                Color variations may occur due to screen settings and lighting conditions.
              </p>
            </div>
          </section>

          {/* Returns and Refunds */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Returns and Refunds</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                Our return policy is designed to be fair to both customers and our business. Returns are only 
                accepted under specific conditions as outlined in our Return Policy.
              </p>
              <p>
                Returns must be requested within the specified time frame and products must be in their original 
                condition. We reserve the right to reject returns that do not meet our requirements.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Intellectual Property</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                All content on this platform, including but not limited to text, graphics, logos, images, and software, 
                is the property of EasyGet or our content suppliers and is protected by intellectual property laws.
              </p>
              <p>
                You may not use, reproduce, or distribute any content from our platform without our written permission.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Limitation of Liability</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                In no event shall EasyGet, its directors, employees, or agents be liable for any indirect, incidental, 
                special, or consequential damages arising from your use of our platform or products.
              </p>
              <p>
                Our maximum liability to you for any cause of action shall not exceed the amount you paid for the 
                product or service in question.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Changes to Terms</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                immediately upon posting on our platform.
              </p>
              <p>
                Your continued use of our platform after any changes constitutes your acceptance of the revised terms. 
                We encourage you to review these terms periodically.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">Contact Information</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                If you have any questions about these Terms and Conditions, please contact us through our 
                available channels on the website.
              </p>
              <p>
                By using our platform, you acknowledge that you have read, understood, and agree to be bound 
                by these terms and conditions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

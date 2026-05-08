"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ReturnPolicyPage() {
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
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">Return Policy</h1>
          <p className="text-gray-600 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Return Period */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">1. Return Period</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                You can return your product within 7 days of delivery. The return period starts from the date 
                you receive your order. After 7 days, we cannot accept returns for any reason.
              </p>
            </div>
          </section>

          {/* Valid Return Reasons */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">2. Valid Return Reasons</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>Returns are only accepted for the following reasons:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li>• Damaged Product: Product arrived damaged, broken, or defective</li>
                  <li>• Wrong Item Received: You received a different product than what you ordered</li>
                </ul>
              </div>
              <p className="text-gray-500 text-xs">
                Size issues, color preferences, or change of mind are not valid return reasons.
              </p>
            </div>
          </section>

          {/* Required Proof */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">3. Required Proof</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>To process your return, you must provide:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li>• Order ID (your unique order number)</li>
                  <li>• Clear photo or video proof showing the issue</li>
                  <li>• Description of the problem</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700 text-sm font-medium">
                  Important: Returns without proper proof will be rejected.
                </p>
              </div>
            </div>
          </section>

          {/* Return Process */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">4. Return Process</h2>
            <div className="space-y-4 text-sm text-gray-600 leading-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Contact Us</h3>
                  <p>Send your Order ID and proof through our available channels</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Review Process</h3>
                  <p>We review your proof within 2-3 business days</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Resolution</h3>
                  <p>If valid, we process your return or replacement</p>
                </div>
              </div>
            </div>
          </section>

          {/* Product Condition */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">5. Product Condition Requirements</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li>• Products must be unused and in original condition</li>
                  <li>• Original packaging and tags must be intact</li>
                  <li>• No signs of wear, damage, or modification</li>
                  <li>• All accessories and components must be included</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Process */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">6. Refund Process</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                Once your return is approved, refunds are processed within 5-7 business days. 
                The refund will be issued to your original payment method.
              </p>
              <p>
                Return shipping costs are the customer's responsibility unless the return is due to our error.
              </p>
            </div>
          </section>

          {/* Non-Returnable Items */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">7. Non-Returnable Items</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li>• Personal care items (for hygiene reasons)</li>
                  <li>• Items marked as final sale</li>
                  <li>• Customized or personalized products</li>
                  <li>• Items returned after the 7-day period</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">8. Important Notes</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li>• We reserve the right to reject returns without proper proof</li>
                  <li>• Fake return claims will be investigated and may result in account suspension</li>
                  <li>• Multiple returns may affect your account standing</li>
                  <li>• We may update this policy at any time without notice</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">9. Contact Information</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                For return requests or questions about this policy, please contact us through our 
                available channels on the website.
              </p>
              <p>
                We are committed to providing fair and transparent return service to ensure customer satisfaction.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

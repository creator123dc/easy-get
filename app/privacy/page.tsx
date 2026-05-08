"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">1. Introduction</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                EasyGet is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, and safeguard your personal information when you use our e-commerce platform.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">2. Information We Collect</h2>
            <div className="space-y-4 text-sm text-gray-600 leading-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Personal Information</h3>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  place an order, or contact us for support.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Types of Information Collected:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Name, email address, and contact information</li>
                  <li>• Shipping and billing addresses</li>
                  <li>• Payment information (processed securely)</li>
                  <li>• Order history and preferences</li>
                  <li>• Communication with customer support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Technical Information</h3>
                <p>
                  We automatically collect certain technical information when you visit our platform, 
                  including IP address, browser type, and device information.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">3. How We Use Your Information</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>We use your information to:</p>
              <ul className="space-y-1 text-sm list-disc pl-5">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our services and user experience</li>
                <li>Send order updates and important notifications</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">4. Information Sharing</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">We may share information with:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Payment processors for order fulfillment</li>
                  <li>• Shipping partners for delivery services</li>
                  <li>• Service providers who assist in platform operations</li>
                  <li>• Legal authorities when required by law</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">5. Data Security</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no method of transmission over the internet is 100% secure. While we strive 
                to protect your data, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">6. Cookies and Tracking</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our platform. 
                Cookies help us remember your preferences and improve our services.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Cookie Types:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Essential cookies for platform functionality</li>
                  <li>• Performance cookies for analytics</li>
                  <li>• Preference cookies for personalization</li>
                </ul>
              </div>
              <p>
                You can control cookies through your browser settings, but disabling certain cookies 
                may affect your experience on our platform.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">7. Your Rights</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>You have the right to:</p>
              <ul className="space-y-1 text-sm list-disc pl-5">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Restrict processing of your information</li>
              </ul>
              <p>
                To exercise these rights, please contact us through our available channels.
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">8. Policy Updates</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                Any changes will be effective immediately upon posting the updated policy on our platform. 
                We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-3">9. Contact Information</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-6">
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us 
                through our available channels on the website.
              </p>
              <p>
                We are committed to addressing your privacy concerns and will respond to your inquiries 
                in a timely manner.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

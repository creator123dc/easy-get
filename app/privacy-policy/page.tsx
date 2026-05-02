"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, User, Lock, Eye, CheckCircle, AlertCircle, Database } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Privacy Policy</h1>
                <p className="text-gray-600">How we collect, use, and protect your personal information</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Introduction Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Your Privacy Matters</h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-13">
                At EasyGet, we are committed to protecting your personal information. This privacy policy explains 
                how we collect, use, and safeguard your data when you use our e-commerce platform.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3 pl-13">
                By using our services, you agree to collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Information We Collect Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">We collect only essential information needed to process your orders:</p>
              <div className="space-y-4 pl-13">
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Personal Information</h3>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-500" />
                      <span>Full name</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-500" />
                      <span>Phone number</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-500" />
                      <span>Delivery address</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-500" />
                      <span>City</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Order Information</h3>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-500" />
                      <span>Order details</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-500" />
                      <span>Product preferences</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-purple-500" />
                      <span>Payment method</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* How We Use Your Information Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">Your information is used only for:</p>
              <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Order Processing:</span>
                      <span className="text-gray-700"> To process and deliver your orders</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Customer Support:</span>
                      <span className="text-gray-700"> To assist you with orders and returns</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Service Improvement:</span>
                      <span className="text-gray-700"> To improve our products and services</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Data Protection Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Data Protection</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">We take data security seriously:</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Your data is stored securely</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>We use secure servers for data storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Access to personal data is restricted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>We regularly update security measures</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Data Sharing Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Data Sharing</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">We do not share your personal information with third parties for marketing purposes.</p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-3">What We Don't Do:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="text-red-600 font-semibold">✗</span>
                    <span>We don't sell your personal data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600 font-semibold">✗</span>
                    <span>We don't share your information with advertisers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600 font-semibold">✗</span>
                    <span>We don't use your data for targeted advertising</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-600 font-semibold">✗</span>
                    <span>We don't send promotional messages without consent</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Your Rights Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">You have the right to:</p>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Access:</span>
                      <span className="text-gray-700"> Request a copy of your personal data</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Correction:</span>
                      <span className="text-gray-700"> Update incorrect personal information</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Deletion:</span>
                      <span className="text-gray-700"> Request deletion of your personal data</span>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4 text-sm pl-13">
                To exercise these rights, contact us via Instagram or email.
              </p>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Contact Information Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">If you have questions about this privacy policy or your data, please contact us:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
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
                    <User className="w-4 h-4" />
                    Send DM on Instagram
                  </a>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Send us an email with your questions</p>
                  <a 
                    href="mailto:your_email@gmail.com" 
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Lock className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Policy Updates Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Policy Updates</h2>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-sm text-gray-700">
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                  We encourage you to review this policy periodically for any changes.
                </p>
                <p className="text-sm text-gray-700 mt-3">
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

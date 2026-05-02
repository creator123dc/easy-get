"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Package, Camera, Calendar, AlertCircle, Clock, Shield, CheckCircle } from 'lucide-react';

export default function ReturnPolicyPage() {
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Package className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Return Policy</h1>
                <p className="text-gray-600">Our simple and fair return process to ensure customer satisfaction</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Return Period Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">7-Day Return Policy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-13">
                You can return your product within 7 days of delivery. The return period starts from the date you receive your order. 
                After 7 days, we cannot accept returns for any reason.
              </p>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Valid Return Reasons Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Valid Return Reasons</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">Returns are only accepted for the following reasons:</p>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Damaged Product:</span>
                      <span className="text-gray-700"> Product arrived damaged, broken, or defective</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Wrong Item Received:</span>
                      <span className="text-gray-700"> You received a different product than what you ordered</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Proof Requirements Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Camera className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Required Proof</h2>
              </div>
              <p className="text-gray-700 mb-4 pl-13">To process your return, you MUST provide:</p>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center">
                      <Package className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Order ID</h3>
                      <p className="text-gray-600 text-sm">Your unique order number</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center">
                      <Camera className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Photo/Video Proof</h3>
                      <p className="text-gray-600 text-sm">Clear photos or video showing the issue</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-700 font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Important: Returns without proper proof will be rejected.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Return Process Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Return Process</h2>
              </div>
              <div className="space-y-4 pl-13">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contact Us</h3>
                    <p className="text-gray-600">Send your Order ID and proof via Instagram or Gmail</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Review Process</h3>
                    <p className="text-gray-600">We review your proof within 2-3 business days</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Resolution</h3>
                    <p className="text-gray-600">If valid, we process your return or replacement</p>
                  </div>
                </div>
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
                <h2 className="text-xl font-bold text-gray-900">Contact Us for Returns</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Instagram</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Send us a direct message with your order details</p>
                  <a 
                    href="https://www.instagram.com/your_instagram_handle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium"
                  >
                    <Camera className="w-4 h-4" />
                    Send DM on Instagram
                  </a>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Send us an email with your proof and order ID</p>
                  <a 
                    href="mailto:your_email@gmail.com" 
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Package className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Important Notes Section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Important Notes</h2>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Products must be unused and in original condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Return shipping costs are customer responsibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Refunds processed within 5-7 business days after approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>We reserve right to reject returns without proper proof</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

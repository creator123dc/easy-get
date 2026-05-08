import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/contexts/CartContext';
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Easy Get | Best Deals in Pakistan",
  description: "Shop the best deals in Pakistan across kitchen, tech, fashion, and skincare. Cash on Delivery available.",
  metadataBase: new URL('https://easyget.com'),
  openGraph: {
    title: "Easy Get | Best Deals in Pakistan",
    description: "Shop the best deals in Pakistan across kitchen, tech, fashion, and skincare. Cash on Delivery available.",
    url: 'https://easyget.com',
    siteName: 'Easy Get',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Easy Get - Best Deals in Pakistan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Get | Best Deals in Pakistan',
    description: 'Shop the best deals in Pakistan across kitchen, tech, fashion, and skincare. Cash on Delivery available.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

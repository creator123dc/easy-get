import { Metadata } from 'next';
import supabase from '@/lib/supabase';
import ProductClient from './ProductClient';
import ProductNotFound from './ProductNotFound';
import { generateProductMetadata } from './metadata';

// Force dynamic rendering for product pages
export const dynamic = "force-dynamic";

interface Product {
  id: number;
  title: string;
  price: number | string;
  discount_price?: number | string;
  original_price?: number | string;
  image: string;
  images?: string[];
  rating: number;
  reviews: string;
  description?: string;
  colors?: {
    name: string;
    image: string;
  }[];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return generateProductMetadata({ params });
}

async function getProduct(id: string): Promise<Product | null> {
  // Convert string ID to number for database query
  const numericId = parseInt(id);
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', numericId) // Use numeric ID for database
    .maybeSingle();

  console.log("ID:", id);
  console.log("Numeric ID:", numericId);
  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error || !data) return null;

  return data;
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Check if product exists by doing a quick fetch
  const product = await getProduct(id);
  
  if (!product) {
    return <ProductNotFound />;
  }

  return <ProductClient id={id} />;
}

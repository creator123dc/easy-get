import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import supabase from '@/lib/supabase';
import ProductClient from './ProductClient';
import { generateProductMetadata } from './metadata';

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

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return generateProductMetadata({ params });
}

async function getProduct(id: string): Promise<Product> {
  // Try to parse as number first, if that fails try as string
  let query = supabase.from('products').select('*');
  
  // Try with numeric ID
  const numericId = parseInt(id);
  if (!isNaN(numericId)) {
    query = query.eq('id', numericId);
  } else {
    query = query.eq('id', id);
  }
  
  const { data, error } = await query.single();

  if (error || !data) {
    notFound();
  }

  return data;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return <ProductClient product={product} />;
}

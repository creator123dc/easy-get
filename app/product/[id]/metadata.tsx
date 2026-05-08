import { Metadata } from 'next';
import supabase from '@/lib/supabase';

interface Product {
  id: number;
  title: string;
  price: number | string;
  discount_price?: number | string;
  original_price?: number | string;
  image: string;
  rating: number;
  reviews: string;
  description?: string;
}

export async function generateProductMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const { data: product } = await supabase
      .from('products')
      .select('*')
      .eq('id', params.id)
      .single();

    if (!product) {
      return {
        title: 'Product Not Found | Easy Get',
        description: 'The product you are looking for could not be found.',
      };
    }

    const price = product.discount_price || product.price;
    const originalPrice = product.original_price || product.price;
    const hasDiscount = product.discount_price && product.original_price;
    const discountPercentage = hasDiscount 
      ? Math.round(((Number(originalPrice) - Number(price)) / Number(originalPrice)) * 100)
      : 0;

    const title = `${product.title} | Easy Get Pakistan`;
    const description = product.description 
      ? `Buy ${product.title} at PKR ${Number(price).toLocaleString()}${hasDiscount ? ` (${discountPercentage}% OFF - was PKR ${Number(originalPrice).toLocaleString()})` : ''}. ${product.description.substring(0, 160)}... Cash on Delivery available.`
      : `Buy ${product.title} at PKR ${Number(price).toLocaleString()}${hasDiscount ? ` (${discountPercentage}% OFF - was PKR ${Number(originalPrice).toLocaleString()})` : ''}. Shop the best deals in Pakistan. Cash on Delivery available.`;

    return {
      title,
      description,
      metadataBase: new URL('https://easyget.com'),
      openGraph: {
        title,
        description,
        url: `https://easyget.com/product/${params.id}`,
        siteName: 'Easy Get',
        images: [
          {
            url: product.image,
            width: 1200,
            height: 1200,
            alt: product.title,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [product.image],
      },
      alternates: {
        canonical: `https://easyget.com/product/${params.id}`,
      },
    };
  } catch (error) {
    console.error('Error generating product metadata:', error);
    return {
      title: 'Product | Easy Get',
      description: 'Shop the best deals in Pakistan. Cash on Delivery available.',
    };
  }
}

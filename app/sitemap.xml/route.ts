import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

export async function GET() {
  const baseUrl = 'https://easyget.com';
  
  try {
    // Fetch all products for sitemap
    const { data: products } = await supabase
      .from('products')
      .select('id, title, updated_at')
      .order('id');

    const staticPages = [
      { url: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
      { url: '/about', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
      { url: '/contact-us', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
      { url: '/cart', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.6 },
      { url: '/checkout', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.6 },
      { url: '/deals', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 0.9 },
      { url: '/help', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.5 },
      { url: '/track-order', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.5 },
      { url: '/terms-and-conditions', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.3 },
      { url: '/privacy', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.3 },
      { url: '/return-policy', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.3 },
      { url: '/careers', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.4 },
      { url: '/press', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.4 },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${products?.map(product => `
  <url>
    <loc>${baseUrl}/product/${product.id}</loc>
    <lastmod>${product.updated_at || new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}

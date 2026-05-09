interface ProductSchemaProps {
  product: {
    id: number;
    title: string;
    price: number | string;
    discount_price?: number | string;
    original_price?: number | string;
    image: string;
    rating: number;
    reviews: string;
    description?: string;
  };
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const price = product?.discount_price || product?.price;
  const originalPrice = product?.original_price || product?.price;
  const safePrice = Number(price ?? 0);
  const safeOriginal = Number(originalPrice ?? safePrice);
  const hasDiscount = product?.discount_price && product?.original_price;
  
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product?.title || "",
    "image": product?.image || "",
    "description": product?.description || `Buy ${product?.title || "Product"} at Easy Get Pakistan. High quality product with cash on delivery available.`,
    "sku": Number(product?.id ?? 0).toString(),
    "brand": {
      "@type": "Brand",
      "name": "Easy Get"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://easyget.com/product/${product?.id || ""}`,
      "priceCurrency": "PKR",
      "price": safePrice.toString(),
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Easy Get",
        "url": "https://easyget.com"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": Number(product?.rating ?? 0).toString(),
      "reviewCount": product?.reviews || "0",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  if (hasDiscount) {
    schema.offers = {
      ...schema.offers,
      "price": safeOriginal.toString()
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

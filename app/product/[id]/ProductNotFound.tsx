import Link from 'next/link';
import { ArrowLeft, Package } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        backgroundColor: '#f8f9fa',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        <Package size={40} color="#6c757d" />
      </div>
      
      <h1 style={{
        fontSize: '32px',
        fontWeight: '600',
        color: '#212529',
        marginBottom: '16px',
        margin: '0 0 16px 0'
      }}>
        Product Not Found
      </h1>
      
      <p style={{
        fontSize: '18px',
        color: '#6c757d',
        marginBottom: '32px',
        maxWidth: '500px',
        lineHeight: '1.6',
        margin: '0 0 32px 0'
      }}>
        The product you're looking for doesn't exist or has been removed. 
        Please check the product ID or browse our other products.
      </p>
      
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Link 
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        
        <Link 
          href="/deals"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            backgroundColor: 'transparent',
            color: '#007bff',
            textDecoration: 'none',
            border: '2px solid #007bff',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
        >
          Browse Deals
        </Link>
      </div>
    </div>
  );
}

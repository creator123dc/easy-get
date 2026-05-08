import { Suspense } from 'react';
import SearchContent from './SearchContent';

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      fontSize: '18px',
      color: 'var(--color-text)'
    }}>
      Loading...
    </div>}>
      <SearchContent />
    </Suspense>
  );
}

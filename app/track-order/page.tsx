import { Suspense } from 'react';
import TrackOrderContent from './TrackOrderContent';

export default function TrackOrderPage() {
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
      <TrackOrderContent />
    </Suspense>
  );
}

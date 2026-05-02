import { Hero } from '@/components/sections/Hero';
import { Categories } from '@/components/sections/Categories';
import { Deals } from '@/components/sections/Deals';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <Deals />
        <ProductGrid />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}

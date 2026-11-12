import React from 'react';
import { catalogService } from '../lib/catalog-service';
import { Hero } from '../components/sections/Hero';
import { CategoryGrid } from '../components/sections/CategoryGrid';
import { SareeEdit } from '../components/sections/SareeEdit';
import { LadiesCollection } from '../components/sections/LadiesCollection';
import { KidsCollection } from '../components/sections/KidsCollection';
import { OccasionSection } from '../components/sections/OccasionSection';
import { BrandStory } from '../components/sections/BrandStory';
import { StoreSection } from '../components/sections/StoreSection';
import { Newsletter } from '../components/sections/Newsletter';

export default async function HomePage() {
  const products = await catalogService.getAllProducts();

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Shop by Category (4 Primary Pillars, Sarees prominent) */}
      <CategoryGrid />

      {/* 3. Featured Sarees - "THE SAREE EDIT" */}
      <SareeEdit products={products} />

      {/* 4. Ladies Collection - "FOR EVERY OCCASION" */}
      <LadiesCollection />

      {/* 5. Kids Collection - "LITTLE FESTIVE MOMENTS" */}
      <KidsCollection />

      {/* 6. Occasion Section - "DRESS FOR THE MOMENT" */}
      <OccasionSection />

      {/* 7. Brand Story - "ROOTED IN TRADITION. DESIGNED FOR TODAY." */}
      <BrandStory />

      {/* 8. Local Store Section - "KALYANI SAREES DHANPATGANJ" */}
      <StoreSection />

      {/* 9. Newsletter Section */}
      <Newsletter />
    </div>
  );
}

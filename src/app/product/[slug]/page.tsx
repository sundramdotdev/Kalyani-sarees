import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { catalogService } from '../../../lib/catalog-service';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { ProductGallery } from '../../../components/product/ProductGallery';
import { ProductInfo } from '../../../components/product/ProductInfo';
import { ProductGrid } from '../../../components/product/ProductGrid';
import { constructMetadata } from '../../../lib/seo';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await catalogService.getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await catalogService.getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found | Kalyani Sarees Dhanpatganj' };
  }

  return constructMetadata({
    title: `${product.name} - ${product.fabric}`,
    description: product.description.slice(0, 155),
    path: `/product/${product.slug}`,
    image: product.images[0]?.url,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await catalogService.getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products from same category
  const allProducts = await catalogService.getAllProducts();
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const breadcrumbs = [
    { label: 'Shop', href: '/shop' },
    {
      label: product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('-', ' '),
      href: `/${product.category}`,
    },
    { label: product.name },
  ];

  // Product Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images.map((img) => img.url),
    description: product.description,
    sku: product.sku,
    material: product.fabric,
    brand: {
      '@type': 'Brand',
      name: 'Kalyani Sarees Dhanpatganj',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: product.currency,
      price: product.price,
      availability: product.available
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'ClothingStore',
        name: 'Kalyani Sarees Dhanpatganj',
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={breadcrumbs} />

      {/* Main 2-Column Product Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6">
        {/* Left Gallery Column */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Right Info Column (Sticky) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {/* Related Products Recommendation */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 pt-12 border-t border-[#DED5C8]">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              Complete Your Celebration
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#252525] mt-1">
              You May Also Adore
            </h2>
          </div>
          <ProductGrid products={relatedProducts} columns={4} />
        </section>
      )}
    </div>
  );
}

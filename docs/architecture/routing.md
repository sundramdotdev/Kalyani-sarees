# Routing Architecture Specification — Kalyani Sarees Dhanpatganj

## 1. Route Topology & Taxonomy

The routing structure is built on the **Next.js App Router** directory paradigm. URLs are clean, hierarchical, and human-readable, intentionally avoiding query-string-based category paths to maximize SEO indexing authority.

| Route | Page Purpose | Rendering Strategy | Segment Type |
|---|---|---|---|
| `/` | Brand Homepage & Editorial Gateways | SSG / ISR | Static Root |
| `/shop` | Complete Catalog with Faceted Sidebar | SSR / Client Filters | Static Hub |
| `/sarees` | Dedicated Sarees Hub (Banarasi, Silk, etc.) | SSG / ISR | Primary Category |
| `/ladies-wear` | Ladies' Clothing Hub (Kurtis, Suits, Lehengas)| SSG / ISR | Primary Category |
| `/kids-wear` | Kids' Ethnic Clothing Hub (Girls, Boys) | SSG / ISR | Primary Category |
| `/indian-attire` | Traditional & Festive Collection Hub | SSG / ISR | Primary Category |
| `/new-arrivals` | Latest Seasonal Inclusions | ISR (revalidate: 3600)| Curated Feed |
| `/collections` | Curated Festivities & Editorial Edits | SSG / ISR | Curated Index |
| `/product/[slug]` | Product Detail Page (PDP) | SSG (`generateStaticParams`) / ISR | Dynamic Slug |
| `/search` | Global Product Search & Quick Results | Client-Side / SSR | Search Utility |
| `/wishlist` | Saved Favorites & Instant Add to Cart | Client-Side (LocalStorage) | User Utility |
| `/cart` | Full Shopping Bag & Pricing Breakdown | Client-Side (LocalStorage) | Commerce Utility|
| `/about` | Brand Story, Heritage, & Artisanship | Static (SSG) | Informational |
| `/contact` | Store Inquiries & Dhanpatganj Visit Planner | Static (SSG) | Informational |
| `/size-guide` | Ethnic Sizing, Length & Drape Charts | Static (SSG) | Informational |
| `/shipping-returns`| Delivery Timelines, COD, & Returns Policy | Static (SSG) | Customer Care |
| `/privacy-policy` | Privacy Policy Compliance | Static (SSG) | Legal |
| `/terms` | Terms of Service Compliance | Static (SSG) | Legal |

---

## 2. Dynamic Route Strategy: `/product/[slug]`

### 2.1 Slug Formatting Standards
- Slugs are kebab-case, strictly lowercase, and descriptive of the product's fabric, type, and color:
  - Example: `/product/royal-crimson-banarasi-katan-silk-saree`
  - Example: `/product/emerald-green-chanderi-embroidered-suit-set`
  - Example: `/product/festive-gold-brocade-kids-kurta-pyjama`

### 2.2 Static Generation (`generateStaticParams`)
In Phase 1, `generateStaticParams()` pre-renders all static mock products at build time:

```typescript
// src/app/product/[slug]/page.tsx
export async function generateStaticParams() {
  const products = await catalogService.getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
```

### 2.3 Dynamic Metadata Generation
Each product route dynamically produces tailored `Metadata`:

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await catalogService.getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found | Kalyani Sarees Dhanpatganj' };

  return {
    title: `${product.name} | Kalyani Sarees Dhanpatganj`,
    description: product.description.slice(0, 155),
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 155),
      images: [{ url: product.images[0].url, alt: product.name }],
    },
  };
}
```

---

## 3. Future-Ready Reserved Routes (Phase 2 Roadmap)

The routing architecture anticipates user account authentication, order tracking, and store administration without modifying current URL structures:

| Reserved Route | Future Phase Purpose | Status in Phase 1 |
|---|---|---|
| `/account` | Customer Profile, Addresses, Saved Cards | Documented / Not Implemented |
| `/account/orders` | Customer Order History & Tracking | Documented / Not Implemented |
| `/checkout` | Secure Payment Gateway Handshake | Documented / Not Implemented |
| `/order-success` | Order Confirmation & WhatsApp Alert | Documented / Not Implemented |
| `/admin` | Store Staff Inventory & Order Management | Documented / Not Implemented |

> [!IMPORTANT]
> In Phase 1, the `/cart` page features a prominent disabled / mock "Proceed to Checkout" flow that triggers an informational modal or contact dialogue rather than a broken page.

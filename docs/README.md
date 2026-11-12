# Kalyani Sarees Dhanpatganj — Technical & Design Documentation

Welcome to the comprehensive Phase 1 architectural and design specification for **Kalyani Sarees Dhanpatganj**. This documentation suite defines the complete foundation for a modern, premium Indian ethnic fashion ecommerce brand.

---

## 📚 Documentation Table of Contents

### 1. UI/UX Design System (`docs/ui/`)
- [**Design System**](ui/design-system.md): Foundational aesthetic principles, spacing scales, border radiuses, shadows, surface hierarchy, and accessibility standards.
- [**Color System**](ui/color-system.md): Base Indian ethnic palette (Deep Maroon, Antique Gold, Warm Ivory, Soft Beige), CSS custom properties, semantic color tokens, and WCAG AA contrast compliance.
- [**Typography System**](ui/typography.md): Serif & sans-serif font pairing, display scales, heading scales, body text, line heights, and Devanagari (Hindi) bilingual support.
- [**Component System**](ui/components.md): Deep specifications for atomic UI elements, ProductCard (variants, badges, quick actions), ProductGallery, ProductFilters, and CartDrawer.
- [**Pages & Layouts**](ui/pages.md): Wireframes, section order, content hierarchy, and interactions for Homepage, Category Pages, Product Detail Pages, Cart, and Informational Pages.
- [**Responsive Design**](ui/responsive-design.md): First-class mobile strategy, conceptual breakpoints (360px, 390px, 430px, 768px, 1024px, 1280px, 1440px+), sticky buy bars, and touch interactions.
- [**Animation System**](ui/animations.md): Tasteful micro-interactions, editorial image reveals, cart drawer slide physics, and `prefers-reduced-motion` compliance.

---

### 2. Technical Architecture (`docs/architecture/`)
- [**System Architecture**](architecture/system-architecture.md): High-level system diagram, separation of concerns, and Next.js App Router paradigm.
- [**Frontend Architecture**](architecture/frontend-architecture.md): Component layering, state management (Cart, Wishlist, Filters), and headless UI philosophy.
- [**Folder Structure**](architecture/folder-structure.md): Granular file-tree breakdown showing clean separation between UI, domain types, mock repositories, and layout shells.
- [**Routing Architecture**](architecture/routing.md): Semantic App Router route tree, dynamic segments (`/product/[slug]`, `/collections/[category]`), metadata injection, and breadcrumb generation.
- [**Data Model**](architecture/data-model.md): Comprehensive TypeScript domain entities (`Product`, `ProductVariant`, `Category`, `Collection`, `CartItem`, `StoreInfo`, `Review`).
- [**Future Backend Integration**](architecture/future-backend.md): Transition strategy from static local data repositories to headless ecommerce engines (PostgreSQL/Supabase, Medusa, Shopify) without UI rewrites.
- [**Phase 2 Implementation Plan**](architecture/phase-2-plan.md): Milestone-by-milestone roadmap for UI development, component assembly, and testing.

---

### 3. SEO & Local Search Foundation (`docs/seo/` & `docs/geo/`)
- [**SEO Strategy**](seo/seo-strategy.md): Keyword architecture, search intent mapping for Indian ethnic fashion, dynamic metadata, canonical rules, XML sitemaps, and robots.txt.
- [**URL Strategy**](seo/url-strategy.md): Clean, hierarchical, indexable taxonomy avoiding query-parameter bloat.
- [**Structured Data Plan**](seo/structured-data.md): Valid JSON-LD schemas for `ClothingStore`, `Product`, `Offer`, `BreadcrumbList`, and `WebSite`.
- [**Local SEO & GEO Strategy**](geo/local-seo-geo-strategy.md): Hyper-local targeting for Dhanpatganj & Sultanpur District, Google Business Profile readiness, NAP consistency, and local schema integration.

---

### 4. Brand & Editorial Content (`docs/content/`)
- [**Brand Content & Voice**](content/brand-content.md): Tone of voice, editorial storytelling, brand origin, cultural reverence, and headline guidelines.
- [**Product Content & Taxonomy**](content/product-content.md): Saree classifications (Banarasi, Kanjivaram, Chanderi, Georgette), weave terminology, sizing guidelines, and care instructions.

---

## ⚖️ Governance & Source of Truth

- **Source of Truth**: [`MEMORY.md`](../MEMORY.md) at the repository root holds all immutable project decisions.
- **Client Data Guardrail**: All store contact details, addresses, and timings remain marked `[VERIFICATION_REQUIRED]` until explicitly provided by the store owner.

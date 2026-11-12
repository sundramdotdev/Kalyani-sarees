# Kalyani Sarees Dhanpatganj

A premium, culturally resonant Indian ethnic fashion ecommerce web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌸 Brand Overview

**Kalyani Sarees Dhanpatganj** is an Indian ethnic fashion retailer specializing in:
- **Sarees**: Pure Banarasi, Kanjivaram Silk, Festive Georgette, Chanderi, Daily Wear & Wedding Designer Sarees
- **Ladies' Wear**: Elegant Kurtis, Embroidered Suit Sets, Anarkalis, Lehengas & Dupattas
- **Kids' Wear**: Traditional wear for girls (lehenga cholis, suits) & boys (kurta pyjama, sherwanis)
- **Indian Attire**: Festive, celebratory, and bridal ethnic wear

The platform combines **Indian heritage craftsmanship**, **editorial fashion aesthetics**, and **modern ecommerce user experience**.

---

## 🏛️ Project Architecture & Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom design tokens for Indian ethnic luxury
- **Icons**: Lucide React
- **State**: React Context for Cart Drawer & Wishlist (Local storage enabled, backend decoupled)
- **SEO & GEO**: Native JSON-LD structured data (`ClothingStore`, `Product`, `BreadcrumbList`), OpenGraph metadata, localized sitemaps for Dhanpatganj, Sultanpur, UP.

---

## 📁 Repository Structure

```
kalyani-sarees/
├── docs/                      # Comprehensive Phase 1 documentation
│   ├── README.md              # Documentation index and overview
│   ├── ui/                    # Design system, tokens, typography, components, animations
│   ├── architecture/          # System design, data model, frontend routing, future backend
│   ├── seo/                   # SEO strategy, URL structure, schema & structured data
│   ├── geo/                   # Dhanpatganj local SEO & GEO strategy
│   └── content/               # Brand narrative, editorial copy, product metadata
├── src/
│   ├── app/                   # Next.js App Router pages and layouts
│   ├── components/            # Reusable UI, layout, product, section, and cart components
│   ├── constants/             # Centralized design tokens, navigation, store placeholders
│   ├── data/                  # Strongly typed mock product catalog and categories
│   └── types/                 # Domain TypeScript interfaces
├── public/                    # Static assets and placeholders
├── MEMORY.md                  # Project memory & engineering rules of truth
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── tailwind.config.ts         # Tailwind design token configuration
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```
*Current status: Production build successfully verified with 0 errors across all 32 static routes.*

---

## 📖 Phase 1 Documentation Index

All architectural guidelines and design system specifications are documented in [`docs/`](docs/):

- **Design System & UI**:
  - [`docs/ui/design-system.md`](docs/ui/design-system.md) — Visual principles, spacing, elevations
  - [`docs/ui/color-system.md`](docs/ui/color-system.md) — Base palette, semantic tokens, contrast ratios
  - [`docs/ui/typography.md`](docs/ui/typography.md) — Type scale, font pairings, Devanagari readiness
  - [`docs/ui/components.md`](docs/ui/components.md) — ProductCard, FilterDrawer, Hero, etc.
  - [`docs/ui/pages.md`](docs/ui/pages.md) — Wireframes, layouts, and page-by-page specs
  - [`docs/ui/responsive-design.md`](docs/ui/responsive-design.md) — Mobile-first breakpoints (360px–1440px+)
  - [`docs/ui/animations.md`](docs/ui/animations.md) — Micro-interactions, transitions, reduced motion

- **Architecture & Data**:
  - [`docs/architecture/system-architecture.md`](docs/architecture/system-architecture.md) — High-level system design
  - [`docs/architecture/frontend-architecture.md`](docs/architecture/frontend-architecture.md) — Component layering & state
  - [`docs/architecture/folder-structure.md`](docs/architecture/folder-structure.md) — Directory layout & conventions
  - [`docs/architecture/routing.md`](docs/architecture/routing.md) — App Router route tree & dynamic segments
  - [`docs/architecture/data-model.md`](docs/architecture/data-model.md) — TypeScript domain interfaces
  - [`docs/architecture/future-backend.md`](docs/architecture/future-backend.md) — Headless backend migration roadmap
  - [`docs/architecture/phase-2-plan.md`](docs/architecture/phase-2-plan.md) — Phase 2 implementation roadmap

- **SEO & Local GEO**:
  - [`docs/seo/seo-strategy.md`](docs/seo/seo-strategy.md) — On-page SEO, internal linking, robots & sitemaps
  - [`docs/seo/url-strategy.md`](docs/seo/url-strategy.md) — Semantic slug taxonomy & canonical rules
  - [`docs/seo/structured-data.md`](docs/seo/structured-data.md) — JSON-LD schemas for products & local business
  - [`docs/geo/local-seo-geo-strategy.md`](docs/geo/local-seo-geo-strategy.md) — Dhanpatganj local search optimization

- **Brand & Content**:
  - [`docs/content/brand-content.md`](docs/content/brand-content.md) — Brand voice, story, and editorial copy
  - [`docs/content/product-content.md`](docs/content/product-content.md) — Saree fabrics, sizing, care guides

---

## 🔒 Client Data Integrity Notice

In compliance with our architectural standards, this project **does not invent or fabricate client information**. Business contact details, physical address, opening hours, Google Maps links, and GPS coordinates for the Dhanpatganj store are currently marked with `[VERIFICATION_REQUIRED]` placeholders awaiting client verification before live production deployment.

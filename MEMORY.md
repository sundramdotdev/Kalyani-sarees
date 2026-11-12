# Kalyani Sarees Dhanpatganj — Project Memory (Source of Truth)

> **CRITICAL RULE**: Any AI coding agent or engineer working on this repository MUST read this file before making modifications.
> Never invent business details, addresses, phone numbers, hours, coordinates, reviews, or unverified pricing. Use explicit `[VERIFICATION_REQUIRED]` placeholders for missing business details.

---

## 1. Project Identity

- **Brand Name**: Kalyani Sarees Dhanpatganj
- **Business Type**: Indian ethnic fashion & traditional clothing retail store & ecommerce brand
- **Brand Essence**: Indian Heritage + Contemporary Fashion + Premium Ecommerce + Warm Editorial Photography
- **Primary Product Lines**:
  1. **Sarees** (Primary flagship focus — Silk, Banarasi, Festive, Wedding, Daily Wear, Designer)
  2. **Ladies' Clothing** (Kurtis, Suit Sets, Anarkalis, Dresses, Lehengas, Dupattas)
  3. **Kids' Ethnic Wear** (Girls' festive wear, Boys' kurta-pajama/sherwani, Occasion wear)
  4. **Indian Attire / Festive & Wedding Clothing** (Traditional wear, Celebrations, Festive edits)
- **Target Audience**: Families and women seeking authentic, tasteful, high-quality ethnic wear for weddings, pujas, festivals, and everyday elegance.
- **Geographic Identity**: Dhanpatganj, Sultanpur District, Uttar Pradesh, India.

---

## 2. Technology Decisions

- **Framework**: Next.js (App Router, React 19)
- **Language**: TypeScript (Strict Mode enabled, `noImplicitAny: true`)
- **Styling**: Tailwind CSS (Token-driven CSS variables, custom theme extensions)
- **Icons**: `lucide-react`
- **State Management (Frontend)**: React Context / local state for Cart Drawer & Wishlist (decoupled from backend)
- **Backend Strategy (Phase 1)**: NO backend in Phase 1. Static structured mock data behind clean repository/service interfaces.
- **Backend Strategy (Future)**: Headless REST / GraphQL API or Next.js Route Handlers with PostgreSQL/Supabase or Shopify/Medusa, without requiring frontend UI rewrites.

---

## 3. Design Decisions

### 3.1 Aesthetic & Visual Philosophy
- **Concept**: "Warm Indian Elegance & Celebration"
- **Avoid**:
  - Overly saturated, harsh neon gradients
  - Western-only fast-fashion minimalism
  - Cheap gold glitter effects and skeuomorphism
  - Generic clutter and low-trust local store template looks
  - Excessive, jarring animations
- **Embrace**:
  - Warm ivory and soft beige backgrounds with deep maroon and antique gold accents
  - Generous editorial whitespace, refined borders, and subtle textures
  - High-clarity editorial product photography showcasing rich textiles (Zari, Tussar, Kanjivaram, Georgette, Chanderi)

### 3.2 Approved Color Tokens
- **Primary (Deep Maroon)**: `#6B1F2A` (Rich Indian textile red-maroon)
- **Secondary (Antique Gold)**: `#B08D57` (Subtle zari gold tone)
- **Background (Warm Ivory)**: `#F8F3EA` (Soft, elegant linen-like base)
- **Surface (Soft Beige)**: `#EFE5D5` (Card backgrounds, subtle dividers)
- **Foreground / Text (Deep Charcoal)**: `#252525` (High legibility, soft black)
- **Muted Text**: `#6F6A63` (Secondary details, metadata)
- **Border**: `#DED5C8` (Warm hairline borders)
- **Accent (Festive Terracotta / Warm Vermilion)**: `#9E3D24`
- **Success**: `#2D6A4F`
- **Destructive**: `#9E2A2B`
- **Pure White**: `#FFFFFF`

### 3.3 Typography Decisions
- **Display & Headings**: Elegant Serif (`Playfair Display` or `Cinzel` / `Cormorant Garamond` fallback)
- **Body & UI**: Clean modern sans-serif (`Inter` or `Plus Jakarta Sans`)
- **Multilingual Support**: Fully configured for English with UTF-8 support for future Hindi typography (e.g., `Rozha One`, `Noto Serif Devanagari`).

### 3.4 Approved Navigation Structure
- **Announcement Bar**: Minimal, high-value banner ("Discover the New Festive Collection | Visit our Dhanpatganj Store")
- **Main Navbar**:
  - Primary links: Women, Kids, Indian Attire, New Arrivals, Collections
  - Category dropdowns: Rich mega-menu panels with subcategories
  - Actions: Search, Wishlist, Cart Drawer Trigger
- **Mobile Navbar**:
  - Sticky top header with hamburger menu, logo, search icon, wishlist counter, and cart trigger
  - Full-screen slide-in mobile navigation with accordion category trees

---

## 4. Architecture Decisions

### 4.1 Frontend Component Layering
1. `src/types/`: Strict TypeScript domain models (`Product`, `Category`, `CartItem`, `StoreInfo`, `FilterState`).
2. `src/constants/`: Central design tokens, brand constants, navigation items, contact placeholders.
3. `src/data/`: Structured static mock catalog conforming strictly to domain types.
4. `src/components/ui/`: Atomic design components (Button, Badge, Input, Modal, Drawer, Tabs, Breadcrumb).
5. `src/components/layout/`: Navbar, AnnouncementBar, Footer, MobileMenu.
6. `src/components/product/`: ProductCard, ProductGrid, ProductGallery, ProductInfo, ProductActions, ProductFilters.
7. `src/components/sections/`: Hero, CategoryGrid, SareeEdit, LadiesCollection, KidsCollection, OccasionSection, BrandStory, StoreSection, Newsletter.
8. `src/components/cart/`: CartDrawer, CartItemRow, CartSummary.
9. `src/app/`: Next.js App Router pages with clean semantic URLs.

### 4.2 State Management
- `CartContext`: Manages in-memory cart items with LocalStorage persistence. Decoupled from backend APIs; ready to swap with checkout API in Phase 2.
- `WishlistContext`: Manages saved items with LocalStorage persistence.

### 4.3 Image Strategy
- High-resolution WebP/AVIF format with Next.js `<Image />` component.
- Standardized aspect ratios:
  - Product Card: `3:4` (Portrait fashion ratio)
  - Editorial Hero: `16:9` (Desktop), `4:5` (Mobile)
  - Category Card: `4:5`
- Strict `sizes` and `priority` attributes for LCP optimization.

---

## 5. SEO Decisions

### 5.1 URL Structure
Clean, semantic, RESTful URLs:
- `/` — Homepage
- `/shop` — Complete catalog with faceted filters
- `/sarees` — Flagship sarees hub
- `/ladies-wear` — Ladies' ethnic wear hub
- `/kids-wear` — Kids' ethnic collection hub
- `/indian-attire` — Traditional & festive wear hub
- `/new-arrivals` — Latest seasonal additions
- `/collections` — Curated seasonal & festival edits
- `/product/[slug]` — Individual product detail page
- `/search`, `/wishlist`, `/cart` — Utility pages
- `/about`, `/contact`, `/size-guide`, `/shipping-returns`, `/privacy-policy`, `/terms` — Brand & informational pages

### 5.2 Metadata Conventions
- Descriptive titles incorporating primary brand keywords and local anchor:
  - Format: `[Page Name] | Kalyani Sarees Dhanpatganj`
  - E.g.: `Pure Banarasi Silk Sarees | Kalyani Sarees Dhanpatganj`
- Dynamic Open Graph and Twitter Card generation with localized Indian fashion imagery.

### 5.3 Structured Data Strategy
- JSON-LD schemas embedded in App Router layouts and pages:
  - `Organization` & `ClothingStore` / `LocalBusiness`
  - `Product` & `Offer` (with structured price currency `INR`)
  - `BreadcrumbList` on every category and product page
  - `WebSite` with `SearchAction` potential

---

## 6. GEO & Local SEO Decisions

### 6.1 Store Identity
- **Store Name**: Kalyani Sarees
- **Locality / Market**: Dhanpatganj
- **District**: Sultanpur
- **State**: Uttar Pradesh
- **Country**: India
- **Postal Code / PIN**: `[VERIFICATION_REQUIRED: Client to provide exact PIN code]`
- **Full Address**: `[VERIFICATION_REQUIRED: Client to provide exact street address / landmark]`
- **Official Phone Number**: `[VERIFICATION_REQUIRED: Client to provide business phone/WhatsApp]`
- **Opening Hours**: `[VERIFICATION_REQUIRED: Client to provide store days & timings]`
- **Google Maps Link / Coordinates**: `[VERIFICATION_REQUIRED: Client to provide Google Business Profile link]`

### 6.2 Local Keyword Targets
- "Sarees in Dhanpatganj"
- "Best saree shop in Dhanpatganj"
- "Ladies clothing store in Dhanpatganj"
- "Kids ethnic wear Dhanpatganj"
- "Wedding sarees and lehengas in Dhanpatganj Sultanpur"
- "Festive Indian attire Dhanpatganj"

---

## 7. Important Rules & Guardrails

1. **NEVER INVENT CLIENT BUSINESS DATA**:
   - Address, telephone, WhatsApp, opening hours, Google Maps links, and GPS coordinates must remain marked as `[VERIFICATION_REQUIRED]` until explicitly provided by the business owner.
2. **NEVER INVENT FAKE REVIEWS OR TESTIMONIALS**:
   - Use UI slots for reviews, but do not populate fake customer names or fabricated quotes.
3. **DO NOT OVERCOMPLICATE WITH BACKEND IN PHASE 1 & 2**:
   - Keep the frontend clean, responsive, and typed. Build modular data-access functions (e.g. `getProductBySlug`, `getProductsByCategory`) that can simply be updated from local static data to database queries in Phase 3.
4. **MOBILE FIRST**:
   - Every layout, filter drawer, gallery, and touch target must be thoroughly verified for small mobile screens (360px - 430px) as the vast majority of Indian retail shopping happens on mobile.

---

## 8. Phase 2 Implementation Record (Frontend Development)

- **Execution Date**: October 2026
- **Build Status**: Verified with 0 errors across all 32 static routes (`npm run build`).

### 8.1 Implemented Routes
- `/` — Homepage (Hero, CategoryGrid, SareeEdit, LadiesCollection, KidsCollection, OccasionSection, BrandStory, StoreSection, Newsletter)
- `/shop` — Catalog with faceted filters (Fabric, Occasion, Price Range) and sorting
- `/sarees` — Dedicated Banarasi and silk saree hub
- `/ladies-wear` — Kurtis, suit sets, anarkalis, and lehengas
- `/kids-wear` — Little Festive Moments (boys & girls ethnic wear)
- `/indian-attire` — Traditional & wedding attire hub
- `/new-arrivals` — Fresh seasonal additions feed
- `/collections` — Editorial bridal & festival curations
- `/product/[slug]` — High-res zoom gallery, swatches, size guide modal, specs accordion, related products, and structured JSON-LD schema
- `/search` — Live client search with autocomplete suggestions and dedicated search results
- `/wishlist` — Persistent trousseau curation with local storage
- `/cart` — Full shopping bag with free shipping meter, coupon codes (`FESTIVE10`), and order summary
- `/about` — Artisanal handloom roots and brand story
- `/contact` — Dhanpatganj showroom directions and consultation appointment form
- `/size-guide` — Measurement charts for sarees, kurtis, and children's clothing
- `/shipping-returns` — Delivery timelines and 7-day exchange policy
- `/privacy-policy` & `/terms` — Commercial and legal disclosures
- `/sitemap.xml` & `/robots.txt` — Dynamic search engine discovery files

### 8.2 Client State Management
- `CartContext`: LocalStorage sync (`kalyani_sarees_cart`), drawer toggle, quantity steppers, free shipping threshold (₹2,999).
- `WishlistContext`: LocalStorage sync (`kalyani_sarees_wishlist`), optimistic toggle, counter badge.

### 8.3 Design Tokens & Styling
- Tailwind v4 with `@theme` mappings for `#6B1F2A` (Maroon), `#B08D57` (Antique Gold), `#F8F3EA` (Ivory), and `#252525` (Charcoal).
- System font fallbacks configured in CSS variables to ensure zero build errors across offline and sandboxed build environments.


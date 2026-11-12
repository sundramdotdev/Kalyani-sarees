# Phase 2 Implementation Plan & Roadmap — Kalyani Sarees Dhanpatganj

## 1. Overview & Objectives

Following the completion and validation of the Phase 1 UI/UX, Design System, Information Architecture, and Documentation, **Phase 2** focuses on translating these specifications into fully responsive, production-ready frontend components, pages, interactive states, and search optimization assets.

---

## 2. Phase 2 Milestones & Breakdown

```mermaid
flowchart LR
    M1["Milestone 1:\nFoundations & Primitives"] --> M2["Milestone 2:\nLayout & Navigation"]
    M2 --> M3["Milestone 3:\nEditorial Sections"]
    M3 --> M4["Milestone 4:\nCommerce & Cart Engine"]
    M4 --> M5["Milestone 5:\nPages & Routing"]
    M5 --> M6["Milestone 6:\nSEO, GEO & QA"]
```

### Milestone 1: Design Tokens & UI Primitives (Days 1–3)
- Configure `tailwind.config.ts` with complete design token variables (`--primary: #6B1F2A`, `--secondary: #B08D57`, etc.).
- Set up font loaders via `next/font/google` (`Playfair Display`, `Plus Jakarta Sans`, and Devanagari font fallbacks).
- Build atomic UI components in `src/components/ui/`:
  - `Button.tsx` (primary maroon, secondary gold, outline, ghost, editorial underline)
  - `Badge.tsx` (`NEW`, `BESTSELLER`, `FESTIVE`, `LIMITED`)
  - `Input.tsx`, `Select.tsx`, `Checkbox.tsx`
  - `Modal.tsx` & `Drawer.tsx` (with focus trap, backdrop blur, and reduced motion safety)
  - `Breadcrumb.tsx` (with semantic HTML and schema integration)

### Milestone 2: Global Layout & Navigation Shells (Days 4–6)
- Build `AnnouncementBar.tsx` with subtle promotional carousel and Dhanpatganj store mention.
- Build sticky `Navbar.tsx`:
  - Brand typography logotype
  - Desktop mega-menu category dropdowns (Women, Kids, Indian Attire, Collections)
  - Search trigger, Wishlist heart counter, and Cart Drawer trigger
- Build `MobileMenu.tsx`:
  - Slide-over sheet with accordion sub-category trees
  - Store consultation CTA and direct phone/WhatsApp links
- Build comprehensive `Footer.tsx`:
  - Brand heritage narrative
  - Category sitemap links, Customer Care, Policies
  - Dedicated Dhanpatganj physical store information card

### Milestone 3: Product Card, Grid, & Editorial Sections (Days 7–10)
- Build `ProductCard.tsx`:
  - 3:4 portrait aspect ratio
  - Hover image swap to secondary pallu/drape shot with subtle zoom
  - Multi-swatch color switcher
  - Badges, compare-at strikethrough price, and wishlist quick toggle
  - Slide-up "Quick View" action modal
- Build Homepage sections in `src/components/sections/`:
  - `Hero.tsx` (Editorial typography + portrait-safe imagery + dual CTAs)
  - `CategoryGrid.tsx` (4-pillar category gateway with Saree prominence)
  - `SareeEdit.tsx` ("THE SAREE EDIT" responsive carousel & grid)
  - `LadiesCollection.tsx` (Kurtis, suit sets, anarkalis)
  - `KidsCollection.tsx` ("LITTLE FESTIVE MOMENTS")
  - `OccasionSection.tsx` ("DRESS FOR THE MOMENT")
  - `BrandStory.tsx` (Artisanal weaving narrative)
  - `StoreSection.tsx` (Dhanpatganj showroom showcase with verified address placeholders)
  - `Newsletter.tsx` (VIP festive invite form)

### Milestone 4: Product Detail Page & Cart Drawer Engine (Days 11–14)
- Build `ProductGallery.tsx`:
  - Multi-angle high-res zoom (drape, pallu, zari border, blouse)
  - Touch-swipeable mobile carousel with indicator dots
- Build `ProductInfo.tsx` & `ProductActions.tsx`:
  - Size selection chips (`Free Size`, `S`, `M`, `L`, `XL`, `Unstitched`)
  - Fabric, weave, saree length, and blouse specifications
  - Sizing guide modal trigger
  - Quantity stepper (`- 1 +`)
  - "Add to Cart" and "Buy Now" triggers
- Build `CartDrawer.tsx` & `CartContext.tsx`:
  - Slide-in side drawer with LocalStorage persistence
  - Free shipping progress meter
  - Itemized rows with increment/decrement and removal
  - Order summary and checkout CTA

### Milestone 5: Routing & Informational Pages (Days 15–17)
- Implement catalog page `/shop` with sticky desktop sidebar and mobile filter drawer.
- Implement category hub pages: `/sarees`, `/ladies-wear`, `/kids-wear`, `/indian-attire`.
- Implement dynamic `/product/[slug]` with `generateStaticParams()`.
- Implement customer care & brand pages:
  - `/about`, `/contact`, `/size-guide`, `/shipping-returns`, `/privacy-policy`, `/terms`.

### Milestone 6: SEO, Local GEO, A11y & Performance QA (Days 18–20)
- Embed JSON-LD structured schemas (`ClothingStore`, `Product`, `BreadcrumbList`).
- Configure dynamic OpenGraph cards and Twitter sharing tags.
- Generate dynamic `sitemap.ts` and `robots.ts`.
- Perform cross-device testing across 360px, 390px, 430px, 768px, 1024px, 1440px+.
- Audit Core Web Vitals (LCP < 2.0s, CLS < 0.05, FID/INP < 100ms).
- Verify client verification checklist for Dhanpatganj store metadata.

---

## 3. Client Verification Checklist (Pre-Production Deployment)

Prior to moving to a live production domain, the business owner must supply and confirm:
- [ ] Exact postal street address, landmark, and PIN code in Dhanpatganj.
- [ ] Official customer support telephone and dedicated WhatsApp business number.
- [ ] Store operating days and opening hours (e.g., Mon–Sun 10:00 AM – 8:30 PM).
- [ ] Google Business Profile CID / Google Maps embed URL.
- [ ] Confirmed retail catalog pricing and GST registration details.

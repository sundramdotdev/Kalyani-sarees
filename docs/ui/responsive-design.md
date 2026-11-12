# Responsive Design & Mobile-First Specification — Kalyani Sarees Dhanpatganj

## 1. Mobile-First Philosophy

In Indian ecommerce, over **75% to 85% of traffic and purchasing journeys occur on smartphones**. For **Kalyani Sarees Dhanpatganj**, mobile is not a secondary scaled-down version of desktop; it is the **primary design target**.

### Core Mobile Principles
1. **Thumb-Zone Optimization**: Critical conversion triggers (Add to Cart, Buy Now, Filter Drawer, Cart Drawer) must sit within effortless reach of the user's thumb.
2. **Zero Horizontal Layout Shift**: Prevent viewport clipping on compact displays down to 360px width.
3. **Touch Target Generosity**: All clickable elements strictly adhere to the ≥ 44px × 44px touch target guideline.
4. **Fast First Visual Paint**: Fast loading with prioritized WebP imagery and responsive `srcset` definitions.

---

## 2. Breakpoint Architecture

| Breakpoint | Target Device Width | Primary Target Devices | Layout Behavior & Grid Columns |
|---|---|---|---|
| **Compact Mobile** | `360px` | Older Android devices, Galaxy A-series | 2-column compact grid (`gap-2`), compact header, 14px body |
| **Standard Mobile** | `390px` | iPhone 12/13/14/15, Pixel 7/8 | 2-column product grid (`gap-3`), bottom sticky buy bar |
| **Large Mobile** | `430px` | iPhone Pro Max, Galaxy Ultra | 2-column roomy grid (`gap-4`), full-width hero visual |
| **Tablet Portrait** | `768px` (`md:`) | iPad Mini, iPad 10th Gen | 3-column product grid, top secondary navigation bar |
| **Tablet Landscape**| `1024px` (`lg:`) | iPad Pro, Small Laptops | 3 or 4-column product grid, sticky desktop filter sidebar |
| **Standard Desktop**| `1280px` (`xl:`) | MacBook Air, 1080p Desktop Monitors | 4-column product grid, full horizontal mega-menu, max-w-7xl |
| **Large Displays** | `1440px+` (`2xl:`) | High-res 2K/4K Monitors | 4-column spacious grid with bounded max-width (1440px) |

---

## 3. Dedicated Mobile Components & Interactions

### 3.1 Mobile Header & Navigation
- Height: Fixed 56px (compact) to 60px.
- Left: Hamburger toggle button with accessible aria-label (`Open Navigation Menu`).
- Center: Centered brand logotype.
- Right: Quick Search icon, Wishlist heart badge, Cart icon with item counter pill.
- Sticky behavior: Persists at top of viewport with a subtle backdrop blur (`backdrop-blur-md bg-background/90 border-b border-border`).

### 3.2 Full-Screen Slide-in Mobile Menu
- Triggered by hamburger button.
- Clean category hierarchy with accordion drill-downs:
  - Women (Expands to: Sarees, Kurtis, Suit Sets, Lehengas)
  - Kids (Expands to: Girls, Boys, Festive Wear)
  - Indian Attire
  - Collections
- Quick store consultation button: "Contact Dhanpatganj Store".
- Currency and language switchers at bottom.

### 3.3 Mobile Filter Drawer
- Replaces desktop sidebar.
- Triggered by floating or sticky "Filters & Sort" bar.
- Slides up from screen bottom as a native-feeling modal sheet.
- Category pills with clear checkmarks and price range sliders.
- Fixed bottom action bar: `[Clear All]` (ghost) and `[View 48 Products]` (primary maroon CTA).

### 3.4 Mobile Product Gallery
- Swipeable carousel with smooth CSS snap scroll (`snap-x snap-mandatory`).
- Horizontal pagination indicator dots or "1 / 5" photo counter pill overlay.
- Double-tap or pinch-to-zoom for inspecting delicate zari threads and fabric textures.

### 3.5 Sticky Bottom Purchase Bar (Mobile PDP)
- Located at bottom of screen (`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border p-3`).
- Activated via `IntersectionObserver` when the primary page buy button scrolls above the fold.
- Layout:
  - Left: Thumbnail (40px × 50px) + Title & Price (`₹14,999`).
  - Right: High-impact maroon `[Add to Cart]` button.

---

## 4. Responsive Product Grid Behavior

```css
/* Responsive Grid Classes */
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* Mobile: 2 columns */
  gap: 0.75rem; /* 12px mobile gap */
}

@media (min-width: 768px) {
  .catalog-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* Tablet: 3 columns */
    gap: 1.25rem; /* 20px tablet gap */
  }
}

@media (min-width: 1280px) {
  .catalog-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* Desktop: 4 columns */
    gap: 1.5rem; /* 24px desktop gap */
  }
}
```

---

## 5. Performance & Mobile Data Considerations

In regional Indian markets (such as Sultanpur District and Tier 2/3 cities), mobile data connections can fluctuate between 4G and 5G:
- **Next.js `<Image />`**:
  - `sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"`
  - High compression WebP/AVIF format.
  - Image placeholders (`placeholder="blur"`) prevent layout shifts.
- **Lazy Loading**: All off-screen catalog cards and footer sections use native lazy loading.

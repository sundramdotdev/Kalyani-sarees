# Page Wireframes & Specifications — Kalyani Sarees Dhanpatganj

## 1. Homepage (`/`)

The homepage establishes the editorial authority of the brand while serving as an intuitive commerce gateway.

### Page Flow & Section Hierarchy

```
1. Announcement Bar
   └─ Minimal alert: "Discover the New Festive Collection | Visit our Dhanpatganj Store"

2. Sticky Navbar
   └─ Desktop: Logo | Women | Kids | Indian Attire | New Arrivals | Collections | Search | Wishlist | Cart
   └─ Mobile: Hamburger | Logo | Search | Wishlist | Cart Drawer Trigger

3. High-Impact Editorial Hero
   └─ Full-width portrait-safe imagery with warm gradient scrim
   └─ Headline: "TIMELESS INDIAN ELEGANCE"
   └─ Subtitle: "Discover sarees and ethnic styles for every celebration."
   └─ CTAs: [Shop Sarees] (Primary Maroon) | [Explore Collection] (Outline Gold)

4. Shop by Category (The 4 Pillars)
   └─ Asymmetric or 4-tile grid:
      ├─ SAREES (50% visual dominance / double width)
      ├─ LADIES WEAR
      ├─ KIDS ETHNIC WEAR
      └─ INDIAN ATTIRE

5. The Saree Edit (Featured Sarees)
   └─ Heading: "THE SAREE EDIT"
   └─ Subtitle: "Handpicked weaves celebrating Banarasi, Kanjivaram, and celebratory silks."
   └─ 4-column responsive grid of ProductCards with quick view & hover pallu reveal

6. Ladies Collection Showcase
   └─ Heading: "CONTEMPORARY ETHNIC SILHOUETTES"
   └─ Quick Category Pills: Kurtis | Suit Sets | Anarkalis | Lehengas
   └─ Product Carousel / Grid

7. Kids Collection ("LITTLE FESTIVE MOMENTS")
   └─ Heading: "LITTLE FESTIVE MOMENTS"
   └─ Warm editorial photography featuring girls' lehengas & boys' kurta-pyjama sets
   └─ Category splits: Girls | Boys | Festive Kids Wear

8. Occasion Section ("DRESS FOR THE MOMENT")
   └─ 4 Curated Occasions:
      ├─ Festivals (Diwali, Chhath, Navratri, Eid)
      ├─ Weddings & Receptions (Bridal silk, heavy embroidery)
      ├─ Family Celebrations & Pujas
      └─ Everyday Elegance (Breathable cottons & georgettes)

9. Brand Story ("ROOTED IN TRADITION. DESIGNED FOR TODAY.")
   └─ Split-screen editorial: Atmospheric photo of handloom weaving + narrative text
   └─ Storytelling copy emphasizing authentic craftsmanship, regional artistry, and family values

10. Local Store Showcase ("KALYANI SAREES DHANPATGANJ")
    └─ Dedicated local retail block for customers in Dhanpatganj and Sultanpur District
    └─ Store presence, physical consultation services, bridal bridal-trousseau booking
    └─ Verified address placeholder, phone CTA, map directions CTA, opening hours placeholder

11. Newsletter & VIP Styling Invitation
    └─ Elegant email opt-in: "Receive exclusive invitations to new collection launches"

12. Global Footer
    └─ Comprehensive links: Shop categories, Customer Care, About, Policies, Local Dhanpatganj store details
```

---

## 2. Product Detail Page (`/product/[slug]`)

The product page provides comprehensive information necessary for high-value Indian ethnic apparel purchasing decisions.

### Layout Wireframe (Desktop vs Mobile)

#### Desktop: 2-Column Balanced Architecture
- **Left Column (60%)**: `ProductGallery`
  - Vertical thumbnail strip + high-resolution primary viewport with lens zoom; OR 2-column editorial image grid displaying:
    1. Full drape front view
    2. Pallu detail shot
    3. Blouse piece / border embroidery close-up
    4. Lifestyle / motion drape shot
- **Right Column (40%)**: `ProductInfo` (Sticky scrolling)
  - Breadcrumb (`Home > Sarees > Banarasi Sarees > Royal Crimson Banarasi Katan Silk`)
  - Badges (`NEW`, `BESTSELLER`)
  - Product Title in Serif H1
  - Price Block: Current Price (`₹14,999`) + Compare-at Price (`₹18,500`) + Percentage Off (`19% OFF`) + Inclusive of all taxes
  - Color Variant Selector (Interactive swatches with color label)
  - Size Selector (Standard saree / blouse unstitched / stitched size chips: `Free Size`, `S`, `M`, `L`, `XL`, `XXL`)
  - Size Guide Trigger (Opens interactive measurement modal)
  - Quantity Stepper (`- 1 +`)
  - Action Buttons:
    - Primary CTA: `Add to Cart` (Solid Maroon)
    - Instant Purchase: `Buy Now` (Antique Gold / Secondary)
    - Wishlist button (Heart with save label)
  - Value Props Checklist:
    - 100% Genuine Handcrafted Weave
    - Cash on Delivery available across India
    - Complimentary Fall & Pico stitching
  - Accordion Specifications:
    - **Product Story & Description**
    - **Fabric, Weave & Zari Details** (e.g. Pure Katan Silk, Gold Zari, 5.5m Saree + 0.8m Blouse)
    - **Wash & Care Instructions** (Dry clean only, store in muslin cloth)
    - **Shipping & Returns Policy** (Dispatched in 24–48 hours, 7-day exchange)
  - **Related Products** & **Recently Viewed** grids at bottom.

#### Mobile: Vertical Stack with Sticky Purchase Bar
- Swipable gallery carousel with full-screen zoom trigger.
- Compact metadata stack.
- **Sticky Bottom Purchase Bar**: Fixed bar at bottom screen with thumbnail, title, price, and instant "Add to Cart" button (appears when the main buy buttons scroll out of view).

---

## 3. Shop & Category Catalog Pages (`/shop`, `/sarees`, `/ladies-wear`, `/kids-wear`)

### Page Architecture
1. **Category Hero Banner**: Refined editorial heading, curated sub-text, and category pill navigation.
2. **Catalog Control Bar**:
   - Total product count ("Showing 48 Sarees")
   - Mobile "Filter & Sort" trigger button with active badge count
   - Desktop Sort Dropdown ("Featured", "Price: Low to High", "Price: High to Low", "Newest Arrivals")
3. **Main Catalog Area**:
   - **Desktop Left Column (25%)**: Sticky faceted filter sidebar (`ProductFilters`).
   - **Right Column (75%)**: Responsive product grid (`grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4`).
4. **Pagination & Load More**:
   - Progressive pagination with "Load More Products" CTA and page count indicator.

---

## 4. Cart Experience

### 4.1 Slide-over Cart Drawer
- Accessible globally from navbar cart badge.
- Instant feedback when user clicks "Add to Cart".
- Progress bar for perks ("Add ₹501 more to unlock Complimentary Express Shipping").
- Itemized card rows with thumbnail, options, price, stepper, and remove action.
- Order summary with promo code input placeholder and "Proceed to Checkout" CTA.

### 4.2 Dedicated Cart Page (`/cart`)
- 2-column layout (Cart item table on left, sticky order summary card on right).
- Cross-sell carousel ("Complete your look with matching blouses & dupattas").

---

## 5. Informational & Legal Pages

- `/about`: Brand heritage story, celebration of regional weaving clusters, Dhanpatganj store roots.
- `/contact`: Customer care email, phone/WhatsApp placeholder, store inquiry form, store visit planner.
- `/size-guide`: Detailed bust, waist, hip, and length charts for kurtis, suits, kids wear, and blouse tailoring specifications.
- `/shipping-returns`: Clear breakdown of domestic shipping timeframes, COD policies, and exchange workflows.
- `/privacy-policy` & `/terms`: Standardized legal compliance disclosures.

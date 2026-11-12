# Component System Specification — Kalyani Sarees Dhanpatganj

## 1. Overview & Architecture

The component architecture follows an atomic, composable design pattern. All components are:
1. **Decoupled from data sources**: Components accept typed props defined in `@/types`.
2. **Accessible (A11y)**: Built with ARIA roles, keyboard navigation, and touch-target compliance.
3. **Responsive by default**: Engineered with mobile-first CSS utility breakpoints.
4. **Theme token driven**: Consuming semantic CSS variables without hardcoded color values.

---

## 2. UI Primitives (`src/components/ui/`)

### 2.1 `Button`
Supports 5 visual variants and 3 sizes:
- **Variants**:
  - `primary`: Solid Deep Maroon background, white text (`bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.99]`).
  - `secondary`: Antique Gold border and subtle text or soft beige surface.
  - `outline`: `border border-border text-foreground hover:bg-surface`.
  - `ghost`: Transparent with hover surface wash.
  - `editorial`: Minimal text link with an animated bottom hairline underline that expands on hover.
- **Sizes**: `sm` (h-9 px-3 text-xs), `md` (h-11 px-5 text-sm), `lg` (h-14 px-8 text-base).

### 2.2 `Badge`
Compact indicators communicating merchandise state:
- `NEW`: Soft stone grey pill (`bg-[#EAE6DF] text-[#252525]`).
- `BESTSELLER`: Maroon pill with white text (`bg-primary text-primary-foreground`).
- `FESTIVE`: Antique Gold pill (`bg-secondary text-secondary-foreground`).
- `LIMITED`: Terracotta accent pill (`bg-accent text-accent-foreground`).

### 2.3 `Drawer` & `Modal`
- Slide-over panel (right-aligned for Cart and Search, left-aligned for Mobile Menu and Filters).
- Backdrop with `backdrop-blur-sm bg-black/40` fade.
- Smooth hardware-accelerated CSS translate transitions.
- Trap focus and escape key dismiss listener.

### 2.4 `Breadcrumb`
- Semantic `<nav aria-label="Breadcrumb">` rendering an `<ol>` sequence.
- Automatic integration with JSON-LD `BreadcrumbList` schema.

---

## 3. Product Components (`src/components/product/`)

### 3.1 `ProductCard`
The core visual engine of the ecommerce experience.

#### Visual Structure
```
+------------------------------------------+
|  [BADGE: BESTSELLER]      [WISHLIST SVG] |
|                                          |
|                                          |
|             PRODUCT IMAGE                |
|         (Aspect Ratio: 3/4)              |
|                                          |
|   (Hover: Swap to Secondary/Pallu View)  |
|                                          |
|  [QUICK VIEW / QUICK ADD OVERLAY]        |
+------------------------------------------+
|  Category / Fabric (e.g. Pure Banarasi)  |
|  Product Name (e.g. Royal Maroon Silk)   |
|  ₹14,999  ₹18,500 (19% OFF)              |
|  Color Variant Swatches (3-5 dots)       |
+------------------------------------------+
```

#### Supported Props
```typescript
interface ProductCardProps {
  product: Product;
  priority?: boolean;
  onQuickView?: (product: Product) => void;
}
```

#### Interaction States
- **Desktop Hover**: Image swaps smoothly to `secondaryImage` (or zoomed pallu/drape detail) with a subtle scale transform (`scale-105 duration-500`).
- **Quick Action**: "Quick View" slide-up button appears on card bottom on hover.
- **Wishlist Toggle**: Heart icon in top-right corner toggleable with active maroon state.
- **Color Swatches**: Clicking a color dot previews the corresponding product image variant.

### 3.2 `ProductGallery`
- **Desktop**: 2-column editorial grid displaying high-res drape shots, close-up border/zari details, and pallu craftsmanship; OR sticky vertical thumbnail strip with large main viewport.
- **Mobile**: Touch-swipeable carousel with pagination dots, pinch-to-zoom support, and full-screen lightbox modal.

### 3.3 `ProductFilters`
- Faceted filtering by:
  - **Category**: Sarees, Kurtis, Suit Sets, Kids Wear, Lehengas
  - **Fabric**: Pure Silk, Banarasi Katan, Chanderi, Georgette, Organza, Cotton
  - **Occasion**: Wedding, Festive, Daily Wear, Party, Puja
  - **Color Family**: Maroon, Gold, Pink, Green, Yellow, Blue, Pastel
  - **Price Range**: Multi-tier ranges (Under ₹2,000, ₹2,000–₹5,000, ₹5,000–₹15,000, Above ₹15,000)
  - **Availability**: In Stock, Pre-order
- **Desktop**: Sticky left sidebar (`w-64 shrink-0`).
- **Mobile**: Sliding bottom-up or right-side Filter Drawer with clear badge counter and "Apply Filters" fixed bottom button.

---

## 4. Section Components (`src/components/sections/`)

### 4.1 `Hero`
- High-impact editorial photography capturing the grandeur of Indian celebratory fashion.
- Rich typography overlay: Headline in Display XL Serif ("TIMELESS INDIAN ELEGANCE").
- Dual CTAs: Primary "Shop Sarees" and secondary "Explore Collection".
- Guaranteed mobile subject framing without awkward portrait crop.

### 4.2 `CategoryGrid` ("Shop by Category")
- Four prominent visual gateways:
  1. **Sarees** (Given largest visual grid emphasis — 2-span column or hero tile).
  2. **Ladies' Wear**.
  3. **Kids' Wear**.
  4. **Indian Attire**.

### 4.3 `SareeEdit` ("THE SAREE EDIT")
- Curated carousel or 4-column responsive grid focusing exclusively on the brand's flagship saree catalog (Banarasi, Kanjivaram, Bridal, Partywear).

### 4.4 `LadiesCollection` & `KidsCollection`
- Editorial splits showcasing suit sets, kurtis, and the "LITTLE FESTIVE MOMENTS" children's ethnic collection.

### 4.5 `OccasionSection` ("DRESS FOR THE MOMENT")
- Visual occasion finder: Festivals, Weddings, Celebrations, Everyday Ethnic.

### 4.6 `BrandStory` ("ROOTED IN TRADITION. DESIGNED FOR TODAY.")
- Short, evocative narrative honoring Indian weaving communities, authentic zari, and timeless celebratory attire.

### 4.7 `StoreSection` ("VISIT US IN DHANPATGANJ")
- Physical store highlight for Dhanpatganj customers.
- Displays verified address placeholders, store contact options, interactive map directions CTA, and operating hours.

---

## 5. Cart Components (`src/components/cart/`)

### 5.1 `CartDrawer`
- Slide-in side drawer opening immediately upon adding an item.
- Displays free shipping threshold progress bar.
- List of added `CartItem` cards with quantity selectors, size details, and remove action.
- Sticky checkout footer displaying subtotal, taxes notice, and primary "Proceed to Checkout" CTA.

### 5.2 `CartItem`
- Thumbnail (aspect 3:4), title, selected color/size, unit price, stepper (`- 1 +`), and delete button.

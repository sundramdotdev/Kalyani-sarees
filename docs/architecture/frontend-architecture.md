# Frontend Architecture Specification — Kalyani Sarees Dhanpatganj

## 1. Component Layering Paradigm

The frontend codebase is organized into four distinct architectural layers, ensuring high cohesion and loose coupling:

```
+--------------------------------------------------------------+
| 1. Page Shells & Layouts (src/app/)                          |
|    - Server Components handling data fetching, metadata,    |
|      JSON-LD structured data, and route segments             |
+--------------------------------------------------------------+
                               |
+--------------------------------------------------------------+
| 2. Section Containers (src/components/sections/)             |
|    - High-level business blocks (Hero, SareeEdit,            |
|      CategoryGrid, StoreSection, BrandStory)                 |
+--------------------------------------------------------------+
                               |
+--------------------------------------------------------------+
| 3. Domain Components (src/components/product/, cart/, etc.)  |
|    - ProductCard, ProductGallery, CartDrawer, Filters        |
|    - Consume typed domain interfaces (`Product`, `CartItem`) |
+--------------------------------------------------------------+
                               |
+--------------------------------------------------------------+
| 4. UI Primitives (src/components/ui/)                        |
|    - Button, Badge, Input, Drawer, Modal, Tabs, Breadcrumb   |
|    - Pure visual controls completely uncoupled from domain   |
+--------------------------------------------------------------+
```

---

## 2. Server vs. Client Component Strategy

In Next.js App Router, keeping as many components as possible on the server minimizes client JavaScript payload, optimizes Google Search indexing, and ensures near-instant First Contentful Paint (FCP).

### Server Components (`RSC` — Default)
- `app/layout.tsx`: Root document shell, font injection, SEO defaults.
- `app/page.tsx`: Homepage composition.
- `app/sarees/page.tsx` & Category pages: Server-rendered product grids.
- `app/product/[slug]/page.tsx`: Product detail shell, dynamic metadata, structured schema.
- `components/sections/*`: Editorial sections without client interaction.
- `components/layout/Footer.tsx`: Static footer links and legal text.

### Client Components (`"use client"`)
- `components/layout/Navbar.tsx`: Sticky scroll detection, search overlay trigger.
- `components/layout/MobileMenu.tsx`: Interactive sliding drawer and accordion.
- `components/cart/CartDrawer.tsx`: Global cart overlay with state mutations.
- `components/product/ProductGallery.tsx`: Interactive image thumbnail swapping, pinch-zoom, carousel swipe.
- `components/product/ProductFilters.tsx`: Dynamic client-side multi-facet filter toggles.
- `components/product/ProductActions.tsx`: Quantity increment/decrement, size swatch selection, "Add to Cart" dispatch.
- `components/ui/Modal.tsx` & `Drawer.tsx`: Focus traps and keyboard event listeners.

---

## 3. Client State Management

Phase 1 avoids heavy external state libraries (Redux, Zustand) in favor of lightweight, native React Context with persistent LocalStorage synchronizers:

### 3.1 `CartContext`
- **State**:
  - `items: CartItem[]`
  - `isOpen: boolean` (Controls Cart Drawer visibility)
  - `itemCount: number` (Total units)
  - `subtotal: number` (Sum of prices in INR)
- **Actions**:
  - `addItem(product: Product, variant: { color: string; size: string }, quantity: number)`
  - `removeItem(itemId: string)`
  - `updateQuantity(itemId: string, quantity: number)`
  - `clearCart()`
  - `openCart()` / `closeCart()`
- **Persistence**: Automatically synced with `localStorage.getItem('kalyani_cart')`.

### 3.2 `WishlistContext`
- **State**:
  - `items: string[]` (Product ID / slug array)
- **Actions**:
  - `toggleWishlist(productId: string)`
  - `isInWishlist(productId: string): boolean`
- **Persistence**: Synced with `localStorage.getItem('kalyani_wishlist')`.

---

## 4. Error Handling & Loading Strategy

- **Loading States**: Next.js `loading.tsx` skeletons for catalog grids and product detail views prevent cumulative layout shift (CLS).
- **Not Found States**: Custom `not-found.tsx` rendering warm, branded error messages with direct links back to Sarees, Ladies Wear, and Dhanpatganj store consultation.
- **Error Boundaries**: `error.tsx` catches runtime exceptions gracefully with recovery retry buttons.

# Folder Structure Specification — Kalyani Sarees Dhanpatganj

## 1. Directory Tree Layout

The project follows a clean, modular directory structure aligned with Next.js App Router best practices.

```
kalyani-sarees/
├── docs/                                  # Complete Architectural & Design Specifications
│   ├── README.md                          # Documentation index
│   ├── ui/                                # Visual, design token, component, and animation specs
│   │   ├── design-system.md
│   │   ├── color-system.md
│   │   ├── typography.md
│   │   ├── components.md
│   │   ├── pages.md
│   │   ├── responsive-design.md
│   │   └── animations.md
│   ├── architecture/                      # Technical & system engineering specs
│   │   ├── system-architecture.md
│   │   ├── frontend-architecture.md
│   │   ├── folder-structure.md
│   │   ├── routing.md
│   │   ├── data-model.md
│   │   ├── future-backend.md
│   │   └── phase-2-plan.md
│   ├── seo/                               # Search engine optimization specifications
│   │   ├── seo-strategy.md
│   │   ├── url-strategy.md
│   │   └── structured-data.md
│   ├── geo/                               # Local search & Dhanpatganj GEO strategy
│   │   └── local-seo-geo-strategy.md
│   └── content/                           # Editorial & product taxonomy content
│       ├── brand-content.md
│       └── product-content.md
│
├── public/                                # Static assets
│   ├── fonts/                             # Custom localized fonts (Devanagari / Display)
│   ├── images/
│   │   ├── hero/                          # High-impact editorial hero photography
│   │   ├── categories/                    # Category tile imagery (Sarees, Ladies, Kids)
│   │   ├── products/                      # High-res product photography & pallu swatches
│   │   └── store/                         # Dhanpatganj physical retail store photography
│   ├── favicon.ico
│   ├── robots.txt                         # Search engine crawl directives
│   └── sitemap.xml                        # Static sitemap index
│
├── src/
│   ├── app/                               # Next.js App Router Pages & Layouts
│   │   ├── layout.tsx                     # Root HTML shell with font definitions & global state
│   │   ├── page.tsx                       # Homepage composition
│   │   ├── shop/                          # Master catalog with faceted filters
│   │   │   └── page.tsx
│   │   ├── sarees/                        # Flagship Sarees category hub
│   │   │   └── page.tsx
│   │   ├── ladies-wear/                   # Ladies' collection hub (Kurtis, Suits, Lehengas)
│   │   │   └── page.tsx
│   │   ├── kids-wear/                     # Kids' ethnic wear hub (Girls, Boys)
│   │   │   └── page.tsx
│   │   ├── indian-attire/                 # Traditional & Festive wear hub
│   │   │   └── page.tsx
│   │   ├── new-arrivals/                  # Fresh arrivals feed
│   │   │   └── page.tsx
│   │   ├── collections/                   # Curated festival & seasonal edits
│   │   │   └── page.tsx
│   │   ├── product/                       # Dynamic Product Detail Route
│   │   │   └── [slug]/
│   │   │       ├── page.tsx               # Product Detail Page (RSC)
│   │   │       └── not-found.tsx          # Missing product 404 handler
│   │   ├── cart/                          # Full Cart Page
│   │   │   └── page.tsx
│   │   ├── wishlist/                      # Saved Wishlist Page
│   │   │   └── page.tsx
│   │   ├── search/                        # Catalog Search Page
│   │   │   └── page.tsx
│   │   ├── about/                         # Brand heritage & Dhanpatganj story
│   │   │   └── page.tsx
│   │   ├── contact/                       # Contact & Dhanpatganj store visit planner
│   │   │   └── page.tsx
│   │   ├── size-guide/                    # Detailed sizing and drape measurement charts
│   │   │   └── page.tsx
│   │   ├── shipping-returns/              # Delivery timelines, COD & exchange policies
│   │   │   └── page.tsx
│   │   ├── privacy-policy/                # Privacy disclosure
│   │   │   └── page.tsx
│   │   ├── terms/                         # Terms of service
│   │   │   └── page.tsx
│   │   ├── not-found.tsx                  # Global 404 page
│   │   └── error.tsx                      # Global error boundary
│   │
│   ├── components/                        # Reusable Component Hierarchy
│   │   ├── layout/                        # Global Shell Components
│   │   │   ├── AnnouncementBar.tsx        # Top notification bar
│   │   │   ├── Navbar.tsx                 # Sticky navigation with mega-menu
│   │   │   ├── MobileMenu.tsx             # Slide-over mobile drawer
│   │   │   └── Footer.tsx                 # Multi-column footer & Dhanpatganj store details
│   │   ├── ui/                            # Atomic UI Primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Drawer.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   └── Select.tsx
│   │   ├── product/                       # Product Presentation & Filtering
│   │   │   ├── ProductCard.tsx            # Multi-variant responsive product card
│   │   │   ├── ProductGrid.tsx            # Adaptive responsive catalog grid
│   │   │   ├── ProductGallery.tsx         # High-res image gallery & zoom carousel
│   │   │   ├── ProductInfo.tsx            # Title, pricing, size selector, fabric specs
│   │   │   ├── ProductActions.tsx         # Quantity stepper, Add to Cart, Buy Now
│   │   │   └── ProductFilters.tsx         # Faceted sidebar & mobile filter sheet
│   │   ├── sections/                      # Homepage & Editorial Sections
│   │   │   ├── Hero.tsx                   # High-impact editorial hero
│   │   │   ├── CategoryGrid.tsx           # 4-Pillar category gateway
│   │   │   ├── FeaturedProducts.tsx       # Curated product showcase
│   │   │   ├── SareeEdit.tsx              # "The Saree Edit" flagship section
│   │   │   ├── LadiesCollection.tsx       # Ladies wear highlight
│   │   │   ├── KidsCollection.tsx         # "Little Festive Moments" kids showcase
│   │   │   ├── OccasionSection.tsx        # "Dress for the Moment" occasion finder
│   │   │   ├── BrandStory.tsx             # Editorial narrative & artisan heritage
│   │   │   ├── StoreSection.tsx           # Physical Dhanpatganj store showcase
│   │   │   └── Newsletter.tsx             # VIP styling newsletter opt-in
│   │   └── cart/                          # Cart Interactions
│   │       ├── CartDrawer.tsx             # Slide-out quick cart overlay
│   │       ├── CartItem.tsx               # Cart item row with quantity stepper
│   │       └── CartSummary.tsx            # Subtotal, taxes, shipping progress bar
│   │
│   ├── context/                           # React Context Providers
│   │   ├── CartContext.tsx                # Cart state and LocalStorage sync
│   │   └── WishlistContext.tsx            # Wishlist state and LocalStorage sync
│   │
│   ├── constants/                         # Global Constants & Tokens
│   │   ├── tokens.ts                      # Design tokens (colors, spacings, breakpoints)
│   │   ├── categories.ts                  # Category taxonomy and hierarchies
│   │   ├── navigation.ts                  # Header and footer navigation links
│   │   └── store.ts                       # Dhanpatganj store metadata & placeholders
│   │
│   ├── data/                              # Static Data Repositories (Phase 1)
│   │   ├── mock-products.ts               # Structured mock products across all categories
│   │   └── mock-categories.ts             # Category metadata and editorial descriptions
│   │
│   ├── lib/                               # Data Access Abstraction Layer
│   │   └── catalog-service.ts             # Service interface fetching products/categories
│   │
│   └── types/                             # TypeScript Domain Definitions
│       ├── product.ts                     # Product, ProductVariant, Badges, Fabrics
│       ├── category.ts                    # Category, Subcategory, Collection
│       ├── cart.ts                        # CartItem, CartState
│       ├── store.ts                       # StoreInfo, LocalHours, Coordinates
│       └── seo.ts                         # SEO metadata, OpenGraph, JSON-LD types
│
├── MEMORY.md                              # Repository Source of Truth & Rules
├── README.md                              # Project Overview & Setup Instructions
├── package.json                           # NPM configuration & dependencies
├── tsconfig.json                          # TypeScript configuration
└── tailwind.config.ts                     # Tailwind CSS design system tokens
```

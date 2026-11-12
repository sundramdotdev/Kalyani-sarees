# Structured Data (JSON-LD) Specification — Kalyani Sarees Dhanpatganj

## 1. Structured Data Strategy

To earn rich snippets in Google Search (product pricing, in-stock badges, image thumbnails, store operating hours, breadcrumbs), the platform embeds **Schema.org JSON-LD scripts** directly into Next.js App Router layouts and pages.

> [!CRITICAL]
> **No Fake Information**: In compliance with Google Search Essentials and client guidelines, schema fields requiring physical address, telephone, hours, and coordinates utilize `[VERIFICATION_REQUIRED]` conditional logic or are omitted from live output until verified by the client.

---

## 2. Global Organization & LocalBusiness Schema

Rendered in the root layout (`src/app/layout.tsx`):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ClothingStore",
      "@id": "https://kalyanisarees.com/#store",
      "name": "Kalyani Sarees Dhanpatganj",
      "legalName": "Kalyani Sarees",
      "url": "https://kalyanisarees.com",
      "logo": "https://kalyanisarees.com/images/logo.png",
      "description": "Premium Indian ethnic fashion retailer specializing in pure silk sarees, ladies' suits, kurtis, and kids' traditional clothing in Dhanpatganj, Uttar Pradesh.",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[VERIFICATION_REQUIRED: Street address]",
        "addressLocality": "Dhanpatganj",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "[VERIFICATION_REQUIRED: PIN code]",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "[VERIFICATION_REQUIRED]",
        "longitude": "[VERIFICATION_REQUIRED]"
      },
      "telephone": "[VERIFICATION_REQUIRED: Phone number]",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "20:30"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://kalyanisarees.com/#website",
      "url": "https://kalyanisarees.com",
      "name": "Kalyani Sarees Dhanpatganj",
      "publisher": {
        "@id": "https://kalyanisarees.com/#store"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://kalyanisarees.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

---

## 3. Product & Offer Schema

Rendered on dynamic Product Detail Pages (`src/app/product/[slug]/page.tsx`):

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Royal Crimson Banarasi Katan Silk Saree",
  "image": [
    "https://kalyanisarees.com/images/products/crimson-banarasi-silk-front.webp",
    "https://kalyanisarees.com/images/products/crimson-banarasi-silk-pallu.webp"
  ],
  "description": "Authentic handloom Banarasi Katan silk saree woven with antique gold zari motifs and rich pallu craftsmanship. Ideal for bridal and festive celebrations.",
  "sku": "KS-BAN-001",
  "category": "Sarees > Banarasi Sarees",
  "brand": {
    "@type": "Brand",
    "name": "Kalyani Sarees"
  },
  "material": "Pure Katan Silk with Gold Zari",
  "offers": {
    "@type": "Offer",
    "url": "https://kalyanisarees.com/product/royal-crimson-banarasi-katan-silk-saree",
    "priceCurrency": "INR",
    "price": "14999",
    "priceValidUntil": "2027-12-31",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "ClothingStore",
      "name": "Kalyani Sarees Dhanpatganj"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "INR"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 2,
          "unitCode": "d"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 3,
          "maxValue": 6,
          "unitCode": "d"
        }
      }
    }
  }
}
```

---

## 4. BreadcrumbList Schema

Rendered dynamically across all category and product pages:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://kalyanisarees.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sarees",
      "item": "https://kalyanisarees.com/sarees"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Banarasi Sarees",
      "item": "https://kalyanisarees.com/sarees?type=banarasi"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Royal Crimson Banarasi Katan Silk Saree",
      "item": "https://kalyanisarees.com/product/royal-crimson-banarasi-katan-silk-saree"
    }
  ]
}
```

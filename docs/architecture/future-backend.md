# Future Backend & Omnichannel Architecture Plan — Kalyani Sarees Dhanpatganj

## 1. Non-Disruptive Backend Migration Strategy

Phase 1 establishes a complete, production-ready frontend interface decoupled from data storage. When the business is prepared to activate live transaction processing, inventory synchronization, and customer authentication in Phase 2, **no UI component will require a rewrite**.

### Architectural Bridge

```
[UI Components (ProductCard, PDP, CartDrawer, etc.)]
                          │
                          ▼
            [ICatalogService Interface]
                          │
         ┌────────────────┴────────────────┐
         ▼                                 ▼
[Phase 1: StaticCatalogService]   [Phase 2: HeadlessApiCatalogService]
(Local typed objects)             (REST / GraphQL / Supabase / Medusa)
```

---

## 2. Recommended Backend Architecture Options

### Option A: Next.js Route Handlers + PostgreSQL / Supabase (Recommended for Custom Brand Control)
- **Database**: PostgreSQL hosted on Supabase or Neon.
- **ORM**: Prisma or Drizzle ORM.
- **Authentication**: NextAuth.js (Auth.js) or Supabase Auth supporting Mobile OTP (via MSG91/Twilio) and Google OAuth.
- **Advantages**:
  - Unified deployment on Vercel / AWS.
  - Native support for custom local inventory schema (tracking Dhanpatganj retail store stock vs. online warehouse stock).
  - Lowest ongoing software subscription cost.

### Option B: Headless Medusa.js / Shopify Storefront API
- **Engine**: Headless Node.js ecommerce engine or Shopify Storefront GraphQL.
- **Frontend**: Current Next.js App Router UI consumes the Storefront SDK.
- **Advantages**: Pre-built order management, refund workflows, and inventory tracking.

---

## 3. Indian Ecommerce Payment & Logistics Integrations

When activating online ordering, the platform must support standard Indian ecommerce checkout flows:

### 3.1 Payment Gateway
- **Primary**: **Razorpay** / **Cashfree** / **PhonePe Payment Gateway**.
- **Supported Payment Modes**:
  - UPI (Instant QR and Intent flow for Google Pay, PhonePe, Paytm).
  - Net Banking across all Indian public and private banks.
  - Debit/Credit Cards (RuPay, Visa, Mastercard).
  - Cash on Delivery (COD) with automated OTP phone verification to prevent fake orders.

### 3.2 Indian Shipping Aggregators
- **Aggregators**: Shiprocket / Delhivery / NimbusPost.
- **Features**:
  - Automated PIN code serviceability check at product page and checkout.
  - Waybill generation and reverse pickup for exchanges.
  - Automated WhatsApp tracking alerts via official WhatsApp Business API.

---

## 4. Omnichannel Store Features (Dhanpatganj Retail Integration)

Since Kalyani Sarees has a strong physical identity in Dhanpatganj, the future backend will support **Omnichannel Commerce**:

1. **Click & Collect (Store Pickup)**:
   - Customers in Dhanpatganj or Sultanpur District can order online and choose "Pickup from Kalyani Sarees Dhanpatganj Store".
2. **In-Store Video Call Consultation**:
   - High-value bridal saree shoppers can book a live WhatsApp video drape consultation before placing an order.
3. **Unified Retail Inventory (POS Sync)**:
   - A barcode scanning webhook ensures that when a unique bridal saree is sold physically in the Dhanpatganj showroom, it is immediately marked "Sold Out" on the website.

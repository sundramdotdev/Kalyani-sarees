# Typography System Specification — Kalyani Sarees Dhanpatganj

## 1. Typeface Selection & Rationale

To project the desired aesthetic of **"Indian heritage + contemporary luxury ecommerce"**, the typography pairs an elegant, high-contrast serif for editorial storytelling with an ultra-clean, legible grotesque sans-serif for commerce utility.

| Purpose | Primary Font Family | Fallback Stack | Rationale |
|---|---|---|---|
| **Display & Editorial** | `Cormorant Garamond` / `Playfair Display` | `Cinzel`, `Georgia`, `serif` | High contrast, regal serifs reminiscent of luxury Indian fashion spreads. |
| **Headings (H1–H4)** | `Playfair Display` / `Cinzel` | `Georgia`, `Baskerville`, `serif` | Balanced weights that command attention without sacrificing mobile readability. |
| **Body & Longform** | `Plus Jakarta Sans` / `Inter` | `system-ui`, `-apple-system`, `sans-serif` | Exceptional clarity at 14–16px across varied mobile screen DPIs. |
| **Commerce UI & Controls**| `Plus Jakarta Sans` | `Helvetica Neue`, `Arial`, `sans-serif` | Crisp numerical glyphs (₹ currency symbol, sizes, SKU counts). |
| **Devanagari (Future Hindi)**| `Rozha One` / `Noto Serif Devanagari` | `Noto Sans Devanagari`, `serif` | Seamless pairing with Latin serif display glyphs for Hindi headlines and descriptions. |

---

## 2. Type Scale Matrix

The typography uses a modular scale ratio of **1.25 (Major Third)** on mobile expanding to **1.333 (Perfect Fourth)** on desktop for dramatic editorial scale.

| Token | Desktop Size / Line-Height | Mobile Size / Line-Height | Font Weight | Letter Spacing | Font Family | Usage |
|---|---|---|---|---|---|---|
| `display-xl` | 64px (4.0rem) / 1.1 | 40px (2.5rem) / 1.15 | Regular (400) / Medium (500) | `-0.02em` | Serif Display | Homepage Editorial Hero Headlines |
| `display-l` | 48px (3.0rem) / 1.15 | 32px (2.0rem) / 1.2 | Regular (400) / Medium (500) | `-0.015em` | Serif Display | Major Collection Edits, "The Saree Edit" |
| `h1` | 36px (2.25rem) / 1.2 | 28px (1.75rem) / 1.25 | Medium (500) / SemiBold (600) | `-0.01em` | Serif Heading | Product Detail Title, Main Category Titles |
| `h2` | 30px (1.875rem) / 1.3 | 24px (1.5rem) / 1.3 | Medium (500) | `-0.01em` | Serif Heading | Section Titles ("Dress for the Moment", "Brand Story") |
| `h3` | 24px (1.5rem) / 1.35 | 20px (1.25rem) / 1.35 | Medium (500) | `0em` | Serif / Sans | Subsections, Drawer Titles, Cart Modal Headings |
| `h4` | 20px (1.25rem) / 1.4 | 18px (1.125rem) / 1.4 | SemiBold (600) | `0em` | Sans-Serif | Product Card Titles, Filter Accordion Headers |
| `body-large` | 18px (1.125rem) / 1.6 | 16px (1.0rem) / 1.6 | Regular (400) | `0em` | Sans-Serif | Editorial intro paragraphs, lead text |
| `body` | 16px (1.0rem) / 1.6 | 15px (0.9375rem) / 1.6 | Regular (400) | `0em` | Sans-Serif | Standard product descriptions, policy body text |
| `body-small` | 14px (0.875rem) / 1.5 | 13px (0.8125rem) / 1.5 | Regular (400) | `0.01em` | Sans-Serif | Fabric breakdown, delivery dates, cart item notes |
| `caption` | 12px (0.75rem) / 1.4 | 11px (0.6875rem) / 1.4 | Medium (500) | `0.04em` (Uppercase) | Sans-Serif | Product badges, category tags, tax notes |
| `button` | 14px (0.875rem) / 1.0 | 14px (0.875rem) / 1.0 | SemiBold (600) | `0.06em` (Uppercase) | Sans-Serif | CTAs ("Add to Cart", "Shop Sarees", "Checkout") |
| `navigation` | 14px (0.875rem) / 1.2 | 16px (1.0rem) / 1.2 | Medium (500) | `0.03em` | Sans-Serif | Desktop navbar links, mobile menu items |

---

## 3. Bilingual English & Hindi (Devanagari) Specifications

Indian ethnic wear involves specific cultural terms (*Zari, Pallu, Dupatta, Anarkali, Banarasi Katan, Bandhani, Ghagra*). The typography is engineered to render bilingual Hindi and English without awkward vertical alignment jumps:

### Baseline Harmony
- Hindi glyphs typically require **15–20% higher vertical line clearance** due to *matras* (top and bottom diacritics).
- All standard headings enforce `leading-relaxed` or explicit `leading-[1.4]` when rendering Devanagari text.

```css
/* Example Hindi Font Pairing Setup */
.font-devanagari {
  font-family: var(--font-noto-serif-devanagari), 'Rozha One', serif;
  line-height: 1.45;
}

.font-editorial-serif {
  font-family: var(--font-cormorant), var(--font-playfair), Georgia, serif;
}
```

---

## 4. Currency & Numerical Formatting

Indian ecommerce pricing requires strict readability standards:
- Always format prices using the **Indian Numbering System** (`₹1,499`, `₹12,499`, `₹1,25,000`).
- Ensure the Rupee glyph `₹` uses `font-sans font-medium` to prevent broken serif currency glyphs.
- Strikethrough compare-at prices must use `text-muted-foreground line-through text-sm` placed adjacent to current price.

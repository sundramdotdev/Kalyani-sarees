# Color System Specification — Kalyani Sarees Dhanpatganj

## 1. Brand Palette Philosophy

The color palette for **Kalyani Sarees Dhanpatganj** draws inspiration from classical Indian textile dyeing, heritage royal courts, and sacred celebration rituals:
- **Deep Maroon**: The timeless bridal and festive shade symbolizing prosperity, celebration, and auspicious beginnings.
- **Antique Gold**: The burnished luster of traditional zari work, offering regal refinement without excessive flashiness.
- **Warm Ivory & Soft Beige**: Clean, natural woven silk and raw cotton surfaces providing a serene editorial canvas.
- **Deep Charcoal**: Softened black for effortless readability across long reading sessions.

---

## 2. Base Palette Tokens

| Token Name | Hex Code | HSL Representation | Description / Context |
|---|---|---|---|
| `color-primary-base` | `#6B1F2A` | `351°, 55%, 27%` | Deep Maroon / Indian textile bridal red |
| `color-primary-hover` | `#541720` | `350°, 57%, 21%` | Darker maroon for interactive press/hover |
| `color-primary-light` | `#F5E8EA` | `350°, 38%, 94%` | Tinted maroon background for festive alerts |
| `color-secondary-base` | `#B08D57` | `37°, 36%, 51%` | Antique Zari Gold / Regal metallic accent |
| `color-secondary-hover`| `#957544` | `36°, 38%, 42%` | Burnished deep gold for focused states |
| `color-secondary-light`| `#FAF5EC` | `38°, 50%, 95%` | Subtle gold-tinted surface wash |
| `color-bg-base` | `#F8F3EA` | `38°, 45%, 95%` | Warm Ivory canvas for editorial pages |
| `color-surface-base` | `#EFE5D5` | `38°, 40%, 89%` | Soft Beige for cards, chips, and modals |
| `color-text-main` | `#252525` | `0°, 0%, 15%` | Deep Charcoal body & primary text |
| `color-text-muted` | `#6F6A63` | `34°, 6%, 41%` | Warm stone grey for meta details, SKU, hints |
| `color-border-base` | `#DED5C8` | `36°, 22%, 83%` | Subtle neutral hairline border |
| `color-white` | `#FFFFFF` | `0°, 0%, 100%` | Crisp white for gallery backdrops & popups |

---

## 3. Semantic Token Mappings

Components must NEVER use hardcoded hex values. All components bind strictly to semantic tokens:

```css
:root {
  /* Surface Tokens */
  --background: #F8F3EA;
  --foreground: #252525;
  --surface: #EFE5D5;
  --surface-foreground: #252525;
  --surface-raised: #FFFFFF;

  /* Primary Brand Action Tokens */
  --primary: #6B1F2A;
  --primary-foreground: #FFFFFF;
  --primary-hover: #541720;

  /* Secondary / Accent Tokens */
  --secondary: #B08D57;
  --secondary-foreground: #252525;
  --secondary-hover: #957544;

  /* Muted & Neutral Tokens */
  --muted: #EFE5D5;
  --muted-foreground: #6F6A63;
  --border: #DED5C8;
  --input: #DED5C8;
  --ring: #6B1F2A;

  /* Feedback & State Tokens */
  --accent: #9E3D24; /* Festive Terracotta */
  --accent-foreground: #FFFFFF;
  --destructive: #9E2A2B;
  --destructive-foreground: #FFFFFF;
  --success: #2D6A4F;
  --success-foreground: #FFFFFF;
  --warning: #C77700;
  --warning-foreground: #FFFFFF;

  /* Badge Specific Tokens */
  --badge-new-bg: #EAE6DF;
  --badge-new-text: #252525;
  --badge-bestseller-bg: #6B1F2A;
  --badge-bestseller-text: #FFFFFF;
  --badge-festive-bg: #B08D57;
  --badge-festive-text: #FFFFFF;
  --badge-limited-bg: #9E3D24;
  --badge-limited-text: #FFFFFF;
}
```

---

## 4. Tailwind CSS Theme Integration

In `tailwind.config.ts`, tokens are mapped dynamically:

```typescript
// tailwind.config.ts excerpt
theme: {
  extend: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      surface: {
        DEFAULT: 'var(--surface)',
        foreground: 'var(--surface-foreground)',
        raised: 'var(--surface-raised)',
      },
      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
        hover: 'var(--primary-hover)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)',
        hover: 'var(--secondary-hover)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      border: 'var(--border)',
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },
      destructive: {
        DEFAULT: 'var(--destructive)',
        foreground: 'var(--destructive-foreground)',
      },
      success: {
        DEFAULT: 'var(--success)',
        foreground: 'var(--success-foreground)',
      },
    },
  },
}
```

---

## 5. Contrast & Accessibility Matrix

| Foreground Token | Background Token | Calculated Contrast | WCAG 2.1 AA | WCAG 2.1 AAA |
|---|---|---|---|---|
| Deep Charcoal (`#252525`) | Warm Ivory (`#F8F3EA`) | **12.44:1** | PASS (≥ 4.5:1) | PASS (≥ 7.0:1) |
| Deep Maroon (`#6B1F2A`) | Warm Ivory (`#F8F3EA`) | **8.18:1** | PASS (≥ 4.5:1) | PASS (≥ 7.0:1) |
| White (`#FFFFFF`) | Deep Maroon (`#6B1F2A`) | **10.35:1** | PASS (≥ 4.5:1) | PASS (≥ 7.0:1) |
| Muted Grey (`#6F6A63`) | Warm Ivory (`#F8F3EA`) | **4.72:1** | PASS (≥ 4.5:1) | Fail (Large text only) |
| White (`#FFFFFF`) | Antique Gold (`#B08D57`)| **2.98:1** | Use with dark text | — |
| Deep Charcoal (`#252525`) | Antique Gold (`#B08D57`)| **4.17:1** | Large text / Bold | — |

> [!NOTE]
> Antique Gold (`#B08D57`) is reserved as an ornamental accent, border highlight, or pill background with dark foreground text (`#252525`). It is never used for small body text.

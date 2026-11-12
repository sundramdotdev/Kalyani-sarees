# Design System Specification — Kalyani Sarees Dhanpatganj

## 1. Aesthetic Vision & Brand Philosophy

The design system for **Kalyani Sarees Dhanpatganj** bridges timeless Indian artisanal heritage with the refined clarity of contemporary high-fashion ecommerce.

### Core Creative Pillars
1. **Heritage & Craftsmanship**: Visual cues celebrating authentic weaves (Banarasi, Zari, Kanjivaram, Chanderi, Bandhani) without resorting to kitsch or cliché ornamentation.
2. **Editorial Restraint**: Generous whitespace, refined hairlines, and balanced asymmetry reminiscent of high-end fashion publications (*Vogue India*, *Good Earth*, *Raw Mango*).
3. **Warmth & Hospitality**: Warm ivory backgrounds, soft beige surfaces, and rich maroon accents evoke the warmth of an Indian wedding celebration or festive gathering.
4. **Modern Utility**: Crisp typography, frictionless mobile interactions, accessible touch targets, and clear visual hierarchy.

---

## 2. Spacing & Spatial Grid System

We employ an **8pt Base Grid System** with a dense **4pt sub-grid** for compact UI components (badges, micro-copy, tag chips).

| Token | Value | Tailwind Class | Application |
|---|---|---|---|
| `space-0.5` | 2px | `p-0.5`, `gap-0.5` | Hairline offsets, badge internal padding |
| `space-1` | 4px | `p-1`, `gap-1` | Tight chip padding, badge margins |
| `space-2` | 8px | `p-2`, `gap-2` | Icon-to-text spacing, compact controls |
| `space-3` | 12px | `p-3`, `gap-3` | Input fields vertical padding, mobile card gap |
| `space-4` | 16px | `p-4`, `gap-4` | Base mobile gutter, container padding, standard gap |
| `space-6` | 24px | `p-6`, `gap-6` | Desktop card gap, drawer padding, card body |
| `space-8` | 32px | `p-8`, `gap-8` | Section sub-headings, filter sidebar padding |
| `space-12` | 48px | `py-12` | Mobile section vertical spacing |
| `space-16` | 64px | `py-16` | Tablet section vertical spacing |
| `space-24` | 96px | `py-24` | Desktop section vertical spacing |
| `space-32` | 128px | `py-32` | Hero sections, high-impact editorial dividers |

### Container Constraints
- **Max Width**: `max-w-7xl` (1280px) for standard e-commerce grids.
- **Editorial Width**: `max-w-5xl` (1024px) for long-form brand story, size guides, and policies.
- **Reading Width**: `max-w-3xl` (768px) for blog posts and product descriptions.
- **Mobile Edge Gutter**: `px-4` (16px) on `< 640px`, `px-6` (24px) on `640px–1024px`, `px-8` (32px) on `> 1024px`.

---

## 3. Elevation & Shadow Hierarchy

In keeping with editorial restraint, shadows are warm, soft, and diffuse rather than stark black or harsh.

```css
/* Warm Shadow Tokens */
--shadow-sm: 0 1px 2px 0 rgba(107, 31, 42, 0.04);
--shadow-md: 0 4px 6px -1px rgba(107, 31, 42, 0.06), 0 2px 4px -2px rgba(107, 31, 42, 0.04);
--shadow-lg: 0 10px 15px -3px rgba(107, 31, 42, 0.08), 0 4px 6px -4px rgba(107, 31, 42, 0.03);
--shadow-drawer: -4px 0 24px rgba(37, 37, 37, 0.12);
--shadow-dropdown: 0 12px 28px rgba(37, 37, 37, 0.08);
```

---

## 4. Border Radius System

To maintain an architectural, tailored appearance, border radii are subtle and refined. Excessive pill shapes or bubble buttons are strictly avoided.

| Token | Value | Tailwind Class | Application |
|---|---|---|---|
| `rounded-none` | 0px | `rounded-none` | Editorial banners, hero imagery, sharp luxury cards |
| `rounded-xs` | 2px | `rounded-[2px]` | Badges, discount tags |
| `rounded-sm` | 4px | `rounded-sm` | Input boxes, buttons, filter checkboxes |
| `rounded-md` | 6px | `rounded-md` | Product cards, dialog modals, dropdown menus |
| `rounded-lg` | 8px | `rounded-lg` | Drawers, prominent callout boxes |
| `rounded-full` | 9999px | `rounded-full` | Color swatch selectors, wishlist circle buttons, avatar chips |

---

## 5. Border & Divider Rules

Hairline dividers provide structure without visual clutter:
- **Default Border**: `1px solid var(--color-border)` (`#DED5C8`).
- **Heavy Editorial Border**: `2px solid var(--color-primary)` (`#6B1F2A`) for active tabs, selected states, and header accents.
- **Subtle Partition**: `1px solid rgba(222, 213, 200, 0.6)` for inner product grid lines.

---

## 6. Accessibility Standards (WCAG 2.1 AA)

1. **Color Contrast**: All primary text (`#252525`) on warm ivory background (`#F8F3EA`) achieves a contrast ratio of **12.4:1** (exceeding AAA requirement of 7:1).
2. **Deep Maroon on Ivory**: `#6B1F2A` on `#F8F3EA` achieves **8.2:1** (exceeding AAA requirement).
3. **Antique Gold Usage**: `#B08D57` is utilized strictly for non-text accents, borders, icons, or large headings against dark backgrounds; never for small body text on light backgrounds.
4. **Touch Targets**: Minimum 44px × 44px clickable target on all mobile buttons, tabs, swatches, and cart controls.
5. **Focus States**: High-visibility focus ring: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.

# Animation & Motion System — Kalyani Sarees Dhanpatganj

## 1. Motion Philosophy

In luxury Indian ethnic fashion ecommerce, motion must convey **grace, poise, and tactile craftsmanship**. Animations should feel like the gentle drape of pure silk or the opening of an ornate jewel box—never frantic, distracting, or gamified.

### Golden Rules
1. **Purpose-Driven**: Motion is only applied to establish spatial continuity (drawers, modals), confirm user actions (button press, cart addition), or reveal editorial content.
2. **Performance First**: Only animate CSS properties that trigger GPU composition (`transform`, `opacity`). Never animate layout triggers (`height`, `width`, `top`, `margin`).
3. **Respect User Settings**: Strictly honor `prefers-reduced-motion: reduce`.

---

## 2. Animation Token Catalog

| Animation Token | Duration | Timing Function (Easing) | CSS / Tailwind Equivalent | Context of Use |
|---|---|---|---|---|
| `motion-instant` | 150ms | `cubic-bezier(0.4, 0, 0.2, 1)` | `duration-150 ease-out` | Micro-interactions: Checkboxes, heart icon toggle |
| `motion-fast` | 250ms | `cubic-bezier(0.16, 1, 0.3, 1)` | `duration-250 ease-out` | Button hover background, dropdown fade, badge hover |
| `motion-standard` | 350ms | `cubic-bezier(0.32, 0.72, 0, 1)` | `duration-350 ease-out` | Product card image swap, accordion collapse/expand |
| `motion-deliberate`| 500ms | `cubic-bezier(0.25, 1, 0.5, 1)` | `duration-500 ease-out` | Cart drawer slide, mobile menu slide, filter sheet |
| `motion-editorial` | 700ms | `cubic-bezier(0.22, 1, 0.36, 1)` | `duration-700 ease-out` | Section fade-up entrance, hero image slow zoom |

---

## 3. Specific Component Micro-Interactions

### 3.1 Product Card Image Swap & Zoom
- **Resting State**: Primary drape shot displayed.
- **Hover State**:
  - Opacity of secondary image (e.g. Pallu or back view) fades in smoothly over `300ms`.
  - Subtle `1.03x` scale transform applied over `500ms`.
  - "Quick View" action bar slides up `8px` with opacity `0 -> 1`.

```css
.product-card-image {
  transition: transform 500ms cubic-bezier(0.25, 1, 0.5, 1);
}

.product-card:hover .product-card-image {
  transform: scale(1.03);
}
```

### 3.2 Slide-over Drawers (Cart & Mobile Menu)
- **Entrance**: Translates from `translateX(100%)` to `translateX(0%)` over `400ms` with a smooth deceleration curve (`cubic-bezier(0.32, 0.72, 0, 1)`).
- **Backdrop**: Fades from `opacity-0` to `opacity-100` (`backdrop-blur-sm bg-black/40`) simultaneously.
- **Exit**: Slides out to `translateX(100%)` over `300ms` with acceleration curve.

### 3.3 Editorial Section Fade-Up Reveal
Sections use subtle scroll-triggered entrances:
- Initial state: `opacity: 0; transform: translateY(20px);`
- Active state: `opacity: 1; transform: translateY(0);`
- Easing: `duration-700 ease-out`.

### 3.4 Button State Transitions
- **Hover**: Subtle background darkening (`hover:bg-primary-hover`) with a slight shadow expansion.
- **Active (Press)**: Scale down slightly (`active:scale-[0.98] duration-100`) providing tactile physical feedback on touch devices.

---

## 4. Accessibility: Reduced Motion Compliance

Whenever a user has enabled reduced motion preferences in their operating system, all decorative transforms and auto-scrolls are eliminated immediately:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .product-card:hover .product-card-image {
    transform: none !important;
  }

  .slide-drawer {
    transition: opacity 150ms ease-in-out !important;
    transform: none !important;
  }
}
```

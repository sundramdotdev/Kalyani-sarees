# URL Structure & Canonical Strategy — Kalyani Sarees Dhanpatganj

## 1. URL Taxonomy Design

The URL structure is engineered to be **flat, descriptive, keyword-rich, and durable**. It completely eliminates unnecessary session IDs, nested query parameters, or unstable database auto-increment keys.

```
+─────────────────────────────────────────────────────────────+
|                        CLEAN TAXONOMY                       |
+─────────────────────────────────────────────────────────────+
|  Primary Category Hub:  /sarees                             |
|  Secondary Category:    /ladies-wear                        |
|  Children's Category:   /kids-wear                          |
|  Occasion Hub:          /indian-attire                      |
|  Editorial Edits:       /collections                        |
|  Single Product:        /product/crimson-banarasi-silk-saree|
+─────────────────────────────────────────────────────────────+
```

---

## 2. Core Routing Rules & Best Practices

1. **Strictly Lowercase & Hyphen-Delimited**:
   - Correct: `/product/emerald-chanderi-suit-set`
   - Incorrect: `/product/Emerald_Chanderi_Suit_Set` or `/product/emeraldChanderiSuit`
2. **No Trailing Slashes**: Enforced uniformly across Next.js config (`trailingSlash: false`).
3. **No File Extensions**: No `.html`, `.php`, or `.jsp` suffixes.
4. **Permanent Product Slugs**: Once indexed, a product slug remains unchanged even if its category moves. This prevents broken bookmarks and 404 backlinks.
5. **Short Path Depth for Products**:
   - We utilize `/product/[slug]` rather than `/shop/women/sarees/silk/[slug]`.
   - **Reason**: Shallow path depths improve crawl budget efficiency and protect URLs from breaking during category reorganization.

---

## 3. Handling Facets, Filters, & Canonicalization

Faceted navigation on `/shop` and category pages must avoid generating duplicate indexable pages:

| User Action / URL | Canonical Target | Meta Robots Directive |
|---|---|---|
| Visiting `/sarees` | `https://kalyanisarees.com/sarees` | `index, follow` |
| Filtering `/sarees?fabric=katan-silk` | `https://kalyanisarees.com/sarees` | `noindex, follow` |
| Filtering `/sarees?price=min5000` | `https://kalyanisarees.com/sarees` | `noindex, follow` |
| Sorting `/sarees?sort=price-asc` | `https://kalyanisarees.com/sarees` | `noindex, follow` |
| Paginating `/sarees?page=2` | `https://kalyanisarees.com/sarees?page=2` | `index, follow` |

By ensuring that attribute filter queries point their canonical tag back to the clean parent category, search equity remains concentrated on primary landing pages without duplicate content penalties.

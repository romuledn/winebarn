# Handoff: The Wine Barn — Point of Sale

## Overview
A desktop point-of-sale application for **The Wine Barn** (wine & gifts, plus a champagne store and a wine-education arm). A single operator screen handles the full counter workflow: see live orders, browse the wine or champagne list, build a cart with per-item format/serve options, and take payment. A fourth area, **Academy**, sells seats in wine-learning classes through the same register.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes that show intended look and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, SwiftUI, native, etc.) using its established patterns, component library, and state conventions. If no environment exists yet, choose the most appropriate framework for the project and implement the designs there.

`Wine Barn POS.dc.html` is a streaming "design component" format: a template plus a small logic class. Treat the template as the markup spec and the logic class as the state spec; don't port the runtime itself.

## Fidelity
**High fidelity.** Final colors, typography, spacing, radii, copy, and interactions. Recreate the UI pixel-accurately using the codebase's own primitives.

---

## Global frame

- App shell: full-viewport flex row, `height: 100vh`, `min-height: 760px`, `min-width: 1280px`. Below 1280px the shell scrolls horizontally rather than reflowing — the three-column desktop proportion is intentional (counter hardware, not mobile).
- Three regions: **sidebar (262px fixed)** → **main column (fluid)** → **Order Details panel (372px fixed)**. Sidebar and Order Details are white; the content area behind the cards is `#F4F2EE`.
- Page background outside the shell: `#EDEAE4`.

### Sidebar — 262px, `#FFFFFF`, right border `1px solid #ECE7DE`, padding `16px 14px`

1. **Brand block** — bordered card (`1px solid #ECE7DE`, radius 14, background `#FFFDF9`, padding 12), containing the logo image at `height: 44px; width: auto`, and a panel-collapse icon (18px, stroke `#B0A79C`) pushed right.
2. **Nav list** — 4px gaps, items 11px/14px padding, radius 12, font-size 14px, icon 19px stroke 1.7 `currentColor`.
   - Order: Dashboard · **Wine Order** · **Champagne Order** · **Academy** · Cellar Inventory · History · Analytic · Withdrawl · Manage Table (with chevron) · Payment.
   - Academy carries a `NEW` pill: 9.5px/700, letter-spacing .06em, padding 3/7, radius 999, background `#F2E2BC`, color `#6B5524`.
   - **Inactive**: background transparent, color `#6E665E`, weight 500. **Active**: background `#FBF3E3`, color `#1C1714`, weight 700.
3. **Footer** (pushed to bottom with `margin-top:auto`): Settings, Help Center (same row spec, color `#6E665E`), then a user card — bordered (radius 14), 34px circular avatar (`#EFE7D6` bg, `#8A6F33` initials, 12px/700), name 12.5px/600, email 10.5px `#9A9188` truncated, chevron-up 15px.

### Top bar — full width of main column, padding `14px 22px`, bottom border `1px solid #ECE7DE`
- `Welcome, ` 14.5px `#6E665E` + name 14.5px/700 `#1C1714`; 1px × 26px divider `#ECE7DE`.
- Search field: flex 1, `max-width 420px`, padding `10px 14px`, border `1px solid #ECE7DE`, radius 11, background `#FCFBF9`, 17px search icon `#A79E93`, placeholder 13.5px `#A79E93` — "Search anything".
- Right cluster (gap 10): two 38×38 icon buttons (border `1px solid #ECE7DE`, radius 11 — bell, receipt) and a date pill (padding `10px 14px`, radius 11, 13px/600, calendar icon + `12 Sep 2026` + chevron).

---

## Screens / Views

Exactly one of three center views renders at a time, driven by the active nav item. The **Order Details panel is persistent** across all of them.

### 1. Wine Order (default) — nav key `menu`
**Purpose:** the main register screen; build an order from the wine list.
Center column: `overflow-y: auto`, padding `20px 20px 28px`, vertical gap 18px.

**Card A — Orders List**
- White card, `1px solid #ECE7DE`, radius 16, padding `18px 18px 20px`.
- Header row: "Orders List" 17px/700 + right-aligned link "View all orders" 13px/600 (`#8A6F33`, hover `#6B5524`).
- Grid: `repeat(auto-fit, minmax(230px, 1fr))`, gap 14. Three order cards (border `1px solid #ECE7DE`, radius 13, padding `14px 15px`):
  - Header: 18px channel icon + channel name 14.5px/700 + status pill (11.5px/600, padding `4px 11px`, radius 7), then a `1px solid #F1EDE6` divider.
    - **Takeaway** — `Waiting`, bg `#FBE7C2`, text `#8A6317`
    - **Delivery** — `Ready`, bg `#D5F0DE`, text `#1E6B3C`
    - **Tasting Room** — `Canceled`, bg `#FBDBD8`, text `#9B2B22`
  - Body: customer name 14px/600 + order id 12px `#9A9188` right-aligned; timestamp 12px `#9A9188`.
  - Footer above a `#F1EDE6` top border: item count 12.5px `#5C554E` (dine-in also shows `• Table 3A` with a `#CFC7BB` dot).
  - Content: Marcus Hale #324398 · 12-09-2026, 03:19 pm · 4 Bottles / Elena Ruiz #223399 · 03:19 pm · 6 Bottles / John Pantau #448127 · 02:19 pm · 10 Glasses · Table 3A.

**Card B — Wine List**
- Same card chrome, padding `18px 18px 22px`.
- Header: title 17px/700 ("Wine List") + 280px search field ("Search wine"), same field spec as the top bar.
- **Category tabs** — a segmented control: container padding 5, background `#F4F2EE`, radius 12, children `flex: 1`, text-centered, padding `10px 6px`, radius 9, 13.5px.
  - Inactive: transparent, `#8A8279`, weight 500. Active: `#FFFFFF`, `#1C1714`, weight 700, shadow `0 1px 3px rgba(28,23,20,0.10)`.
  - Tabs: All · Red · White · Champagne · Sparkling · Rosé · Dessert. Default active: **Red**.
- **Product grid** — `repeat(auto-fill, minmax(230px, 1fr))`, gap 14, margin-top 16. Card: border `1px solid #ECE7DE`, radius 14, padding 11, column flex.
  - Image: 132px tall, radius 10, background `#F4F2EE` (in the prototype this is a user-fillable drop slot; in production it's the product photo, `object-fit: cover`).
  - Name 14.5px/700 (margin-top 11) · sub-line 12px `#9A9188` (appellation · vintage) · price 14px/600.
  - Two option chips (gap 8): padding `6px 10px`, border `1px solid #ECE7DE`, radius 8, 12px/500, label + 13px chevron `#8A8279`. Chip 1 = format (Glass / Bottle), chip 2 = serve (Chilled / Cellar Temp). Followed by a `1px solid #F1EDE6` divider.
  - Action row: stepper (border `1px solid #ECE7DE`, radius 9, padding `5px 8px`, − / value 13px/600 / +) and "Add to cart" button (flex 1, border `1px solid #ECE7DE`, radius 9, padding `9px 6px`, 12.5px/600, plus icon; hover background `#FBF5E8`, border `#E4CE9A`).

**Catalog data (prototype content)**

| Wine | Sub | Price | Category | Format | Serve |
|---|---|---|---|---|---|
| Château Marceau | Bordeaux Blend · 2018 | $48.00 | Red | Bottle | Cellar Temp |
| Vallon Noir | Pinot Noir · 2020 | $36.00 | Red | Glass | Cellar Temp |
| Barn Reserve Cabernet | Napa Valley · 2017 | $62.00 | Red | Bottle | Cellar Temp |
| Terra Rossa Syrah | Barossa · 2019 | $34.00 | Red | Bottle | Cellar Temp |
| Petit Colline Blanc | Sauvignon Blanc · 2022 | $28.00 | White | Glass | Chilled |
| Golden Hour Riesling | Mosel · 2021 | $30.00 | White | Glass | Chilled |
| Rosé du Barn | Provence Rosé · 2023 | $32.00 | Rosé | Bottle | Chilled |
| Prosecco di Valdo | Extra Dry · NV | $24.00 | Sparkling | Glass | Chilled |
| Late Harvest Moscato | Dessert · 2020 | $26.00 | Dessert | Glass | Chilled |
| Maison Clairette | Brut Champagne · NV | $74.00 | Champagne (Brut) | Bottle | Chilled |
| Veuve Aurore | Blanc de Blancs · 2016 | $125.00 | Champagne (Blanc de Blancs) | Bottle | Chilled |
| Barn Cuvée Rosé | Rosé Champagne · NV | $98.00 | Champagne (Rosé) | Bottle | Chilled |
| Côte Dorée Grand Cru | Vintage Brut · 2014 | $185.00 | Champagne (Vintage) | Bottle | Chilled |
| Fleur de Craie | Grower Brut Nature · NV | $89.00 | Champagne (Grower) | Bottle | Chilled |
| Nuit Dorée Demi-Sec | Demi-Sec · NV | $68.00 | Champagne (Demi-Sec) | Glass | Chilled |

### 2. Champagne Order — nav key `champagne`
Identical layout to Wine Order; the catalog is pre-scoped to champagne and the tab set changes to champagne styles.
- Title becomes **"Champagne List"**, search placeholder **"Search champagne"**.
- Tabs: All · Brut · Blanc de Blancs · Rosé · Vintage · Grower · Demi-Sec (filter on the champagne's `style`, not `category`). Default active: **All**.
- Filter state is independent from the Wine Order tab state — switching between the two nav items preserves each one's selection.

### 3. Academy — nav key `academy`
**Purpose:** sell seats in wine-learning classes at the register.
Same center column geometry (scroll, padding, 18px gaps).

**Hero banner** — background `#1C1714`, radius 16, padding `26px 28px`, flex row, gap 24, wrap.
- Eyebrow: `THE WINE BARN ACADEMY`, 10.5px/700, letter-spacing .22em, color `#E4CE9A`.
- Headline: Cormorant Garamond 32px/600 `#FFFFFF`, line-height 1.15 — "Learn the cellar, glass by glass."
- Body: 13.5px `#BDB4A8`, max-width 460px — "Guided classes led by our in-house sommeliers. Enrollments sync straight to the register — seats hold for 30 minutes."
- Two stats (gap 28): number Cormorant Garamond 30px/600 `#E4CE9A`, label 11.5px `#BDB4A8` — `6 / Classes this week`, `48 / Seats booked`.

**Classes card** — white card; header "Wine Learning Classes" + 280px "Search classes" field; segmented tabs (same spec as category tabs): All classes · Foundations · Regions · Pairing · Tasting · Certification.
- Grid `repeat(auto-fill, minmax(250px, 1fr))`, gap 14. Card chrome matches product cards; image 126px.
- Meta row: level badge (10.5px/700, letter-spacing .08em, padding `4px 8px`, radius 6, bg `#F7EFDC`, text `#7A6128`) + duration 11.5px `#9A9188`.
- Title 14.5px/700 · tutor line 12px `#9A9188` · date + seats row 12.5px `#5C554E` with 14px calendar icon and a `#CFC7BB` dot separator, then a `#F1EDE6` divider.
- Footer: price 14px/700 + Enroll button (padding `9px 14px`, radius 9, 12.5px/700). **Default:** bg `#E4CE9A`, text `#22190E`, border `#E4CE9A`, label "Enroll". **Enrolled:** bg `#1C1714`, text `#E4CE9A`, border `#1C1714`, label "Enrolled".

| Class | Tutor | Level | Duration | Date | Seats | Price | Track |
|---|---|---|---|---|---|---|---|
| Wine 101: Reading the Glass | Sofia Mirren, Head Sommelier | BEGINNER | 90 min | Thu 17 Sep, 6:30 pm | 4 seats left | $45.00 | Foundations |
| Bordeaux Deep Dive | Julien Fabre, Buyer | INTERMEDIATE | 2 hrs | Sat 19 Sep, 4:00 pm | 9 seats left | $85.00 | Regions |
| Bubbles: Champagne & Method | Sofia Mirren | BEGINNER | 90 min | Sun 20 Sep, 2:00 pm | 2 seats left | $65.00 | Regions |
| Food & Wine Pairing Lab | Chef Amara Osei | INTERMEDIATE | 2.5 hrs | Wed 23 Sep, 7:00 pm | 6 seats left | $95.00 | Pairing |
| Blind Tasting Bootcamp | Julien Fabre | ADVANCED | 3 hrs | Fri 25 Sep, 6:00 pm | Waitlist | $120.00 | Tasting |
| WSET Level 2 Prep | Sofia Mirren | ADVANCED | 6 weeks | Starts 1 Oct | 11 seats left | $420.00 | Certification |

### 4. Order Details panel (persistent) — 372px, white, left border `1px solid #ECE7DE`
Column: fixed title, scrolling middle, fixed total/CTA footer.
- Title "Order Details" 17px/700, padding `18px 20px 12px`.
- **Customer Information** block — bg `#FAF9F6`, border `1px solid #F0ECE4`, radius 14, padding 14. Label 12.5px `#6E665E`; field: white, border `1px solid #ECE7DE`, radius 10, padding `11px 13px`, 13.5px. Name `Jay Kowalski`. Two-up grid (gap 10): **Order Type** select `Take Away`, **Table number** select placeholder `Select table` (`#A79E93`), both with a 14px chevron.
- **Order Items** block — same panel chrome, margin-top 14. Header "Order Items" 14px/700 + "Reset Order" 12.5px/600 `#A8352A` (clears the cart).
  - Row: 52×52 monogram tile (radius 9, bg `#F3EEE2`, border `1px solid #EAE3D4`, Cormorant Garamond 20px/700 `#8A6F33`, first letter of the wine) + details, `1px solid #F0ECE4` bottom divider, 10px gaps.
  - Details: name 13.5px/600; two 26×26 icon buttons top-right — delete (border `#F2D9D5`, icon `#C0392B`) and edit (border `#ECE7DE`, icon `#5C554E`); `Format : <Bottle|Glass>` and `Serve : <Chilled|Cellar Temp>` 11.5px `#9A9188`; line total 13.5px/700 with `x<qty>` 12px `#6E665E` right-aligned.
  - Empty state: centered 12.5px `#A79E93` — "No items yet — add a wine from the list."
  - Seed cart: Château Marceau (Bottle, Cellar Temp, ×1) and Maison Clairette (Bottle, Chilled, ×1).
- **Payment Details** — heading 15px/700 with `#F0ECE4` bottom border. Method select row (card icon + `Cash` + chevron). Promo row: input placeholder "Promo Code" + `Apply` button (border `1px solid #ECE7DE`, radius 10, 13.5px/600). Summary rows 13px, label `#6E665E` / value 600: Sub total, Discount (10%) (negative), Taxes (2%).
- **Footer** — top border `1px solid #ECE7DE`, padding `14px 20px 18px`. "Total" 16px/700 + amount in Cormorant Garamond 24px/700. **Confirm Payment** CTA: full width, padding 14, radius 12, background `#E4CE9A`, text `#22190E` 14.5px/700, hover `#DBC188`.

---

## Interactions & Behavior
- **Nav**: clicking a sidebar item sets the active view. Wine Order, Champagne Order and Academy swap the center column; the Order Details panel never unmounts. (Dashboard/Inventory/History/Analytic/Withdrawl/Manage Table/Payment are styled but not implemented in the prototype.)
- **Category / track tabs**: filter the grid immediately; no animation beyond the active-pill style swap.
- **Quantity stepper**: ± adjusts a per-product draft quantity, floored at 0.
- **Add to cart**: adds `max(draft, 1)` units. If the product is already in the cart, increment its quantity; otherwise append. The product's draft quantity resets to 0.
- **Delete (cart row)**: removes that product entirely. **Reset Order**: empties the cart (no confirmation in the prototype — add one if the codebase's patterns call for it).
- **Enroll**: toggles enrolled state per class, swapping the button to the dark "Enrolled" treatment. Production should decrement seats and push the seat onto the order.
- **Hover**: "Add to cart" tints `#FBF5E8` with a champagne border; Confirm Payment darkens to `#DBC188`. Nav/row hovers are not otherwise specified — follow codebase convention.
- **Responsive**: none by design. The shell holds 1280px minimum and scrolls horizontally below that.

## State Management
```
view        : 'dashboard'|'menu'|'champagne'|'academy'|…   default 'menu'
cat         : wine category filter                          default 'Red'
champCat    : champagne style filter                        default 'All'
tab         : academy track filter                          default 'All classes'
qty         : { [productId]: number }   draft steppers, default 0
cart        : [{ id, name, variant, serve, cents, qty }]
enrolled    : { [classId]: boolean }
```
Derived per render: filtered product list, filtered class list, cart rows with line totals + monogram, and the money summary.

**Money math** (all amounts integer cents, formatted `'$' + (cents/100).toFixed(2)`):
```
subtotal = Σ item.cents × item.qty
discount = round(subtotal × 0.10)
taxes    = round((subtotal − discount) × 0.02)
total    = subtotal − discount + taxes
```
Discount is displayed negative. Seed cart totals: $122.00 → −$12.20 → $2.20 → **$112.00**.

Data fetching in production: products with photos/stock, live order feed for the Orders List, class schedule with seat counts, promo-code validation, payment-method list.

## Design Tokens

**Color**
| Token | Hex | Use |
|---|---|---|
| Ink | `#1C1714` | Primary text, Academy hero, enrolled button |
| Ink deep | `#22190E` | Text on champagne fills |
| Text secondary | `#5C554E` | Card meta text |
| Text muted | `#6E665E` | Labels, inactive nav |
| Text soft | `#8A8279` | Inactive tabs, chevrons |
| Text faint | `#9A9188` | Timestamps, sub-lines |
| Placeholder | `#A79E93` | Input placeholders |
| **Champagne** | `#E4CE9A` | Primary CTA, enroll, accents |
| Champagne hover | `#DBC188` | CTA hover |
| Champagne tint | `#FBF3E3` | Active nav background |
| Champagne wash | `#FBF5E8` | Button hover |
| Champagne badge | `#F2E2BC` / `#6B5524` | NEW pill |
| Champagne badge soft | `#F7EFDC` / `#7A6128` | Class level badge |
| Gold text | `#8A6F33` → `#6B5524` | Links, monogram |
| Surface | `#FFFFFF` | Panels, cards |
| Surface sunken | `#FAF9F6` | Panel blocks |
| Canvas | `#F4F2EE` | Content background, tab track |
| Page | `#EDEAE4` | Outside the shell |
| Tile | `#F3EEE2` / `#EAE3D4` | Cart monogram |
| Border | `#ECE7DE` | Default border |
| Border soft | `#F1EDE6` / `#F0ECE4` | Inner dividers |
| Status warning | `#FBE7C2` / `#8A6317` | Waiting |
| Status success | `#D5F0DE` / `#1E6B3C` | Ready |
| Status danger | `#FBDBD8` / `#9B2B22` | Canceled |
| Danger action | `#A8352A`, `#C0392B`, `#F2D9D5` | Reset / delete |

**Type** — UI: `Plus Jakarta Sans` (400/500/600/700). Display: `Cormorant Garamond` (500/600/700) for the Academy headline, stat numbers, order total, and cart monograms.
Scale: 32 / 30 / 24 / 19 / 17 / 16 / 15 / 14.5 / 14 / 13.5 / 13 / 12.5 / 12 / 11.5 / 10.5 / 9.5 px. Eyebrow letter-spacing .22em; badges .06–.08em.

**Spacing** — 4 / 5 / 6 / 8 / 9 / 10 / 11 / 12 / 14 / 16 / 18 / 20 / 22 / 26 / 28. Card gutter 14, section gap 18, page padding 20.

**Radius** — 6 (level badge) · 7 (status pill, small icon button) · 8 (option chip) · 9 (tile, stepper, action button) · 10 (form field, image) · 11 (search / icon button) · 12 (nav item, CTA, tab track) · 13 (order card) · 14 (brand block, panel block, product card) · 16 (section card) · 999 (NEW pill).

**Shadow** — only one: active segmented tab `0 1px 3px rgba(28,23,20,0.10)`. Everything else uses 1px borders.

**Fixed sizes** — sidebar 262 · Order Details 372 · shell min-width 1280 · min-height 760 · product image 132 · class image 126 · cart tile 52 · avatar 34 · icon button 38 / 26 · nav icon 19.

## Assets
- `wine-barn-logo.webp` — The Wine Barn logo, supplied by the client; used at 44px height in the sidebar. Source of truth for the brand mark; do not recreate it in type.
- All other graphics are inline SVG icons (1.7px stroke, `currentColor`, 24×24 viewBox) — substitute the codebase's icon set (Lucide-equivalent shapes: home, wine glass, champagne flute, graduation cap, archive, receipt, bar chart, money bag, table, card, settings, headset, bell, search, calendar, chevrons, plus, minus, trash, pencil).
- Product and class photography is not included — image areas are placeholders awaiting the client's own bottle and class photos (`object-fit: cover`, radius 10).

## Files
- `Wine Barn POS.dc.html` — the full prototype (template + logic class); all three views and the order panel.
- `image-slot.js` — prototype-only helper powering the drop-in image placeholders. Not part of the production design; replace with real `<img>` elements.
- `wine-barn-logo.webp` — brand asset.
- `reference/` — the client's original reference screenshots that set the layout and component language.

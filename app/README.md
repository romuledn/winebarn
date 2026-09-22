# The Wine Barn POS

A point-of-sale app for The Wine Barn — wine & champagne register plus an Academy booking screen — implemented from the design handoff in `../project/design_handoff_wine_barn_pos/design.md`.

React + TypeScript + Vite, no backend: all data is static/in-memory, and product/class photos use a client-side drag-and-drop (or click-to-browse) upload that persists to `localStorage`.

## Develop

```bash
npm install
npm run dev
```

## Structure

- `src/App.tsx` — layout + state (active view, category filters, cart, enrollments)
- `src/components/` — Sidebar, TopBar, OrdersList, CatalogView (Wine/Champagne Order), AcademyView, OrderDetailsPanel, ImageSlot
- `src/data/catalog.ts` — wine and class catalog data
- `src/App.css` — design tokens and component styles

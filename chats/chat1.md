# Wine Barn POS Design

_Started 2026-09-12 04:54 UTC_

---

## User

i want you to write me an exact PoS prompt from the following attached images. It should have the exact look and feel. the PoS platform is for a company called The Wine Barn logo attached. Make it have a highlight color of champagne. Add on the side menu a Feature called Academy with wine learning classes. Copy everything how the attached images look. from the menu to they layout

## User

i want you to write me an exact PoS prompt from the following attached images. It should have the exact look and feel. the PoS platform is for a company called The Wine Barn logo attached. Make it have a highlight color of champagne. Add on the side menu a Feature called Academy with wine learning classes. Copy everything how the attached images look. from the menu to they layout

## Assistant

_[tool: view_image]_

_[tool: list_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: copy_starter_component]_

_[tool: dc_write]_

_[tool: tool_search_tool_bm25]_

_[tool: show_html]_

_[tool: ready_for_verification]_

The Wine Barn POS is built — same layout as your references (sidebar → topbar → orders list → product grid → order/payment panel), champagne (#E4CE9A) as the highlight on active nav, tabs, enroll buttons and the Confirm Payment bar.

Two notes: **Academy** is a full working view (click it in the sidebar) with wine learning classes, tracks filter, seats/dates and enroll toggles. Product and class images are drop targets — drag your own bottle/class photos onto them and they'll stick.

## User

Found issues — fixing…

## Assistant

_[tool: copy_files]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Swapped in your real logo asset in the sidebar, and replaced the tiny cart thumbnails with clean champagne monogram tiles.

## User

Found issues — fixing…

## User

Found issues — fixing…

## User

it will also be a champagne store so its wine and champagne add the champagne tab

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added a **Champagne** tab between White and Sparkling, with four champagnes (Maison Clairette, Veuve Aurore, Barn Cuvée Rosé, Côte Dorée Grand Cru) and a Prosecco under Sparkling.

## User

the champagne should have its own tab as Wine Order

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

**Champagne Order** is now its own sidebar tab beside Wine Order — it swaps the list to champagne only (6 cuvées) with champagne-specific tabs: All, Brut, Blanc de Blancs, Rosé, Vintage, Grower, Demi-Sec. Header and search adapt ("Champagne List" / "Search champagne"); the cart and payment panel are shared across both.

## User

give me the design.md file to send to claude

## Assistant

_[tool: read_skill_prompt]_

_[tool: write_file]_

_[tool: copy_files]_

_[tool: present_fs_item_for_download]_

`design.md` is self-sufficient — every screen, exact hex/type/spacing token, state model, money math, and interaction spec — bundled with the prototype, logo, and your reference screenshots.

Want screenshots of the built screens added to the folder?


# Aurora Café — Item Detail & Order Tracking Feature

## Context

I have a working **Aurora Café** menu app (React/web). The first screen shows a sidebar with category tabs (Breakfast, Lunch, Dinner, Desserts) and a list of menu items with name, description, price, and food photo.

I need two new features added on top of what already exists:

---

## Feature 1 — Item Detail Sheet (tap a food card to open)

When the user clicks/taps any menu item card, slide up a **bottom sheet / modal** showing the item's details. Design reference: the coffee app detail screen in the images (adapt for food items).

### Layout (top → bottom)
1. **Hero image** — full-width, ~250px tall, slightly rounded top corners. Show the item's existing photo.
2. **Back `<` button** top-left (closes the sheet), **Heart ♡ button** top-right (toggle favourite, just UI state).
3. **Rating badge** — e.g. `★ 4.7` in a small pill, next to a category tag (e.g. "Breakfast").
4. **Item name** (bold, large) and **price** (e.g. `225 EGP`) on the same row.
5. **Quick-info chips row**: calories chip, prep-time chip — use plausible dummy values if not in data.
6. **Description** — the existing item description text.
7. **Toppings section** — grid of pill-shaped toggle buttons (e.g. "Extra avocado", "Chili flakes", "Honey drizzle", "Sea salt", "Nuts", "Berries"). Clicking a pill toggles its selected state (filled orange vs outlined).
8. **Portion Size row** — three buttons: Small / Medium (+15 EGP) / Large (+25 EGP). Only one selectable at a time; selected = filled orange button.
9. **"Add to Order" CTA button** — full-width, orange/brand colour, fixed at the bottom. Shows the total price and item count (e.g. `Add to Order · 225 EGP`).

### Animation
- Sheet slides **up from the bottom** with a spring ease (e.g. `cubic-bezier(0.34, 1.56, 0.64, 1)`), duration ~400ms.
- Hero image has a **subtle parallax** as the sheet rises.
- Background gets a **dark overlay** (opacity 0 → 0.5).
- Closing: reverse slide-down + overlay fade.

---

## Feature 2 — Order Tracking Screen (after "Add to Order")

After the user taps **"Add to Order"**, dismiss the detail sheet and show a full-screen **order-tracking view**. Design reference: the coffee app order-tracking screen in the images.

### Layout
1. **Header**: `← Your Order` (back arrow closes this screen and resets), order number `#AUR-XXXX` (random 4 digits), centred.
2. **"Ready in ~N min" pill** — small outlined pill below the header. Use a countdown timer that ticks down from e.g. 8 minutes.
3. **Animated food illustration** — centre of screen. Instead of a coffee cup, show a simple SVG plate/bowl animation that "fills up" as progress increases. Use CSS keyframe animation to make it feel alive (gentle bobbing, steam wisps).
4. **Item summary** — `1× [Item Name] · [Size]` text below the illustration.
5. **Big status text** — e.g. `"Preparing your order"`, changes as steps progress (see Step Progression below).
6. **Sub-text** — flavour text matching the status (e.g. `"Fresh ingredients, just for you"`).
7. **Step progress track** — 4 steps in a horizontal row with connecting lines:
   - Received → Preparing → Cooking → Ready
   - Each step: circle icon + label below.
   - Completed steps: filled orange circle with ✓ icon.
   - Current step: pulsing orange ring animation.
   - Future steps: grey outline circle.
8. **Bottom progress bar** — thin bar at the very bottom, label left (`Preparing your order…`) and percentage right. Bar fills smoothly from 0 → 100%.

### Step Progression (auto-animated, no user input needed)
| Step | Delay from order | Duration | Status Text | Sub-text |
|---|---|---|---|---|
| Received | 0s | instant | `Order received!` | `We've got your order` |
| Preparing | 2s | — | `Preparing your order` | `Fresh ingredients, just for you` |
| Cooking | 8s | — | `Almost there!` | `Cooking to perfection` |
| Ready | 16s | — | `Your order is ready!` | `Enjoy your meal 🎉` |

- The progress bar and countdown sync with these stages.
- When **Ready**: confetti burst animation (CSS only, 20–30 coloured dots scatter upward from the plate), the plate illustration "bounces" with a celebratory spring, and the "Ready in" pill changes to `✓ Ready!` in green.
- **"Done"** button appears at the bottom when Ready, which resets everything back to the menu.

### Transition from Detail Sheet → Order Tracking
- Detail sheet slides **down and out**.
- Order tracking screen **fades + scales in** (scale 0.95 → 1, opacity 0 → 1), duration ~350ms.

---

## Tech Constraints

- Keep everything in the **existing tech stack** (whatever framework is already used — React, Vue, plain HTML/CSS/JS — do not change it).
- Use **CSS animations / transitions only** — no external animation libraries (no GSAP, Framer Motion, etc.) unless already installed.
- All new state (selected toppings, size, order status) should be **local component state** — no backend needed.
- The existing menu data (item name, description, price, image) should **flow through** into the detail sheet and order tracking screen automatically.
- Colours to use:
  - Brand orange/brown: `#C17A3A` (match the existing Aurora Café palette)
  - Dark background for order screen: `#2A1A0F` or similar warm dark
  - White text on dark: `#F5F0EA`
  - Success green: `#4CAF50`

---

## Files to Create / Edit

1. **`ItemDetailSheet` component** (or equivalent in your framework) — the bottom sheet UI.
2. **`OrderTracking` component** — the full-screen tracking view.
3. **Update the menu item card** to be clickable and open the detail sheet.
4. **Add CSS** for all animations (can be in a new `.css` file or `<style>` block).
5. Wire the **"Add to Order"** button to transition to the order tracking screen.

---

## What Good Looks Like

- Tapping a food card feels **snappy and delightful** — the sheet pops up with a spring feel.
- The order tracking screen feels **alive** — progress updates automatically, animations are smooth.
- The whole flow: Menu → (tap item) → Detail Sheet → (tap Add to Order) → Order Tracking → (tap Done) → back to Menu.
- No layout breaking on typical screen widths (768px–1440px).

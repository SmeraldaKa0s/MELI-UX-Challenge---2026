# Design Definitions — Meli UX Challenge

## Design Principles

**1. Familiar before novel**
The Salas feature lives inside an app millions of people already know. Every new element must earn its place by fitting the Mercado Libre visual grammar — not by standing out from it.

**2. Social, not social-media**
This is co-viewing between trusted contacts (family and friends), not a public social graph. Tone and density should feel warm and personal, never feed-like or engagement-maximising.

**3. Progressive disclosure**
Show the feature's value before asking for effort. Onboarding explains benefits first; the form only appears after the user opts in. States (empty → filled → result) are distinct and purposeful.

**4. Mobile-first, thumb-friendly**
All screens are 412px wide. Primary actions are reachable in the lower third of the screen. No critical affordance requires a stretch gesture.

**5. Status is always visible**
Invitation state (pending, accepted, error) is never ambiguous. Every async action resolves to an explicit success or failure screen, never a silent spinner.

**6. Prototype pragmatism**
This is a high-fidelity prototype, not a production app. Implement enough design fidelity to communicate the experience; skip micro-optimisations that would not be visible in a demo.

---

## Brand & Visual Language

**Personality:** Mercado Libre is optimistic, direct, and commerce-native. Mercado Play extends that into entertainment — the tone shifts slightly warmer and more relaxed, but retains the brand's high-contrast, action-oriented character.

**Density:** Medium. The home screen is information-dense (product grids, carousels, category rows); the Salas onboarding screens deliberately de-densify to give the new feature room to breathe.

**Color language:** Yellow is trust and action; it always belongs to the primary CTA. Dark surfaces are used for the Play context (streaming = cinematic dark). White/light grey surfaces dominate the Mercado Libre commerce context.

**Motion language:** Quick and functional. No decorative animation. Transitions signal state changes, not brand expression.

---

## Color System

All values are defined for a **light theme** (Mercado Libre commerce context). A **dark surface variant** is noted for the Mercado Play streaming context.

### Primitive palette

| Token | Hex | Notes |
|---|---|---|
| `--color-yellow-400` | `#FFE600` | ML primary brand yellow |
| `--color-yellow-300` | `#FFF176` | Lighter tint (hover states on yellow) |
| `--color-yellow-600` | `#E6CF00` | Darker shade (pressed state on yellow) |
| `--color-blue-600` | `#1259C3` | ML link / informational blue |
| `--color-blue-700` | `#0D47A1` | Pressed state for blue elements |
| `--color-green-600` | `#00A650` | Success / "Envío gratis" label |
| `--color-green-700` | `#007A3B` | Success pressed / darker success |
| `--color-red-600` | `#E53935` | Error / destructive |
| `--color-red-700` | `#C62828` | Error pressed |
| `--color-grey-50`  | `#F5F5F5` | Page background |
| `--color-grey-100` | `#EEEEEE` | Card background, dividers |
| `--color-grey-200` | `#E0E0E0` | Input border (default) |
| `--color-grey-400` | `#BDBDBD` | Disabled text, placeholder |
| `--color-grey-600` | `#757575` | Secondary text |
| `--color-grey-900` | `#212121` | Primary text |
| `--color-white`    | `#FFFFFF` | Surface |
| `--color-black`    | `#000000` | Overlays |

### Semantic tokens

| Token | Maps to | Role |
|---|---|---|
| `--color-primary` | `--color-yellow-400` | Primary CTA background |
| `--color-primary-hover` | `--color-yellow-300` | CTA hover |
| `--color-primary-pressed` | `--color-yellow-600` | CTA pressed |
| `--color-primary-text` | `--color-grey-900` | Text on primary yellow (never white — yellow background requires dark text) |
| `--color-accent` | `--color-blue-600` | Links, interactive text |
| `--color-accent-pressed` | `--color-blue-700` | Link pressed |
| `--color-surface` | `--color-white` | Card / sheet surfaces |
| `--color-surface-variant` | `--color-grey-50` | Page background |
| `--color-surface-play` | `#1A1A2E` (inferred) | Dark surface for Mercado Play screens |
| `--color-on-surface` | `--color-grey-900` | Primary text on surfaces |
| `--color-on-surface-secondary` | `--color-grey-600` | Secondary / supporting text |
| `--color-on-surface-disabled` | `--color-grey-400` | Disabled text |
| `--color-outline` | `--color-grey-200` | Input borders, dividers |
| `--color-outline-strong` | `--color-grey-400` | Focused input border |
| `--color-success` | `--color-green-600` | Success states, shipping label |
| `--color-error` | `--color-red-600` | Error states |
| `--color-pending` | `#F59E0B` (inferred) | Pending invitation dot indicator |
| `--color-overlay` | `rgba(0,0,0,0.5)` | Modal scrim |

**Dark theme (Mercado Play context):** On `--color-surface-play` backgrounds, use `--color-white` for primary text, `rgba(255,255,255,0.7)` for secondary text, and keep `--color-primary` (yellow) for all CTAs.

---

## Typography

**Font family:** Mercado Libre uses **Proxima Nova** as its primary typeface. Because Proxima Nova requires a license, the prototype should load it via the Mercado Libre CDN if available, or fall back to the system stack:

```css
--font-family-base: "Proxima Nova", "Inter", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, sans-serif;
```

(inferred — confirm whether Proxima Nova is available in the prototype environment; Inter is a close open-source substitute.)

### Type scale

| Token | Size | Weight | Line-height | Role |
|---|---|---|---|---|
| `--text-display` | 32px | 700 | 1.2 | Hero headings (full-screen takeovers) |
| `--text-h1` | 28px | 700 | 1.25 | Screen titles (Onboarding, form pages) |
| `--text-h2` | 22px | 700 | 1.3 | Section headings ("Tus salas", "Disfrutá los beneficios") |
| `--text-h3` | 18px | 600 | 1.35 | Card titles, benefit row headings |
| `--text-body-lg` | 16px | 400 | 1.5 | Primary body text |
| `--text-body` | 14px | 400 | 1.5 | Secondary body, benefit descriptions |
| `--text-label` | 13px | 600 | 1.4 | Button labels, tab labels, status labels |
| `--text-caption` | 12px | 400 | 1.4 | Timestamps, metadata, fine print |
| `--text-badge` | 11px | 700 | 1 | Discount percentage pills ("17% OFF") |

**Semantic roles:**
- Screen titles: `--text-h1`, `--color-on-surface`
- Section headers: `--text-h2`, `--color-on-surface`
- Body / descriptions: `--text-body`, `--color-on-surface-secondary`
- CTA button labels: `--text-label`, `--color-primary-text` (on yellow) or `--color-white` (on dark)
- Discount badges: `--text-badge`, `--color-white` on `--color-green-600` background
- "Envío gratis" label: `--text-caption`, `--color-success`
- Struck-through original price: `--text-body`, `--color-on-surface-disabled`, `text-decoration: line-through`

---

## Spacing & Layout

### Base unit

`4px`. All spacing values are multiples of 4.

### Spacing scale

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Tight gaps (badge/icon insets, notification gap) |
| `--space-2` | 8px | Component internal padding (small), icon-to-label gap |
| `--space-3` | 12px | Button stack gap (stacked action buttons), list item gap |
| `--space-4` | 16px | Screen horizontal padding, card internal padding |
| `--space-5` | 20px | Section vertical padding |
| `--space-6` | 24px | Between major sections |
| `--space-8` | 32px | Large vertical rhythm (below screen title) |
| `--space-10` | 40px | Illustration top margin |

### Layout grid

- **Viewport width:** 412px (design target)
- **Horizontal screen padding:** 16px left + 16px right → content width = 380px
- **Single-column content:** 380px (buttons, inputs, cards in form screens)
- **Two-column product grid:** 2 columns × 206px, 0px gap (flush grid) — (inferred from `~2px gap` in summary; treat as flush for prototype)
- **Carousel cards:** 380px active card, 360px peeking cards; horizontal scroll, no snap resistance

### Breakpoints

This prototype is **mobile-only**. Do not implement responsive breakpoints. Fix the viewport to 412px in development, or constrain the app container to 412px max-width centered on desktop if needed for demo purposes.

### Component heights (fixed)

| Component | Height |
|---|---|
| Status bar | 52px |
| Top app bar | 56px (compact) / 64px (with address row) |
| Tab bar | 32px |
| Bottom navigation bar | 57px |
| Gesture bar | 24px |
| Primary button | 48px |
| Form input | 88px |
| Hero banner | 172px |
| Play card (featured) | 327px |
| Push notification | 134px |

---

## Radii, Elevation, Borders

### Corner radius scale

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Badges, pills, small chips |
| `--radius-md` | 8px | Inputs, small cards, notification cards |
| `--radius-lg` | 12px | Product cards, Play cards |
| `--radius-xl` | 16px | Bottom sheets, modals, onboarding overlay |
| `--radius-full` | 9999px | Avatar circles, pill buttons, pill badges |

### Elevation (shadows)

| Token | Value | Usage |
|---|---|---|
| `--shadow-card` | `0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)` | Product cards, sala member cards |
| `--shadow-modal` | `0 8px 32px rgba(0,0,0,0.18)` | Bottom sheets, overlay panels |
| `--shadow-notification` | `0 4px 12px rgba(0,0,0,0.15)` | Push notification cards |
| `--shadow-fab` | `0 4px 8px rgba(0,0,0,0.20)` | Floating action buttons if used |

### Borders

| Token | Value | Usage |
|---|---|---|
| `--border-width-default` | 1px | Input borders, card outlines |
| `--border-width-focus` | 2px | Focused input ring |
| `--border-color-default` | `--color-outline` | Default input/card border |
| `--border-color-focus` | `--color-accent` | Input focused border |
| `--border-color-error` | `--color-error` | Input error state border |

---

## Iconography

**Library:** Material Symbols (Rounded variant) — matches the Material 3 foundation used in the Figma file.

Load via Google Fonts:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" />
```

**Standard sizes:**
- `16px` — inline icons (within labels, badges, status rows)
- `20px` — general UI icons (navigation, input leading icons, list row icons)
- `24px` — top app bar actions, bottom nav icons
- `48px` — illustration stand-ins when SVG illustrations are not available

**Stroke weight:** Use `font-variation-settings: 'wght' 400` for default; `'wght' 300` for decorative; `'wght' 500` for emphasis.

**Color:** Icons inherit text color of their parent context unless overridden. Use `--color-accent` for interactive icons, `--color-on-surface-secondary` for passive icons, `--color-primary-text` on yellow backgrounds.

---

## Components

### Button/ML (Primary CTA)

**Purpose:** Main call-to-action. Full-width (380px) or compact (143px) variants.

**Variants:**
- `primary` — yellow background (`--color-primary`), dark text (`--color-primary-text`), `--radius-sm` (4px) (inferred — ML uses a low-radius pill-adjacent shape, not fully rounded)
- `secondary` — white background, `--color-accent` text, 1px `--color-accent` border
- `ghost` — transparent background, `--color-on-surface` text, no border

**States:**
- `default` — as described above
- `hover` — primary: `--color-primary-hover` background; secondary/ghost: `rgba(18,89,195,0.08)` overlay
- `active/pressed` — primary: `--color-primary-pressed`; secondary: `rgba(18,89,195,0.16)` overlay
- `disabled` — background: `--color-grey-100`, text: `--color-on-surface-disabled`, pointer-events: none
- `loading` — disabled appearance + centered spinner (16px, `--color-on-surface-disabled`)

**Sizing:**
- Full-width: 380px wide, 48px tall, 16px horizontal padding
- Compact: 143px wide, 48px tall, 16px horizontal padding
- Label: `--text-label` (13px/600)

**Stacked buttons:** When two buttons appear stacked (success/error screens), gap is 12px. Top button is `primary`, bottom is `secondary` or `ghost`.

**Accessibility:** Minimum touch target 48×48px (already met). `aria-disabled` when disabled. Button text must not be icon-only without an `aria-label`.

---

### Input (`inputs`)

**Purpose:** Text form fields for adding a sala member (name, email/username).

**Dimensions:** 380px wide, 88px tall (includes floating label above the input field).

**Anatomy:** Floating label (shrinks to 12px caption when filled/focused) + input text area + optional supporting text below.

**States:**
- `empty` — border: `--color-outline` (1px), label in center (16px body)
- `focused` — border: `--color-accent` (2px), label floats up (12px), cursor visible
- `filled` — border: `--color-outline` (1px), label floated, text in `--color-on-surface`
- `error` — border: `--color-error` (2px), label in `--color-error`, error message below in `--text-caption`/`--color-error`
- `disabled` — background: `--color-grey-50`, text/border in disabled tones, pointer-events: none

**Accessibility:** Each input must have an associated `<label>` (visually floating or hidden). `aria-required`, `aria-invalid` on error state.

---

### Searchbox

**Purpose:** Content search input in the Mercado Play header.

**Dimensions:** 225px wide, 40px tall (inferred height matching standard ML search bar).

**Appearance:** Rounded full pill shape (`--radius-full`), `--color-grey-100` background, 16px left padding, search icon (20px) leading, placeholder text in `--color-on-surface-disabled`.

**States:** default, focused (background white, `--border-color-focus` ring), filled.

---

### Card/Play (Featured content card)

**Purpose:** Large content card in the Mercado Play carousel.

**Dimensions:**
- Active/center: 380×327px
- Peeking/flanking: 360×327px
- Radius: `--radius-lg` (12px)

**Anatomy:** Full-bleed poster image + optional gradient overlay at bottom + title text + metadata row (genre, year, rating).

**Interaction:** Tap to navigate to content detail (out of scope for this prototype — treat as passive card).

---

### Card/Product (Product grid card)

**Purpose:** E-commerce product card in the ML home 2-column grid.

**Dimensions:** ~206×(variable height) px, `--radius-md` (8px), `--shadow-card`.

**Anatomy (top to bottom):**
1. Product image (square, fills card width)
2. Product title (2-line truncated, `--text-body`, `--color-on-surface`)
3. Original price (struck-through, `--text-caption`, `--color-on-surface-disabled`)
4. Discounted price (`--text-h3`, `--color-on-surface`)
5. Discount badge (pill, `--radius-full`, `--color-green-600` background, `--text-badge` white text)
6. "Envío gratis" label (`--text-caption`, `--color-success`)

---

### Badge/Pill

**Purpose:** Discount percentage indicator, notification count, status label.

**Variants:**
- `discount` — `--color-green-600` background, white text, `--text-badge`, `--radius-full`, padding: 2px 6px
- `notification` — `--color-red-600` background, white text, `--text-badge`, `--radius-full`, min-width 16px
- `label` — `--color-grey-100` background, `--color-on-surface-secondary` text, `--text-caption`, `--radius-sm`

---

### Sala member card

**Purpose:** Shows a sala member with their name and invitation status.

**Dimensions:** 182×111px (compact variant in Play home grid), 380×101px (full-width in success confirmation screen).

**Anatomy:**
- Avatar circle: 40px diameter, `--radius-full`, initials in `--text-label`, background in brand accent (inferred: `--color-blue-600` at 20% opacity with `--color-accent` text)
- Name: `--text-body-lg`, `--color-on-surface`
- Status row: 8px colored dot + status label in `--text-caption`
  - Pending: dot `--color-pending` (#F59E0B), label "Invitación pendiente"
  - Accepted: dot `--color-success`, label "Miembro activo" (inferred)

---

### Invite slot ("Invitar")

**Purpose:** Placeholder slot in the Salas section that prompts adding more members.

**Dimensions:** 85×111px.

**Anatomy:** Dashed-border circle placeholder (39×39px, `--radius-full`, `--color-outline` dashed border) + pill badge + "Invitar" label (`--text-caption`, `--color-accent`).

---

### Promotional banner (Salas promo)

**Purpose:** Inline promotional card in the Mercado Play home that introduces Salas to a first-time user.

**Dimensions:** 380×87px, `--radius-md`.

**Anatomy:** Headline text + subtext on the left; avatar image (71×71px) on the right; close (X) icon top-right (hidden until hovered or tapped).

**Dismissible:** Yes — the X icon hides the banner. Once dismissed, do not show again (localStorage flag in prototype).

---

### Push notification card (`notificación push`)

**Purpose:** Simulates an iOS lock-screen push notification from Mercado Play.

**Dimensions:** 382×134px, `--radius-xl` (16px), semi-transparent frosted glass background (`backdrop-filter: blur(20px); background: rgba(255,255,255,0.85)`).

**Anatomy:**
- App icon (50×25px logo) + app name + relative timestamp — all in one row
- Title (bold, `--text-body-lg`)
- Body (2-line, `--text-body`, `--color-on-surface-secondary`)

**Two notifications stacked** with 4px gap.

---

### Top app bar

**Purpose:** Screen-level navigation header present on all feature screens.

**Height:** 56px (standard) / 64px (with address row on ML home).

**Anatomy:** Back/close icon (left, 24px) + title (centered or left-aligned, `--text-h3`) + optional action icon (right, 24px).

**Background:** `--color-white` in commerce context; `--color-surface-play` in Play context.

---

### Bottom navigation bar

**Purpose:** Global app navigation (Home, Categories, Notifications, Account, Play).

**Height:** 57px.

**Tab items:** 5 items, each with a 24px icon + 10px label (`--text-caption`). Active tab: `--color-accent` icon + label. Inactive: `--color-on-surface-disabled`.

**Surface:** `--color-white`, top border 1px `--color-outline`.

---

### Tab bar (horizontal pill tabs)

**Purpose:** Content category switcher within a screen section (Mercado Play sections).

**Height:** 32px.

**Appearance:** Horizontally scrollable row of pill tabs. Active pill: `--color-grey-900` background, white text. Inactive: transparent background, `--color-on-surface-secondary` text. Pill padding: 8px 16px, `--radius-full`.

---

## Patterns

### Form validation

- Validate on blur (when field loses focus), not on every keystroke.
- Show error message below the field in `--text-caption` / `--color-error`.
- Error message replaces supporting text (same vertical slot).
- The CTA button remains disabled until all required fields are non-empty. Enable it immediately when the last required field is filled (no server-side check needed for the prototype).

### Empty states

- Empty form: inputs show placeholder text, CTA is disabled (not hidden).
- Empty Salas section (pre-onboarding): show the promotional banner. Do not show an empty state illustration — the banner is the affordance.

### Loading states

- Button loading: replace label with a small spinner (16px), disable the button. Keep button dimensions fixed to prevent layout shift.
- Screen loading (if needed): use a skeleton loader matching the layout of the target screen. Keep skeleton blocks at the same dimensions as the real content.

### Error states

- Full-screen error (invitation failure): show the error illustration screen (screen 8). Provide two actions: retry and go back.
- Inline error (form validation): show the field-level error message. Do not navigate away.

### Success states

- Full-screen success (invitation sent): show screen 7. Do not auto-navigate — let the user choose between "Volver al inicio" and "Invitar a otro".

### Navigation pattern

- Back navigation: top app bar back arrow. On the first screen of a subflow (Onboarding Salas), back returns to Mercado Play home.
- Bottom navigation is present only on the ML Home screen. It is hidden on all feature subflow screens.

### Modal / overlay pattern

- Screen 2 (overlay state): full-screen image takeover. Tap anywhere outside the image (or on a close affordance) dismisses it.
- No partial bottom sheets are defined in the current flows. If added, use `--radius-xl` top corners, `--shadow-modal`, and a `--color-overlay` scrim behind.

### Toast / snackbar

- Not explicitly shown in the designs. If needed for the prototype (e.g., network error fallback), use a bottom-anchored snackbar: 380px wide, 48px tall, `--radius-md`, `--color-grey-900` background, white text, 4px above the bottom navigation bar. Auto-dismiss after 3000ms.

---

## Motion & Interaction

### Principles

- Motion confirms actions, it does not decorate them.
- Never animate something the user is waiting to interact with.
- Respect `prefers-reduced-motion`: wrap all transitions in a media query and provide instant alternatives.

### Durations

| Token | Value | Usage |
|---|---|---|
| `--duration-fast` | 100ms | Button press feedback, icon state change |
| `--duration-base` | 200ms | Input focus ring, tab indicator slide |
| `--duration-moderate` | 300ms | Screen transition (push/pop), modal open |
| `--duration-slow` | 400ms | Overlay fade-in (screen 2 takeover) |

### Easing

| Token | Value | Usage |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Most transitions (Material 3 standard easing) |
| `--ease-decelerate` | `cubic-bezier(0, 0, 0, 1)` | Elements entering the screen |
| `--ease-accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | Elements leaving the screen |

### What should animate

- Screen transitions: slide in from right (push), slide out to right (pop). Duration: `--duration-moderate`.
- Modal/overlay open: fade in + scale from 0.96 to 1.0. Duration: `--duration-moderate`.
- Button pressed state: scale to 0.97. Duration: `--duration-fast`.
- CTA enable/disable: opacity transition (0.4 → 1.0). Duration: `--duration-base`.
- Tab indicator: translate X to new position. Duration: `--duration-base`.
- Notification cards: slide in from top. Duration: `--duration-moderate`, `--ease-decelerate`.

### What should NOT animate

- Page skeleton loaders (appear instantly).
- Error/validation messages (appear instantly — delay would feel broken).
- Carousel card positions during drag (synchronous with finger, no easing).
- Price values and product data.

---

## Accessibility

### Contrast

- Normal text (< 18px): minimum 4.5:1 against background. Dark text on white surfaces already meets this.
- Large text (>= 18px bold or 24px): minimum 3:1.
- Critical check: `--color-grey-900` (#212121) on `--color-white` → 16.1:1 (passes AAA).
- Dark text on `--color-primary` yellow (#FFE600): `#212121` on `#FFE600` → approximately 13:1 (passes AAA). Never use white text on yellow.
- `--color-success` (#00A650) on white → approximately 4.6:1 (passes AA).

### Focus states

- All interactive elements must have a visible focus ring.
- Focus ring: 2px solid `--color-accent`, 2px offset. Applied via `:focus-visible` (not `:focus`) to avoid showing rings on mouse click.
- Inside dark surfaces, use white focus ring: `2px solid rgba(255,255,255,0.9)`.

### Touch targets

- Minimum 48×48px for all interactive elements.
- Bottom navigation icons and tab bar items must meet this minimum even if visually smaller — use padding or invisible hit area expansion.
- Avatar circles (40px) in sala member cards must be wrapped in a 48×48px touch target if tappable.

### Screen reader

- Images: provide descriptive `alt` text for product images; decorative illustrations use `alt=""` and `role="presentation"`.
- Status indicators (colored dots): do not rely on color alone. Include `aria-label` on the dot element, e.g., `aria-label="Invitación pendiente"`.
- Carousel: mark as `role="region"` with `aria-label`. Each card should be focusable.
- Disabled buttons: use `aria-disabled="true"` rather than the `disabled` attribute so screen readers still announce them.
- Notification cards on the lock screen (screen 10): mark the container with `role="list"` and each notification as `role="listitem"`.

### Keyboard navigation

- All interactive elements reachable via Tab in logical DOM order.
- Modals/overlays trap focus when open; restore focus to trigger element on close.
- Carousel: left/right arrow keys navigate between cards when the carousel is focused.

---

## Component Inventory (Implemented)

The following React components are available in `src/components/`. All components are plain React + plain CSS, consume tokens declared in `src/styles/variables.css`, and are exported as the default export from their JSX file.

---

### `Button`

**File:** `src/components/Button/Button.jsx`

**Purpose:** Primary call-to-action button supporting multiple visual variants and size modes.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"primary" \| "secondary" \| "ghost"` | `"primary"` | Visual style of the button |
| `size` | `"full" \| "compact"` | `"full"` | Width mode: full-width (380px) or compact (143px) |
| `children` | `ReactNode` | — | Button label content |
| `className` | `string` | `""` | Additional CSS class names |
| `...props` | — | — | Forwarded to the `<button>` element (e.g. `onClick`, `disabled`, `aria-disabled`) |

**Usage:**

```jsx
import Button from "./components/Button/Button";

<Button variant="primary" size="full" onClick={handleInvite}>Invitar</Button>
```

---

### `Badge`

**File:** `src/components/Badge/Badge.jsx`

**Purpose:** Inline pill or status indicator for discounts, notification counts, and invitation states.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"pill" \| "status"` | `"pill"` | Visual style; `"status"` renders a colored dot before the label |
| `status` | `string` | — | Appended as a modifier class when `variant="status"` (e.g. `"pending"`, `"accepted"`) |
| `children` | `ReactNode` | — | Label text or content inside the badge |
| `...props` | — | — | Forwarded to the `<span>` element |

**Usage:**

```jsx
import Badge from "./components/Badge/Badge";

<Badge variant="status" status="pending">Invitación pendiente</Badge>
```

---

### `SearchBox`

**File:** `src/components/SearchBox/SearchBox.jsx`

**Purpose:** Pill-shaped search input with a leading search icon, used in the Mercado Play header.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled input value |
| `onChange` | `function` | — | Change handler `(e) => void` |
| `placeholder` | `string` | `"Buscar..."` | Placeholder text |
| `...props` | — | — | Forwarded to the `<input type="search">` element |

**Usage:**

```jsx
import SearchBox from "./components/SearchBox/SearchBox";

<SearchBox value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar..." />
```

---

### `Input`

**File:** `src/components/Input/Input.jsx`

**Purpose:** Labeled text input with floating label, helper text, and error state for form fields.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Visible label text (rendered as `<label>`) |
| `value` | `string` | — | Controlled input value |
| `onChange` | `function` | — | Change handler `(e) => void` |
| `placeholder` | `string` | — | Placeholder text inside the field |
| `helperText` | `string` | — | Supporting text shown below the field when there is no error |
| `error` | `string \| null` | `null` | Error message; when set, replaces `helperText` and applies error styles |
| `disabled` | `boolean` | `false` | Disables the input and applies disabled styles |
| `...props` | — | — | Forwarded to the `<input>` element |

**Usage:**

```jsx
import Input from "./components/Input/Input";

<Input
  label="Email o usuario"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  placeholder="nombre@ejemplo.com"
/>
```

---

### `ProductImage`

**File:** `src/components/ProductImage/ProductImage.jsx`

**Purpose:** Product image container with optional overlay badge (e.g. discount pill).

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | Image URL |
| `alt` | `string` | — | Alt text for the image |
| `badge` | `ReactNode` | — | Optional element rendered as an overlay badge (e.g. a `Badge` component) |
| `loading` | `"lazy" \| "eager"` | `"lazy"` | Native `loading` attribute for the `<img>` |
| `...props` | — | — | Forwarded to the `<img>` element |

**Usage:**

```jsx
import ProductImage from "./components/ProductImage/ProductImage";
import Badge from "./components/Badge/Badge";

<ProductImage
  src="/images/zapatillas.jpg"
  alt="Zapatillas deportivas"
  badge={<Badge variant="pill">17% OFF</Badge>}
/>
```

---

### `PlayCard`

**File:** `src/components/PlayCard/PlayCard.jsx`

**Purpose:** Large featured content card for the Mercado Play carousel, with poster image, title overlay, and active/inactive sizing.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `imageSrc` | `string` | — | URL of the poster/cover image |
| `title` | `string` | — | Content title rendered in the card overlay |
| `logoSrc` | `string` | — | Optional content logo displayed over the image |
| `active` | `boolean` | `true` | When `true`, applies the active (larger) card style; `false` applies the peeking/inactive style |
| `onClick` | `function` | — | Click handler for the card |
| `...props` | — | — | Forwarded to the card wrapper `<div>` |

**Usage:**

```jsx
import PlayCard from "./components/PlayCard/PlayCard";

<PlayCard
  imageSrc="/images/serie-banner.jpg"
  title="El último viaje"
  active={true}
  onClick={() => navigate("/play/serie-1")}
/>
```

---

### `PlayCarousel`

**File:** `src/components/PlayCarousel/PlayCarousel.jsx`

**Purpose:** Horizontally scrollable section wrapper for `PlayCard` items, with optional title, subtitle, and dark theme support.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Section heading rendered above the track |
| `subtitle` | `string` | — | Supporting text rendered below the title |
| `dark` | `boolean` | `false` | When `true`, applies the dark (Mercado Play) surface theme |
| `children` | `ReactNode` | — | `PlayCard` elements to render inside the scrollable track |
| `...props` | — | — | Forwarded to the `<section>` element |

**Usage:**

```jsx
import PlayCarousel from "./components/PlayCarousel/PlayCarousel";
import PlayCard from "./components/PlayCard/PlayCard";

<PlayCarousel title="Salas activas" dark>
  <PlayCard imageSrc="/images/peli-1.jpg" title="La sociedad de la nieve" active />
  <PlayCard imageSrc="/images/peli-2.jpg" title="Argentina, 1985" />
</PlayCarousel>
```

---

### `PushNotification`

**File:** `src/components/PushNotification/PushNotification.jsx`

**Purpose:** Lock-screen-style push notification card with app branding, timestamp, title, and body.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `appName` | `string` | — | App name shown in the notification header |
| `appLogoSrc` | `string` | — | URL of the app logo image |
| `timeAgo` | `string` | — | Relative timestamp string (e.g. `"ahora"`, `"hace 2 min"`) |
| `title` | `string` | — | Bold notification title |
| `body` | `string` | — | Notification body text (up to 2 lines) |
| `...props` | — | — | Forwarded to the notification `<div>` (which has `role="listitem"`) |

**Usage:**

```jsx
import PushNotification from "./components/PushNotification/PushNotification";

<PushNotification
  appName="Mercado Play"
  appLogoSrc="/images/play-logo.png"
  timeAgo="ahora"
  title="¡Tu sala está lista!"
  body="Lucía aceptó tu invitación. Entrá y empezá a ver juntos."
/>
```

---

### `TopAppBar`

**File:** `src/components/TopAppBar/TopAppBar.jsx`

**Purpose:** Screen-level navigation header with configurable leading slot, title, trailing slot, and optional address row.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `theme` | `"light" \| "play"` | `"light"` | Surface theme; `"play"` applies the dark Mercado Play background |
| `leading` | `ReactNode` | — | Content in the left slot (e.g. back icon button) |
| `title` | `ReactNode` | — | Title rendered in the center/left area of the bar |
| `trailing` | `ReactNode` | — | Content in the right slot (e.g. action icon) |
| `addressRow` | `{ address: string, onClick: function } \| undefined` | — | When provided, renders a tappable address row below the main bar row |
| `className` | `string` | `""` | Additional CSS class names |
| `...props` | — | — | Forwarded to the `<header>` element |

**Usage:**

```jsx
import TopAppBar from "./components/TopAppBar/TopAppBar";

<TopAppBar
  theme="light"
  leading={<button onClick={goBack} aria-label="Volver">←</button>}
  title="Invitar a tu sala"
/>
```

---

### `TabBar`

**File:** `src/components/TabBar/TabBar.jsx`

**Purpose:** Horizontally scrollable pill tab switcher for content categories within a screen.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `tabs` | `Array<{ id: string, label: string }>` | `[]` | Tab definitions |
| `activeId` | `string` | — | `id` of the currently active tab |
| `onChange` | `function` | — | Called with the selected tab `id` when a tab is clicked |
| `theme` | `"light" \| "play"` | `"light"` | Surface theme; `"play"` applies dark Mercado Play styles |
| `className` | `string` | `""` | Additional CSS class names |
| `...props` | — | — | Forwarded to the `role="tablist"` wrapper |

**Usage:**

```jsx
import TabBar from "./components/TabBar/TabBar";

<TabBar
  tabs={[
    { id: "series", label: "Series" },
    { id: "peliculas", label: "Películas" },
    { id: "salas", label: "Salas" },
  ]}
  activeId={activeTab}
  onChange={setActiveTab}
  theme="play"
/>
```

---

### `BottomNavBar`

**File:** `src/components/BottomNavBar/BottomNavBar.jsx`

**Purpose:** Global bottom navigation bar with five tappable items; renders placeholder skeleton when no items are provided.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array<{ id: string, label: string, icon: ReactNode }>` | — | Nav item definitions; if empty or omitted, renders a 5-slot placeholder |
| `activeId` | `string` | — | `id` of the currently active nav item |
| `onChange` | `function` | — | Called with the selected item `id` on click |
| `className` | `string` | `""` | Additional CSS class names |
| `...props` | — | — | Forwarded to the `<nav>` element |

**Usage:**

```jsx
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";

<BottomNavBar
  items={[
    { id: "inicio", label: "Inicio", icon: <HomeIcon /> },
    { id: "categorias", label: "Categorías", icon: <GridIcon /> },
    { id: "notificaciones", label: "Notificaciones", icon: <BellIcon /> },
    { id: "cuenta", label: "Mi cuenta", icon: <PersonIcon /> },
    { id: "play", label: "Play", icon: <PlayIcon /> },
  ]}
  activeId={activeNav}
  onChange={setActiveNav}
/>
```

---

## Implementation Notes

### Token delivery

Use **CSS custom properties** (CSS variables) defined in a single `:root` block in `src/styles/tokens.css`. This is the minimum viable approach for a Vite prototype — no preprocessor dependency required.

```css
/* src/styles/tokens.css */
:root {
  --color-primary: #FFE600;
  /* ...all tokens as listed above... */
}
```

Import once in `main.tsx` or `App.tsx`:
```tsx
import "./styles/tokens.css";
```

Do not use Tailwind or styled-components for this prototype unless they are already in the project. Raw CSS modules per component + global tokens is sufficient.

### Suggested file layout

```
src/
  styles/
    tokens.css        # all CSS custom properties (colors, spacing, typography, radii, shadows, durations)
    reset.css         # minimal CSS reset (box-sizing, margin reset)
    global.css        # body font, base font-size, scroll behavior
  components/
    Button/
      Button.tsx
      Button.module.css
    Input/
    Card/
    Badge/
    TopAppBar/
    BottomNavBar/
    TabBar/
    SalaMemberCard/
    PromoBanner/
    PushNotification/
    Carousel/
  screens/
    HomeML/
    HomeMercadoPlay/
    OnboardingRooms/
    AddMember/
    InvitationSent/
    InvitationError/
    HomeMercadoPlayActive/
    PushNotificationScreen/
```

### Prototype scope — what is out of scope

- Real API calls. All state transitions use local component state or a lightweight React context.
- Authentication flow. Users are assumed to be logged in.
- Responsive / desktop layout. The app renders at 412px; anything wider is not a requirement.
- Dark mode toggle. The Play dark surface is applied statically per screen, not via a system preference.
- Accessibility automation testing (axe-core, etc.). Manual review is sufficient for a prototype.
- i18n infrastructure. All copy is hard-coded in Spanish as per the Figma designs.
- Actual push notifications. Screen 10 is a static illustration of the notification state.
- Persistent storage beyond a single session. `localStorage` is acceptable for the "banner dismissed" flag only.

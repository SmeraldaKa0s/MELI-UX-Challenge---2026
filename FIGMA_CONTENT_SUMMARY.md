# Figma Content Summary — Meli UX Challenge

## Objective

This project is a Mercado Libre UX Challenge (2026) designing a social viewing feature called **Salas** (Rooms) for **Mercado Play** — Mercado Libre's streaming/content platform. The core flow allows users to invite friends or family members to a shared "sala" (room) where they can see what each other is watching, receive recommendations from one another, and browse content together. The challenge covers the full onboarding journey: from the Mercado Play home tab, through sala invitation, to the recipient accepting the invitation via a push notification.

---

## Pages

The file has two confirmed pages:

### Page 1 — Cover (`0:1`, name: "Caratula para Proyectos")
A project cover slide (1920x960) used for challenge submissions. Contains:
- Mercado Libre logo
- Project name and description text fields
- Team participants section listing three contributors: the primary designer (Alexandra Lerner, Product Designer), Claude Code (listed as "Colaborador"), and V0 (listed as "Colaborador").
- Platform chip selector (mobile/desktop variants, hidden by default)

### Page 2 — High-fidelity Screens (`12:20`, name: "Pantallas en alta")
The main working page. Contains two named sections of screens, plus a hidden asset library section:

**Section: "Onboarding de la feature / sumar primer usuario"**
Seven high-fidelity mobile frames at 412x917px (standard Android/large phone viewport) connected by prototype flow arrows.

**Section: "Usuario invitado acepta invitación"**
One screen showing the perspective of the invited user receiving a push notification.

**Section: "assets para borrar despues" (hidden/staging)**
A large canvas section (13077x10568) holding raw product images (MLA SKU thumbnails), banner images, category icons, streaming partner logos, and other graphical assets used to populate the screens. Not part of the final deliverable.

---

## Variables

Variable definitions could not be fetched (MCP tool call limit reached), but the following can be inferred from the linked library and component usage:

**From Material 3 Design Kit (linked community library):**
- Full M3 color token set: Primary, Secondary, Tertiary, Error, Surface, Background, Outline, and their On- counterparts, plus Outline-Variant and all container/inverse roles.
- M3 typography scale: Display Large/Medium/Small, Headline Large/Medium/Small, Title Large/Medium/Small, Body Large/Medium/Small, Label Large/Medium/Small.
- State layer opacity tokens: 0.08, 0.12, 0.16, 0.38.
- Shape tokens: the full M3 shape set including Expressive variants (added in V1.20 / May 2025).

**From Simple Design System (linked community library — Figma SDS):**
- Light and dark color variables.
- Component-level tokens for inputs, buttons, tags, navigation, etc.
- Icon variables.

**From iOS 18 / iOS 26 libraries (linked):**
- System color variables in light, dark, dark-elevated modes.
- The iOS status bar and gesture bar components reference these.

**Observed in-file tokens (inferred from component instances):**
- Standard Icon size: 16x16 and 20x20
- Horizontal screen padding: 16px
- Top app bar height: 56–64px
- Tab bar height: 32px
- Bottom navigation bar height: 57px
- Status bar height: 52px
- Gesture bar height: 24px
- Primary button height: 48px
- Card padding: 16px horizontal margins
- Product card grid gap: ~2px (flush 2-column grid, 206px per column)

---

## Components

All component instances found in the screens are prefixed by name. The following reusable components were identified:

| Component name | Source | Usage |
|---|---|---|
| `Status bar` | iOS 18 / iOS 26 library | Top of every screen |
| `Gesture bar` | iOS 18 / iOS 26 library | Bottom of every screen |
| `top-app-bar` | Material 3 Design Kit | Navigation header on all feature screens |
| `Tab bar` | Local / Material 3 | Horizontal pill tab selector (Play section tabs) |
| `Botom-nav-bar` (sic) | Local | Bottom navigation bar (Home screen only) |
| `Button/ML` | Local | Mercado Libre branded CTA button, full-width (380px) and compact (143px) variants |
| `Badge/Pill` | Local | Discount percentage badge (e.g., "17% OFF"), notification pill, and small label pills |
| `Searchbox` | Local | Search input field, 225px wide |
| `IMG - Products` | Local | Product thumbnail image container |
| `Standard Icon` | Material 3 / SDS | 16x16 and 20x20 icon slots |
| `inputs` | Local | Form input field, 380px wide, 88px tall |
| `Handoff Tool` | Local annotation | Developer handoff reference panel (off-canvas) |
| `notificación push` | Local | Push notification card component (382x134px) |
| `Carousel/Play` | Local | Horizontal content carousel for Mercado Play |
| `Card/Play` | Local | Large featured content card for Play home (380x327px and 360x327px variants) |
| `Local Devices Chips` | Local | Platform indicator chip (cover page only) |

---

## High-fidelity Views

All screens are designed for mobile (412x917px). The flow is linear with branching error/success states.

---

### 1. Home Mercado Libre (node `335:4284`)

**Section:** Onboarding de la feature  
**Purpose:** Entry point — standard Mercado Libre home screen from which users discover the Mercado Play tab.

**Key UI elements:**
- iOS status bar (top)
- Top app bar with Mercado Libre branding + delivery address row ("Miñones 2177") with location pin icon and chevron
- Horizontal tab bar below the address row (switching between ML main tabs)
- Hero banner image (380x172px, full bleed with 16px margins)
- Mercado Plus promotional strip with Meli+ logo, divider, and promotional text + chevron icon
- Horizontal category navigation row: 6 category slots each with a square icon thumbnail (44x46 or 48px) and label text; items include international, streaming thumbnails, "afiliados", celulares, etc. Items 5 and 6 are partially off-screen (overflow, swipeable)
- 2-column product card grid below: 4 items shown (2 rows x 2 columns). Each card shows a product image, product title (2-line truncated), original price struck through, discounted price in large text, discount percentage pill badge, and "Envío gratis" shipping label
- "Ver más" button spanning full width at bottom of product grid
- Bottom navigation bar (5-tab iOS-style bar)
- iOS gesture bar

**Notable interactions:** Tapping the Play tab in the tab bar navigates to the Home Mercado Play screen.

---

### 2. Home Mercado Libre — Overlay state (node `340:7941`)

**Section:** Onboarding de la feature  
**Purpose:** Transition or modal overlay state on the Mercado Libre home. The main content area is replaced with a full-bleed image (404x833px) overlaid on the screen, likely representing an onboarding sheet or contextual takeover introducing the Salas feature.

**Key UI elements:**
- Status bar (top)
- Full-screen image overlay covering the scroll area (404x833px rounded rectangle)
- Gesture bar (bottom)

---

### 3. Home Mercado Play (node `339:6621`)

**Section:** Onboarding de la feature  
**Purpose:** Mercado Play home tab — shows the streaming content hub including featured content cards, a search bar, content tabs, and the "Tus salas" (Your Rooms) section in its pre-activation promotional state.

**Key UI elements:**
- Status bar
- Top app bar with Mercado Play branding
- Search bar (225px wide) + secondary action button (143px, likely "Suscribirse" or a filter action)
- Horizontal tab bar for Play content categories
- Featured content carousel: 3 `Card/Play` cards; center card (380x327px) is active/focused, flanking cards (360x327px) peek in from sides
- "Tus salas" section header ("Tus salas" label + 380px wide)
- Promotional banner for Salas (380x87px): contains headline text "COMPARTÍ CON TUS AMIGOS TODO LO QUE MIRÁS", subtext "Empezá a usar salas hoy", and an avatar image (71x71px) on the right. A close (X) icon is present but hidden.
- Horizontal content carousel (`Carousel/Play`, 428x203px — bleeds beyond screen width for swipe affordance)
- Gesture bar

**Notable interactions:** Tapping the promotional Salas banner or a CTA within it leads to the Onboarding screen. The tab bar selection and carousel are swipeable.

---

### 4. Onboarding Salas (node `340:6708`)

**Section:** Onboarding de la feature  
**Purpose:** Introductory screen explaining the Salas feature to a first-time user before they add any contacts.

**Key UI elements:**
- Status bar
- Top app bar (back navigation implied)
- Heading: "Disfrutá los beneficios de las salas" (380px wide, 28px height — large title)
- Illustration area (260x257px centered, with avatar image 261x174px)
- Two benefit rows below the illustration, each with a title and a 2-line body text paragraph:
  - Row 1: title + description of a sharing benefit
  - Row 2: title + description of a discovery benefit
- Full-width primary CTA button (380x48px) anchored to the bottom of the scroll area ("Invitar" or similar)
- Gesture bar

**Notable interactions:** The CTA button navigates to the "Agregar familiar/amigo - empty" form screen.

---

### 5. Agregar familiar/amigo — Empty state (node `340:6895`)

**Section:** Onboarding de la feature  
**Purpose:** Form screen for adding the first sala member. Shown in empty/pristine state — no contact entered yet.

**Key UI elements:**
- Status bar
- Top app bar (back navigation)
- Title (28px) and subtitle (38px height, 2 lines)
- Two stacked form input fields (each 380x88px): likely "Nombre" and "Email" or "Apodo" and "Usuario de ML"
- Informational section below the inputs headed "¿Qué van a ver?" with 3 bullet rows:
  - "Van a poder enterarse el contenido que están viendo." (icon + 2-line text)
  - "Van a poder saber qué es lo que les gustó." (icon + 1-line text)
  - "Tener siempre al alcance recomendaciones." (icon + 1-line text)
- Full-width CTA button (380x48px) — disabled or greyed in this state
- Gesture bar

---

### 6. Agregar familiar/amigo — Filled state (node `340:7178`)

**Section:** Onboarding de la feature  
**Purpose:** Same form as above but with both inputs filled in, enabling the submit CTA.

**Key UI elements:** Identical layout to the empty state. The two input instances (`inputs` component) show filled/active variant. The CTA button is in its enabled/active state.

**Notable interactions:** Tapping the CTA sends the invitation. On success: navigates to "Invitación enviada". On failure: navigates to "Error" state.

---

### 7. Agregar familiar/amigo — Invitación enviada (node `340:7294`)

**Section:** Onboarding de la feature  
**Purpose:** Success confirmation screen after sending a sala invitation.

**Key UI elements:**
- Status bar
- Top app bar (close or back)
- Heading: title (28px) + subtitle (2-line, 38px height)
- Success illustration: image (206x214px, rounded rectangle)
- Invited person card below illustration (380x101px):
  - Avatar circle with initials ("RR", 40x40px)
  - Name/title text
  - Status row: colored dot + "Invitación pendiente" label
- Two full-width action buttons stacked (380x48px each, 12px gap): primary action (e.g., "Volver al inicio") and secondary action (e.g., "Invitar a otro")
- Gesture bar

---

### 8. Agregar familiar/amigo — Error state (node `340:7875`)

**Section:** Onboarding de la feature  
**Purpose:** Error screen displayed when the invitation could not be sent (e.g., user not found, network error).

**Key UI elements:**
- Status bar
- Top app bar (back/close)
- Heading: title + subtitle (same layout as Invitación enviada)
- Error illustration: rounded rectangle (178x178px) using a Streamline UX error illustration ("Seo-Error-2-1")
- Two full-width action buttons (380x48px each): primary retry/confirm and secondary dismiss/go back
- Gesture bar

---

### 9. Home Mercado Play — Sección salas activa (node `340:7412`)

**Section:** Onboarding de la feature  
**Purpose:** The Mercado Play home screen after the user has at least one sala member. The promotional banner is replaced by actual sala member data.

**Key UI elements:**
- Status bar
- Top app bar with Play branding
- Search bar + action button
- Horizontal tab bar
- Featured content card carousel (same 3-card layout as screen 3)
- "Tus salas" section now shows:
  - Section header "Tus salas" (380px)
  - Sala member card (182x111px): avatar circle with initials, member name, status indicator ("Invitación pendiente" with colored dot)
  - "Invitar" slot (85x111px): avatar placeholder (39x39px) + pill badge + "Invitar" text label — for adding more members
- Content recommendation carousel below salas (`Carousel/Play`, 428x158px)
- Gesture bar

**Notable interactions:** The salas section is now functional, replacing the onboarding banner. Members with pending invitations show the pending status. The "Invitar" slot allows adding more users.

---

### 10. Notificación push recibida — Invitación aceptada (node `340:7615`)

**Section:** "Usuario invitado acepta invitación"  
**Purpose:** Lock screen / notification center view from the perspective of the invited person. Shows two stacked push notifications received from Mercado Play after accepting the invitation.

**Key UI elements:**
- Status bar
- Full-screen lock screen / background image (414x865px) with a blurred background image behind the notifications (414x865px) and a secondary overlay image (409x230px)
- Two `notificación push` component instances stacked (382x134px each, 4px gap):
  - Notification 1: Mercado Play app logo (50x25px), product/app name, relative timestamp, notification icon; title and subtitle body (2 lines)
  - Notification 2: Same layout — likely the recommendation request ("¿Qué recomiendas ver?") prompt
- Gesture bar

**Notable interactions:** This screen is the culmination of the invited user's flow. The two notifications represent (1) confirmation that their invitation was accepted, and (2) a prompt asking the invited user for content recommendations.

---

## Prototype Flow

Connector arrows (visible in the canvas) link the screens in this sequence:

```
Home ML  -->  Home Mercado Play (Play tab)
Home Mercado Play  -->  Onboarding Salas (via promo banner CTA)
Onboarding Salas  -->  Agregar familiar/amigo (empty) (via primary CTA)
Agregar familiar/amigo (empty)  -->  Agregar familiar/amigo (filled) (user types)
Agregar familiar/amigo (filled)  -->  Invitación enviada (success path)
Agregar familiar/amigo (filled)  -->  Error (failure path)
Invitación enviada  -->  Home Meli Play - salas activa (via "Volver al inicio")
[Separate path] -->  Notificación push (invited user's device)
```

---

## Notes

- All screens are designed for a 412px wide viewport (large Android phone / design standard for MercadoLibre Argentina).
- Screen height is 917px total: 52px status bar + 841px scroll area + 24px gesture bar.
- The design uses Mercado Libre's own component language ("Button/ML", "top-app-bar" with ML branding) layered on top of Material 3 foundations.
- Three external design libraries are actively linked: Material 3 Design Kit, Simple Design System, and iOS 18/26 UI Kit.
- Variable definitions were not accessible (MCP tool call limit reached on the seat plan). Color tokens are inherited from M3 and SDS libraries.
- The section "assets para borrar despues" contains staging images not intended for handoff.

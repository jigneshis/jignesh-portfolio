# Design System Specification

> **Project:** Portfolio Website v2
> **Date:** September 1, 2026
> **Version:** 1.0

---

## 1. Design Principles

1. **Monochrome First** — Black and white dominate. Color comes from content (project screenshots, profile photo), not from the UI chrome.
2. **Typography is the Hero** — Massive headings with mixed-weight treatments create visual hierarchy without relying on borders, backgrounds, or decorative elements.
3. **Pill Everything** — The signature shape language is the "pill" (fully rounded corners). Used for navigation, buttons, badges, tooltips, and the floating contact dock.
4. **Breathe** — Generous whitespace between sections (~160px vertical padding). Content never feels cramped.
5. **Motion with Purpose** — Every animation serves a goal: parallax creates depth, morphing nav saves space, custom cursors guide interaction.

---

## 2. Color Tokens

### 2.1 Light Mode (Default)

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| Background | `#FFFFFF` | `--color-background` | Page background |
| Foreground | `#000000` | `--color-foreground` | Primary text, headings (bold) |
| Muted | `#666666` | `--color-muted` | Body text, descriptions |
| Muted Foreground | `#999999` | `--color-muted-foreground` | Light headings in mixed-weight titles |
| Card | `#F5F5F5` | `--color-card` | Card backgrounds (FAQ, pricing light) |
| Card Foreground | `#000000` | `--color-card-foreground` | Text on cards |
| Border | `#E5E5E5` | `--color-border` | Section dividers, card borders |
| Accent | `#22C55E` | `--color-accent` | Availability badge green dot |
| Surface Dark | `#000000` | `--color-surface-dark` | Footer bg, dark pricing cards, buttons |
| Surface Dark Text | `#FFFFFF` | `--color-surface-dark-foreground` | Text on dark surfaces |
| Surface Dark Muted | `#888888` | `--color-surface-dark-muted` | Gray text on dark surfaces |

### 2.2 Dark Mode

| Token | Light Value | Dark Value |
|-------|------------|------------|
| Background | `#FFFFFF` | `#0A0A0A` |
| Foreground | `#000000` | `#FAFAFA` |
| Muted | `#666666` | `#A1A1AA` |
| Muted Foreground | `#999999` | `#71717A` |
| Card | `#F5F5F5` | `#18181B` |
| Card Foreground | `#000000` | `#FAFAFA` |
| Border | `#E5E5E5` | `#27272A` |
| Accent | `#22C55E` | `#4ADE80` |
| Surface Dark | `#000000` | `#000000` |
| Surface Dark Text | `#FFFFFF` | `#FFFFFF` |
| Surface Dark Muted | `#888888` | `#888888` |

### 2.3 Usage Guidelines
- **NEVER** use raw hex colors in components — always reference tokens
- The mixed-weight heading pattern uses `muted-foreground` for the light words and `foreground` for the bold words
- Dark surfaces (footer, pricing cards) remain dark in both light and dark mode

---

## 3. Typography

### 3.1 Font Family
```
Primary: "Inter" (variable font)
Fallback: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Alternatively: **Geist Sans** (Vercel's custom font, optimized for Next.js)

### 3.2 Type Scale

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Display | 64-80px / `text-6xl` to `text-7xl` | 700-800 | 1.0-1.1 | -0.02em | Hero headline, footer brand text |
| H1 | 48-56px / `text-5xl` | 700 | 1.1-1.15 | -0.01em | Section headings ("Latest Projects") |
| H2 | 36-40px / `text-4xl` | 600-700 | 1.2 | -0.01em | Sub-section headings |
| H3 | 24px / `text-2xl` | 600 | 1.3 | 0 | Card titles, project names |
| H4 | 20px / `text-xl` | 600 | 1.4 | 0 | Service names, FAQ questions |
| Body Large | 18px / `text-lg` | 400 | 1.6 | 0 | Hero subtext, about bio |
| Body | 16px / `text-base` | 400 | 1.6 | 0 | Default body text |
| Small | 14px / `text-sm` | 400-500 | 1.5 | 0 | Captions, labels, dates |
| XS | 12px / `text-xs` | 500 | 1.4 | 0.02em | Badges, tags |

### 3.3 Mixed-Weight Heading Pattern

This is the site's **signature typographic pattern**. Nearly every section heading follows it:

```
[Light word(s)]     → text-muted-foreground, font-normal (400)
[Bold phrase.]      → text-foreground, font-bold (700)
```

**Examples (adapted for developer portfolio):**
- "Code that" (gray) / "delivers results." (black)
- "Services that" (gray) / "supercharge your business." (black)
- "Building software that" (gray) / "solves real problems." (black)
- "Simple pricing." (gray) / "Exceptional results." (black)
- "Your questions" (gray) / "answered." (black)
- "Lets" (white) / "build" (gray, cycling) / "incredible work together." (gray)

### 3.4 Responsive Typography
```css
/* Mobile → Desktop scaling */
Display: text-4xl md:text-5xl lg:text-6xl xl:text-7xl
H1:      text-3xl md:text-4xl lg:text-5xl
H2:      text-2xl md:text-3xl lg:text-4xl
```

---

## 4. Spacing System

### 4.1 Base Scale
Following Tailwind's default 4px base unit:

| Token | Value | Tailwind | Usage |
|-------|-------|---------|-------|
| `xs` | 4px | `p-1` | Micro spacing |
| `sm` | 8px | `p-2` | Icon padding, tight gaps |
| `md` | 16px | `p-4` | Default component padding |
| `lg` | 24px | `p-6` | Card padding, grid gaps |
| `xl` | 32px | `p-8` | Section content gaps |
| `2xl` | 48px | `p-12` | Between major elements |
| `3xl` | 64px | `p-16` | Large section padding (mobile) |
| `section` | 120-160px | `py-30` to `py-40` | Vertical section spacing |
| `container` | 120px | `px-30` | Horizontal page margins (desktop) |

### 4.2 Layout Constants
| Property | Value | Notes |
|----------|-------|-------|
| Max Content Width | `1200px` (`max-w-7xl`) | Centered container |
| Grid Gap (Projects) | `24px` (`gap-6`) | Between project cards |
| Grid Gap (Testimonials) | `24px` (`gap-6`) | Between testimonial cards |
| Nav Height | ~64px | Floating pill height |
| Contact Dock Height | ~56px | Floating bottom pill |

---

## 5. Border Radius

| Token | Value | Tailwind | Usage |
|-------|-------|---------|-------|
| `sm` | 8px | `rounded-lg` | Small elements, tech stack icons |
| `md` | 12px | `rounded-xl` | Tooltips, small cards |
| `lg` | 16px | `rounded-2xl` | Project cards, pricing cards |
| `xl` | 20px | `rounded-[20px]` | Large cards, about photo |
| `full` | 9999px | `rounded-full` | Pills, buttons, nav, avatars, badges |

---

## 6. Shadows

| Name | Value | Usage |
|------|-------|-------|
| `sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle card elevation |
| `md` | `0 4px 6px rgba(0,0,0,0.07)` | Nav bar, floating elements |
| `lg` | `0 10px 25px rgba(0,0,0,0.1)` | Contact dock, hover states |
| `none` | `none` | Most cards (flat design) |

---

## 7. Component Specifications

### 7.1 Button (Primary)
```
Shape:        Pill (rounded-full)
Background:   black (light mode) / white (dark mode)
Text:         white (light mode) / black (dark mode)
Font:         text-sm, font-medium
Padding:      px-6 py-3
Hover:        opacity-90 or slight scale
Transition:   150ms ease
```

### 7.2 Button (Secondary)
```
Shape:        Pill (rounded-full)
Background:   transparent
Border:       1px solid border-color
Text:         foreground
Hover:        background fills to card color
```

### 7.3 Navigation Pill
```
Shape:        Pill (rounded-full)
Background:   white/background with backdrop-blur
Border:       1px solid border (subtle)
Shadow:       shadow-md
Content:      Avatar (32px circle) + Name + Links OR dots
Transition:   Framer Motion layout animation, 400ms spring
```

### 7.4 Project Card
```
Shape:        Rounded rectangle (rounded-2xl)
Overflow:     hidden (clip screenshot)
Aspect Ratio: 16:10 or 4:3
Hover:        Custom cursor replaces native cursor
Below Card:   Project name (font-semibold) + Category (text-muted)
              "↗ View Project" aligned right
```

### 7.5 FAQ Accordion Item
```
Container:    border-b border-border
Question:     text-lg font-medium, flex with +/- icon
Answer:       text-muted, animated height reveal
Transition:   300ms ease, Framer Motion AnimatePresence
```

### 7.6 Availability Badge
```
Shape:        Inline flex, no specific border
Content:      Green dot (w-2 h-2 rounded-full bg-accent) + text
Text:         text-sm, text-foreground
Animation:    Optional pulse on green dot
```

### 7.7 Avatar Cluster
```
Layout:       Overlapping circles, -ml-2 on each after first
Size:         w-8 h-8 (32px) each
Border:       2px solid background (creates gap between overlapping)
Count:        4-5 photos + "99+ Happy clients" text
```

### 7.8 Contact Dock
```
Shape:        Pill (rounded-full)
Position:     fixed bottom-6 left-1/2 -translate-x-1/2
Background:   white/background with backdrop-blur-lg
Shadow:       shadow-lg
Content:      Text ("Speak to me" + subtext) + Icon buttons
Animation:    Slide up from below viewport, exit near footer
Z-index:      50
```

---

## 8. Icon System

### 8.1 Service Icons
- Style: Dark filled circle (`bg-foreground rounded-full`) with white icon glyph inside
- Size: 40-48px circle
- Source: Lucide Icons, Heroicons, or custom SVGs

### 8.2 Tech Stack Icons
- Style: Light rounded square (`bg-card rounded-lg`) with brand-colored logo
- Size: 48px square
- Hover: Dark tooltip with tool name
- Source: Official brand SVGs (simpleicons.org)

### 8.3 Social Icons
- Style: Outline circles or icon-only
- Size: 36-40px
- Source: Lucide Icons or custom SVGs

---

## 9. Section Dividers

The reference uses **thin horizontal lines** (`border-t border-border`) to separate some sections (e.g., between hero and logo strip, between logo strip and projects). Not all sections have dividers — the generous whitespace alone provides enough separation for most.

**Rule:** Use dividers sparingly. They appear between:
- Hero ↔ Logo Strip
- Logo Strip ↔ Projects
- About ↔ Pricing (where background changes)
- FAQ ↔ Footer (content area to dark footer transition)

---

## 10. Animation Timing

| Easing | CSS | Usage |
|--------|-----|-------|
| Standard | `ease-in-out` / `[0.4, 0, 0.2, 1]` | Most transitions |
| Decelerate | `ease-out` / `[0, 0, 0.2, 1]` | Element entrances |
| Spring | `type: "spring", stiffness: 300, damping: 30` | Custom cursor, nav morph |
| Smooth | `type: "spring", stiffness: 100, damping: 30` | Scroll-linked parallax |

| Duration | Usage |
|----------|-------|
| 150ms | Button hover, simple state changes |
| 300ms | Accordion expand, color transitions |
| 400ms | Nav morph, element reveals |
| 600ms | Section entrance animations |
| 1000ms | Hero entrance, page load stagger |

---

*This design system is the single source of truth for all visual decisions. Reference these tokens in every component.*

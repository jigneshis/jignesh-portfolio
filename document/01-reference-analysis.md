# Reference Website Analysis

> **Source:** LaunchFolio — Framer Template by Joseph Alexander
> **URL:** `https://launchfolio.framer.website`
> **Analysis Date:** September 1, 2026
> **Frames Analyzed:** 64 sequential screenshots from screen recording

---

## 1. Site Overview

The reference is a **premium freelance designer portfolio** built on Framer. It targets high-ticket design clients with a productized service model (subscription-based design). The site is a **single-page scroller** with one additional dedicated `/projects` page.

**Brand Identity:** Joseph Alexander — Full-Stack Designer
**Positioning:** "Design that delivers results" — strategic, growth-oriented, conversion-focused design partner

---

## 2. Complete Section Breakdown (Top → Bottom)

### 2.1 Navigation (Sticky, Morphing Pill)
- **Default State (at top):** Floating pill shape, centered. Contains: profile photo (circular avatar), full name "Joseph Alexander", and nav links: Work, Services, Pricing, Blog, Contact (Contact has a pill border).
- **Scrolled State:** Collapses to compact pill showing only: avatar + name + "••" (three-dot menu). Links are hidden behind the dots.
- **Behavior:** Sticky to viewport top. Smooth morph transition between states. Always centered horizontally.
- **Design:** Fully rounded corners (pill shape), subtle background blur, white background with slight shadow.

### 2.2 Hero Section
- **Availability Badge:** "🟢 Available for August'25" — green dot + text, positioned above headline.
- **Headline:** Two-line treatment with mixed weights:
  - "Design that" — lighter gray (#999 approx)
  - "delivers results." — bold black
- **Subtext:** "Strategic design that drives growth, not just looks good. I create everything your brand needs to attract customers and turn them into sales."
  - "drives growth, not just looks good." is bold, rest is regular weight gray.
- **CTA Button:** "Book a call with me" — pill-shaped, solid black background, white text, small profile photo embedded on the left side of the button.
- **3D Card Stack (Right Side):** 3-4 overlapping project screenshot cards tilted at various angles in 3D space. Creates a dynamic, layered composition. Cards show actual project screenshots (Kora, KYMA, etc.).
  - **Scroll Animation:** Cards spread apart and shift vertically at different speeds as user scrolls (parallax). Creates depth-of-field effect.

### 2.3 Social Proof / Client Logo Strip
- **Left:** Overlapping circular avatar cluster (4-5 photos) + "★★★★★ 99+ Happy clients"
- **Right:** Horizontal scrolling logo marquee — Frequencii, Kintsugi, CoreOS, Luminary, 45 Degrees°, Codecraft_
- **Separator:** Thin horizontal line above and below this section.

### 2.4 Latest Projects (2×2 Grid)
- **Section Title:** "Latest Projects" — large, bold, left-aligned.
- **Grid Layout:** 2 columns × 2 rows = 4 project cards.
- **Card Design:**
  - Large rounded-corner container (≈16-20px radius)
  - Full-bleed project screenshot filling the card
  - "LaunchNow" badge with arrow icon — bottom-right corner of each card
  - Below card: Project name (bold) + category (gray) on left, "↗ View Project" link on right
- **Projects Shown:**
  1. **Kora** — Consulting Site (light, floral aesthetic)
  2. **KYMA** — AI Agency (dark, cyberpunk, neon green accents)
  3. **Mugen** — Design Studio (dark, bold typography)
  4. **Axiom** — Ecommerce Site (dark, portrait-based, "BUILT FOR REAL PERFORMANCE")
- **Hover Interaction:** Custom cursor — standard cursor is replaced by a floating black pill with "View Project" text that follows the mouse position over the card.
- **Below Grid:** Centered "View all my projects ↗" text link.

### 2.5 Featured Testimonial (Single Quote)
- **Layout:** Full-width, centered, generous whitespace above and below.
- **Quote:** Large serif-ish text, centered: "Working with Joseph felt like having a seasoned design partner who truly understood our vision for KYMA and brought it to life in ways we hadn't even imagined."
- **Attribution:** Circular avatar + "Thomas Weber" (bold) + "Co-founder of KYMA" (gray) — centered below quote.

### 2.6 Services Section
- **Two-column layout:**
  - **Left Column:**
    - Heading: "Services that" (gray) / "supercharge your business." (black bold) — mixed weight treatment.
    - "My tech stack" — row of rounded square icon tiles showing tool logos (Figma, Framer, Webflow, Rive, etc.).
    - **Hover on tech icons:** Dark tooltip with tool name (e.g., "Claude", "Rive").
  - **Right Column:**
    - Vertical list of services, each with a dark circular icon + text:
      1. Framer Development
      2. Brand Design
      3. Web Apps
      4. Landing Pages
      5. Motion Graphics
      6. 3D Design
      7. UX / UI Consultation

### 2.7 About / Bio Section
- **Heading:** "Designing experiences that solve real problems." — large bold text.
- **Two-column layout:**
  - **Left:** Large portrait photo (man in glasses, orange shirt, teal background). Social media icon bar overlaid at bottom-right of image (X, Instagram, Dribbble, Behance, LinkedIn).
  - **Right:** Bio paragraphs about design philosophy and approach. Handwritten signature graphic below the text.
- **Subheading below:** "Joseph Alexander" (bold) + "Full-stack Designer" (gray)

### 2.8 Work History
- **Label:** "My work history"
- **Layout:** Stacked rounded cards, each showing:
  - Company name (bold) + Role (gray) + Year range (right-aligned)
  - KYMA — Full-Stack Designer — 2012-2024
  - Mugen — Staff Product Designer — 2020-2022
  - Axiom — Designer — 2016-2020
- **Toggle:** "Hide ⊖" / "Show all ⊕" button below — collapses/expands the work history list.

### 2.9 Pricing Section
- **Heading:** "Simple pricing." (gray) / "Standout designs." (black bold)
- **Right-side text:** "Clear costs, no hidden fees. Select from monthly subscriptions or individual project rates."
- **Process Steps (3-column):**
  1. Subscribe — "Subscribe via Stripe & start requesting through my Trello board."
  2. Request — "Request whatever service I offer, from branding to web design."
  3. Receive — "Receive your design within 48 hours on average."
- **Pricing Cards:**
  - **Subscription Card (Dark):** "Unlimited Design" — $8,000/month, feature checklist, "Pause or cancel anytime"
  - **Single Project Card (Dark):** "Comprehensive design services for any project scope"

### 2.10 Testimonials Grid
- **Heading:** "Hear from what my" (gray) / "clients have to say." (black bold)
- **Top-right:** Avatar cluster + "★★★★★ 99+ Happy clients"
- **Layout:** 3×2 grid of white testimonial cards.
- **Card Design:** Quote icon ("❝") at top, testimonial text (with bold highlights), avatar + name + role at bottom.
- **Testimonials from:** Martina Martinez, Thomas Weber, Ben Harper, Michael Wong, Natalie Rivera, Emma Kraft.

### 2.11 FAQ Section
- **Two-column layout:**
  - **Left:** "Your questions" (gray) / "answered." (black bold) heading + accordion list.
    - Questions with expand/collapse (+/-) icons.
    - "How long does a typical project take to complete?"
    - "Can you work with my existing brand and designs?"
    - "What makes your design process unique?"
    - And more...
  - **Right:** Light gray CTA card with avatar, "Still not sure? Book a free discovery call." heading, description, and black "Schedule Now" (Cal.com) button.

### 2.12 Blog / Insights Section
- **Heading:** "From my blog," (gray) / "design insights." (black bold) + "View All" link.
- **Featured Article:** Large horizontal card with abstract image and title "How designers and developers can actually collaborate."
- **Article Cards (2-column):** Image + Title + Date + Author.
- **Hover:** Custom cursor — "View Article" circular pill.

### 2.13 Footer (Dark)
- **Background:** Solid black (#000 or near-black)
- **Main Heading:** "Lets" (white) + cycling word (gray, animated) + "incredible work together." (gray)
  - Cycling words: "build", "create", "design" — vertical slot-machine / typing animation.
- **Contact Grid (3-column):**
  - Email: joseph@launchnow.design
  - Call Me: "Book Now"
  - Social: Icon row (X with "1,214" count, Instagram, Dribbble, Behance, LinkedIn)
- **Divider line**
- **Menu links:** Work, Services, Pricing, Blog
- **Legal links:** Terms of Service, Privacy Policy
- **Copyright:** © 2026 Joseph Alexander
- **Giant Brand Text:** Massive "JOSEPH" text at very bottom, overflowing the viewport — decorative.

### 2.14 Sticky Bottom Contact Dock
- **Position:** Fixed to bottom-center of viewport, appears after scrolling past hero.
- **Design:** Pill-shaped, glass-morphism style, contains:
  - "Speak to me" text + "Email or book a call" subtext
  - Email icon button
  - Calendar icon button

---

## 3. Design System Analysis

### 3.1 Color Palette
| Role | Color | Usage |
|------|-------|-------|
| Background | `#FFFFFF` or `#FAFAFA` | Main page background |
| Text Primary | `#000000` | Headlines, bold text |
| Text Secondary | `#666666` — `#999999` | Subheadings, body copy, "lighter" words in mixed-weight headlines |
| Accent | `#22C55E` (green) | Availability badge dot |
| Dark Surface | `#000000` — `#111111` | Footer, pricing cards, buttons, nav pill |
| Card Background | `#F5F5F5` — `#F7F7F7` | Testimonial cards, FAQ cards, work history cards |
| White | `#FFFFFF` | Button text on dark, card surfaces |

### 3.2 Typography
- **Typeface:** Modern geometric sans-serif (likely Inter, SF Pro Display, or a similar Grotesk family)
- **Heading Scale:**
  - Hero H1: ~60-80px, bold 700-800 weight
  - Section H2: ~48-56px, mixed weights (light gray word + bold black word pattern)
  - Card H3: ~20-24px, medium-bold
- **Body:** ~16-18px, regular 400 weight, gray (#666)
- **Mixed Weight Pattern:** Nearly every section heading uses this: "Light word" (gray, 300-400 weight) + "Bold phrase." (black, 700+ weight). This is the site's signature typographic rhythm.

### 3.3 Spacing & Layout
- **Max Content Width:** ~1200px
- **Section Padding:** ~120-160px vertical between sections
- **Grid Gap:** ~24-32px between project/testimonial cards
- **Border Radius:** Consistent ~16-20px on cards, full-round on pills/buttons
- **Horizontal Margins:** ~120-160px from viewport edges

### 3.4 Component Library
| Component | Shape | Usage |
|-----------|-------|-------|
| Navigation | Pill | Sticky, morphing between expanded/collapsed states |
| Buttons | Pill | CTAs, solid black with white text |
| Cards (Project) | Rounded rectangle | Full-bleed images, 16-20px radius |
| Cards (Testimonial) | Rounded rectangle | White bg, quote icon, subtle border |
| Cards (Pricing) | Rounded rectangle | Dark theme, feature lists |
| Badges | Pill | Availability status, "LaunchNow" badges |
| Contact Dock | Pill | Sticky bottom, glassmorphism |
| Icons | Circle | Dark circle with white icon glyph |
| Avatar Cluster | Overlapping circles | Social proof indicator |
| Accordions | Bordered sections | FAQ expand/collapse with +/- toggles |
| Tooltips | Rounded pill | Dark bg, appears on tech stack icon hover |

---

## 4. Animation & Interaction Inventory

### 4.1 Scroll-Linked Animations
| Animation | Trigger | Description |
|-----------|---------|-------------|
| Hero Card Parallax | Scroll | 3-4 tilted project cards spread apart vertically at different speeds |
| Nav Morph | Scroll threshold | Expanded nav collapses to compact pill when scrolling past hero |
| Section Reveals | Scroll into view | Elements fade/slide into view as they enter the viewport |

### 4.2 Hover Interactions
| Interaction | Element | Description |
|-------------|---------|-------------|
| Custom Cursor | Project cards | Black "View Project" pill follows cursor position |
| Custom Cursor | Blog articles | Black "View Article" pill follows cursor |
| Tooltip | Tech stack icons | Dark pill tooltip shows tool name |
| Link Underline | Text links | "View all my projects" gets underline on hover |

### 4.3 Click/Toggle Interactions
| Interaction | Element | Description |
|-------------|---------|-------------|
| Accordion Toggle | FAQ items | Expand/collapse with smooth height animation, +/- icon toggle |
| Work History Toggle | "Hide"/"Show all" button | Collapses/expands the work history list |

### 4.4 Continuous Animations
| Animation | Location | Description |
|-----------|----------|-------------|
| Word Cycling | Footer heading | "build" → "create" → "design" cycling with vertical slide animation |
| Logo Marquee | Client logo strip | Horizontal auto-scroll of company logos |
| Availability Dot | Hero badge | Green dot may have a subtle pulse animation |

### 4.5 Page Transitions
| Transition | Trigger | Description |
|------------|---------|-------------|
| Smooth Scroll | Nav link click | Scrolls to section with easing |
| Page Load | Initial visit | Elements stagger into view |

---

## 5. Multi-Page Structure

| Page | URL | Content |
|------|-----|---------|
| Homepage | `/` | All sections (hero → footer), single-page scroll |
| Projects | `/projects` | "My most recent work" — full project grid + CTA + footer |
| Project Detail | `/projects/[slug]` | Individual project case study (inferred from "View Project" links) |
| Blog | `/blog` | Blog listing (inferred from nav link) |
| Blog Post | `/blog/[slug]` | Individual blog post (inferred) |

---

## 6. Responsive Considerations
Based on the desktop screenshots, the site appears designed desktop-first with:
- A max-width container (~1200px) centered on page
- Two-column layouts that would stack on mobile
- Project grid (2×2) that would become single-column
- Floating navigation and bottom dock optimized for both desktop and mobile
- Large typography that would scale down on smaller viewports

---

## 7. Third-Party Integrations Observed
- **Cal.com** — Scheduling/booking (via "Schedule Now" buttons)
- **Stripe** — Payment processing (mentioned in pricing flow)
- **Trello** — Project management (mentioned in subscription flow)
- **Framer** — Site builder (host platform)
- **"LaunchNow"** — Appears to be the designer's own template/brand badge

---

*This analysis serves as the foundational reference for all subsequent project documentation.*

# Product Requirements Document (PRD)

> **Project:** Portfolio Website v2
> **Author:** [Your Name]
> **Date:** September 1, 2026
> **Version:** 1.0
> **Status:** Draft — Awaiting Approval

---

## 1. Executive Summary

Build a premium, high-performance personal portfolio website for a **full-stack web developer** offering freelance services. The site will serve dual purposes: **attracting freelance clients** and **building a strong personal brand/online presence**.

The design closely follows a reference site (LaunchFolio by Joseph Alexander) — a clean, monochrome, animation-rich single-page portfolio with a dedicated projects page. The implementation will be custom-coded using Next.js, Tailwind CSS, and Framer Motion, deployed on Vercel.

---

## 2. Goals & Success Metrics

### 2.1 Primary Goals
1. **Client Acquisition** — Convert visitors into freelance leads via clear CTAs (WhatsApp/Telegram direct messaging)
2. **Personal Branding** — Establish a memorable, professional online identity that communicates expertise
3. **Portfolio Showcase** — Present 3+ real projects with compelling visuals and context
4. **SEO Visibility** — Rank for "[Your Name]" and "freelance full-stack developer" queries

### 2.2 Success Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Lighthouse Performance | ≥ 95 | Lighthouse CI |
| Lighthouse Accessibility | ≥ 95 | Lighthouse CI |
| Lighthouse SEO | 100 | Lighthouse CI |
| Core Web Vitals (LCP) | < 2.5s | Vercel Analytics |
| Core Web Vitals (CLS) | < 0.1 | Vercel Analytics |
| Core Web Vitals (INP) | < 200ms | Vercel Analytics |
| Time to First Contact | — | Track WhatsApp/Telegram clicks via Vercel Analytics |
| Google Index | Top 5 for own name | Google Search Console |

---

## 3. Target Audience

### 3.1 Primary: Potential Freelance Clients
- Startup founders needing a web app or site
- Small/medium businesses looking for a developer
- Agencies seeking a freelance full-stack partner
- Non-technical founders who found you via Google or referral

### 3.2 Secondary: Professional Network
- Recruiters and hiring managers (job opportunities)
- Fellow developers (collaboration, open-source)
- Design/tech community (personal brand building)

---

## 4. Site Architecture

### 4.1 Page Structure

```
/ (Homepage)
├── Hero Section
├── Client Logo Strip
├── Latest Projects (2×2 grid)
├── Services + Tech Stack
├── About Me / Bio
├── Pricing Packages
├── FAQ + CTA
├── Contact / CTA
└── Footer

/projects (Projects Page)
├── Header ("My most recent work")
├── Full Project Grid
├── Client Logo Marquee
├── CTA Card
└── Footer

/projects/[slug] (Project Detail Page — future)
├── Project hero
├── Case study content
└── Related projects
```

### 4.2 Navigation
- **Links:** Work, Services, Pricing, Contact
- **Behavior:** Smooth-scroll to sections on homepage. Direct links on other pages.
- **Morphing Nav:** Expanded state at top of page → collapses to compact pill on scroll.

---

## 5. Detailed Feature Specifications

### 5.1 Navigation Bar
| Feature | Specification |
|---------|---------------|
| Type | Floating pill, sticky top-center |
| Default State | Avatar + Name + Nav Links (Work, Services, Pricing, Contact) |
| Scrolled State | Avatar + Name + Hamburger/Dots menu |
| Transition | Smooth morph animation between states |
| Mobile | Compact pill with hamburger menu → slide-out or dropdown |
| Dark Mode | Adapts background and text colors |

### 5.2 Hero Section
| Feature | Specification |
|---------|---------------|
| Availability Badge | Green dot + "Available for [Month]'[Year]" — configurable via data file |
| Headline | Mixed-weight: "Code that" (gray) + "delivers results." (bold black) |
| Subtext | Value proposition paragraph with bold highlights |
| CTA Button | Pill-shaped, black bg, avatar embedded, links to WhatsApp/Telegram |
| 3D Card Stack | 3-4 project screenshots, CSS 3D transforms, scroll-linked parallax |
| Responsive | Cards stack vertically on mobile, text takes full width |

### 5.3 Client Logo Strip
| Feature | Specification |
|---------|---------------|
| Left Side | Avatar cluster + "★★★★★ X+ Happy clients" |
| Right Side | Auto-scrolling logo marquee (company/brand logos) |
| Animation | Continuous horizontal scroll, infinite loop |
| Content Source | Data file with logo images and company names |

### 5.4 Latest Projects Grid
| Feature | Specification |
|---------|---------------|
| Layout | 2×2 responsive grid |
| Card Content | Full-bleed screenshot, project name, category, "View Project" link |
| Hover Effect | Custom cursor — floating "View Project" pill follows mouse position |
| Click Action | Navigate to `/projects/[slug]` or external project URL |
| Below Grid | "View all my projects ↗" link → `/projects` page |
| Data Source | TypeScript constants file with project metadata |

### 5.5 Services Section
| Feature | Specification |
|---------|---------------|
| Layout | Two-column: heading + tech stack (left), services list (right) |
| Heading | Mixed-weight: "Services that" (gray) + "supercharge your business." (bold) |
| Services List | Icon + label for each service. Developer-relevant services |
| Tech Stack | Grid of tool icons with hover tooltips showing tool name |
| Services (Adapted) | Frontend Development, Backend & APIs, Full-Stack Web Apps, Database Design, Cloud & DevOps, UI/UX Implementation, Performance Optimization |
| Tech Stack Icons | React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase, MongoDB, Tailwind, Figma, Git, Redis, AWS |

### 5.6 About Me Section
| Feature | Specification |
|---------|---------------|
| Layout | Two-column: photo (left), bio text (right) |
| Photo | Large portrait with social link icons overlaid (GitHub, X, Instagram, Discord) |
| Bio | 2-3 paragraphs about background, philosophy, approach |
| Heading | "Building software that" (gray) + "solves real problems." (bold) — adapted for developer |
| Personal Touch | Optional signature graphic or stylistic element |

### 5.7 Pricing Section
| Feature | Specification |
|---------|---------------|
| Heading | "Simple pricing." (gray) + "Exceptional results." (bold) |
| Approach | Package descriptions WITHOUT specific prices — "Contact for pricing" |
| Packages | 2-3 tiers describing scope (e.g., Landing Page, Web Application, Enterprise/Complex) |
| CTA | Each package has a "Let's discuss" button → WhatsApp/Telegram |
| Visual Style | Dark card design matching reference aesthetic |

### 5.8 FAQ Section
| Feature | Specification |
|---------|---------------|
| Layout | Two-column: accordion (left), booking CTA card (right) |
| Accordion | 4-6 questions with expand/collapse animation, +/- toggles |
| CTA Card | Avatar + "Still not sure?" heading + description + "Let's Chat" button |
| Questions | Developer-relevant FAQs (timeline, process, tech stack, maintenance, etc.) |

### 5.9 Footer
| Feature | Specification |
|---------|---------------|
| Background | Solid black/near-black |
| Headline | "Let's" (white) + cycling word (gray, animated) + "incredible work together." (gray) |
| Cycling Words | "build", "create", "ship" — vertical slide animation |
| Contact Grid | Email, WhatsApp/Telegram link, Social icons (GitHub, X, Instagram, Discord) |
| Menu Links | Work, Services, Pricing, Contact |
| Legal | Terms of Service, Privacy Policy |
| Copyright | © [Year] [Your Name] |
| Brand Element | Massive name text at very bottom (decorative overflow) |

### 5.10 Sticky Contact Dock
| Feature | Specification |
|---------|---------------|
| Position | Fixed bottom-center, appears after scrolling past hero |
| Design | Pill-shaped, glassmorphism/blur effect |
| Content | "Speak to me" + "DM or email me" + WhatsApp icon + Email icon |
| Animation | Slide-up entrance, smooth exit when near footer |

### 5.11 Dark Mode
| Feature | Specification |
|---------|---------------|
| Toggle Location | In navigation bar (sun/moon icon) |
| Persistence | Saved to localStorage, respects system preference on first visit |
| Transition | Smooth color transition (~300ms) |
| Scope | All sections except footer (already dark) |

---

## 6. Content Requirements

### 6.1 Copy Needed
| Section | Content Required |
|---------|-----------------|
| Hero | Headline, subtext, CTA label |
| About | 2-3 bio paragraphs |
| Services | 6-8 service names with icons |
| Pricing | 2-3 package descriptions |
| FAQ | 4-6 Q&A pairs |
| Footer | Email address, social URLs |

### 6.2 Assets Needed
| Asset | Format | Notes |
|-------|--------|-------|
| Profile Photo | JPG/PNG, min 800×800 | Used in nav, hero, about, FAQ CTA |
| Project Screenshots | JPG/PNG, 16:10 or 16:9 | Min 4 projects, high-res for the 3D stack and grid |
| Client/Company Logos | SVG preferred | For the logo marquee strip |
| Tech Stack Icons | SVG | React, Next.js, TypeScript, etc. |
| Service Icons | SVG or custom | Icons for each service offered |
| Favicon | ICO + PNG | Multi-size |
| OG Image | PNG, 1200×630 | For social sharing |

---

## 7. Non-Functional Requirements

### 7.1 Performance
- Lighthouse Performance score ≥ 95
- All Core Web Vitals in "Good" range
- Total page weight < 1MB (excluding images)
- Images optimized with Next.js Image component (WebP/AVIF, lazy loading)
- Fonts self-hosted with `font-display: swap`

### 7.2 Accessibility
- WCAG 2.1 AA compliant
- Full keyboard navigation
- Screen reader compatible (proper ARIA labels, semantic HTML)
- Reduced motion support (`prefers-reduced-motion`)
- Sufficient color contrast ratios (4.5:1 minimum)
- Focus indicators on all interactive elements

### 7.3 SEO
- Server-side rendered (SSR/SSG via Next.js)
- Proper meta tags (title, description, canonical)
- Open Graph + Twitter Card meta tags
- Dynamic OG images per page
- JSON-LD structured data (Person, WebSite, WebPage)
- XML sitemap + robots.txt
- Semantic HTML5 structure

### 7.4 Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 15+)
- Chrome Android (latest)

### 7.5 Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl), 1536px (2xl)
- Touch-friendly interactions on mobile (no hover-dependent features)
- Custom cursor effects disabled on touch devices

---

## 8. Analytics & Tracking

| Tool | Purpose |
|------|---------|
| Vercel Analytics | Page views, visitor counts, referral sources |
| Vercel Speed Insights | Core Web Vitals monitoring |

---

## 9. Out of Scope (v1)

| Feature | Reason |
|---------|--------|
| Blog / Articles Section | Dropped from section selection. Can be added in v2. |
| Work History / Experience Timeline | Dropped from section selection. |
| Testimonials Grid | Dropped from section selection. Can be added when testimonials are collected. |
| Featured Testimonial Quote | Dropped along with testimonials. |
| CMS Integration | Using static data files instead. Can migrate to CMS in v2. |
| Contact Form | Using direct WhatsApp/Telegram links instead. |
| Google Analytics | Using Vercel Analytics only. |
| Custom Domain | Using Vercel subdomain initially. Domain can be added later. |
| Project Detail Pages | URL structure planned but content TBD. MVP will link to external project URLs. |
| Multi-language Support | English only for v1. |
| Authentication / Admin Panel | Not needed for static portfolio. |

---

## 10. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Complex animations hurt performance on low-end devices | High | Implement `prefers-reduced-motion`, test on throttled devices, use `will-change` strategically |
| 3D parallax effect is hard to get right | Medium | Start with 2D parallax fallback, iterate to 3D |
| Dark mode introduces visual inconsistencies | Medium | Design both modes in parallel, use CSS custom properties consistently |
| Mobile UX for custom cursor effects | Low | Disable custom cursor on touch devices, use tap indicators instead |
| SEO takes time to show results | Low | Follow best practices from day one, submit to Google Search Console immediately |

---

## 11. Timeline Estimate

| Phase | Duration | Deliverables |
|-------|----------|-------------|
| Planning & Documentation | Session 1 (current) | PRD, TRD, design system docs, project setup |
| Project Setup | Session 2 | Next.js project, Tailwind config, folder structure, base components |
| Core Layout & Sections | Sessions 3-5 | All 11 sections built with responsive layouts |
| Animations & Interactions | Sessions 6-7 | Parallax, morphing nav, custom cursor, accordions, footer animation |
| Dark Mode & Polish | Session 8 | Dark mode toggle, transitions, cross-browser testing |
| SEO & Performance | Session 9 | Meta tags, OG images, sitemap, Lighthouse optimization |
| Deployment & Launch | Session 10 | Vercel deployment, analytics setup, final review |

---

*This PRD is a living document. It will be updated as decisions evolve during development.*

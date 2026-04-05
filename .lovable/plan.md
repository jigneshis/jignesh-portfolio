

## Jignesh — Dark Minimal Portfolio

### Design System
- Background: `#0a0a0a`, Card surfaces: `#111111`/`#161616`
- Text: white/gray, Accent: `#f97316` (orange) used sparingly
- Clean sans-serif typography, bold headings, generous whitespace
- Smooth fade-in-on-scroll animations throughout

### Sections (top to bottom)

**1. Sticky Navbar**
- "Jig*nesh*" logo (regular + italic), nav links (Work · Tech Stack · Testimonials · Pricing · Contact), orange pill "Let's Talk" CTA
- Transparent → subtle dark bg on scroll

**2. Hero**
- "Available for new projects" badge (animated orange dot)
- Bold headline: "Your brand deserves better than a template."
- Subtext about building for real businesses
- Two CTAs: "See My Work" (orange pill) + "How I Work" (ghost)
- Social proof: avatar circles + "Trusted by 7+ businesses across Rajasthan"

**3. Tech Stack**
- Auto-scrolling infinite marquee of tech logos/icons in dark pills with hover glow
- React, Next.js, Tailwind, TypeScript, Framer Motion, Supabase, Vercel, JS, HTML/CSS, Figma, Node.js, shadcn/ui

**4. Client Work**
- Minimal list layout — project names with hover-reveal preview/details
- Placeholder projects: FitZone Gym, Chai & Co Café, Studio Luxe Salon, Ajmer Heritage Stays, DevCraft Agency
- Each with tags (e.g., "Landing Page", "Full Website") and a brief description on hover

**5. Testimonials**
- Continuously scrolling horizontal marquee of testimonial cards
- Placeholder quotes from fictional local business owners with names, roles, and avatar placeholders

**6. Pricing**
- Clean section with brief descriptions of services offered (Landing Pages, Full Websites, Redesigns)
- No fixed prices — prominent "Get a Quote" orange CTA button
- Simple "How it works" 3-step flow: Chat → Design → Launch

**7. Contact / Footer**
- "Let's build something great" heading with email link + social icons
- Simple footer with copyright and location (Ajmer, India)

### Technical Approach
- All in React + Tailwind, no external animation libraries — CSS animations + Intersection Observer for scroll reveals
- Custom marquee component with CSS animation for infinite scroll
- Mobile-first responsive design
- Smooth scroll navigation between sections


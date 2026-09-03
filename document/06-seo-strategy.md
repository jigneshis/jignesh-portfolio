# SEO & Performance Strategy

> **Project:** Portfolio Website v2
> **Date:** September 1, 2026
> **Version:** 1.0

---

## 1. SEO Goals

| Goal | Target Query | Expected Timeline |
|------|-------------|-------------------|
| Brand Search | "[Your Name]" | 2-4 weeks after indexing |
| Professional Search | "[Your Name] developer" | 2-4 weeks |
| Service Search | "freelance full-stack developer [city]" | 3-6 months |
| Service Search | "hire next.js developer" | 6-12 months |
| Portfolio Search | "[Your Name] portfolio" | 2-4 weeks |

---

## 2. On-Page SEO Checklist

### 2.1 Meta Tags (Per Page)

**Homepage (`/`)**
```html
<title>[Your Name] — Full-Stack Developer | React, Next.js, Node.js</title>
<meta name="description" content="Full-stack web developer specializing in React, Next.js, and Node.js. Building high-performance web applications that deliver results. Available for freelance projects." />
<link rel="canonical" href="https://your-site.vercel.app" />
```

**Projects Page (`/projects`)**
```html
<title>Projects | [Your Name] — Full-Stack Developer</title>
<meta name="description" content="Explore my portfolio of web applications, SaaS platforms, and custom development projects built with React, Next.js, TypeScript, and Node.js." />
<link rel="canonical" href="https://your-site.vercel.app/projects" />
```

### 2.2 Open Graph Tags
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="[Your Name] — Full-Stack Developer" />
<meta property="og:description" content="Building high-performance web applications..." />
<meta property="og:image" content="https://your-site.vercel.app/images/og/default.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://your-site.vercel.app" />
<meta property="og:site_name" content="[Your Name]" />
```

### 2.3 Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@yourhandle" />
<meta name="twitter:title" content="[Your Name] — Full-Stack Developer" />
<meta name="twitter:description" content="Building high-performance web applications..." />
<meta name="twitter:image" content="https://your-site.vercel.app/images/og/default.png" />
```

### 2.4 Structured Data (JSON-LD)

**Person Schema (Homepage)**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Your Name]",
  "alternateName": "[Your Handle]",
  "jobTitle": "Full-Stack Web Developer",
  "description": "Full-stack web developer specializing in React, Next.js, and Node.js",
  "url": "https://your-site.vercel.app",
  "image": "https://your-site.vercel.app/images/profile/photo.jpg",
  "sameAs": [
    "https://github.com/yourhandle",
    "https://twitter.com/yourhandle",
    "https://instagram.com/yourhandle",
    "https://discord.gg/yourserver"
  ],
  "knowsAbout": [
    "React", "Next.js", "TypeScript", "Node.js", "Express.js",
    "PostgreSQL", "MongoDB", "Redis", "Supabase",
    "Tailwind CSS", "AWS", "Figma", "Git"
  ]
}
```

**WebSite Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "[Your Name] Portfolio",
  "url": "https://your-site.vercel.app"
}
```

**FAQPage Schema (Homepage — for FAQ section)**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your typical project timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary based on complexity..."
      }
    }
  ]
}
```

---

## 3. Technical SEO

### 3.1 Sitemap (`sitemap.xml`)
Generated automatically by `next-sitemap`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-site.vercel.app</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-site.vercel.app/projects</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3.2 Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://your-site.vercel.app/sitemap.xml
```

### 3.3 Semantic HTML Structure
```html
<body>
  <header>
    <nav aria-label="Main navigation">...</nav>
  </header>
  <main>
    <section id="hero" aria-label="Introduction">...</section>
    <section id="projects" aria-label="Latest projects">...</section>
    <section id="services" aria-label="Services">...</section>
    <section id="about" aria-label="About me">...</section>
    <section id="pricing" aria-label="Pricing">...</section>
    <section id="faq" aria-label="Frequently asked questions">...</section>
  </main>
  <footer aria-label="Footer">...</footer>
</body>
```

### 3.4 Heading Hierarchy
```
<h1> — One per page (Hero headline on homepage, page title on /projects)
  <h2> — Section headings ("Latest Projects", "Services that...", etc.)
    <h3> — Card titles (project names, service names, FAQ questions)
```

---

## 4. Performance Optimization

### 4.1 Image Strategy

| Image Type | Format | Loading | Sizing |
|------------|--------|---------|--------|
| Hero 3D cards | WebP/AVIF | `priority` (eager) | `sizes="(max-width: 768px) 300px, 500px"` |
| Profile photo (nav) | WebP | `priority` (eager) | 40×40px fixed |
| Profile photo (about) | WebP/AVIF | `lazy` | `sizes="(max-width: 768px) 100vw, 400px"` |
| Project thumbnails | WebP/AVIF | `lazy` | `sizes="(max-width: 768px) 100vw, 50vw"` |
| Client logos | SVG (inline) | — | Fixed width ~120px |
| Tech stack icons | SVG (inline) | — | Fixed 48px |
| OG image | PNG | — | 1200×630px |

**Next.js Image Component:**
```tsx
<Image
  src="/images/projects/project-1.jpg"
  alt="Project screenshot showing the dashboard interface"
  width={800}
  height={500}
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
  blurDataURL={blurData} // Generated at build time
  className="rounded-2xl"
/>
```

### 4.2 Font Optimization
- Self-hosted via `next/font` (no external requests)
- Variable font (single file for all weights)
- Subset: `latin` only
- `font-display: swap` — text visible immediately with fallback
- Preloaded automatically by Next.js

### 4.3 JavaScript Bundle
| Category | Target Size (gzipped) |
|----------|----------------------|
| Next.js runtime | ~85KB |
| React | ~45KB |
| Framer Motion | ~30KB |
| Lenis | ~5KB |
| App code | ~20KB |
| **Total** | **~185KB** |

**Optimization Strategies:**
- Tree-shake Framer Motion imports (`import { motion } from "framer-motion"`)
- Dynamic import (`next/dynamic`) for below-fold sections
- No unused dependencies
- Analyze with `@next/bundle-analyzer`

### 4.4 CSS Optimization
- Tailwind CSS purges unused styles at build time
- Minimal custom CSS (only for animations and scrollbar)
- No CSS-in-JS runtime overhead

### 4.5 Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Priority-load hero images, preload fonts, SSG |
| **INP** (Interaction to Next Paint) | < 200ms | Minimize JavaScript on main thread, use CSS transitions |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Set explicit dimensions on images, reserve space for dynamic content |

### 4.6 Caching Strategy (Vercel)
| Asset | Cache | Max-Age |
|-------|-------|---------|
| HTML pages | ISR/Static | Vercel defaults (CDN edge) |
| Images | Immutable | 1 year (`/_next/image`) |
| JS/CSS bundles | Immutable | 1 year (content-hashed filenames) |
| Fonts | Immutable | 1 year |

---

## 5. Post-Launch SEO Actions

### 5.1 Immediate (Week 1)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify ownership in Google Search Console
- [ ] Request indexing for homepage and projects page
- [ ] Test OG tags with Facebook Debugger and Twitter Card Validator
- [ ] Test structured data with Google Rich Results Test

### 5.2 Ongoing
- [ ] Monitor Core Web Vitals in Vercel dashboard
- [ ] Monitor search impressions in Google Search Console
- [ ] Add new projects and redeploy to keep content fresh
- [ ] Build backlinks (GitHub profile, dev.to articles, social bios)

---

## 6. Analytics Setup

### 6.1 Vercel Analytics
```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### 6.2 Custom Events (via Vercel Analytics)
Track key conversion actions:
```typescript
import { track } from '@vercel/analytics';

// Track WhatsApp clicks
track('whatsapp_click', { source: 'hero_cta' });
track('whatsapp_click', { source: 'contact_dock' });
track('whatsapp_click', { source: 'pricing_cta' });

// Track project views
track('project_view', { project: 'project-slug' });

// Track section visibility (scroll depth)
track('section_reached', { section: 'pricing' });
```

---

*SEO is a marathon, not a sprint. This strategy front-loads the technical foundation so that content and backlinks can compound over time.*

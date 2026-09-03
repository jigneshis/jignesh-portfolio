# Animation & Interaction Specification

> **Project:** Portfolio Website v2
> **Date:** September 1, 2026
> **Version:** 1.0

---

## 1. Overview

This document is the blueprint for every animation and interaction on the site. Each spec includes the trigger, behavior, timing, easing, and implementation approach using **Framer Motion** and **CSS**.

---

## 2. Page Load Animations

### 2.1 Hero Entrance Sequence

**Trigger:** Page load (first visit)
**Duration:** ~1200ms total (staggered)

| Step | Element | Animation | Delay | Duration |
|------|---------|-----------|-------|----------|
| 1 | Availability Badge | Fade in + slide up 20px | 0ms | 400ms |
| 2 | Headline Line 1 | Fade in + slide up 30px | 100ms | 500ms |
| 3 | Headline Line 2 | Fade in + slide up 30px | 200ms | 500ms |
| 4 | Subtext | Fade in + slide up 20px | 300ms | 400ms |
| 5 | CTA Button | Fade in + scale from 0.95 | 400ms | 400ms |
| 6 | 3D Card Stack | Fade in + slide from right 50px + rotate into position | 300ms | 600ms |
| 7 | Logo Strip | Fade in | 600ms | 400ms |
| 8 | Navigation | Slide down from -20px + fade in | 0ms | 400ms |

**Implementation:**
```tsx
// Framer Motion variants with staggerChildren
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
};
```

---

## 3. Scroll-Linked Animations

### 3.1 Hero 3D Parallax Card Stack

**Trigger:** Scroll position from hero top to hero bottom
**Behavior:** 3-4 project screenshot cards layered in 3D space spread apart vertically as user scrolls down. Each card moves at a different speed (parallax multiplier).

| Card | Initial State | Scroll Transform | Parallax Speed |
|------|--------------|-----------------|----------------|
| Card 1 (front) | `rotateY(-10deg) rotateX(5deg) translateZ(40px)` | `translateY(-30%)` | 1.0x |
| Card 2 | `rotateY(-15deg) rotateX(8deg) translateZ(20px)` | `translateY(-50%)` | 1.3x |
| Card 3 (back) | `rotateY(-20deg) rotateX(10deg) translateZ(0px)` | `translateY(-70%)` | 1.6x |
| Card 4 (far back) | `rotateY(-25deg) rotateX(12deg) translateZ(-20px)` | `translateY(-90%)` | 2.0x |

**CSS Base:**
```css
.card-stack {
  perspective: 1000px;
  transform-style: preserve-3d;
}
```

**Implementation:**
```tsx
const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"]
});

const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
const y3 = useTransform(scrollYProgress, [0, 1], [0, -350]);
```

### 3.2 Navigation Morph

**Trigger:** Scroll past hero section (~500px or viewport height)
**Behavior:** Navigation pill smoothly transitions between two states

| State | Content | Width | Transition |
|-------|---------|-------|------------|
| Expanded (top) | Avatar + Name + Work + Services + Pricing + Contact | ~600px | — |
| Collapsed (scrolled) | Avatar + Name + "••" menu | ~250px | 400ms spring |

**Implementation:**
```tsx
const isScrolled = useScrollProgress() > 0.3; // Past hero

<motion.nav layout transition={{ type: "spring", stiffness: 300, damping: 30 }}>
  <Avatar />
  <Name />
  <AnimatePresence>
    {isScrolled ? <MenuDots /> : <NavLinks />}
  </AnimatePresence>
</motion.nav>
```

### 3.3 Section Reveal (Scroll-Into-View)

**Trigger:** Element enters viewport (IntersectionObserver, threshold: 0.2)
**Behavior:** Fade in + slide up

| Property | From | To | Duration | Easing |
|----------|------|-----|----------|--------|
| opacity | 0 | 1 | 600ms | ease-out |
| translateY | 40px | 0 | 600ms | ease-out |

**Stagger:** When multiple children are present (e.g., project cards), stagger by 100ms each.

**Implementation:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

---

## 4. Hover Interactions

### 4.1 Custom Cursor on Project Cards

**Trigger:** Mouse enters a project card
**Behavior:** Native cursor hides. A floating black pill with "View Project" text appears and follows the mouse with spring physics.

| Property | Value |
|----------|-------|
| Cursor Element | 80×36px pill, `bg-black text-white rounded-full` |
| Text | "View Project" + arrow icon |
| Position | Follows cursor with ~50ms spring lag |
| Entrance | Scale from 0 to 1 (200ms) |
| Exit | Scale from 1 to 0 (150ms) |
| Native Cursor | `cursor: none` on card hover |

**Implementation:**
```tsx
const cursorX = useMotionValue(0);
const cursorY = useMotionValue(0);

// Spring-smoothed position
const smoothX = useSpring(cursorX, { stiffness: 300, damping: 30 });
const smoothY = useSpring(cursorY, { stiffness: 300, damping: 30 });

// Track mouse on card
const handleMouseMove = (e: MouseEvent) => {
  cursorX.set(e.clientX);
  cursorY.set(e.clientY);
};

<motion.div
  className="pointer-events-none fixed z-50"
  style={{ x: smoothX, y: smoothY }}
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0, opacity: 0 }}
>
  <div className="bg-black text-white rounded-full px-4 py-2 text-sm">
    View Project ↗
  </div>
</motion.div>
```

**Mobile:** Disabled entirely. Touch devices use a visible "View Project" button overlay instead.

### 4.2 Tech Stack Tooltip

**Trigger:** Mouse hovers over a tech stack icon
**Behavior:** Dark pill tooltip appears above the icon

| Property | Value |
|----------|-------|
| Tooltip | Dark bg (`bg-foreground`), white text, `text-xs` |
| Shape | Rounded pill (`rounded-full`) |
| Position | Centered above icon, offset by 8px |
| Entrance | Fade in + slide up 4px (150ms) |
| Exit | Fade out (100ms) |
| Delay | 200ms before showing (prevent flicker on fast mouse movement) |

### 4.3 Button Hover States

| Button Type | Hover Effect |
|-------------|-------------|
| Primary (black) | `opacity: 0.9` or `scale: 1.02` |
| Text Link | Underline appears with 200ms transition |
| Card | Subtle `shadow-lg` or `translateY(-2px)` lift |

---

## 5. Click / Toggle Interactions

### 5.1 FAQ Accordion

**Trigger:** Click on question row
**Behavior:** Answer content expands/collapses with height animation

| Property | Collapsed | Expanded | Transition |
|----------|-----------|----------|------------|
| Answer Height | 0px | Auto (measured) | 300ms ease |
| Answer Opacity | 0 | 1 | 200ms (delayed 100ms) |
| Icon | "+" | "−" | 200ms rotate |
| Answer Overflow | hidden | visible | — |

**Implementation:**
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ height: { duration: 0.3 }, opacity: { duration: 0.2, delay: 0.1 } }}
    >
      {answer}
    </motion.div>
  )}
</AnimatePresence>
```

### 5.2 Dark Mode Toggle

**Trigger:** Click on sun/moon icon in nav
**Behavior:** Smooth color transition across entire page

| Property | Transition |
|----------|------------|
| All color properties | 300ms ease via `transition-colors` on `<body>` |
| Toggle icon | Rotate 180° + crossfade between sun/moon |

---

## 6. Continuous Animations

### 6.1 Footer Word Cycler

**Trigger:** Continuous, auto-plays every 2.5 seconds
**Behavior:** A word in the footer heading cycles through variants with a vertical slide animation

| Words | "build" → "create" → "ship" → "build" → ... |
|-------|----------------------------------------------|
| Direction | Slide up (old word exits up, new word enters from below) |
| Duration | 400ms per transition |
| Easing | `ease-in-out` |
| Pause | 2.5s between transitions |
| Container | Fixed height equal to one word's line height, `overflow: hidden` |

**Implementation:**
```tsx
const words = ["build", "create", "ship"];
const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex(prev => (prev + 1) % words.length);
  }, 2500);
  return () => clearInterval(interval);
}, []);

<AnimatePresence mode="wait">
  <motion.span
    key={words[index]}
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -30, opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {words[index]}
  </motion.span>
</AnimatePresence>
```

### 6.2 Logo Marquee (Infinite Scroll)

**Trigger:** Continuous, auto-scrolls
**Behavior:** Logos scroll horizontally in a seamless infinite loop

| Property | Value |
|----------|-------|
| Direction | Left to right |
| Speed | ~30px/second (smooth, not distracting) |
| Loop | Duplicate logo set, reset position at halfway |
| Pause on Hover | Optional — pause when user hovers |

**Implementation:** Pure CSS for best performance:
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.marquee-track {
  display: flex;
  animation: marquee 30s linear infinite;
  width: max-content; /* 2x the logos */
}
```

### 6.3 Availability Badge Pulse

**Trigger:** Continuous
**Behavior:** Subtle pulse on the green dot

```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.availability-dot {
  animation: pulse 2s ease-in-out infinite;
}
```

---

## 7. Contact Dock Behavior

### 7.1 Entrance
**Trigger:** Scroll past hero section (scrollY > viewport height)
**Animation:** Slide up from below viewport + fade in

```tsx
const showDock = scrollY > window.innerHeight;

<motion.div
  initial={{ y: 100, opacity: 0 }}
  animate={showDock ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
  transition={{ type: "spring", stiffness: 200, damping: 25 }}
>
```

### 7.2 Exit
**Trigger:** Scroll into footer section
**Animation:** Slide down below viewport + fade out

---

## 8. Reduced Motion Support

**Media Query:** `prefers-reduced-motion: reduce`

When active:
- All `transition` durations → 0ms
- All `animation` → none
- Scroll-linked parallax → disabled (static positioning)
- Custom cursor → disabled (use native cursor)
- Word cycler → show all words or just the first
- Section reveals → instant (no stagger)
- Logo marquee → static (no scroll)

**Implementation:**
```tsx
const prefersReducedMotion = useReducedMotion(); // Framer Motion hook

// Use in animations:
animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
```

---

## 9. Smooth Scroll (Lenis)

### 9.1 Configuration
```typescript
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
});
```

### 9.2 Integration with Framer Motion
```typescript
// Sync Lenis scroll with Framer Motion's useScroll
useEffect(() => {
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, []);
```

### 9.3 Navigation Smooth Scroll
```typescript
// Scroll to section on nav link click
lenis.scrollTo('#projects', {
  offset: -80, // Account for sticky nav height
  duration: 1.5,
});
```

---

## 10. Performance Budget for Animations

| Metric | Target |
|--------|--------|
| Frame Rate | 60fps (16.7ms per frame) |
| JavaScript Execution | < 4ms per frame for animation logic |
| Paint Area | Minimize — use `transform` and `opacity` only |
| Composite Layers | Max 10 active layers simultaneously |
| Framer Motion Bundle | ~30KB gzipped (acceptable) |
| Lenis Bundle | ~5KB gzipped |
| Total Animation JS | < 40KB gzipped |

---

*Every animation in this spec is designed to be achievable with Framer Motion + CSS. No additional animation libraries should be needed.*

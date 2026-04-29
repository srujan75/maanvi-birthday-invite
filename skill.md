# Project Skills & Technical Documentation

## Skills Demonstrated

### Responsive Web Design
- Mobile-first CSS architecture (smallest → largest breakpoints)
- Masonry-style layout using CSS `columns` for optimal image fit
- CSS Flexbox for navbar, hero CTA, countdown, form buttons
- `clamp()` for fluid typography that scales between viewport limits
- Adaptive masonry layout for uniform visual balance
- `overflow-x: hidden` to prevent horizontal scroll on all devices
- Touch-friendly minimum tap targets (≥ 44px)
- 5 breakpoints: 380px / 600px / 768px / 1024px / 1200px

### HTML5
- Semantic elements: `<nav>`, `<section>`, `<footer>`
- ARIA attributes: `role`, `aria-label`, `aria-modal`, `aria-expanded`, `aria-live`, `aria-hidden`
- Keyboard accessibility: `tabindex="0"`, `onkeydown` for gallery items
- Lazy loading images with `loading="lazy"`
- `rel="noopener noreferrer"` on external links

### CSS3
- CSS Custom Properties (variables) for design tokens
- Glassmorphism: `backdrop-filter: blur()` + semi-transparent backgrounds
- `@keyframes` animations: `cardPop`, `floatBubble`, `softBounce`, `spin`
- Masonry columns & Flexbox layouts
- `transition` on transforms, opacity, box-shadow, border-color
- `clamp()` for responsive font sizes
- CSS transitions and animations for premium feel
- Media queries at 5 breakpoints

### JavaScript (Vanilla ES6+)
- DOM manipulation: `classList`, `style`, `setAttribute`
- Intersection Observer API for scroll-reveal animations
- Canvas API for confetti particle animation
- `requestAnimationFrame` for smooth 60fps animation loop
- `setInterval` for live countdown timer
- Event delegation and keyboard event handling
- `window.scrollTo()` for smooth scroll-to-top
- Dynamic lightbox with keyboard arrow navigation
- Page load event for loader dismissal

### UI/UX Design
- Glassmorphism card UI across hero and navbar
- Curated pastel palette: pink, lavender, gold, cream
- Premium Google Fonts: Great Vibes, Nunito, Playfair Display
- Micro-animations: hover lifts, scale transforms, bounce
- Page loader for perceived performance
- Confetti particle system for celebration feel
- Scroll-to-top button with opacity transition
- Active nav link highlighting on scroll

### Performance Optimization
- Lazy loading for all gallery images
- Reduced confetti particle count (100) for mobile
- `IntersectionObserver` unobserves after first reveal (no repeated checks)
- Single CSS file, single JS file — no frameworks or libraries
- Google Fonts loaded via single `@import` with `display=swap`

### Accessibility
- Semantic HTML throughout
- ARIA roles & labels on all interactive elements
- Keyboard navigation: Tab + Enter for gallery, Escape/Arrow keys for lightbox
- `aria-live="polite"` on countdown timer
- Sufficient color contrast (dark text on light backgrounds)
- `alt` text on all images
- `aria-hidden` on decorative emoji and icons

### Version Control & Deployment
- Git workflow: commit → push to `main`
- GitHub Pages deployment from repository root
- `.gitignore` configured for OS and editor artifacts

## Tech Stack Summary
| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox + Masonry + Variables) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts API |
| Maps | Google Maps Embed API |
| Hosting | GitHub Pages |

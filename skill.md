# Project Skills & Technical Documentation

## Skills Required
- **Frontend Development**: HTML5, CSS3, JavaScript (ES6+).
- **UI/UX Design**: Understanding of layout principles, color theory, typography hierarchy, and micro-interactions.
- **Responsive Web Design**: Proficiency in Flexbox, CSS Grid, media queries, and mobile-first methodologies.
- **Version Control**: Git workflow, committing, and GitHub branch management.

## Frontend Technologies Used
- **HTML5**: Semantic document structure.
- **CSS3**: Custom styling, CSS Variables, Animations (`@keyframes`), Transitions, Glassmorphism, CSS Grid, Flexbox.
- **Vanilla JavaScript**: DOM manipulation, event listeners, canvas rendering (confetti), Intersection Observer API.
- **External APIs**: Google Fonts (`Great Vibes`, `Nunito`, `Playfair Display`), Google Maps Embed API, WhatsApp click-to-chat API.

## Responsive Design Practices
- Employed `clamp()` for fluid typography that scales automatically between viewport limits.
- Implemented a responsive hamburger navigation for mobile screens (`max-width: 768px`).
- Used CSS Grid with `auto-fill` and `minmax()` to create a self-adjusting photo gallery without media queries.
- Ensured form inputs and buttons have minimum touch target sizes (`min-height: 44px` padding equivalents) for mobile accessibility.

## UI/UX Principles
- **Visual Hierarchy**: Utilized font sizes, weights, and colors to guide the user's eye from the Hero section to the call-to-action buttons.
- **Aesthetics**: Maintained a consistent pastel color palette (Pink, Lavender, Gold, Cream) appropriate for a 1st birthday theme.
- **Feedback**: Added hover effects on all interactive elements (buttons, gallery images, navigation links) and soft pop-in animations on scroll to keep the interface feeling alive.
- **Whitespace**: Generous padding and margins (`90px` section spacing) to prevent clutter and ensure elegance.

## Image Optimization Techniques
- **Lazy Loading**: Applied `loading="lazy"` attribute to all gallery images to defer loading until they enter the viewport, improving initial page load speed.
- **Aspect Ratio**: Enforced `aspect-ratio: 1` on gallery items to prevent layout shifts during image loading.
- **Sizing**: Set images to `object-fit: cover` to ensure consistent grid presentation regardless of original image dimensions.

## Accessibility Practices
- Included `aria-label` on non-text interactive elements (e.g., Hamburger button).
- Ensured sufficient color contrast between text and background elements.
- Used semantic HTML (`<nav>`, `<section>`, `<form>`) to aid screen readers.

## Performance Optimization
- Extracted inline CSS and JavaScript into separate files (`styles.css`, `script.js`) to allow browser caching.
- Used `IntersectionObserver` for scroll animations instead of binding expensive `scroll` event listeners.
- Rendered confetti on a hardware-accelerated `<canvas>` element using `requestAnimationFrame`.

## GitHub Deployment Workflow
1. Initialize repository: `git init`
2. Stage all files: `git add .`
3. Commit features: `git commit -m "feat: complete UI/UX overhaul"`
4. Push to remote main branch: `git push origin main`
5. Enable GitHub Pages from repository settings targeting the `main` branch root.

## SEO Basics
- Added descriptive `<title>` and `<meta name="description">` tags.
- Kept semantic HTML structure with a single `<h1>` on the page and subsequent `<h2>`, `<h3>` tags indicating hierarchy.

## Prompt Engineering Notes (Claude)
- Designed prompts to be explicit regarding file output constraints, splitting logic, styling, and markup to prevent token limitations.
- Enforced strict adherence to provided asset naming schemas (e.g., Image ordering).

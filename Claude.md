# Claude Architecture Document: Maanvi's 1st Birthday Invite

## Project Overview
A fully responsive, elegant birthday invitation webpage designed to celebrate Maanvi's 1st Birthday. The application serves as a digital invite featuring event details, a countdown, a photo gallery, an interactive venue map, and an RSVP system.

## Folder Structure
```
Maanvi_Birthday_Invite/
├── index.html        # Main HTML structure
├── styles.css        # External stylesheet handling UI/UX & Responsive design
├── script.js         # JavaScript logic (navigation, countdown, confetti, lightbox)
├── Claude.md         # Architecture & instruction guide (this file)
├── skill.md          # Skills & technical documentation
└── Images/           # Image assets directory
    ├── 0.jpeg
    ├── 1.jpeg
    ├── 2.jpeg
    ...
    └── 10.jpeg
```

## Image Ordering Rules
- **CRITICAL**: Gallery images must be strictly ordered from `0.jpeg` to `10.jpeg`.
- Do not shuffle or randomize image sequence.
- Added a placeholder card at the end for "More Memories Coming Soon".

## Design Guidelines
- **Theme**: Elegant, pastel birthday theme.
- **Colors**:
  - Soft Pink (`#e88aab` / `#d4688e`)
  - Lavender (`#c3aed6` / `#e8dff5`)
  - Gold Accents (`#d4a843`)
  - Cream Background (`#fdf6f0`)
- **Typography**: `Great Vibes` for headings, `Nunito` for body copy, `Playfair Display` for accents.
- **UI Elements**: Soft shadows, rounded corners (`20px`), glassmorphism cards.

## Responsive Requirements
- Mobile-first approach implemented via CSS media queries.
- Hamburger menu toggles top navigation on screens `< 768px`.
- Gallery implements CSS Grid (`minmax(250px, 1fr)`) to fluidly adapt to container width.
- Forms, maps, and hero text scale dynamically using `clamp()` and percentages.

## GitHub Workflow Instructions
- Commits should follow conventional commits format (e.g., `feat:`, `style:`, `docs:`).
- Code is kept in the `main` branch.
- Ready for GitHub Pages deployment.

## Coding Standards & Optimization Rules
- **HTML**: Semantic tags used (`<nav>`, `<section>`, `<footer>`).
- **CSS**: Code split from inline HTML to `styles.css`. Uses CSS Variables (`:root`) for maintainability.
- **JavaScript**: Extracted to `script.js`. Logic is modularized.
- **Performance**: 
  - Images implement `loading="lazy"`.
  - Used `IntersectionObserver` instead of scroll listeners for reveal animations.

## Future Enhancement Notes
- Add backend service (e.g., Google Sheets integration) to replace static RSVP form submission.
- Enable automatic dynamic image loading in the gallery instead of hardcoding items.

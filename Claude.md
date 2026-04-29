# Maanvi's 1st Birthday — Project Overview

## Project Summary
A premium, fully responsive birthday invitation website for Maanvi's 1st Birthday celebration on **June 2nd, 2026** at **Rayudu Inn, Anantapur**.  
Deployed live via GitHub Pages: **https://srujan75.github.io/maanvi-birthday-invite/**

## File Structure
```
Maanvi_Birthday_Invite/
├── index.html      # Semantic HTML5 structure
├── styles.css      # Mobile-first responsive CSS
├── script.js       # Vanilla JS — all interactivity
├── Images/         # 11 photos (0.jpeg – 10.jpeg, 5.jpg)
├── Claude.md       # Project overview (this file)
└── skill.md        # Skills & technical documentation
```

## Sections
| Section | Description |
|---|---|
| **Navbar** | Sticky glassmorphism bar; hamburger on mobile |
| **Hero** | Full-height banner with animated glassmorphism card |
| **Countdown** | Live timer to June 2nd 2026, 6:00 PM IST |
| **Gallery** | 11 images in responsive CSS Grid + lightbox viewer |
| **Venue** | Rayudu Inn details + embedded Google Maps |
| **RSVP** | Form with WhatsApp integration |
| **Footer** | Birthday message |

## Responsive Breakpoints
| Breakpoint | Layout |
|---|---|
| `≥ 1200px` | 4-col gallery, wide hero padding |
| `≤ 1024px` | 3-col gallery |
| `≤ 768px`  | Hamburger nav, 2-col gallery, stacked venue |
| `≤ 600px`  | Compact spacing, full-width sections |
| `≤ 380px`  | 1-col gallery, smallest text sizes |

## Features Added (Latest Update)
- ✅ Page loader animation
- ✅ Scroll-to-top button
- ✅ Mobile-first CSS Grid gallery (1→2→3→4 columns)
- ✅ `aspect-ratio: 1/1` for uniform gallery cards
- ✅ Full semantic HTML & ARIA attributes
- ✅ Keyboard navigation for gallery & lightbox
- ✅ `rel="noopener noreferrer"` on external links
- ✅ Hover lift effects on venue card & countdown boxes
- ✅ Reduced confetti count (100) for better mobile performance

## Design Tokens (CSS Variables)
```css
--pink: #e88aab          /* Primary accent */
--pink-deep: #d4688e     /* Headings, logo */
--lavender: #c3aed6      /* Secondary accent */
--gold: #d4a843          /* CTA buttons */
--cream: #fdf6f0         /* Page background */
--text-dark: #3d2c3e     /* Body text */
--text-muted: #7a6b7d    /* Subtitles */
```

## Deployment
- **Host**: GitHub Pages
- **Repo**: https://github.com/srujan75/maanvi-birthday-invite
- **Branch**: `main` (root deployment)
- **Live URL**: https://srujan75.github.io/maanvi-birthday-invite/

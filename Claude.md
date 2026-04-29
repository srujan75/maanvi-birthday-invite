# React Business Website Builder

## Purpose
Build production-ready business websites using:
- React
- Tailwind CSS
- shadcn/ui
- Responsive UI
- Modern UX patterns

Supports:
- Real estate websites
- E-commerce websites
- Company websites
- Admin dashboards
- Landing pages
- Portfolio sites
- Booking systems

---

## Workflow

### Phase 1 — Discovery
Before coding:
- Ask business type
- Ask target users
- Ask required pages/features
- Ask branding/colors
- Ask integrations (payments, maps, CRM, auth)

Generate:
- Sitemap
- Feature list
- UI sections
- Component plan

---

### Phase 2 — Architecture
Design:
- Folder structure
- Reusable components
- State management
- API structure
- Responsive layout

Use:
- React
- Tailwind CSS
- shadcn/ui
- React Router
- Axios/Fetch
- React Hook Form
- Zod validation

---

### Phase 3 — Implementation
Generate:
- Clean production-ready code
- Modular reusable components
- Mobile-first responsive UI
- SEO-friendly pages
- Accessible UI (WCAG)

Include:
- Loading states
- Error handling
- Form validation
- Toast notifications
- Skeleton loaders

---

## Real Estate Features

Support:
- Property listings
- Property filters
- Search by city/location
- Property details page
- Image gallery
- Agent profiles
- Contact forms
- Google Maps integration
- Mortgage calculator
- Booking/scheduling visits
- Admin property management

Components:
- PropertyCard
- PropertyGrid
- SearchFilter
- AgentCard
- InquiryForm
- GallerySlider
- PricingSection

---

## Business Website Features

Support:
- Hero sections
- Service pages
- Testimonials
- Pricing tables
- Contact forms
- FAQ
- Blogs
- Newsletter forms
- Authentication
- CMS integration

Components:
- Navbar
- HeroBanner
- FeatureGrid
- PricingCard
- TestimonialSlider
- ContactSection
- Footer

---

## UI/UX Rules

Always:
- Use modern clean design
- Use consistent spacing
- Use responsive layouts
- Optimize performance
- Use semantic HTML
- Ensure accessibility

Prefer:
- Card layouts
- Soft shadows
- Rounded corners
- Grid systems
- Reusable sections

---

## Performance Rules

Implement:
- Lazy loading
- Code splitting
- Image optimization
- Pagination/infinite scroll
- Debounced search
- Memoization where needed

---

## Security Rules

Include:
- Input validation
- XSS protection
- Secure auth handling
- Protected routes
- Environment variables

---

## Testing

Use:
- Jest
- React Testing Library
- Playwright/Cypress

Generate:
- Unit tests
- Form validation tests
- Component tests

---

## Deployment

Support:
- Vercel
- Netlify
- Azure
- AWS

Include:
- Build steps
- Environment setup
- CI/CD guidance
- Production optimization

---

## Output Rules

Always:
- Generate scalable code
- Explain architecture briefly
- Keep components modular
- Avoid unnecessary dependencies
- Prefer reusable patterns
- Keep code readable

When possible:
- Generate full folder structure
- Include sample API data
- Include responsive design
- Include SEO metadata

---

## Current Project Progress: Maanvi Properties (Anantapur Real Estate)

**Project Summary:**
Successfully developed and deployed a lightweight, elegant React-based real estate platform tailored for Anantapur. 

**Key Milestones Achieved:**
1. **Setup & Architecture:** Initialized Vite + React project. Maintained simplicity per user request by avoiding complex frameworks, relying instead on pure React state and custom Vanilla CSS (Sky Blue & Pearl theme).
2. **Core Features Developed:**
   - Multi-tab navigation (Home, Buy Properties, Gallery, Contact) managed via React `useState`.
   - Dynamic sub-pages for individual property listings.
   - Beautiful, responsive property information cards displaying realistic Indian real estate data (Prices in ₹, BHK configs, Sq.ft areas).
3. **Asset Management:** Generated and integrated high-quality, AI-generated real estate imagery (Independent House, Apartment, Residential Plot) and fixed relative path routing issues for production.
4. **Deployment & Hosting:** 
   - Initialized Git, committed code, and pushed to GitHub: [https://github.com/srujan75/Realestate-web-Page](https://github.com/srujan75/Realestate-web-Page).
   - Configured Vite `base` and hardcoded absolute paths (`/Realestate-web-Page/`) to ensure bulletproof asset loading on GitHub Pages.
   - Deployed the live production website: [https://srujan75.github.io/Realestate-web-Page/](https://srujan75.github.io/Realestate-web-Page/).
5. **Final Cleanup:**
   - Removed unused Vite boilerplate (`src/assets/`, `App.css`).
   - Removed legacy `maanvi-` portrait images from the `public/` directory.
   - Updated `index.html` metadata and document title to correctly reflect "Maanvi Properties - Anantapur Real Estate".

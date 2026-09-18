# Nexora Academy — Demo Landing Page

> **This is a fictional demo website.** Nexora Academy is not a real coaching institute. All statistics, testimonials, faculty profiles, and content are fictional and created for demonstration purposes only.

## Purpose

This is a premium, conversion-focused landing page demo built for Indian coaching institutes. It serves as a portfolio/sales piece to show coaching institute owners what their website could look like.

## Stack

- **HTML5** — Semantic markup, accessibility-first
- **CSS3** — Custom properties (design tokens), responsive, mobile-first
- **Vanilla JavaScript** — No frameworks, no build tools, no dependencies
- **Google Fonts** — Inter (with system-font fallback)

## How to Run

1. Open `index.html` directly in your browser — **that's it.**
2. Or deploy to any static hosting (Netlify, Vercel, GitHub Pages, shared hosting).

No build step. No npm. No Node.js required.

## Folder Structure

```
├── index.html              Main page
├── css/
│   ├── tokens.css          Design tokens (colors, spacing, typography, shadows)
│   ├── base.css            CSS reset, global styles
│   ├── layout.css          Container, grid, section spacing, utilities
│   ├── components.css      Reusable UI components (buttons, cards, navbar, etc.)
│   └── sections.css        Section-specific layouts (hero, programs, footer, etc.)
├── js/
│   ├── theme.js            Dark/light theme toggle
│   ├── nav.js              Sticky header, mobile menu, smooth scroll
│   ├── animations.js       Scroll reveal animations, counter animation
│   ├── form.js             Form validation and demo submission
│   ├── accordion.js        FAQ accordion behavior
│   ├── safe-image.js       Image fallback system
│   └── main.js             Central config + module initializer
├── assets/
│   ├── favicon.svg         SVG favicon (N mark)
│   └── images/             Place optimized images here
└── README.md               This file
```

## How to Customize for a Client

### 1. Brand & Content

Edit the `siteConfig` object in `js/main.js`:

```js
const siteConfig = {
  brand: 'Client Academy Name',
  tagline: 'Their Tagline Here',
  location: 'City, State',
  phone: '+91 99999 99999',
  email: 'hello@nexora-demo.com',
  primaryCTA: 'Book Free Counselling',
  programs: [ ... ],
  faculty: [ ... ]
};
```

Then update the text content in `index.html` (headings, descriptions, programs, faculty, etc.).

### 2. Website Sections Overview

1. **Navbar** — Sticky, backdrop blur, dark/light theme switch, mobile drawer
2. **Hero** — Conversion-focused headline, primary & secondary CTAs, trust stats, 3 floating performance demo cards with micro-motion
3. **Trust Strip** — Partner & educational marks
4. **Problem → Solution** — 3-step transformation cards (`Problem` → `Nexora Approach` → `Student Outcome`)
5. **Why Nexora?** — 3 core pillars: Expert Faculty, Personal Guidance, Continuous Assessment
6. **Programs** — JEE Excellence, NEET Pro, and Foundation with curriculum highlights and direct CTAs
7. **Results Showcase** — Transparent metric counters with explicit sample demonstration disclaimer
8. **Student Performance Dashboard** — Detailed Aarav Shah mockup featuring subject breakdowns and weekly test score progression bars
9. **Faculty** — Academic credentials, subject specializations, and teaching focus tags
10. **Testimonials** — Authentic student feedback quotes without exaggerated claims
11. **Step-by-Step Process** — 4 connected milestones from counselling to progress tracking
12. **Institute Solutions (Agency Showcase)** — 8 key digital capabilities we build for coaching clients
13. **Conversion Banner** — High-contrast CTA block with WhatsApp chat trigger
14. **Enquiry Form** — Accessible inputs, native select styling, client-side validation, and polite success state
15. **FAQ** — Accessible accordion with single-open focus
16. **Footer** — Brand details, quick anchors, and clear demo notices
17. **Floating Controls** — One-tap WhatsApp button with desktop tooltip & mobile-only sticky CTA bar

### 3. Colors

Edit `css/tokens.css` to change the accent color, backgrounds, etc.:

```css
:root {
  --color-accent: #yourcolor;
  --color-accent-hover: #yourhovercolor;
}
```

The light theme overrides are in `[data-theme="light"]` in the same file.

### 4. Images

Place optimized images in `assets/images/`. The SafeImage system ensures:
- A **loading skeleton** shows while images load
- If an image fails, a **polished fallback** appears instead of a broken icon
- Images use `loading="lazy"` for performance

Recommended formats: WebP, AVIF, or optimized JPG/PNG.

### 5. WhatsApp Number

The WhatsApp number is set in `siteConfig.whatsapp` in `main.js`. It is applied automatically to all WhatsApp buttons/links on page load.

### 6. Connect the Form

The enquiry form currently shows a success message without sending data. To connect it:
- **WhatsApp API:** Format the form data as a message and redirect to `https://wa.me/YOURNUMBER?text=...`
- **Email service:** Use Formspree, EmailJS, or similar
- **Backend API:** Submit to your server endpoint via `fetch()`
- **Google Sheets:** Use a Google Apps Script web app

Edit the submit handler in `js/form.js`.

## Theme System

- **Default:** Dark mode
- **Toggle:** Click the sun/moon icon in the navbar
- **Persistence:** Saved to `localStorage` as `nexora-theme`
- **System preference:** On first visit, respects `prefers-color-scheme`
- **No flash:** An inline `<script>` in `<head>` sets the theme before paint

## SafeImage System

Every image is wrapped in a `.safe-image` container with three children:
1. `.safe-image__img` — The actual image
2. `.safe-image__skeleton` — Loading shimmer animation
3. `.safe-image__fallback` — Fallback UI (hidden by default)

The `safe-image.js` module handles load/error events automatically. **No broken image icon will ever appear.**

## Accessibility

- Semantic HTML (`header`, `main`, `nav`, `section`, `footer`)
- Skip-to-content link
- Single `<h1>`, logical heading hierarchy
- ARIA labels on interactive elements
- Keyboard-navigable (visible focus states)
- `prefers-reduced-motion` support
- Form labels, error messages with `role="alert"`
- WCAG AA contrast on both themes

## Browser Support

- Chrome 90+
- Edge 90+
- Firefox 90+
- Safari 14+

## License

This demo is free to use as a portfolio piece or client template. All content is fictional.

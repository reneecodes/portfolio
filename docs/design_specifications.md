# 🎨 Design Specifications

## 1. Overview
This document outlines the design principles and visual style for Renee Martinez's portfolio. The goal is to reflect her expertise in simplifying complex information and creating intuitive experiences.

## 2. Target Audience
- **Primary:** Hiring managers, recruiters, and potential clients looking for a Senior/Lead UX Designer.
- **Secondary:** Fellow designers and developers interested in collaboration.

## 3. Brand Identity
- **Keywords:** Intuitive, Clean, Professional, Data-Driven, Empathetic.
- **Vibe:** "The best designs feel like they aren't even there."
- **Visual Style:** Minimalist, high-contrast, with subtle interactions to show attention to detail.

## 4. Color Palette
A clean, modern palette that emphasizes content and readability.

| Role | Color Name | Hex Code | Usage |
|------|------------|----------|-------|
| **Primary** | **Midnight Slate** | `#0f172a` | Main text, headings, strong borders. |
| **Secondary** | **Cloud White** | `#f8fafc` | Backgrounds, cards. |
| **Accent** | **Electric Indigo** | `#6366f1` | CTAs, links, active states, key highlights. |
| **Neutral** | **Cool Gray** | `#94a3b8` | Subtitles, secondary text, borders. |

## 5. Typography
Using **Geist Sans** (Next.js default) or **Inter** for a clean, highly legible interface.

- **Headings (H1, H2, H3):** Bold, tight letter spacing.
- **Body Text:** Regular weight, comfortable line height (1.6) for readability.
- **Monospace:** For technical skills or code references if needed.

## 6. Layout & Grid
- **Container:** Max-width of `1280px` centered.
- **Grid:** 12-column grid for desktop, 4-column for mobile.
- **Spacing:** Using Tailwind's spacing scale (`p-4`, `m-8`, `gap-6`) for consistency.
- **Responsiveness:**
  - **Mobile:** Single column, stacked layout.
  - **Tablet:** Two-column layout for project cards.
  - **Desktop:** Multi-column layouts with generous whitespace.

## 7. Component Library
### Navigation
- Sticky top navbar.
- Logo (Text: "Renee Martinez") on the left.
- Links (About, Experience, Work, Contact) on the right.

### Hero Section
- Large, bold introduction.
- clear CTA ("View Work" or "Download Resume").
- Placeholder for headshot.

### Project Cards
- Clean card with thumbnail image.
- Project Title & Type (e.g., "Web App Redesign").
- Short description.
- "View Case Study" link.

### Footer
- Simple copyright.
- Social links (LinkedIn, Behance, Email).

## 8. Accessibility (WCAG)
- **Contrast:** Ensure all text meets AA standards (4.5:1 ratio).
- **Semantic HTML:** Use proper `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` tags.
- **Keyboard Navigation:** Ensure all interactive elements are focusable.
- **Alt Text:** All images must have descriptive alt text.

## 9. User Flow
1. **Landing:** User arrives, sees the Value Prop (Hero).
2. **Scan:** User scrolls to see Skills and Experience summary.
3. **Deep Dive:** User clicks on a Project to view details (Behance).
4. **Action:** User downloads Resume or clicks Contact.

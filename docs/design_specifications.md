# 🎨 Design Specifications (Revamped)

## 1. Overview
This document outlines the design principles and visual style for Renee Martinez's portfolio. The goal is to reflect her expertise in simplifying complex information and creating intuitive experiences, with a focus on **sophistication**, **subtlety**, and **modernity**.

## 2. Design Philosophy
- **"Invisible Design":** The interface should recede, letting the content shine.
- **Sophistication through Subtlety:** Use micro-interactions and soft gradients rather than loud colors.
- **Clutter-Free:** Radical use of whitespace to guide the eye.

## 3. Typography
Using **Geist Sans** (Next.js default) for a clean, highly legible interface.

- **Primary Font:** Geist Sans
- **Monospace:** Geist Mono (for technical details)

### Hierarchy
- **Display (Hero H1):** `text-5xl` to `text-7xl`, `font-bold`, `tracking-tight` (-0.02em).
- **Section Headings (H2):** `text-3xl` to `text-4xl`, `font-semibold`, `tracking-tight`.
- **Subheadings (H3):** `text-xl`, `font-medium`, `text-gray-600` (Light) / `text-gray-400` (Dark).
- **Body:** `text-base` or `text-lg`, `leading-relaxed` (1.75), `font-normal`.
- **Small/Meta:** `text-sm`, `font-medium`, `uppercase`, `tracking-wider`.

## 4. Color Palette & Gradients
A refined palette moving beyond flat colors to subtle depth, using a unified canvas approach.

### Core Colors (2025 Refreshed)
| Role | Color Name | Tailwind Class | Hex Code |
|------|------------|----------------|----------|
| **Primary Accent** | **Coral Rose** | `text-coral-600` / `bg-coral-600` | `#e15a3d` |
| **Secondary Accent** | **Sage Green** | `text-sage-600` / `bg-sage-600` | `#4a7a4a` |
| **Tertiary Accent** | **Lavender** | `text-lavender-600` | `#8a6bd1` |
| **Action/Buttons** | **Coral Dark** | `bg-coral-700` | `#bc4a33` (AA Compliant) |

### Global Background Gradient
The site uses a fixed radial gradient on the `body` to create a sophisticated "spotlight" effect that remains consistent as the user scrolls.

- **Light Mode:** `radial-gradient(ellipse at 50% 0%, var(--color-coral-50) 0%, var(--color-sage-50) 100%)`
- **Dark Mode:** `radial-gradient(ellipse at 50% 0%, var(--color-lavender-900) 0%, var(--color-warmgray-900) 100%)`

### Accent Gradients & Effects
- **Text Gradient:** `bg-clip-text text-transparent bg-gradient-to-r from-coral-600 to-lavender-600`
- **Glassmorphism:** `.glass` utility with `backdrop-filter: blur(12px)` and a subtle 1px border.

## 5. Spacing & Layout
- **Container:** `max-w-6xl` centered.
- **Section Spacing:** `py-24` or `py-32` to allow breathing room.
- **Unified Canvas:** No section-specific background colors; the global gradient serves as the backdrop for the entire experience.
- **Gap:** Generous gaps (`gap-8` to `gap-16`).

## 6. Animations & Micro-interactions
Using **Tailwind CSS v4 native animations** and custom CSS keyframes for a high-performance, dependency-free experience.

- **Entrance:** Elements use `animate-fade-in-up` with staggered `animation-delay` (100ms increments).
- **Scale-In:** Used for cards and visual elements to provide a sense of depth (`animate-scale-in`).
- **Hover:**
  - **Buttons:** Smooth transitions, subtle scale shifts.
  - **Cards:** Lift effects and subtle border glow.
- **Performance:** All animations are hardware-accelerated and respect `prefers-reduced-motion`.

## 7. Component Guidelines

### Navbar
- **Style:** Floating glassmorphism (blur-md).
- **Behavior:** Hides on scroll down, reveals on scroll up (optional) or stays sticky with high transparency.

### Buttons
- **Primary:** Solid background, rounded-full, subtle shadow.
- **Secondary:** Outline or ghost, text-only with underline animation.

### Project Cards
- **Structure:** Large thumbnail, clean typography below.
- **Interaction:** Entire card clickable. Image scales slightly on hover.

## 8. Accessibility
- **Contrast:** Maintain AA standards.
- **Motion:** Respect `prefers-reduced-motion`.
- **Focus:** Visible focus rings for keyboard users.
- **Semantic HTML:** Use proper heading hierarchy and semantic tags (e.g., `<section>`, `<ul>`, `<li>`) for screen readers.

## 9. Skills & Tools Section Design
A dedicated section to showcase technical proficiencies with a focus on clarity and visual appeal.

### Structure
- **Categorization:** Skills are organized into three main cards: **Design & Research**, **Frontend Development**, and **Tools & Workflow**.
- **Card Layout:** Each card features a bold header and is divided into logical subsections (e.g., "Languages", "Frameworks").
- **List Style:** Skills are presented as bulleted lists.
- **Grid Layout:** Responsive grid adapting from 1 column (mobile) to 3 columns (desktop).

### Visual Style
- **Color Coding:** Each category is assigned a specific accent color from the palette, applied to the top border and bullet points:
  - **Design & Research:** Coral (Creativity, Warmth)
  - **Frontend Development:** Sage (Growth, Balance)
  - **Tools & Workflow:** Lavender (Sophistication, Tech)
- **Typography:**
  - **Headers:** Bold and prominent.
  - **Subsections:** Uppercase, tracking-wider, with a subtle separator line.
- **Micro-interactions:**
  - **Hover:** Cards lift slightly (`-translate-y-1`). Bullet points scale slightly on hover.
  - **Entrance:** Staggered fade-in-up animation for the cards.

### Content Strategy
- **Proficiency Display:** Proficiency badges (Expert, Proficient, Intermediate, Familiar) are right-aligned within each list item for quick scanning.
- **Visual Hierarchy:** Highlighted format for badges ensures they stand out without cluttering the skill name.

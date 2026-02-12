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
A refined palette moving beyond flat colors to subtle depth.

### Core Colors
| Role | Color Name | Hex Code (Light) | Hex Code (Dark) |
|------|------------|------------------|-----------------|
| **Background** | **Canvas** | `#ffffff` | `#0a0a0a` |
| **Surface** | **Glass** | `rgba(255, 255, 255, 0.7)` | `rgba(10, 10, 10, 0.7)` |
| **Primary** | **Ink** | `#171717` | `#ededed` |
| **Secondary** | **Graphite** | `#525252` | `#a3a3a3` |
| **Accent** | **Indigo** | `#6366f1` | `#818cf8` |

### Gradients
- **Subtle Glow:** `bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent` (Background accents)
- **Text Gradient:** `bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600` (Dark mode: `from-white to-gray-400`)
- **Card Hover:** `hover:bg-gradient-to-br hover:from-white/5 hover:to-white/0` (Glassmorphism)

## 5. Spacing & Layout
- **Container:** `max-w-6xl` centered.
- **Section Spacing:** `py-24` or `py-32` to allow breathing room.
- **Grid:** 12-column grid system, but often using flexbox for fluid layouts.
- **Gap:** Generous gaps (`gap-8` to `gap-16`).

## 6. Animations & Micro-interactions
Using `framer-motion` for fluid, spring-based animations.

- **Entrance:** Elements stagger in with a subtle slide-up (`y: 20 -> 0`) and fade-in (`opacity: 0 -> 1`).
- **Hover:**
  - **Buttons:** Slight scale up (`1.02`), shadow bloom.
  - **Cards:** Lift (`y: -4px`), subtle border glow.
- **Scroll:** Smooth parallax or reveal on scroll.
- **Transition:** Page transitions should be instant but smooth (no jarring layout shifts).

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

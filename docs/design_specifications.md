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

## 4. Color Palette & Gradients ✨
A vibrant, fun, and modern "Digital Pop" palette that balances energy with professionalism. This palette reflects contemporary 2025 trends while maintaining sophistication.

### 🎨 Digital Pop Color Palette

#### Primary Colors
| Role | Color Name | Hex Code | Tailwind Class | Description |
|------|------------|----------|------------------|-------------|
| **Primary** | **Electric Violet** | `#8B5CF6` | `bg-primary-500` | Vibrant, creative, professional - perfect for main CTAs |
| **Primary Dark** | **Electric Violet Dark** | `#7C3AED` | `bg-primary-600` | Darker variant for hover states |
| **Primary Light** | **Electric Violet Light** | `#A78BFA` | `bg-primary-400` | Lighter variant for subtle accents |
| **Secondary** | **Coral Burst** | `#F97316` | `bg-secondary-500` | Fun, warm, energetic - ideal for secondary actions |
| **Secondary Dark** | **Coral Burst Dark** | `#EA580C` | `bg-secondary-600` | Darker variant for hover states |
| **Secondary Light** | **Coral Burst Light** | `#FB923C` | `bg-secondary-400` | Lighter variant for subtle accents |

#### Accent Colors
| Role | Color Name | Hex Code | Tailwind Class | Description |
|------|------------|----------|------------------|-------------|
| **Accent 1** | **Neon Mint** | `#34D399` | `bg-accent-500` | Fresh, modern - perfect for success states |
| **Accent 1 Dark** | **Neon Mint Dark** | `#10B981` | `bg-accent-600` | Darker variant for hover states |
| **Accent 1 Light** | **Neon Mint Light** | `#6EE7B7` | `bg-accent-400` | Lighter variant for subtle accents |
| **Accent 2** | **Sunshine Yellow** | `#FBBF24` | `bg-sunshine-500` | Playful, attention-grabbing - perfect for highlights |
| **Accent 2 Dark** | **Sunshine Yellow Dark** | `#F59E0B` | `bg-sunshine-600` | Darker variant for hover states |
| **Accent 2 Light** | **Sunshine Yellow Light** | `#FCD34D` | `bg-sunshine-400` | Lighter variant for subtle accents |
| **Accent 3** | **Electric Blue** | `#3B82F6` | `bg-electric-500` | Modern, tech-forward - perfect for info states |
| **Accent 3 Dark** | **Electric Blue Dark** | `#2563EB` | `bg-electric-600` | Darker variant for hover states |
| **Accent 3 Light** | **Electric Blue Light** | `#60A5FA` | `bg-electric-400` | Lighter variant for subtle accents |

#### Neutral Colors
| Role | Color Name | Hex Code | Tailwind Class | Description |
|------|------------|----------|------------------|-------------|
| **Background** | **Canvas White** | `#F9FAFB` | `bg-canvas` | Clean, bright background - warmer than pure white |
| **Text Primary** | **Charcoal Ink** | `#111827` | `text-canvas` | Deep, rich text color - excellent contrast |
| **Text Secondary** | **Soft Graphite** | `#6B7280` | `text-graphite` | Secondary text - perfect for metadata |
| **Surface** | **Light Glass** | `#F3F4F6` | `bg-glass` | Subtle surfaces - perfect for cards |
| **Border** | **Surface Gray** | `#E5E7EB` | `bg-surface` | Light borders and dividers |

### Global Background Gradient ✨
The site uses a fixed radial gradient on the `body` to create a vibrant "spotlight" effect that transitions from primary to accent colors.

- **Light Mode:** `radial-gradient(ellipse at 50% 0%, var(--color-primary-400) 0%, var(--color-accent-400) 50%, var(--color-canvas) 100%)`
- **Dark Mode:** `radial-gradient(ellipse at 50% 0%, var(--color-primary-600) 0%, var(--color-accent-600) 50%, var(--color-ink) 100%)`

### Accent Gradients & Effects
- **Text Gradient:** `bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500`
- **Glassmorphism:** `.glass` utility with `backdrop-filter: blur(12px)` and a subtle 1px border using `var(--color-glass)`

### Color Psychology & Rationale 🧠
The "Digital Pop" palette is designed to evoke specific emotions while maintaining professionalism:

- **Electric Violet (#8B5CF6):** Combines the stability of blue with the energy of red, creating a color that feels both creative and trustworthy. Perfect for a tech-savvy designer who wants to appear innovative yet reliable.

- **Coral Burst (#F97316):** A warm, energetic orange that feels friendly and approachable without being overwhelming. It adds personality and warmth to the interface.

- **Neon Mint (#34D399):** A fresh, modern green that suggests growth, innovation, and forward-thinking. Perfect for success states and positive feedback.

- **Sunshine Yellow (#FBBF24):** A cheerful, optimistic yellow that draws attention naturally. Used sparingly for highlights and important calls-to-action.

- **Electric Blue (#3B82F6):** A tech-forward blue that maintains the professional credibility expected in a portfolio while adding a modern, vibrant twist.

This palette successfully balances the 2025 trends of vibrant, bold colors with the sophistication needed for a professional portfolio, creating an experience that feels both playful and polished.

### Accessibility Notes ♿
- **Text Contrast:** Always use `text-primary-600` or `text-secondary-600` for body text on light backgrounds to meet WCAG AA standards (4.5:1).
- **Button Text:** White text (`#FFFFFF`) on `bg-primary-500` passes AA standards (5.1:1).
- **Focus States:** Ensure all interactive elements have a visible focus ring (Tailwind's default `focus:ring` works well).
- **Color Blindness:** Do not rely on color alone to convey meaning. Use icons or text labels alongside color indicators (e.g., for error or success states).

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

## 7. Component Guidelines ✨

### Navbar
- **Style:** Floating glassmorphism (blur-md) with vibrant accent border.
- **Colors:** Use `bg-glass` with `border-accent-500` for a pop of color.
- **Behavior:** Hides on scroll down, reveals on scroll up (optional) or stays sticky with high transparency.

### Buttons
- **Primary:** `bg-primary-500` with `hover:bg-primary-600`, `rounded-full`, subtle shadow.
- **Secondary:** `bg-secondary-500` with `hover:bg-secondary-600`, `rounded-full`.
- **Ghost:** `border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white`.
- **Accent:** Use `bg-accent-500`, `bg-sunshine-500`, or `bg-electric-500` for special CTAs.

### Project Cards
- **Structure:** Large thumbnail, clean typography below with vibrant accent highlights.
- **Colors:** `bg-glass` with `border-accent-500` on hover.
- **Interaction:** Entire card clickable. Image scales slightly on hover with `border-primary-500` glow effect.

## 8. Accessibility
- **Contrast:** Maintain AA standards.
- **Motion:** Respect `prefers-reduced-motion`.
- **Focus:** Visible focus rings for keyboard users.

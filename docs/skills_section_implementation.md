# Skills and Tools Section - Implementation Details

## Overview
The "Skills and Tools" section has been redesigned to be a comprehensive, detailed, and visually engaging showcase of Renee Martinez's technical and creative capabilities. It moves away from a simple tag cloud to a structured, descriptive grid layout.

## Design Choices

### 1. Visual Style & Aesthetics
*   **Light & Airy**: adhering to the "avoid dark tones for the car color" requirement, we utilized `bg-white/80` with a backdrop blur for a modern "glassmorphism" effect.
*   **Accent Colors**: We integrated the brand's primary accent colors (`coral`, `sage`, `lavender`) subtly:
    *   **Background Blobs**: Large, blurred, animated blobs (`bg-coral-100/40`, `bg-sage-100/40`) provide depth and movement without overwhelming the content.
    *   **Icons**: Custom SVG icons for each category use the specific accent colors (`text-coral-600`, etc.) to distinguish sections.
    *   **Hover States**: Interactive elements glow with their respective category colors on hover.
*   **Typography**: Clear hierarchy with `Geist Sans`. `h3` for categories, `h4` for skills, and `text-sm` for descriptions.

### 2. Layout & Responsiveness
*   **Grid System**: A responsive grid that shifts from 1 column on mobile to 3 columns on large screens (`grid-cols-1 lg:grid-cols-3`).
*   **Card Design**: Each category is encapsulated in a rounded card (`rounded-3xl`) with generous padding, creating distinct focal points.

### 3. Animations
*   **Entrance**: Staggered `animate-fade-in-up` effects for cards create a smooth, cascading entry.
*   **Micro-interactions**:
    *   Cards lift slightly (`-translate-y-2`) on hover.
    *   Icons scale up (`scale-110`).
    *   Skill items have a left-border color transition on hover, guiding the eye.

## Technical Implementation

### 1. Data Structure
The content is managed via a `skillCategories` array within the component. This makes it easy to update or reorder skills without touching the JSX structure.
*   **Categories**: Frontend Development, UI/UX Design, Tools & Workflow.
*   **Fields**: `name`, `level` (Expert/Proficient/Familiar), `description`.

### 2. Technology Stack
*   **Framework**: React (Next.js).
*   **Styling**: Tailwind CSS v4 (using CSS variables defined in `color-palette.css`).
*   **Icons**: Inline SVGs for performance and customization (no external icon library dependencies).

### 3. Accessibility
*   **Semantic HTML**: Uses `<section>`, `<h2>`, `<h3>`, `<ul>` (implicitly via div structure for styling flexibility, but semantically grouped).
*   **Contrast**: Text colors (`text-gray-900`, `text-gray-600`) ensure high readability against the light backgrounds.
*   **Reduced Motion**: Tailwind's animation utilities respect `prefers-reduced-motion` settings where applicable (standard behavior).

## Content Strategy
We expanded the scope beyond just design tools to include technical proficiencies, positioning Renee as a versatile "Technical Designer" or "Design Engineer":
*   **Frontend**: Highlights React, Tailwind, and Semantic HTML.
*   **Design**: Covers the core stack (Figma, Adobe) plus Research and Accessibility.
*   **Workflow**: Demonstrates professional collaboration skills (Git, Agile).

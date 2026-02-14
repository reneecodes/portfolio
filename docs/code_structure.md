# 🏗️ Code Structure & Architecture

## 1. Directory Structure
We follow the standard Next.js 16 **App Router** structure.

```
/app
  /layout.tsx       # Root layout (HTML, Body, Global Providers)
  /page.tsx         # Homepage (Landing)
  /globals.css      # Global styles (Tailwind imports)
/components
  /ui               # Generic UI components (Buttons, Cards)
  /sections         # Page-specific sections (Hero, About, Projects)
  /layout           # Layout components (Navbar, Footer)
/lib                # Utility functions
/public             # Static assets (images, icons)
/docs               # Documentation
```

## 2. Naming Conventions
- **Components:** PascalCase (e.g., `ProjectCard.tsx`, `HeroSection.tsx`).
- **Files:** kebab-case or PascalCase (matching component name is preferred for components).
- **Functions:** camelCase (e.g., `formatDate()`).

## 3. Styling Approach
- **Framework:** **Tailwind CSS v4**.
- **Methodology:** Utility-first.
  - Use utility classes directly in JSX: `className="flex flex-col gap-4"`.
  - Avoid `@apply` unless creating highly reusable primitives in CSS.
  - Use `clsx` or `tailwind-merge` for conditional class names if needed.
- **Dark Mode:** Support system preference via `dark:` modifiers.

## 4. State Management
- **Local State:** `useState` for simple UI interactions (e.g., mobile menu toggle).
- **Global State:** Not required for this portfolio version.

## 5. Data Fetching
- Since this is a static portfolio, content is hardcoded or imported from JSON/TS constants.
- **Images:** Use `next/image` for optimization.

## 6. Key Components
- `Navbar`: Responsive navigation with glassmorphism.
- `Hero`: Introduction area with staggered animations.
- `Skills`: Data-driven component showcasing expertise levels.
  - **Structure:** Uses a `skillCategories` array for easy maintenance.
  - **Styling:** Glassmorphism cards with dynamic border colors based on proficiency.
  - **Animations:** Staggered `fade-in-up` effects for each category.
- `Section`: Wrapper component for consistent padding/margins.
- `ProjectCard`: Reusable card for portfolio items.
- `Button`: Standardized button styles.

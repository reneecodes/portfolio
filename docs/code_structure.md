# 🏗️ Code Structure & Architecture

## 1. Directory Structure
We follow the standard Next.js 16 **App Router** structure.

```
/app
  /inquire            # Inquiry form page
  /layout.tsx       # Root layout (HTML, Body, Global Providers)
  /page.tsx         # Homepage (Landing)
  /globals.css      # Global styles (Tailwind imports)
/components
  /ui               # Generic UI components (Buttons, Cards, FormField, ToggleGroup)
  /sections         # Page-specific sections (Hero, About, Projects, InquiryForm)
  /layout           # Layout components (Navbar, Footer)
/lib                # Utility functions, Server Actions
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

## 6. Animations
- **Library:** Framer Motion for all UI transitions and animations.
- **Usage:** Implemented for staggered entrance animations on form fields and will be used for layout transitions and the success state.

## 7. Key Components
- `Navbar`: Responsive navigation.
- `Hero`: Introduction area.
- `Section`: Wrapper component for consistent padding/margins.
- `Skills`: Detailed skills display with 3-card layout and proficiency badges.
- `ProjectCard`: Reusable card for portfolio items.
- `Button`: Standardized button styles.
- `InquiryForm`: A complete redesign implementing a "Dream Canvas" concept. This is now a multi-step component that guides the user through a 3-step process. It orchestrates the entire experience, including the progress indicator, step transitions, and final submission.
- `InquiryFormSuccessMessage`: Displays the animated success state after a successful inquiry submission. It includes a "Send Another Dream" button to reset the form.
- `FormField`: Reusable component for text inputs and textareas, ensuring consistent styling and validation.
- `ToggleGroup`: Reusable component for button-based selection, used for Project Type, Budget, and Timeline.

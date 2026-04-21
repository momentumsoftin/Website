# Website Knowledge

## 1. Tech Stack
- React
- Vite
- JSX
- TailwindCSS

## 2. Entry Points
- **Entry point JS**: `src/main.jsx` and `src/App.jsx`
- **Root HTML**: `index.html`

## 3. Module Map
- **Pages**: `src/pages/`
- **Components**: `src/components/`
- **Data/Static content**: `src/data/`
- **Styles**: `src/index.css`

## 4. Key Rules & Gotchas
- **Performance & SEO**: This is a marketing website. Focus severely on SEO and fast load times (TTI <= 2s, Lighthouse score >= 90).
- The `blog-drafts/` directory contains draft content and is not part of the active production build payload.

## 5. Common Scenarios
- **Adding a new section/page**: Create the component definition in `src/components/` or a complete page view in `src/pages/`, and link it correctly in the app routing within `src/App.jsx`.

## 6. Last Updated
- 2026-04-21

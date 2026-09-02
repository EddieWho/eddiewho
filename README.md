# Yin Yuan — Personal Portfolio

A static personal portfolio built with Astro and TypeScript. The site includes Home, Blog, Projects, Contact, and shared project-detail pages.

## Local development

```bash
npm install
npm run dev
```

The development site is served from `/eddiewho/` to match its GitHub Pages base path.

## Production build

```bash
npm run build
```

The generated static site is written to `dist/`.

## Content

- Personal links and profile copy: `src/config/site.ts`
- Projects: `src/content/projects/`
- Future blog posts: `src/content/blog/`

Blog frontmatter supports `title`, `description`, `publicationDate`, `tags`, `readingTime`, and `draft`. Draft posts are excluded from all generated pages.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is pushed. In the repository settings, select **GitHub Actions** as the Pages source before the first deployment.

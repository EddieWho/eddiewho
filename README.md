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

- Home page copy: `src/content/site/home.json`
- Projects: `src/content/projects/`
- Blog posts: `src/content/blog/`
- Personal links and shared profile settings: `src/config/site.ts`

Blog frontmatter supports `title`, `description`, `publicationDate`, `tags`, `readingTime`, and `draft`. Draft posts are excluded from all generated pages.

## Content admin

The browser-based editor is available at:

```text
https://eddiewho.github.io/eddiewho/admin/
```

Choose **Sign In with Token** and use a GitHub personal access token that can read and write repository contents in `EddieWho/eddiewho`. The editor can:

- update all Home page copy;
- create, edit, and delete Blog posts with Markdown;
- create, edit, and delete Projects;
- upload Blog and Project images into their matching public image folders.

The token is stored by the browser and must never be committed to the repository or shared. Use the editor only on a trusted device.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is pushed. In the repository settings, select **GitHub Actions** as the Pages source before the first deployment.

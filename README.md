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

Blog frontmatter supports `title`, `description`, `publicationDate`, `tags`, `readingTime`, `draft`, and `language` (`en` or `zh`). Draft posts are excluded from all generated pages.

## Languages

The site is English-first, with a Chinese version under `/zh/` (for example `/eddiewho/zh/projects/`). The header's EN / 中 switch links to the same page in the other language.

- Interface text (navigation, page headings, labels): `src/i18n/ui.ts`
- Profile text such as the descriptor and the home page profile card: `siteProfile` in `src/config/site.ts`
- Chinese home page copy: `src/content/site/home-zh.json`
- Chinese projects: `src/content/projects-zh/`, using the same file name as the English project. A project without a Chinese file is shown in English on the Chinese site, with a notice.
- Blog posts are written once and appear in both versions; set `language` to mark the language a post is written in.

## Content admin

The browser-based editor is available at:

```text
https://eddiewho.github.io/eddiewho/admin/
```

Choose **Sign In with Token** and use a GitHub personal access token that can read and write repository contents in `EddieWho/eddiewho`. The editor can:

- update all Home page copy, in English and Chinese;
- create, edit, and delete Blog posts with Markdown;
- create, edit, and delete Projects, and their Chinese versions;
- upload Blog and Project images into their matching public image folders.

The token is stored by the browser and must never be committed to the repository or shared. Use the editor only on a trusted device.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is pushed. In the repository settings, select **GitHub Actions** as the Pages source before the first deployment.

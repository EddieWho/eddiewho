# Portfolio project rules

- Do not fabricate personal information, project achievements, screenshots, metrics, awards, dates, or commercial claims.
- Keep all public-facing website content English-first.
- Preserve the four-page information architecture: Home, Blog, Projects, and Contact.
- Use Astro with TypeScript and static generation. Avoid adding a client framework, backend, database, or unnecessary dependency.
- Keep site-wide personal links and profile information in `src/config/site.ts`.
- Keep blog and project content separate from layout code through Astro content collections.
- Keep visual effects restrained and respect `prefers-reduced-motion`.
- Maintain keyboard access, visible focus states, semantic HTML, accessible contrast, and useful metadata.
- Maintain GitHub Pages compatibility, including the `/eddiewho` base path unless the repository or domain changes.
- Run `npm run build` before finishing any site change.
- Missing factual content must be omitted or marked clearly with `TODO`; never fill gaps by guessing.

# condense.com.au

Marketing site for **Condense Pty Ltd** — an independent software studio in Hobart, Tasmania.

Built with [Astro](https://astro.build) as a static one-page site (the "Clear"
variant of the 2026 design refresh). Replaces the previous 15-year-old
Jekyll-Bootstrap site.

## Develop

```sh
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # static build into dist/
npm run preview    # serve the built dist/ locally
```

Requires Node 20.3+ (Astro 5).

## Structure

- `src/pages/index.astro` — the home page.
- `src/pages/{about,services,portfolio,awards,contact}.astro` — legacy URLs from
  the old site, preserved as real pages that render the same content and
  `canonical` to the homepage (so 15 years of inbound links and ranking are kept,
  with no flimsy redirects). `build.format: 'file'` emits `/about.html` etc. to
  match the old URL scheme exactly.
- `src/components/*.astro` — the page sections (Nav, Hero, Services, Stats, …).
- `src/styles/site.css` — design tokens + component styles, ported from the
  Claude Design "Clear" prototype.
- `src/content.config.ts` — type-safe `journal` collection, wired but empty.
  Re-enable the journal by adding Markdown under `src/content/journal/` and
  rendering it (see the commented-out section refs in `Nav`/`Footer`).
- `public/` — static assets, `CNAME` (custom domain), `robots.txt`, `.nojekyll`.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages. The Pages source must be set to
**GitHub Actions** (Settings → Pages). The custom domain `condense.com.au` is
carried by `public/CNAME`; DNS is unchanged.

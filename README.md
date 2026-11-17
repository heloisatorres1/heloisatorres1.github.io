# Heloisa Oller Torres · Portfolio

Bilingual (English / Português BR) portfolio of Heloisa Oller Torres, QA Test Lead / Senior QA: experience, games worked on, and the public projects that can be explored.

A static site with no framework and no tracking. One content file holds every visible word in both languages, so the two versions cannot drift apart.

## Structure

| Path | Contents |
| --- | --- |
| [`src/content.mjs`](src/content.mjs) | All visible text, in both languages, plus project links |
| [`src/render.mjs`](src/render.mjs) | HTML for the pages, the root page and the 404 page |
| [`src/styles.css`](src/styles.css) | Styles (self-hosted Fraunces and Source Serif 4) |
| [`src/resume.mjs`](src/resume.mjs) | The public résumés, rendered to PDF at build time |
| [`public/media/`](public/media/) | Project screenshots and photos, as WebP |
| [`scripts/build.mjs`](scripts/build.mjs) | Builds `dist/`: `/`, `/en/`, `/pt-BR/`, `404.html`, résumés, sitemap |
| [`scripts/capture-media.mjs`](scripts/capture-media.mjs) | Re-takes the project screenshots from the live demos |
| [`scripts/serve.mjs`](scripts/serve.mjs) | Local preview that behaves like GitHub Pages, at the root or under a subpath |
| [`tests/site.spec.js`](tests/site.spec.js) | Checks both languages, links, downloads, accessibility, keyboard, phones and subpath hosting |

## Build and preview

```bash
npm install
npx playwright install chromium

npm run build        # dist/ for https://heloisatorres1.github.io/
npm run preview      # http://localhost:4321/
npm test             # the site checks (build first)
npm run media        # refresh the project screenshots (needs network)
```

The site works both as a user site (`https://heloisatorres1.github.io/`) and under a project path. For a project path, build with the absolute address so canonical links and the 404 page point to the right place:

```bash
SITE_URL=https://heloisatorres1.github.io/portfolio/ npm run build
```

## Content rules

- Photos are the supplied originals, scaled proportionally and re-encoded as WebP. They are never cropped, retouched or regenerated; the frames and pixel decorations are CSS and SVG around them.
- The public résumés carry the same text as the originals without phone number or e-mail. Contact goes through LinkedIn.
- Simulated data and mock integrations in the projects are labelled as such. Personal projects are not presented as work for, or endorsed by, any former employer.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds, runs the checks and publishes `dist/` to GitHub Pages on every push to `main`.

See [CREDITS.md](CREDITS.md) for fonts and images.

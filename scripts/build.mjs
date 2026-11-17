/**
 * Builds the static site into dist/:
 *   dist/index.html        English (root; returns visitors who chose Portuguese to /pt-BR/)
 *   dist/en/index.html     English
 *   dist/pt-BR/index.html  Português (BR)
 *   dist/404.html          bilingual not-found page
 *   dist/resume/*.pdf      public résumés (no phone or e-mail), rendered from src/resume.mjs
 *
 * SITE_URL sets the absolute address used for canonical/hreflang links and the 404 page.
 * Default: https://heloisatorres1.github.io/  (for a project subpath, e.g. .../portfolio/, set SITE_URL).
 * Run with: npm run build        (add --no-pdf to skip the résumé PDFs)
 */
import { chromium } from '@playwright/test';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { renderNotFound, renderPage, renderRoot } from '../src/render.mjs';
import { RESUMES, renderResume } from '../src/resume.mjs';

const SITE_URL = (process.env.SITE_URL || 'https://heloisatorres1.github.io/').replace(/\/?$/, '/');
const DIST = 'dist';
const sizes = JSON.parse(readFileSync('public/media/sizes.json', 'utf8'));

rmSync(DIST, { recursive: true, force: true });
mkdirSync(`${DIST}/en`, { recursive: true });
mkdirSync(`${DIST}/pt-BR`, { recursive: true });

cpSync('public', DIST, { recursive: true });
cpSync('src/fonts', `${DIST}/fonts`, { recursive: true });
cpSync('src/styles.css', `${DIST}/styles.css`);

writeFileSync(`${DIST}/index.html`, renderRoot({ base: '', siteUrl: SITE_URL, sizes }));
writeFileSync(`${DIST}/en/index.html`, renderPage('en', { base: '../', siteUrl: SITE_URL, path: 'en/', sizes }));
writeFileSync(`${DIST}/pt-BR/index.html`, renderPage('pt-BR', { base: '../', siteUrl: SITE_URL, path: 'pt-BR/', sizes }));
writeFileSync(`${DIST}/404.html`, renderNotFound({ siteUrl: SITE_URL }));
writeFileSync(`${DIST}/robots.txt`, `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}sitemap.xml\n`);
writeFileSync(
  `${DIST}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${['en', 'pt-BR']
    .map(
      (l) =>
        `  <url><loc>${SITE_URL}${l}/</loc><xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}en/"/><xhtml:link rel="alternate" hreflang="pt-BR" href="${SITE_URL}pt-BR/"/></url>`,
    )
    .join('\n')}\n</urlset>\n`,
);

async function buildPdfs() {
  mkdirSync(`${DIST}/resume`, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const r of Object.values(RESUMES)) {
    await page.setContent(renderResume(r), { waitUntil: 'load' });
    await page.pdf({ path: `${DIST}/resume/${r.file}`, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log(`resume/${r.file}`);
  }
  await browser.close();
}

if (!process.argv.includes('--no-pdf')) await buildPdfs();
else if (existsSync('public/resume')) console.log('Skipped PDFs.');
console.log(`Built ${DIST}/ for ${SITE_URL}`);

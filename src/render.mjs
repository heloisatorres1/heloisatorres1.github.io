import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { FEATURED, UNRELEASED_GAMES, GAMES, LINKS, LOCALES, PROJECTS } from './content.mjs';

// A fingerprint of the stylesheet, added to its URL so browsers fetch the new file after every change
// instead of reusing a cached copy that no longer matches the page.
const CSS_VERSION = createHash('sha256').update(readFileSync(new URL('./styles.css', import.meta.url))).digest('hex').slice(0, 10);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- icons and pixel decorations (decorative SVG is always aria-hidden) ---------- */

const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  download: '<path d="M12 4v11m-5-5 5 5 5-5M5 20h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  external: '<path d="M14 5h5v5m0-5-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  code: '<path d="m9 8-4 4 4 4m6-8 4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  linkedin: '<path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zm7 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z"/>',
  github: '<path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>',
  layers: '<path d="m12 4 8 4-8 4-8-4zm-8 8 8 4 8-4M4 16l8 4 8-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  chart: '<path d="M5 19V13m5 6V9m5 10v-7m5 7V5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  star: '<path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6-4.5-4.2 6.1-.7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
};

const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">${ICONS[name]}</svg>`;

const PIXELS = {
  heart: ['.XX.XX.', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...'],
  sparkle: ['...X...', '...X...', '..XXX..', 'XXXXXXX', '..XXX..', '...X...', '...X...'],
  plus: ['.X.', 'XXX', '.X.'],
  paw: ['..XX.XX..', '..XX.XX..', 'XX.....XX', 'XX.XXX.XX', '..XXXXX..', '.XXXXXXX.', '.XXXXXXX.', '..XX.XX..'],
  controller: ['..XXXXXXX..', '.XXXXXXXXX.', 'XX.XXXXX.XX', 'X...XXX.X.X', 'XX.XXXXXXXX', 'XXXX...XXXX', 'XXX.....XXX'],
};

/** A small pixel-art shape. `cls` positions it; it is purely decorative. */
function pixel(shape, cls, unit = 3) {
  const rows = PIXELS[shape];
  const w = rows[0].length;
  const h = rows.length;
  let rects = '';
  rows.forEach((row, y) => [...row].forEach((c, x) => { if (c === 'X') rects += `<rect x="${x}" y="${y}" width="1" height="1"/>`; }));
  return `<svg class="pixel ${cls}" viewBox="0 0 ${w} ${h}" width="${w * unit}" height="${h * unit}" shape-rendering="crispEdges" aria-hidden="true" focusable="false">${rects}</svg>`;
}

/* ---------- page ---------- */

/**
 * @param {'en'|'pt-BR'} code   locale
 * @param {object} opts
 * @param {string} opts.base     relative prefix from this page to the site root ('' or '../')
 * @param {string} opts.siteUrl  absolute site URL with trailing slash, for canonical and hreflang
 * @param {string} opts.path     this page's path relative to the site root ('en/', 'pt-BR/', '')
 * @param {object} opts.sizes    image sizes from public/media/sizes.json
 */
export function renderPage(code, { base, siteUrl, path, sizes }) {
  const t = LOCALES[code];
  const other = code === 'en' ? 'pt-BR' : 'en';
  const ext = (href, label, cls, iconName) =>
    `<a class="${cls}" href="${href}" target="_blank" rel="noopener">${iconName ? icon(iconName) : ''}<span>${esc(label)}</span><span class="sr-only"> ${esc(t.projects.opensNew)}</span></a>`;
  const img = (name, alt, cls, lazy = true) => {
    const [w, h] = sizes[name];
    return `<img class="${cls}" src="${base}media/${name}.webp" width="${w}" height="${h}" alt="${esc(alt)}"${lazy ? ' loading="lazy" decoding="async"' : ' fetchpriority="high"'}>`;
  };

  const langLinks = Object.values(LOCALES)
    .map((l) =>
      l.lang === code
        ? `<a class="lang current" href="${base}${l.lang}/" hreflang="${l.lang}" lang="${l.lang}" aria-current="true">${esc(l.label)}</a>`
        : `<a class="lang" href="${base}${l.lang}/" hreflang="${l.lang}" lang="${l.lang}" data-lang="${l.lang}">${esc(l.label)}</a>`,
    )
    .join('<span class="lang-sep" aria-hidden="true">|</span>');

  const jobs = t.experience.jobs
    .map(
      (j) => `
          <li class="job">
            <span class="job-dot" aria-hidden="true"></span>
            <div class="job-head">
              <h3>${esc(j.company)}</h3>
              <p class="job-dates"><time datetime="${j.start}">${esc(j.dates.split(' – ')[0])}</time> – <time datetime="${j.end}">${esc(j.dates.split(' – ')[1])}</time></p>
            </div>
            <p class="job-role">${esc(j.role)}</p>
            ${j.summary ? `<p class="job-summary">${esc(j.summary)}</p>` : ''}
          </li>`,
    )
    .join('');

  const cards = PROJECTS.map((p) => {
    const c = t.projects.items[p.id];
    return `
        <article class="card" id="${p.id}">
          <div class="thumb">${img(p.id, t.projects.thumbAlt(p.name), 'thumb-img')}</div>
          <div class="card-body">
            <h3>${esc(p.name)}</h3>
            <p class="blurb">${esc(c.blurb)}</p>
            <p class="badges"><span class="badge badge-label">${icon(p.icon, 'icon icon-sm')}${esc(c.label)}</span>${c.tags.map((g) => `<span class="badge">${esc(g)}</span>`).join('')}</p>
            <p class="actions">
              ${ext(p.demo, c.primary, 'btn btn-primary btn-sm', null).replace('</span><span class="sr-only">', `</span>${icon('arrow', 'icon icon-after')}<span class="sr-only">`)}
              ${ext(p.source, t.projects.source, 'btn btn-ghost btn-sm', 'code')}
            </p>
          </div>
        </article>`;
  }).join('');

  const gameChip = (title, videos) => {
    const links = videos
      .map((v, i) => {
        const n = videos.length > 1 ? ` ${i + 1}` : '';
        return `<a class="video-link" href="${v}" target="_blank" rel="noopener"><span>${esc(t.games.unreleased.video + n)}</span><span class="sr-only">: ${esc(title)} ${esc(t.projects.opensNew)}</span></a>`;
      })
      .join(' ');
    return `
        <li><span class="fg-name">${esc(title)}</span><span class="fg-links">${links}</span></li>`;
  };
  const games = GAMES.map((g) => gameChip(g.name, g.videos)).join('');
  const unreleasedGames = UNRELEASED_GAMES.map((g) => gameChip(t.games.unreleased.titles[g.id], g.videos)).join('');

  const f = t.featured;
  const altHref = (lc) => `${siteUrl}${lc}/`;

  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.title)}</title>
<meta name="description" content="${esc(t.description)}">
<link rel="canonical" href="${altHref(code)}">
<link rel="alternate" hreflang="en" href="${altHref('en')}">
<link rel="alternate" hreflang="pt-BR" href="${altHref('pt-BR')}">
<link rel="alternate" hreflang="x-default" href="${siteUrl}">
<meta property="og:type" content="profile">
<meta property="og:title" content="${esc(t.title)}">
<meta property="og:description" content="${esc(t.description)}">
<meta property="og:url" content="${siteUrl}${path}">
<meta property="og:image" content="${siteUrl}media/heloisa.webp">
<meta property="og:locale" content="${code === 'en' ? 'en_US' : 'pt_BR'}">
<meta name="theme-color" content="#fbf5ef">
<link rel="icon" href="${base}favicon.svg" type="image/svg+xml">
<link rel="preload" href="${base}fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${base}fonts/source-serif-4-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${base}styles.css?v=${CSS_VERSION}">
<script>document.documentElement.classList.add('js');</script>
</head>
<body>
<a class="skip" href="#main">${esc(t.skip)}</a>

<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${base}${code}/">
      <span class="monogram" aria-hidden="true">HT</span>
      <span class="brand-name">Heloisa Oller Torres</span>
    </a>
    <nav class="nav" aria-label="${esc(t.nav.label)}">
      <a href="#about">${esc(t.nav.about)}</a>
      <a href="#experience">${esc(t.nav.experience)}</a>
      <a href="#projects">${esc(t.nav.projects)}</a>
      <a href="#contact">${esc(t.nav.contact)}</a>
    </nav>
    <nav class="langs" aria-label="${esc(t.langSwitch)}">${langLinks}</nav>
  </div>
</header>

<main id="main">

  <section class="hero wrap" id="about" aria-labelledby="hero-title">
    <div class="hero-text">
      <p class="eyebrow">${esc(t.hero.eyebrow)}</p>
      <h1 id="hero-title">${esc(t.hero.headline)}${pixel('sparkle', 'deco deco-title')}</h1>
      <p class="hero-name">Heloisa Oller Torres</p>
      <p class="hero-intro">${esc(t.hero.intro)}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#projects">${esc(t.hero.explore)}${icon('arrow', 'icon icon-after')}</a>
        <a class="btn btn-ghost" href="${base}${t.hero.resumeFile}" download type="application/pdf">${icon('download')}<span>${esc(t.hero.resume)}</span><span class="sr-only"> (${esc(t.hero.resumeHint)})</span></a>
        <span class="divider" aria-hidden="true"></span>
        <a class="icon-link" href="${LINKS.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn ${esc(t.projects.opensNew)}">${icon('linkedin')}</a>
        <a class="icon-link" href="${LINKS.github}" target="_blank" rel="noopener" aria-label="GitHub ${esc(t.projects.opensNew)}">${icon('github')}</a>
      </div>
    </div>
    <div class="hero-portrait">
      <figure class="photo-frame portrait">
        ${img('heloisa', t.hero.portraitAlt, 'photo', false)}
        ${pixel('heart', 'deco deco-tr')}
        ${pixel('sparkle', 'deco deco-bl')}
        ${pixel('plus', 'deco deco-bl2', 4)}
      </figure>
      <div class="expertise">
        <h2 class="sr-only">${esc(t.hero.expertiseLabel)}</h2>
        <ul class="chips">${t.hero.expertise.map((e) => `<li>${esc(e)}</li>`).join('')}</ul>
      </div>
    </div>
  </section>

  <div class="wrap"><hr class="rule"></div>

  <div class="wrap two-col">
    <section id="experience" aria-labelledby="exp-title">
      <h2 id="exp-title">${esc(t.experience.heading)}</h2>
      <ol class="timeline">${jobs}
      </ol>
      <p class="meta-line">${esc(t.experience.education)}</p>
      <p class="meta-line">${esc(t.experience.languages)}</p>
    </section>
    <section class="games" aria-labelledby="games-title">
      <h2 id="games-title">${esc(t.games.heading)}${pixel('sparkle', 'deco deco-inline')}</h2>
      <ul class="game-chips with-videos">${games}</ul>
      <p class="caption">${esc(t.games.caption)}</p>
      <h2 class="games-more">${esc(t.games.unreleased.heading)}</h2>
      <ul class="game-chips with-videos">${unreleasedGames}</ul>
      <p class="caption">${esc(t.games.unreleased.caption)}</p>
    </section>
  </div>

  <div class="wrap"><hr class="rule"></div>

  <section class="wrap personal" aria-labelledby="personal-title">
    <figure class="photo-frame luna">
      ${img('luna', t.personal.lunaAlt, 'photo')}
      ${pixel('heart', 'deco deco-tr', 2.5)}
      <figcaption class="pet-tag">${pixel('paw', 'tag-paw', 2)}Luna</figcaption>
    </figure>
    <div class="personal-text">
      <p class="eyebrow">${esc(t.personal.eyebrow)}</p>
      <h2 id="personal-title">${esc(t.personal.heading)}</h2>
      <p>${esc(t.personal.text)}</p>
    </div>
    ${pixel('heart', 'deco deco-corner', 4)}
  </section>

  <div class="wrap"><hr class="rule"></div>

  <section class="wrap" id="projects" aria-labelledby="projects-title">
    <div class="section-head">
      <h2 id="projects-title">${esc(t.projects.heading)}</h2>
      ${pixel('controller', 'deco deco-controller', 4)}
    </div>
    <div class="cards">${cards}
    </div>
    <p class="note">${esc(t.projects.note)}</p>

    <article class="featured" id="web-testing-lab" aria-labelledby="featured-title">
      <div class="featured-body">
        <p class="featured-head"><span id="featured-title" class="featured-name">${esc(FEATURED.name)}</span><span class="status">${esc(f.status)}</span></p>
        <h3>${esc(f.headline)}</h3>
        <p>${esc(f.text)}</p>
        <dl class="facts">${f.facts.map(([n, l]) => `<div><dt>${esc(n)}</dt><dd>${esc(l)}</dd></div>`).join('')}</dl>
        <p class="badges">${f.tags.map((g) => `<span class="badge">${esc(g)}</span>`).join('')}</p>
        <p class="actions">
          ${ext(FEATURED.page, f.primary, 'btn btn-primary', null).replace('</span><span class="sr-only">', `</span>${icon('arrow', 'icon icon-after')}<span class="sr-only">`)}
          ${ext(FEATURED.report, f.report, 'btn btn-ghost', 'external')}
          ${ext(FEATURED.source, t.projects.source, 'btn btn-ghost', 'code')}
        </p>
      </div>
      <div class="featured-thumb">
        ${img('web-testing-lab', f.thumbAlt, 'thumb-img')}
        ${pixel('sparkle', 'deco deco-tr', 3)}
      </div>
    </article>
  </section>

</main>

<footer class="site-footer" id="contact" aria-labelledby="contact-title">
  <div class="wrap footer-inner">
    <div>
      <h2 id="contact-title">${pixel('sparkle', 'deco deco-footer', 3)}${esc(t.contact.heading)}</h2>
      <p>${esc(t.contact.text)}</p>
    </div>
    <p class="footer-links">
      <a href="${LINKS.linkedin}" target="_blank" rel="noopener">${icon('linkedin')}<span>LinkedIn</span><span class="sr-only"> ${esc(t.projects.opensNew)}</span></a>
      <a href="${LINKS.github}" target="_blank" rel="noopener">${icon('github')}<span>GitHub</span><span class="sr-only"> ${esc(t.projects.opensNew)}</span></a>
      <a href="${base}${t.hero.resumeFile}" download type="application/pdf">${icon('download')}<span>${esc(t.hero.resume)}</span></a>
    </p>
  </div>
  <div class="wrap fine-print">© 2026 Heloisa Oller Torres · ${esc(t.footer)}</div>
</footer>

<script>
(function () {
  var KEY = 'lang-switch-position';

  // Switching language: remember the section being read and where it sits on screen,
  // so the other language opens at the same place instead of at the top.
  document.querySelectorAll('.langs a[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('lang', a.dataset.lang); } catch (e) {}
      var anchor = null;
      document.querySelectorAll('main [id]:not(#main), footer[id]').forEach(function (el) {
        if (el.getBoundingClientRect().top <= 120) anchor = el;
      });
      var position = anchor && window.scrollY > 0 ? { id: anchor.id, offset: anchor.getBoundingClientRect().top } : { top: true };
      try { sessionStorage.setItem(KEY, JSON.stringify(position)); } catch (e) {}
      if (location.hash) a.href = a.getAttribute('href') + location.hash;
    });
  });

  // Arriving from a language switch: restore that place instantly, without a scroll animation.
  var saved = null;
  try { saved = JSON.parse(sessionStorage.getItem(KEY)); sessionStorage.removeItem(KEY); } catch (e) {}
  function restore() {
    if (saved.top) return window.scrollTo(0, 0);
    var el = document.getElementById(saved.id);
    if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - saved.offset);
  }
  if (saved) {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    restore();
    // Web fonts change line heights when they arrive, which moves everything below. Keep the place
    // while the layout settles (at most 3 s), unless the visitor starts scrolling.
    var moved = false;
    var stop = function () { moved = true; };
    window.addEventListener('wheel', stop, { once: true, passive: true });
    window.addEventListener('touchstart', stop, { once: true, passive: true });
    window.addEventListener('keydown', stop, { once: true });
    if ('ResizeObserver' in window) {
      var observer = new ResizeObserver(function () { if (!moved) restore(); });
      observer.observe(document.body);
      setTimeout(function () { observer.disconnect(); }, 3000);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (!moved) restore(); });
  }

  // Smooth scrolling only for clicks inside the page, never for arriving on it.
  requestAnimationFrame(function () { document.documentElement.classList.add('smooth'); });
})();
try { if (document.querySelector('.langs [aria-current]')) localStorage.setItem('lang', '${code}'); } catch (e) {}
</script>
</body>
</html>
`;
}

/** Root page: English content, but returns a visitor who explicitly chose Portuguese to their language. */
export function renderRoot(opts) {
  const html = renderPage('en', { ...opts, path: '' });
  const redirect = `<script>try{if(localStorage.getItem('lang')==='pt-BR')location.replace('pt-BR/'+location.hash)}catch(e){}</script>`;
  return html
    .replace('<script>document.documentElement', `${redirect}\n<script>document.documentElement`)
    // On the root page the language links must not overwrite the stored choice by merely loading.
    .replace(`try { if (document.querySelector('.langs [aria-current]')) localStorage.setItem('lang', 'en'); } catch (e) {}\n`, '');
}

export function renderNotFound({ siteUrl }) {
  const en = LOCALES.en.notFound;
  const pt = LOCALES['pt-BR'].notFound;
  // A 404 can be served at any depth, so it uses absolute URLs.
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(en.title)} · Heloisa Oller Torres</title>
<meta name="robots" content="noindex">
<link rel="icon" href="${siteUrl}favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${siteUrl}styles.css?v=${CSS_VERSION}">
</head>
<body class="not-found">
<main id="main" class="wrap nf">
  ${pixel('heart', 'deco nf-heart', 6)}
  <h1>${esc(en.title)}</h1>
  <p>${esc(en.text)}</p>
  <p><a class="btn btn-primary" href="${siteUrl}en/">${esc(en.back)}</a></p>
  <div lang="pt-BR" class="nf-pt">
    <h2>${esc(pt.title)}</h2>
    <p>${esc(pt.text)}</p>
    <p><a class="btn btn-ghost" href="${siteUrl}pt-BR/">${esc(pt.back)}</a></p>
  </div>
</main>
</body>
</html>
`;
}

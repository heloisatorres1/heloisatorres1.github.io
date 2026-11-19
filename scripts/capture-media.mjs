/**
 * Prepares the images the site uses, into public/media/:
 * - project thumbnails: screenshots of the live public demos (or a published report image),
 * - photos: the supplied originals, scaled down proportionally and re-encoded as WebP.
 *   Photos are never cropped, retouched or otherwise changed; only their size and file format.
 *
 * Run with: npm run media   (needs network access to the public demos)
 */
import { chromium } from '@playwright/test';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const OUT = resolve('public/media');
mkdirSync(OUT, { recursive: true });

const THUMBS = [
  { name: 'qa-workspace', url: 'https://heloisatorres1.github.io/qa-workspace/', viewport: { width: 1280, height: 800 }, wait: 1500 },
  { name: 'performance-lab', url: 'https://heloisatorres1.github.io/performance-lab/', viewport: { width: 1280, height: 800 }, wait: 2500 },
  {
    // The bug gallery on the project page: real evidence screenshots, not a summary.
    name: 'web-testing-lab',
    url: 'https://heloisatorres1.github.io/web-testing-lab/#bugs',
    viewport: { width: 1280, height: 800 },
    wait: 2500,
    prepare: (page) => page.evaluate(() => { document.querySelector('nav.toc')?.remove(); document.querySelector('#bugs .bugs')?.scrollIntoView(); window.scrollBy(0, -24); }),
  },
];

/** Plays through Pixel Swarm's first-launch screens on a phone viewport and returns two screens. */
async function pixelSwarmScreens(browser) {
  const page = await (await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })).newPage();
  await page.goto('https://heloisatorres1.github.io/pixel-swarm/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  const click = async (text) => {
    const target = page.getByText(text, { exact: true }).first();
    if (await target.isVisible().catch(() => false)) {
      await target.click();
      await page.waitForTimeout(1500);
    }
  };
  await click('18+');
  await click('Confirm');
  await click('Skip ›');
  const welcome = await page.screenshot();
  await click("Let's play!");
  await page.waitForTimeout(2500);
  const level = await page.screenshot();
  await page.context().close();
  return [welcome, level];
}

/** Encodes a PNG/JPEG buffer as WebP at the given width (height follows the aspect ratio). */
async function toWebp(page, buffer, mime, width, quality = 0.86) {
  const dataUrl = `data:${mime};base64,${buffer.toString('base64')}`;
  const out = await page.evaluate(
    async ({ dataUrl, width, quality }) => {
      const img = new Image();
      img.src = dataUrl;
      await img.decode();
      const scale = Math.min(1, width / img.naturalWidth);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.naturalWidth * scale);
      canvas.height = Math.round(img.naturalHeight * scale);
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      return { url: canvas.toDataURL('image/webp', quality), w: canvas.width, h: canvas.height };
    },
    { dataUrl, width, quality },
  );
  return { data: Buffer.from(out.url.split(',')[1], 'base64'), w: out.w, h: out.h };
}

async function main() {
  const only = process.argv.slice(2);
  const browser = await chromium.launch();
  const encoder = await (await browser.newContext()).newPage();
  const sizes = {};

  for (const t of THUMBS) {
    if (only.length && !only.includes(t.name)) continue;
    const page = await (await browser.newContext({ viewport: t.viewport, colorScheme: 'light' })).newPage();
    await page.goto(t.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(t.wait);
    if (t.prepare) {
      await t.prepare(page);
      await page.waitForTimeout(1500);
    }
    const shot = await page.screenshot();
    const webp = await toWebp(encoder, shot, 'image/png', 800);
    writeFileSync(`${OUT}/${t.name}.webp`, webp.data);
    sizes[t.name] = [webp.w, webp.h];
    console.log(`${t.name}: ${webp.w}x${webp.h}, ${(webp.data.length / 1024) | 0} KB`);
    await page.context().close();
  }

  if (!only.length || only.includes('pixel-swarm')) {
    const [welcome, level] = await pixelSwarmScreens(browser);
    const img = (b) => `<img src="data:image/png;base64,${b.toString('base64')}" style="height:920px;border-radius:28px;box-shadow:0 10px 30px rgba(0,0,0,.35)">`;
    const page = await (await browser.newContext({ viewport: { width: 1600, height: 1000 } })).newPage();
    await page.setContent(`<body style="margin:0;height:1000px;display:flex;gap:56px;align-items:center;justify-content:center;background:#5b2140">${img(welcome)}${img(level)}</body>`);
    const webp = await toWebp(encoder, await page.screenshot(), 'image/png', 800);
    writeFileSync(`${OUT}/pixel-swarm.webp`, webp.data);
    sizes['pixel-swarm'] = [webp.w, webp.h];
    console.log(`pixel-swarm: ${webp.w}x${webp.h}, ${(webp.data.length / 1024) | 0} KB`);
    await page.context().close();
  }

  if (!only.length || only.includes('qa-skills')) {
    // A published report image from the qa-skills repository, cropped to its top part.
    const res = await fetch('https://raw.githubusercontent.com/heloisatorres1/qa-skills/main/docs/report-preview.png');
    const png = Buffer.from(await res.arrayBuffer());
    const page = await (await browser.newContext({ viewport: { width: 1100, height: 688 } })).newPage();
    await page.setContent(`<body style="margin:0;background:#f7f7f5"><img src="data:image/png;base64,${png.toString('base64')}" style="display:block;width:1100px"></body>`);
    const shot = await page.screenshot();
    const webp = await toWebp(encoder, shot, 'image/png', 800);
    writeFileSync(`${OUT}/qa-skills.webp`, webp.data);
    sizes['qa-skills'] = [webp.w, webp.h];
    console.log(`qa-skills: ${webp.w}x${webp.h}, ${(webp.data.length / 1024) | 0} KB`);
    await page.context().close();
  }

  if (!only.length || only.includes('photos')) {
    for (const [name, width] of [['heloisa', 768], ['luna', 720]]) {
      const webp = await toWebp(encoder, readFileSync(`src/photos/${name}.png`), 'image/png', width, 0.9);
      writeFileSync(`${OUT}/${name}.webp`, webp.data);
      sizes[name] = [webp.w, webp.h];
      console.log(`${name}: ${webp.w}x${webp.h}, ${(webp.data.length / 1024) | 0} KB`);
    }
  }

  writeFileSync(`${OUT}/sizes.json`, JSON.stringify(sizes, null, 2) + '\n');
  await browser.close();
}

void main();

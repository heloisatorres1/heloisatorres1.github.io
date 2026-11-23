import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFileSync } from 'node:fs';

const LOCALES = [
  { path: 'en/', lang: 'en', headline: 'I help teams deliver quality experiences.', resume: 'resume/resume-heloisa-oller-torres-en.pdf', other: 'Português (BR)' },
  { path: 'pt-BR/', lang: 'pt-BR', headline: 'Ajudo equipes a entregar experiências de qualidade.', resume: 'resume/curriculo-heloisa-oller-torres-pt-BR.pdf', other: 'English' },
];

for (const l of LOCALES) {
  test.describe(l.lang, () => {
    test(`renders in ${l.lang} with title, lang and alternates @subpath`, async ({ page }) => {
      const failed = [];
      page.on('requestfailed', (r) => failed.push(r.url()));
      page.on('response', (r) => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
      await page.goto(l.path);
      await expect(page.locator('html')).toHaveAttribute('lang', l.lang);
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(l.headline);
      await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
      await expect(page.locator('link[hreflang="pt-BR"]')).toHaveCount(1);
      // Every image is the right one and actually loads, from the root and from a subpath.
      for (const img of await page.locator('img').all()) {
        await img.scrollIntoViewIfNeeded();
        await expect.poll(() => img.evaluate((i) => i.complete && i.naturalWidth > 0), { message: await img.getAttribute('src') }).toBe(true);
      }
      expect(failed, 'failed requests').toEqual([]);
    });

    test(`résumé link serves the ${l.lang} PDF without phone or e-mail @subpath`, async ({ page, request }) => {
      await page.goto(l.path);
      const link = page.locator('.hero-actions a[download]');
      await expect(link).toHaveAttribute('href', `../${l.resume}`);
      const res = await request.get(new URL(l.resume, page.url().replace(l.path, '')).href);
      expect(res.status()).toBe(200);
      expect(res.headers()['content-type']).toBe('application/pdf');
      const pdf = (await res.body()).toString('latin1');
      expect(pdf.startsWith('%PDF')).toBe(true);
      expect(pdf.match(/\/Type\s*\/Page(?!s)/g)?.length, 'the résumé fits on one page').toBe(1);
      // PDF text is compressed, so the check is done on the source the PDF is rendered from.
      const source = readFileSync('src/resume.mjs', 'utf8');
      expect(source, 'no phone number').not.toMatch(/\+\d{1,3}\s*\(?\d{2}\)?\s*\d{4,5}-?\d{4}/);
      expect(source, 'no e-mail address').not.toMatch(/[\w.+-]+@[\w-]+\.[\w.]+/);
      expect(source).toContain('PIGGY: Hunt');
    });

    test(`every external link opens a working page (${l.lang})`, async ({ page, request }) => {
      await page.goto(l.path);
      const hrefs = [...new Set(await page.locator('a[href^="http"]').evaluateAll((as) => as.map((a) => a.href)))];
      expect(hrefs.length).toBeGreaterThan(10);
      for (const href of hrefs) {
        if (href.includes('linkedin.com')) continue; // LinkedIn refuses automated requests (status 999).
        // YouTube pages send headers too large for a plain request; its oEmbed endpoint confirms the video is public.
        const url = href.includes('youtube.com/watch') ? `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(href)}` : href;
        const res = await request.get(url);
        expect(res.status(), href).toBeLessThan(400);
      }
    });

    for (const start of [{ name: 'scrolled by hand', y: 1800 }, { name: 'from the Projects link', hash: '#projects' }]) {
      test(`switching language keeps the place, without scrolling, ${start.name} (${l.lang}) @mobile`, async ({ page }) => {
        await page.goto(l.path + (start.hash ?? ''));
        if (start.y) await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), start.y);
        const before = await page.evaluate(() => window.scrollY);
        expect(before).toBeGreaterThan(500);
        // A real mouse click: Playwright's click() would scroll the page to reach the sticky header first.
        const box = await page.getByRole('navigation', { name: /Language|Idioma/ }).getByRole('link', { name: l.other }).boundingBox();
        await Promise.all([page.waitForURL((u) => !u.pathname.endsWith(l.path)), page.mouse.click(box.x + box.width / 2, box.y + box.height / 2)]);
        await page.waitForLoadState('load');
        const positions = [];
        for (let i = 0; i < 8; i++) {
          positions.push(await page.evaluate(() => window.scrollY));
          await page.waitForTimeout(60);
        }
        await expect(page.locator('html')).not.toHaveAttribute('lang', l.lang);
        // Arrives where the visitor was (the two languages differ by a few lines) and does not animate there.
        expect(Math.abs(positions[0] - before), `first position ${positions[0]} vs ${before}`).toBeLessThan(150);
        expect(Math.max(...positions) - Math.min(...positions), `positions ${positions}`).toBeLessThan(60);
      });
    }

    test(`no critical or serious accessibility violations (${l.lang})`, async ({ page }) => {
      await page.goto(l.path);
      const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
      const serious = violations.filter((v) => ['critical', 'serious'].includes(v.impact)).map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
      expect(serious).toEqual([]);
    });

    test(`fits a 320 px phone without horizontal scroll (${l.lang}) @mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 700 });
      await page.goto(l.path);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
      const small = await page.locator('a.btn, .icon-link, .footer-links a').evaluateAll((els) =>
        els.filter((e) => e.getBoundingClientRect().height < 44).map((e) => e.textContent.trim() || e.getAttribute('aria-label')),
      );
      expect(small, 'tap targets under 44 px').toEqual([]);
    });
  });
}

test('photos are the supplied originals, uncropped (same aspect ratio)', async ({ page }) => {
  await page.goto('en/');
  for (const [cls, w, h] of [['.portrait .photo', 768, 850], ['.luna .photo', 1440, 1600]]) {
    const img = page.locator(cls);
    await img.scrollIntoViewIfNeeded();
    const box = await img.boundingBox();
    expect(Math.abs(box.width / box.height - w / h), cls).toBeLessThan(0.01);
    await expect(img).toHaveCSS('object-fit', 'fill');
  }
});

test('keyboard: skip link is the first stop and moves focus to the content', async ({ page }) => {
  await page.goto('en/');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
});

test('decorations are hidden from screen readers', async ({ page }) => {
  await page.goto('en/');
  const exposed = await page.locator('svg.pixel').evaluateAll((els) => els.filter((e) => e.getAttribute('aria-hidden') !== 'true').length);
  expect(exposed).toBe(0);
});

test('root shows English, and returns a visitor who chose Portuguese to pt-BR @subpath', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.getByRole('link', { name: 'Português (BR)' }).click();
  await expect(page).toHaveURL(/pt-BR\/$/);
  await page.goto('./');
  await expect(page).toHaveURL(/pt-BR\/$/);
});

test('unknown pages get the bilingual 404 @subpath', async ({ page }) => {
  const res = await page.goto('does-not-exist/');
  expect(res.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Página não encontrada' })).toBeVisible();
});

test('reduced motion turns off smooth scrolling and transitions', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('en/');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
  await expect(page.locator('.btn-primary').first()).toHaveCSS('transition-duration', '0s');
});

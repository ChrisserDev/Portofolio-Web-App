import { test } from '@playwright/test';

/**
 * Screenshot capture for UI Verify (https://uiverify.ai).
 * Run with `npx playwright test tests/visual.spec.ts --project=chromium`,
 * then upload the ./screenshots directory:
 *   npx uiverify@1.2.0 upload --screenshots ./screenshots
 *
 * The database-backed /projectss page is intentionally excluded — it needs
 * a live DATABASE_URL that CI doesn't currently provision.
 */
const pages = [
  { name: 'home', path: '/' },
  { name: 'experience', path: '/experience' },
  { name: 'skills', path: '/skills' },
  { name: 'blog', path: '/blog' },
];

for (const { name, path } of pages) {
  test(`capture ${name}`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  });
}

import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const baseURL = process.env.BASE_URL || 'http://127.0.0.1:3000';
const output = process.env.ARTIFACT_DIR || '/tmp/portfolio-space-check';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.addInitScript(() => {
    window.spaceDraws = 0;
    for (const method of ['drawElements', 'drawArrays']) {
      const original = WebGL2RenderingContext.prototype[method];
      WebGL2RenderingContext.prototype[method] = function (...args) {
        window.spaceDraws++;
        return original.apply(this, args);
      };
    }
  });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.locator('[data-space-ready="true"]').waitFor();
  await page.waitForTimeout(1300);
  const canvas = page.locator('.space-canvas');
  const first = await canvas.screenshot();
  await page.mouse.move(1250, 280, { steps: 12 });
  await page.waitForTimeout(1300);
  assert.notDeepEqual(await canvas.screenshot(), first, 'The actual 3D galaxy responds to input');
  const settled = await page.evaluate(() => window.spaceDraws);
  await page.waitForTimeout(300);
  assert.equal(await page.evaluate(() => window.spaceDraws), settled, 'No idle GPU rendering');
  await page.screenshot({ path: `${output}/desktop-3d-hero.png` });

  const star = page.locator('.space-star').nth(22);
  const starPoint = await star.evaluate((element) => ({
    x: (Number(element.getAttribute('cx')) / 1000) * innerWidth,
    y: (Number(element.getAttribute('cy')) / 1000) * innerHeight,
  }));
  await page.mouse.move(starPoint.x, starPoint.y);
  await page.waitForTimeout(700);
  assert(
    await star.evaluate((element) => {
      const transform = element.transform.baseVal.consolidate()?.matrix;
      return transform && Math.hypot(transform.e, transform.f) > 8;
    }),
    'A star directly under the cursor scatters away',
  );
  await page.evaluate(() => window.dispatchEvent(new Event('blur')));
  await page.waitForTimeout(900);
  assert.equal(
    await page.locator('.space-star[transform]').count(),
    0,
    'Stars settle back after the pointer leaves',
  );

  const work = page.locator('.employer-group').first();
  await work.scrollIntoViewIfNeeded();
  const bounds = await work.boundingBox();
  await page.mouse.move(bounds.x + 30, bounds.y + 30);
  await page.waitForTimeout(500);
  assert.match(
    await work.getAttribute('style'),
    /--tilt-x/,
    'Work sections respond with perspective',
  );
  assert(
    await work.evaluate((element) => {
      const matrix = new DOMMatrix(getComputedStyle(element).transform);
      return Math.abs(matrix.m13) + Math.abs(matrix.m23) > 0.001;
    }),
    'Work perspective is actually applied',
  );
  await page.mouse.move(0, 0);
  await page.waitForTimeout(400);
  assert(!/--tilt-x/.test((await work.getAttribute('style')) || ''), 'Perspective resets on exit');
  await page.locator('.space-canvas').waitFor({ state: 'detached' });
  await page.screenshot({ path: `${output}/desktop-work.png` });
  await page.locator('#superfast3d').scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${output}/desktop-superfast3d.png` });

  for (const selector of ['.tool', '.writing-list article']) {
    const surface = page.locator(selector).first();
    await surface.scrollIntoViewIfNeeded();
    const surfaceBounds = await surface.boundingBox();
    await page.mouse.move(surfaceBounds.x + 24, surfaceBounds.y + 24);
    await page.waitForTimeout(500);
    assert(
      await surface.evaluate((element) => {
        const matrix = new DOMMatrix(getComputedStyle(element).transform);
        return Math.abs(matrix.m13) + Math.abs(matrix.m23) > 0.001;
      }),
      `${selector} uses 3D perspective alongside its scroll entrance`,
    );
    await page.mouse.move(0, 0);
  }

  await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
  await page.locator('[data-space-ready="true"]').waitFor();
  await canvas.evaluate((element) =>
    element.dispatchEvent(new Event('webglcontextlost', { cancelable: true })),
  );
  await canvas.waitFor({ state: 'detached' });
  assert.equal(
    await page.locator('[data-space-ready]').count(),
    0,
    'Context loss restores the image',
  );
  await page.screenshot({ path: `${output}/desktop-fallback.png` });
  assert.deepEqual(errors, [], 'No runtime or shader errors');

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    reducedMotion: 'reduce',
  });
  await mobile.goto(baseURL, { waitUntil: 'networkidle' });
  assert.equal(await mobile.locator('.space-canvas').count(), 0, 'Reduced motion avoids WebGL');
  await mobile.mouse.move(130, 240);
  assert.equal(
    await mobile.locator('.space-star[transform]').count(),
    0,
    'Reduced motion keeps stars still',
  );
  assert.equal(await mobile.evaluate(() => document.documentElement.scrollWidth), 390);
  await mobile.screenshot({ path: `${output}/mobile-hero.png` });
  console.log(
    `PASS: 3D shader rendering, pointer response, star repulsion and return, idle GPU stop, work depth, viewport disposal, context loss, reduced motion. Screenshots: ${output}`,
  );
} finally {
  await browser.close();
}

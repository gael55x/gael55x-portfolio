import { mkdir, readFile } from 'node:fs/promises';
import { chromium } from 'playwright';

// Render the production scene directly at rest. Browser routing serves only these
// local modules; no dev route or generation flag is shipped to portfolio visitors.
const root = new URL('../', import.meta.url);
const output = process.env.ARTIFACT_DIR || '/tmp/portfolio-study';
const browser = await chromium.launch({
  ...(process.env.BROWSER_CHANNEL && { channel: process.env.BROWSER_CHANNEL }),
});
try {
  await mkdir(output, { recursive: true });
  const page = await browser.newPage({
    viewport: { width: 880, height: 544 },
    deviceScaleFactor: 1.5,
  });
  for (const file of ['three.module.js', 'three.core.js']) {
    await page.route(`**/${file}`, async (route) =>
      route.fulfill({
        contentType: 'text/javascript',
        body: await readFile(new URL(`node_modules/three/build/${file}`, root), 'utf8'),
      }),
    );
  }
  await page.route('**/scene.js', async (route) =>
    route.fulfill({
      contentType: 'text/javascript',
      body: (await readFile(new URL('lib/badgeScene.js', root), 'utf8')).replace(
        "'three'",
        "'/three.module.js'",
      ),
    }),
  );
  await page.route('**/scene-preview', (route) =>
    route.fulfill({
      contentType: 'text/html',
      body: `<style>body{margin:0;background:#1f2531}canvas{display:block;width:880px;height:544px}</style>
      <canvas></canvas><script type="module">
      import {createBadgeScene} from '/scene.js';
      window.study = createBadgeScene(document.querySelector('canvas'));
      </script>`,
    }),
  );
  // Every request is fulfilled above; a running localhost server is unnecessary.
  await page.goto('http://127.0.0.1:3000/scene-preview');
  await page.waitForFunction(() => window.study);
  await page
    .locator('canvas')
    .screenshot({ path: new URL('public/assets/badge-study-poster.png', root).pathname });
  await page.screenshot({ path: `${output}/rest.png` });
  await page.evaluate(() => window.study.play());
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${output}/scan.png` });
  await page.waitForTimeout(1900);
  await page.screenshot({ path: `${output}/end.png` });
  console.log(`Poster updated; inspect ${output}, then rebuild the portfolio.`);
} finally {
  await browser.close();
}

import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

// Run against `npm run build && npm start`. Chrome is optional; CI can install Chromium.
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:3000';
const output = process.env.ARTIFACT_DIR || '/tmp/portfolio-browser-check';
const browser = await chromium.launch({
  ...(process.env.BROWSER_CHANNEL && { channel: process.env.BROWSER_CHANNEL }),
});
await mkdir(output, { recursive: true });
const errors = [];
const report = [];
const manifest = JSON.parse(await readFile('.next/react-loadable-manifest.json', 'utf8'));
const sceneFiles = Object.entries(manifest)
  .filter(([key]) => key.includes('badgeScene'))
  .flatMap(([, value]) => value.files);
assert(sceneFiles.length > 0, 'The optional 3D scene must be split into its own chunk');

try {
  for (const [name, width, height] of [
    ['desktop', 1440, 1000],
    ['laptop', 1280, 800],
    ['tablet', 768, 1024],
    ['mobile', 390, 844],
    ['small-mobile', 320, 740],
    ['small-tablet', 601, 900],
    ['breakpoint', 961, 900],
    ['wide', 1920, 1080],
  ]) {
    const page = await (
      await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
    ).newPage();
    const requests = [];
    page.on('pageerror', (error) => errors.push(`${name}: ${error.message}`));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(`${name}: ${message.text()}`);
    });
    page.on('request', (request) => requests.push(request.url()));
    await page.goto(baseURL, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('h1').count(), 1);
    assert.match(
      await page.locator('h1').evaluate((el) => getComputedStyle(el).fontFamily),
      /JetBrains/,
      'The original mono heading must actually render',
    );
    assert.equal(
      await page.locator('#hero-title').innerText(),
      'I ship production AI and security systems and publish the proof.',
    );
    assert.equal(
      await page.locator('canvas').count(),
      0,
      'No WebGL canvas before explicit activation',
    );
    assert(
      !requests.some((url) => sceneFiles.some((file) => url.includes(file))),
      'Three.js must not load initially',
    );
    assert(
      await page
        .locator('.hero-actions')
        .evaluate((el) => el.getBoundingClientRect().bottom < innerHeight),
      'Primary CTAs should be in the first screen',
    );
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to content');
    await page.keyboard.press('Enter');
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'work', exact: true })
      .click();
    assert(
      await page
        .locator('#work')
        .evaluate(
          (el) =>
            el.getBoundingClientRect().top >=
            document.querySelector('header').getBoundingClientRect().bottom,
        ),
      'Anchor heading must clear sticky navigation',
    );
    for (const href of await page
      .locator('a[href^="#"], a[href^="/#"]')
      .evaluateAll((links) => links.map((a) => a.getAttribute('href')))) {
      assert(await page.locator(`[id="${href.split('#')[1]}"]`).count(), `Missing anchor ${href}`);
    }
    // Load all native lazy images before visual inspection and image checks.
    for (const image of await page.locator('main img').all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((img) => img.decode());
    }
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth),
      width,
      `${name}: horizontal overflow`,
    );
    for (const details of await page.locator('details').all()) {
      await details.locator('summary').focus();
      await page.keyboard.press('Enter');
      assert.equal(await details.getAttribute('open'), '', 'Disclosure opens from keyboard');
    }
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    assert.deepEqual(
      axe.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      [],
      `${name}: accessibility violations`,
    );
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth),
      width,
      `${name}: expanded content overflows`,
    );
    await page.locator('details').evaluateAll((items) =>
      items.forEach((item) => {
        item.open = false;
      }),
    );
    await page
      .locator('summary')
      .last()
      .evaluate((el) => el.blur());
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: `${output}/${name}-hero.png` });
    await page.screenshot({ path: `${output}/${name}-full.png`, fullPage: true });
    for (const id of ['work', 'open-source', 'experience', 'writing', 'about', 'contact']) {
      await page.evaluate((id) => document.getElementById(id).scrollIntoView(), id);
      assert(
        await page
          .locator(`#${id} h2`)
          .evaluate(
            (el) =>
              el.getBoundingClientRect().top >=
              document.querySelector('.site-header').getBoundingClientRect().bottom,
          ),
        `${name}: ${id} heading must clear the sticky navigation`,
      );
      await page.screenshot({ path: `${output}/${name}-${id}.png` });
    }
    report.push({
      name,
      width,
      height,
      pageHeight: await page.evaluate(() => document.body.scrollHeight),
      accessibilityViolations: axe.violations.length,
    });
    await page.context().close();
  }

  const page = await (
    await browser.newContext({ viewport: { width: 1280, height: 900 } })
  ).newPage();
  page.on('pageerror', (error) => errors.push(`3D: ${error.message}`));
  await page.addInitScript(() => {
    const clear = WebGL2RenderingContext.prototype.clear;
    window.studyFrames = 0;
    WebGL2RenderingContext.prototype.clear = function (...args) {
      window.studyFrames += 1;
      return clear.apply(this, args);
    };
  });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  if (
    await page.evaluate(
      () =>
        CSS.supports('interpolate-size: allow-keywords') &&
        CSS.supports('selector(details::details-content)'),
    )
  ) {
    const details = page.locator('.case-notes').first();
    const closedHeight = (await details.boundingBox()).height;
    assert.equal(
      await details.evaluate((el) =>
        getComputedStyle(el, '::details-content').transitionDuration.split(',')[0].trim(),
      ),
      '0.24s',
      'Normal motion enables the disclosure transition',
    );
    await details.locator('summary').click();
    // Chrome does not expose ::details-content transitions through getAnimations().
    await page.waitForFunction(() => {
      const el = document.querySelector('.case-notes');
      return (
        el.querySelector('dl').getBoundingClientRect().bottom <= el.getBoundingClientRect().bottom
      );
    });
    assert((await details.boundingBox()).height > closedHeight, 'Disclosure content expands fully');
    await page.screenshot({ path: `${output}/desktop-details-open.png` });
    await details.locator('summary').click();
    await page.waitForFunction(
      (height) =>
        Math.abs(document.querySelector('.case-notes').getBoundingClientRect().height - height) < 1,
      closedHeight,
    );
    assert(
      Math.abs((await details.boundingBox()).height - closedHeight) < 1,
      'Disclosure closes without leftover space',
    );
    const archive = page.locator('.project-archive');
    await archive.locator('summary').focus();
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => {
      const el = document.querySelector('.project-archive');
      return (
        el.querySelector('ul').getBoundingClientRect().bottom <= el.getBoundingClientRect().bottom
      );
    });
    await page.keyboard.press('Tab');
    assert(
      await archive
        .locator('a')
        .first()
        .evaluate((el) => el.matches(':focus-visible')),
    );
    assert.equal(
      await archive.evaluate((el) => getComputedStyle(el, '::details-content').overflowX),
      'visible',
      'Disclosure animation must not clip archive focus rings horizontally',
    );
    await archive
      .locator('a')
      .first()
      .evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await page.screenshot({ path: `${output}/desktop-archive-focus.png` });
    await archive.locator('summary').press('Enter');
  }
  if (await page.evaluate(() => CSS.supports('animation-timeline: scroll()'))) {
    const heading = page.locator('.section-heading').first();
    const headingTop = await heading.evaluate(
      (el) =>
        el.getBoundingClientRect().top +
        scrollY -
        new DOMMatrix(getComputedStyle(el).transform).m42,
    );
    await page.evaluate(
      (top) => scrollTo({ top: top - innerHeight + 60, behavior: 'instant' }),
      headingTop,
    );
    await page.evaluate(
      () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
    );
    assert(
      await heading.evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m42 > 0.5),
      'Heading entrance remains visible beyond the bottom edge',
    );
    await page.evaluate(
      (top) => scrollTo({ top: top - innerHeight * 0.55, behavior: 'instant' }),
      headingTop,
    );
    await page.evaluate(
      () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
    );
    assert(
      await heading.evaluate(
        (el) => Math.abs(new DOMMatrix(getComputedStyle(el).transform).m42) < 0.1,
      ),
      'Heading settles before the reading position',
    );
    const startProgress = await page
      .locator('.site-header')
      .evaluate((el) => getComputedStyle(el, '::after').transform);
    const studyTop = await page
      .locator('.badge-study')
      .evaluate((el) => el.getBoundingClientRect().top + scrollY);
    await page.evaluate(
      (top) => scrollTo({ top: top - innerHeight * 0.8, behavior: 'instant' }),
      studyTop,
    );
    await page.evaluate(() => new Promise(requestAnimationFrame));
    const entryTransform = await page
      .locator('.badge-study')
      .evaluate((el) => getComputedStyle(el).transform);
    await page.evaluate((top) => scrollTo({ top: top - 150, behavior: 'instant' }), studyTop);
    await page.evaluate(() => new Promise(requestAnimationFrame));
    assert.notEqual(
      await page.locator('.badge-study').evaluate((el) => getComputedStyle(el).transform),
      entryTransform,
      'Badge entrance responds to scrolling',
    );
    assert.notEqual(
      await page
        .locator('.site-header')
        .evaluate((el) => getComputedStyle(el, '::after').transform),
      startProgress,
      'Reading line tracks page progress',
    );
    assert.equal(await page.locator('canvas').count(), 0, 'Scrolling alone must not start WebGL');
    const photo = page.locator('.speaking-photo img');
    await photo.scrollIntoViewIfNeeded();
    const photoPose = await photo.evaluate((el) => getComputedStyle(el).transform);
    await page.evaluate(() => scrollBy({ top: 160, behavior: 'instant' }));
    await page.evaluate(() => new Promise(requestAnimationFrame));
    assert.notEqual(
      await photo.evaluate((el) => getComputedStyle(el).transform),
      photoPose,
      'Speaking photograph has bounded scroll depth',
    );
  }
  await page.locator('.hero-portrait').hover();
  await page.waitForFunction(
    () => getComputedStyle(document.querySelector('.portrait-frame')).transform !== 'none',
  );
  let releaseScene;
  const sceneGate = new Promise((resolve) => {
    releaseScene = resolve;
  });
  await page.route(`**/${sceneFiles[0]}`, async (route) => {
    await sceneGate;
    await route.continue();
  });
  const trigger = page.getByRole('button', {
    name: 'Play the badge study: physical scan, detected geometry, production asset',
  });
  await trigger.hover();
  await page.getByRole('status').filter({ hasText: 'Loading the badge study' }).waitFor();
  assert.equal(
    await page.locator('canvas').evaluate((el) => getComputedStyle(el).opacity),
    '0',
    'Slow 3D loading must leave the static poster visible',
  );
  assert(await page.locator('.study-stage img').isVisible());
  releaseScene();
  await page.getByRole('status').filter({ hasText: '3D ready' }).waitFor();
  const canvas = page.locator('canvas');
  const firstScan = await canvas.screenshot();
  await page.waitForTimeout(2900);
  assert.notDeepEqual(
    await canvas.screenshot(),
    firstScan,
    'Hover alone plays the scan-to-vector sequence',
  );
  const initial = await canvas.screenshot();
  const bounds = await trigger.boundingBox();
  const framesBeforeHover = await page.evaluate(() => window.studyFrames);
  await page.mouse.move(bounds.x + bounds.width * 0.8, bounds.y + bounds.height * 0.4, {
    steps: 30,
  });
  await page.waitForFunction((before) => window.studyFrames > before + 1, framesBeforeHover);
  await page.waitForTimeout(500);
  assert.notDeepEqual(
    await canvas.screenshot(),
    initial,
    'Hover must change the geometry without a click',
  );
  const settledFrames = await page.evaluate(() => window.studyFrames);
  await page.waitForTimeout(250);
  assert.equal(
    await page.evaluate(() => window.studyFrames),
    settledFrames,
    'Hover easing must stop rendering once settled',
  );
  await page.mouse.move(bounds.x + bounds.width * 0.2, bounds.y + bounds.height * 0.7);
  await canvas.evaluate((el) => {
    el.dataset.reuseCheck = 'original';
  });
  await page.mouse.move(0, 0);
  await page.waitForTimeout(700);
  const graceFrames = await page.evaluate(() => window.studyFrames);
  await page.waitForTimeout(250);
  assert.equal(
    await page.evaluate(() => window.studyFrames),
    graceFrames,
    'No rendering during the re-entry grace period',
  );
  await trigger.hover();
  assert.equal(
    await canvas.getAttribute('data-reuse-check'),
    'original',
    'Quick re-entry reuses the renderer',
  );
  await page.mouse.move(0, 0);
  await canvas.waitFor({ state: 'detached' });
  assert.equal(await canvas.count(), 0, 'Retraction releases WebGL');
  await trigger.focus();
  await page.keyboard.press('Enter');
  await page.getByRole('status').filter({ hasText: '3D ready' }).waitFor();
  await page.waitForTimeout(2900);
  const keyboardInitial = await canvas.screenshot();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  assert.notDeepEqual(
    await canvas.screenshot(),
    keyboardInitial,
    'Keyboard activation replays the scan',
  );
  await page.locator('.pipeline').scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${output}/desktop-3d.png` });
  const threeAxe = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();
  assert.deepEqual(
    threeAxe.violations.map((v) => v.id),
    [],
  );
  await page
    .locator('canvas')
    .evaluate((canvas) =>
      canvas.dispatchEvent(new Event('webglcontextlost', { cancelable: true })),
    );
  await page.getByRole('status').filter({ hasText: 'interrupted' }).waitFor();
  assert.equal(await canvas.count(), 0, 'Context loss restores the static study');
  await page.close();

  const reduced = await (
    await browser.newContext({
      viewport: { width: 390, height: 844 },
      reducedMotion: 'reduce',
      hasTouch: true,
      isMobile: true,
    })
  ).newPage();
  await reduced.goto(baseURL);
  assert.equal(
    await reduced
      .locator('.section-heading')
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
    'none',
    'Reduced motion disables section entry',
  );
  assert.equal(
    await reduced
      .locator('.case-notes')
      .first()
      .evaluate((el) => getComputedStyle(el, '::details-content').transitionDuration),
    '0s',
    'Reduced motion disables disclosure transitions',
  );
  assert.equal(
    await reduced.locator('.badge-study').evaluate((el) => getComputedStyle(el).animationName),
    'none',
    'Reduced motion keeps the badge entrance static',
  );
  assert.equal(
    await reduced
      .locator('.site-header')
      .evaluate((el) => getComputedStyle(el, '::after').animationName),
    'none',
    'Reduced motion disables the reading animation',
  );
  await reduced.locator('.hero-portrait').hover();
  assert.equal(
    await reduced
      .locator('.speaking-photo img')
      .evaluate((el) => getComputedStyle(el).animationName),
    'none',
    'Reduced motion disables photograph depth',
  );
  assert.equal(
    await reduced.locator('.portrait-frame').evaluate((el) => getComputedStyle(el).transform),
    'none',
    'Reduced motion keeps portrait static',
  );
  const reducedTrigger = reduced.getByRole('button', {
    name: 'Play the badge study: physical scan, detected geometry, production asset',
  });
  await reducedTrigger.hover();
  assert.equal(
    await reduced.locator('canvas').count(),
    0,
    'Reduced motion does not activate 3D on hover',
  );
  await reducedTrigger.tap();
  await reduced.getByRole('status').filter({ hasText: '3D ready' }).waitFor();
  const touchInitial = await reduced.locator('canvas').screenshot();
  await reducedTrigger.tap();
  assert.deepEqual(
    await reduced.locator('canvas').screenshot(),
    touchInitial,
    'Reduced motion keeps a fixed endpoint on repeated taps',
  );
  assert.equal(await reduced.evaluate(() => document.documentElement.scrollWidth), 390);
  assert.equal(
    await reduced.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),
    'auto',
  );
  await reduced.screenshot({ path: `${output}/mobile-3d.png` });
  await reduced.locator('.pipeline-caption').tap();
  assert.equal(
    await reduced.locator('canvas').count(),
    0,
    'Touching outside the study releases WebGL without relying on focus',
  );
  await reduced.close();

  const touch = await (
    await browser.newContext({
      viewport: { width: 390, height: 844 },
      hasTouch: true,
      isMobile: true,
    })
  ).newPage();
  await touch.goto(baseURL);
  const touchTrigger = touch.locator('.study-trigger');
  await touchTrigger.scrollIntoViewIfNeeded();
  assert.equal(await touch.locator('canvas').count(), 0, 'Touch scrolling never starts WebGL');
  await touchTrigger.tap();
  await touch.locator('.study-stage[data-phase="ready"]').waitFor();
  const touchStart = await touch.locator('canvas').screenshot();
  await touch.waitForTimeout(2900);
  assert.notDeepEqual(
    await touch.locator('canvas').screenshot(),
    touchStart,
    'A tap plays the full transformation',
  );
  await touchTrigger.tap();
  await touch.waitForTimeout(900);
  await touch.emulateMedia({ reducedMotion: 'reduce' });
  await touch.locator('canvas').waitFor({ state: 'detached' });
  await touchTrigger.tap();
  await touch.locator('.study-stage[data-phase="ready"]').waitFor();
  await touch.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
  await touch.locator('canvas').waitFor({ state: 'detached' });
  await touch.close();

  const zoom = await (
    await browser.newContext({ viewport: { width: 390, height: 844 } })
  ).newPage();
  await zoom.goto(baseURL);
  await zoom.evaluate(() => {
    document.documentElement.style.fontSize = '200%';
  });
  assert.equal(
    await zoom.evaluate(() => document.documentElement.scrollWidth),
    390,
    '200% text must reflow without horizontal overflow',
  );
  await zoom.screenshot({ path: `${output}/mobile-text-200.png` });
  await zoom.close();

  const noWebGL = await (await browser.newContext()).newPage();
  await noWebGL.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      return type.startsWith('webgl') ? null : original.call(this, type, ...args);
    };
  });
  await noWebGL.goto(baseURL);
  await noWebGL
    .getByRole('button', {
      name: 'Play the badge study: physical scan, detected geometry, production asset',
    })
    .click();
  await noWebGL.getByRole('status').filter({ hasText: 'unavailable' }).waitFor();
  assert.equal(await noWebGL.locator('canvas').count(), 0);
  await noWebGL.close();

  const noJS = await (
    await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
  ).newPage();
  await noJS.goto(baseURL);
  assert(
    await noJS.locator('h1').evaluate((el) => {
      for (let node = el; node; node = node.parentElement)
        if (getComputedStyle(node).opacity === '0') return false;
      return true;
    }),
    'Headline must remain visible without hydration',
  );
  assert.equal(
    await noJS
      .getByRole('button', {
        name: 'Play the badge study: physical scan, detected geometry, production asset',
      })
      .isVisible(),
    false,
  );
  await noJS.locator('#projects summary').click();
  assert.equal(await noJS.locator('#projects').getAttribute('open'), '');
  for (const route of ['/robots.txt', '/sitemap.xml', '/opengraph-image.png', '/favicon.svg']) {
    assert.equal(
      (await noJS.request.get(`${baseURL}${route}`)).status(),
      200,
      `Metadata route ${route}`,
    );
  }
  assert.equal(
    await noJS.locator('link[rel="canonical"]').getAttribute('href'),
    'https://gailleamolong.vercel.app',
  );
  const resume = await noJS.request.get(`${baseURL}/assets/resume/Amolong_Gaille_Resume.pdf`);
  assert.equal(resume.status(), 200);
  assert.match(resume.headers()['content-type'], /pdf/);
  await noJS.screenshot({ path: `${output}/mobile-no-js.png` });
  const missing = await noJS.goto(`${baseURL}/not-a-page`);
  assert.equal(missing.status(), 404);
  await noJS.getByRole('link', { name: 'Back to the portfolio' }).click();
  assert.equal(new URL(noJS.url()).pathname, '/');
  await noJS.close();
  assert.deepEqual(errors, [], 'Unexpected browser errors');
  await writeFile(
    `${output}/report.json`,
    JSON.stringify({ viewports: report, errors, sceneFiles }, null, 2),
  );
  console.log(
    JSON.stringify(
      {
        result: 'PASS',
        viewports: report,
        checks:
          'keyboard, anchors, disclosures, images, axe, overflow, 3D hover/keyboard/touch/context loss/unavailable fallback, no-JS, PDF, 404',
        output,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}

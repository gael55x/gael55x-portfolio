# Gaille Amolong — portfolio

Production AI and security systems, with public proof.
Live site: [gailleamolong.vercel.app](https://gailleamolong.vercel.app).

## Development

Node.js 22 or newer.

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run format:check
npx knip
npx --no-install snapline scan
npm run build
npm start
# In another terminal:
npx playwright install chromium
npm run test:browser
```

To use installed Chrome: `BROWSER_CHANNEL=chrome npm run test:browser`.
`BASE_URL` changes the test origin; `ARTIFACT_DIR` changes the output directory
(default `/tmp/portfolio-browser-check`). Tests expect a production build.
They cover eight widths, actual heading fonts, overflow, native disclosures,
keyboard navigation, axe accessibility checks, reduced motion, hover/touch/keyboard
3D, resource release, WebGL failure, no-JS content, metadata, résumé and 404 routing.
There is no separate TypeScript or unit-test suite; the repository is JavaScript.

Knip resolves the same `@/*` alias as Next. The single ignored dependency is
Snapline, which is invoked by the existing `.claude/settings.json` lifecycle hooks.
No application files or exports are excluded. Browser tests and build checks remain
the authority for dynamically loaded scene behavior.

## Design and content

This is a refinement of the original dark portfolio: JetBrains Mono headings,
Inter reading text, slate background, warm emphasis, blue evidence figures,
numbered navigation, original headline and project messaging, and spatial portrait.
Longer project explanations use native disclosures. Four case studies follow the original hero order and lead into
public tools, a compact project archive, employment chronology, writing and About.

Essential content is server rendered. The portrait's depth uses CSS with no global
pointer listeners; hover tilt is disabled on touch and under reduced motion.
Vercel Analytics is included only in Vercel builds. Responsive images are optimized
by Next. The share card is static; robots and sitemap use the verified live domain.

Professional outcomes are self-reported. Original activity figures are explicitly
dated July 2026. Public benchmark claims link to their methodology and retain the
measurement date, fixture scope, and tradeoffs. Keep that context when updating copy.
Contact/résumé paths live in `data/resume.js`. Changing the primary domain requires
updating layout metadata, robots, and sitemap together.

### Hover-driven 3D

`components/BadgeStudy.jsx` is the only custom client component. A static poster
shows the conceptual scan/contour/output composition. Hover loads Three.js and
pointer movement changes the view. Tap or Enter provides an alternative rotation
control. Leaving the study with a mouse, moving focus away, or touching outside disposes
the renderer. Reduced
motion never loads WebGL just from hover; deliberate activation changes the view
immediately. No auto-rotation, animation loop, textures, shadows or model downloads.

`lib/badgeScene.js` owns the imperative WebGL lifecycle: rendering, resizing and
resource disposal. Pointer events schedule at most one render per animation frame;
there is no frame work while idle. Device pixel ratio is capped at 1.5.

The poster is captured from the same scene and imported statically, so its URL is
content-hashed. Regenerate it with `UPDATE_POSTER=1 npm run test:browser` after a scene
change, inspect the PNG, and rebuild before the final browser run.

### Dependencies

Next 15.5.25 / React 19 replace the vulnerable Next 14 baseline. Next's PostCSS
version is overridden to a patched range and verified by a clean install.
All styling and the small native-element reset live in `app/globals.css`. Tailwind,
its unused theme/build configuration, Framer Motion, and obsolete media were removed.

A native CSS reading-progress line follows the document, and the badge study has a
small scroll-linked entrance on fine-pointer devices. Neither effect hides content
or loads WebGL. Unsupported browsers and reduced motion retain the static layout.

## Review evidence

- [Audit and direction](docs/design/audit.md)
- [Final validation and screenshots](docs/design/validation.md)

One cohesive PR targets `main`. Do not merge automatically. A hosting integration
may create its normal PR preview; local tests do not prove a production deployment.

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
npm run test:scene
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
keyboard navigation, disclosure transitions, axe accessibility checks, reduced motion, hover/touch/keyboard
3D, resource release, WebGL failure, no-JS content, metadata, résumé and 404 routing.
A focused Node scene check controls frame timestamps to reproduce continuous-input
timing bugs without a GPU. There is no separate TypeScript suite; this repository is JavaScript.

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
shows the relief emblem on its scan bed. Hover loads Three.js and plays Fable's
2.7-second scan-to-vector sequence; pointer movement changes the view. Tap or
Enter plays/replays it. Leaving retracts the geometry over 450ms before releasing
the renderer after a 1.5-second grace period with no rendering. Quick re-entry/replay passes through rest without a hard reset.

Reduced motion keeps the poster on hover and shows a fixed endpoint on deliberate
activation. Scrolling alone never loads WebGL, including on touch. Leaving the
viewport, hiding the tab, changing the motion preference, or losing the context
releases resources. No persistent idle render loop or external model downloads.

`lib/badgeScene.js` owns the stateful GPU lifecycle and finite choreography.
A capped 1.5 DPR and one 1024px shadow map provide contact and depth. The scene uses
procedural geometry and marker patterns, explicitly conceptual rather than a real
ArUco dictionary or production scan. No new animation framework.

After changing the scene, run `BROWSER_CHANNEL=chrome npm run render:study` to
regenerate the content-hashed poster and inspect rest/scan/end frames. This uses
local browser routing and needs no preview server. Rebuild afterward so the
page imports the new poster hash. Outputs default to `/tmp/portfolio-study`.

### Dependencies

Next 15.5.25 / React 19 replace the vulnerable Next 14 baseline. Next's PostCSS
version is overridden to a patched range and verified by a clean install.
All styling and the small native-element reset live in `app/globals.css`. Tailwind,
its unused theme/build configuration, Framer Motion, and obsolete media were removed.

Native CSS scroll timelines give each major section a heading/content entrance,
progressive work dividers, a reading-progress line, and bounded depth in the hero
and speaking photograph. Portrait layers separate on hover. The badge also enters
with a small perspective change on fine-pointer devices. Native disclosures expand and collapse over 240ms; buttons
have slight hover and press feedback. No effect hides text or loads WebGL.
Unsupported browsers retain native behavior; reduced motion disables these transitions.

## Review evidence

- [Audit and direction](docs/design/audit.md)
- [Original redesign validation](docs/design/validation.md)
- [Fable 3D and motion revision](docs/design/motion-revision.md)

The original redesign was merged as PR #10. Keep this motion revision cohesive
and target `main`. Do not merge automatically. A hosting integration
may create its normal PR preview; local tests do not prove a production deployment.

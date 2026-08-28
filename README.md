# gael55x.dev

Personal portfolio of Gaille Amolong. AI platform and security engineer based in Cebu.

## Design

The site is a warm-paper editorial system derived from the hero photograph. The palette samples the photo directly: plaster sand, terracotta clay, ink blue, and dusk cerulean. Type is set in Newsreader for display, Inter for text, and JetBrains Mono for indices, dates, and data labels.

The hero holds one spatial composition. The portrait sits inside four interdependent planes built with CSS 3D transforms: a ground lattice, a sand fin, a dusk frame, and a clay block. Pointer movement tilts the rig a few degrees. The composition settles flat once the visitor scrolls into the work. Reduced motion gets a static pose.

## Stack

- Next.js 14 (App Router, JavaScript)
- Tailwind CSS with project tokens in `tailwind.config.js`
- Framer Motion for section reveals, wrapped in `MotionConfig reducedMotion="user"`
- No WebGL and no UI kit

Content lives in `data/`. Sections live in `components/`.

## Commands

```bash
npm run dev     # local development
npm run lint    # eslint
npm run build   # production build
```

Design-system drift is checked by [Snapline](https://github.com/gael55x/Snapline) via `snapline.yml`.

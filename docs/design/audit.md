# Portfolio redesign audit

Baseline: `44155ffd8229cd5600bb2ce55264c164342e0fab` on `main`, inspected 15 September 2026.
One branch and one PR. No deployment or merge is part of this delivery.

## Observe

Inspected the single page and its work disclosures, navigation, résumé, photography,
project archive, writing, and contact at 1440×1000, 1280×800, 768×1024, and 390×844.
The mobile page was 10,047px tall with disclosures closed. Ran a production build,
mobile Lighthouse, and a JavaScript-disabled browser check.

## Issues and root causes

| Priority | Evidence / affected area                                                                                         | Why it matters                                                               | Direction                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| P0       | Hero H1 has computed opacity 0 with JavaScript disabled; Framer initial state persists.                          | A loading/hydration failure hides the introduction and primary actions.      | Render essential content directly on the server.                                             |
| P1       | Lighthouse contrast failure: `#7a7468` on `#161922`, 3.78:1, widespread 11px labels.                             | Navigation and supporting evidence are hard to read.                         | Contrasting text tokens; preserve mono identity with larger, contrasting text.               |
| P1       | Mobile has a horizontally cropped navigation row and a bottom fixed hire bar.                                    | Important sections are off-screen, and an overlay consumes scarce space.     | Full desktop navigation, three visible mobile links, normal-flow actions.                    |
| P1       | Portrait and sculpture fill the remainder of the first mobile/tablet screen.                                     | Decoration delays reaching the work.                                         | Preserve spatial portrait at a smaller mobile size; role and actions first.                  |
| P1       | Work decisions and context are hidden while numbers are emphasized.                                              | Recruiters see claims before understanding the contribution.                 | Visible concise outcomes; original technical details in disclosures.                         |
| P1       | “Every number links to its source” links to homepages; activity counts and stale benchmark comparisons dominate. | Implies stronger verification than the links provide.                        | Date original activity counters; distinguish résumé claims and scoped public benchmarks.     |
| P1       | No compact employment progression; BitWork lead role appears twice as separate projects.                         | Professional experience and advancement are harder to establish.             | Separate experience section with 2023–present progression.                                   |
| P1       | Baseline dependency audit reports 12 advisories, including Next.js critical advisories.                          | A production-ready redesign should not perpetuate the old framework version. | Patched Next 15 maintenance release, compatible React and lint packages; audit again.        |
| P2       | Crowded type, repeated ruled rows, tiny labels, several competing accent colors.                                 | Work reads as a generated technical inventory.                               | Legible original mono, warm emphasis, restrained blue proof figures, one work visualization. |
| P2       | Global pointer listener, repeated animations, clock interval, entire page client boundary.                       | Runtime work provides little useful information.                             | Optional, isolated 3D and CSS interaction feedback.                                          |
| P2       | Vercel Analytics requests 404 locally.                                                                           | Noise in console and misleading local best-practices failures.               | Enable analytics only on Vercel builds.                                                      |
| P2       | Referrin site ends Aug 2026; PDF says Present.                                                                   | Conflicting employment history undermines trust.                             | Await owner correction; use the newer site date in page content.                             |

The systemic issue was priority: decorative motion, exhaustive inventories, and
headline numbers were taking attention from the work. Typography and layout gave
nearly every item equal weight. The fix changes the reading order and the amount
of visible copy, rather than merely restyling the same cards.

## Three directions considered

| Criterion                | Editorial / engineering                        | Spatial / 3D-first                 | Product / case-study grid |
| ------------------------ | ---------------------------------------------- | ---------------------------------- | ------------------------- |
| Recruiter clarity        | High                                           | Low unless constrained             | High                      |
| Distinctiveness          | High with real photography and deliberate type | High                               | Moderate                  |
| Technical credibility    | Decisions and source links lead                | Easily displaced by effects        | Strong, but repetitive    |
| Complexity / maintenance | Low                                            | High                               | Low–moderate              |
| Mobile / performance     | Strong                                         | Requires fallbacks and GPU budgets | Strong                    |
| Longevity / employer fit | Strong                                         | More style-dependent               | Strong                    |

**Final direction: improve the original dark portfolio.** The first implementation
used warm paper, serif headings, and rewritten editorial copy. The owner rejected
that direction: it felt more generic, had too many arrows, and lost the original
messaging. This feedback supersedes the initial selection.

The final pass preserves the original positioning ("I ship production AI and
security systems and publish the proof"), four proof lines, work titles and
explanations, writing copy, dark slate palette, original gael55x wordmark, and
portrait depth. It improves legibility, responsive composition, disclosure density,
metadata, and runtime architecture. Decorative arrows and new generic slogans
were removed. Three coherent directions were considered above; the chosen result
is a disciplined evolution of the original engineering identity.

The original work copy is retained verbatim. About keeps the original language,
split into readable paragraphs; "Today I work" becomes "My work spans" because
the original site gives Referrin an August 2026 end date. No new claim was invented.

### Updated 3D gate: LIMITED

The owner explicitly requested creative 3D after the initial no-3D decision.
A conceptual badge study now supports the computer-vision case study.

1. **Communicates:** the relationship between a physical scan, detected geometry,
   and output asset. It is explicitly labeled conceptual, not production output.
2. **Why actual 3D:** changing view and separating physical layers benefits from
   consistent perspective, occlusion, and a solid rim, rather than faked DOM faces.
3. **Memorability:** a small physical-to-digital object tied to real work.
4. **Readability:** all work text and labels remain HTML alongside the scene.
5. **Cost:** Three.js is dynamically imported on fine-pointer hover or deliberate activation; pixel
   ratio is capped at 1.5, with no textures, shadows, model downloads, or idle frame loop.
6. **Mobile:** static diagram first; a tap on the image activates rotation. No
   gesture interception or automatic GPU use on touch devices.
7. **Reduced motion:** the same static default; view changes are immediate and
   user-triggered. Hover does not activate the scene under reduced motion. Nothing auto-rotates.

The scene owns WebGL lifecycle resources in a small imperative module because
rendering, resizing, and disposal are inherently stateful side effects. React
owns loading/error state and accessible buttons. All other page sections are
server components. No second animation framework or React Three Fiber. The original portrait depth is CSS-only.

## Review lenses

- **Recruiter:** real name, role, specific proof lines, work and résumé in the
  first screen; no menu guessing or animated introduction.
- **Engineering manager:** visible decisions and outcomes; separate progression
  and ownership; no invented architecture details or production claims.
- **Senior engineer:** one page, declarative content arrays, server rendering,
  one optional client island and CSS-only portrait depth, explicit resource disposal, repeatable browser check.
- **Product designer:** shared widths, baseline rhythm, clear section hierarchy,
  one featured study, four concise project summaries and shared alignment.
- **Creative director:** original slate identity, warm emphasis, physical-to-digital
  study, real photography and portrait depth. No stock renders or fake dashboard screenshots.
- **Motion:** user-triggered feedback, restrained native scroll transitions, no persistent loops.
  Portrait tilt uses CSS only, enabled on fine-pointer hover with no reduced-motion preference.
- **Hiring psychology:** bounded claims and direct evidence; original messaging preserved at owner request, dated activity
  counters, explicit self-reported outcomes, and scoped public benchmarks.
- **Accessibility/performance:** ordinary links and disclosures, visible focus,
  no-JS reading, contrast checks, lazy images, lazy GPU work, production audits.

## Content provenance

- Employment, responsibilities, and employer metrics: supplied résumé and existing
  `data/selectedWork.js`. Employer metrics remain self-reported.
- Snapline: current README and `docs/benchmark.md`, checked on GitHub. The July
  2026 experiment is historical and has a ~15% repair-time cost; not a current
  competitor ranking.
- Grape: current README and `docs/v1/quality/benchmarks.md`, checked on GitHub.
  31–52% reduction is second-turn, no-change fixture evidence from June 2026.
- Photography: existing owned assets. No generated portrait, employer screenshots,
  or private diagrams introduced.

## Validation and refinement

See `validation.md` for final evidence, viewport results, performance comparison,
known limitations, and the final rubric. The runnable browser check covers the
actual production page, rather than snapshots of individual components.

## Iteration review and cleanup

1. **Baseline:** strong specific voice and recognizable portrait, but hidden no-JS
   hero, weak contrast, cropped mobile navigation, and expensive global animation.
2. **Light prototype:** technical checks passed, but the owner found the design
   generic and the rewritten copy weaker. This was not accepted as final.
3. **Dark revision:** restored original messaging and dark identity, removed
   decorative arrows, simplified project summaries, restored portrait depth.
4. **Independent review:** requested Claude Fable 5.1 through the owner's local
   Claude Max login, using a bounded copy of source and screenshots after explicit
   authorization. Findings and final evidence are recorded in validation.md.

Knip uses the same @/* alias as Next. Its sole dependency exclusion is the existing
Snapline CLI invoked by .claude/settings.json hooks. No application source is ignored.
The old global pointer/scroll machinery, clock, fixed mobile bar,
unused gallery and project components, old data exports, Framer Motion, and obsolete
media have been removed. Original proof counters were restored with their measurement date. The CSS-only portrait effect needs no client component.

### Independent Fable review disposition

Fable 5.1 rejected the early dark revision as a recolored light template (5.5/10).
Restored the original mono headline and italic emphasis, original numbered ledger
and navigation, proof band, spatial portrait at a fuller mobile size, testimonial,
credentials, archive entries and live project links. Shortened duplicated experience
copy. Résumé links preserve the portfolio in a separate tab. Replaced native triangle
markers with plus/minus, derived the archive count, removed dead data/CSS, and made
the 3D respond to hover rather than a toolbar.

Fable's P0 benchmark concern was an evidence-bundle gap, not invented data. The
public Snapline README and benchmark describe the historical July 2026 experiment
and ~15% wall-time cost. Grape's benchmark describes the June 13, 2026 second-turn
body-token results. These source documents were supplied for the follow-up review, which confirmed their accuracy.

Rendered review then caught a font-variable scope error and a cached old poster.
Moved font variables to the HTML root, added an assertion for the actual computed
heading font, and switched the poster to a content-hashed static import.

### Final refinement

Fable's second review found three material issues: touch pointerleave reset the
scene before a second tap, the loading canvas hid the poster, and navigation
numbering diverged from section numbering. Fixed each and added slow-network,
second-tap, and all-section heading-clearance checks. The independent visual pass
also caught the 601px header wrapping to three rows; compact navigation now starts
at 760px.

Restored the original employer ordering, constrained the headline measure, raised
small source labels to 11px, used two proof columns on tablets, compressed employment
into three-column desktop rows, and moved promotion metadata into its job record.
Removed Tailwind and its build configuration, stale comments, unused CSS selectors
and a wrapper. The school project stays in the archive without a dead link: both
its old domain and original public repository were unavailable during validation.

The owner's final request for scroll creativity adds a thin reading-progress line
and a 24px/5-degree entrance on the badge study, using native CSS scroll timelines.
All text stays visible, scrolling does not load WebGL, and reduced motion and
unsupported browsers keep the static layout. No additional client component.

The subsequent request for transitions adds 18px section-heading entrances, 240ms
native disclosure expansion/collapse, and slight button hover/press feedback.
Headings remain fully opaque throughout. Feature queries preserve native disclosure
behavior where intrinsic-size interpolation is unsupported. Reduced motion disables
all three additions. No new dependency, content, or client state.

### Motion rhythm refinement

A follow-up motion review found that headings finished moving at the viewport edge,
where visitors were unlikely to notice them. Their 24px entrance now has a longer easing range
and settles before the reading position. The badge smoothly follows pointer
movement using the elapsed time between frames; no frame work remains after it settles.
Tap/Enter stay immediate, and leaving cancels an in-flight transition and releases
WebGL. All additions preserve the original copy and static reduced-motion behavior.

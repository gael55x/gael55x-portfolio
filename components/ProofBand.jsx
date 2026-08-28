import { proofPoints } from '@/data/proof';

/* 2-col grid below lg, 4-col at lg+ */
const CELL_BORDERS = [
  '',
  'max-lg:border-l lg:border-l',
  'max-lg:border-t lg:border-l',
  'max-lg:border-t max-lg:border-l lg:border-l',
];

export default function ProofBand() {
  return (
    <section aria-label="Verifiable track record" className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="border-y border-ink/15 bg-paper-deep/60 grid grid-cols-2 lg:grid-cols-4">
        {proofPoints.map((point, index) => (
          <a
            key={point.label}
            href={point.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col gap-1.5 py-6 sm:py-7 px-4 sm:px-6 hover:bg-sand/40 transition-colors border-ink/15 ${CELL_BORDERS[index]}`}
          >
            <span className="font-serif text-3xl sm:text-4xl text-dusk-deep tracking-tight">
              {point.value}
            </span>
            <span className="text-ink-soft text-xs sm:text-sm leading-snug">{point.label}</span>
            <span className="mt-auto pt-2 font-mono text-2xs text-clay group-hover:text-clay-deep transition-colors">
              {point.linkLabel}
              <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </span>
          </a>
        ))}
      </div>
      <p className="mt-2 text-right font-mono text-2xs text-ink-faint">
        every number links to its source
      </p>
    </section>
  );
}

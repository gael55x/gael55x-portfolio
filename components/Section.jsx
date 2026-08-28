/**
 * Section shell: structural left rail with a sticky serif chapter numeral on
 * desktop, mono kicker, serif display title. The rail hairline runs the full
 * height of the section so the page reads like a bound ledger.
 */
export default function Section({ id, index, kicker, title, sub, children }) {
  return (
    <section id={id} className="scroll-mt-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-rail">
          <div aria-hidden="true" className="hidden lg:block border-r border-ink/15">
            <span className="sticky top-24 block pr-5 pt-20 text-right font-serif italic text-4xl leading-none text-clay">
              {index}
            </span>
          </div>
          <div className="py-16 sm:py-20 lg:pl-12">
            <header className="mb-10 sm:mb-12">
              <p className="mb-2.5 font-mono text-xs tracking-wide text-ink-faint">
                <span className="lg:hidden">
                  <span className="text-clay">{index}</span>
                  <span className="mx-2 text-ink/30" aria-hidden="true">
                    /
                  </span>
                </span>
                {kicker}
              </p>
              {title ? (
                <h2 className="font-serif text-3xl sm:text-4xl xl:text-display-sm leading-tight tracking-tight text-ink">
                  {title}
                </h2>
              ) : (
                <h2 className="sr-only">{kicker}</h2>
              )}
              {sub ? (
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">{sub}</p>
              ) : null}
            </header>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

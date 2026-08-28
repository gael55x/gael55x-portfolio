/**
 * Section shell: structural left rail with a sticky chapter numeral on
 * desktop, terse mono header. The rail hairline runs the full height of the
 * section so the page reads like an editor gutter.
 */
export default function Section({ id, index, kicker, title, sub, children }) {
  return (
    <section id={id} className="scroll-mt-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-rail">
          <div aria-hidden="true" className="hidden lg:block border-r border-bone/15">
            <span className="sticky top-24 block pr-5 pt-16 text-right font-mono text-xl text-clay">
              {index}
            </span>
          </div>
          <div className="py-14 sm:py-16 lg:pl-12">
            <header className="mb-8 sm:mb-10">
              <p className="mb-2 font-mono text-2xs lowercase tracking-widest text-bone-faint">
                <span className="lg:hidden">
                  <span className="text-clay">{index}</span>
                  <span className="mx-2 text-bone/30" aria-hidden="true">
                    /
                  </span>
                </span>
                {kicker}
              </p>
              {title ? (
                <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-bone">
                  {title}
                </h2>
              ) : (
                <h2 className="sr-only">{kicker}</h2>
              )}
              {sub ? (
                <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-bone-dim">
                  {sub}
                </p>
              ) : null}
            </header>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

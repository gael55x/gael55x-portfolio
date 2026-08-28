import Section from '@/components/Section';
import { openSource } from '@/data/projects';

export default function OpenSourceShowcase() {
  return (
    <Section
      id="open-source"
      index="02"
      kicker="Open source"
      title="Infrastructure I build in public"
      sub="Shipped tools with commits, releases, benchmarks, and packages you can inspect, not weekend demos."
    >
      <ul>
        {openSource.map((repo) => (
          <li
            key={repo.id}
            className="border-t border-bone/15 py-7 sm:py-8 grid gap-5 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-4">
              <p className="font-mono text-2xs lowercase text-bone-faint mb-1">{repo.category}</p>
              <h3 className="font-mono text-lg font-bold text-bone leading-snug">{repo.name}</h3>
              <p className="mt-0.5 font-sans text-xs text-bone-dim">{repo.tagline}</p>
              <p className="mt-3 font-mono text-2xs leading-relaxed text-bone-faint">
                {repo.stack.join(' · ')}
              </p>
              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
                <a
                  href={repo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw text-clay hover:text-dusk-pale"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                {repo.npm && (
                  <a
                    href={repo.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-clay hover:text-dusk-pale"
                  >
                    npm: {repo.npmLabel} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </p>
              {repo.note && (
                <p className="mt-2 font-mono text-2xs text-bone-faint">{repo.note}</p>
              )}
            </div>

            <div className="lg:col-span-8">
              <dl className="grid grid-cols-3 gap-4 max-w-md">
                {repo.stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="font-mono text-lg sm:text-xl font-bold tracking-tight text-dusk">
                      {stat.value}
                    </dd>
                    <dt className="mt-0.5 font-sans text-2xs text-bone-faint leading-snug">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <details className="fold mt-4">
                <summary className="font-mono text-2xs lowercase tracking-wider text-bone-faint hover:text-clay transition-colors">
                  what it is / the hard part
                </summary>
                <dl className="mt-4 grid gap-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-wider text-bone-faint mb-1">
                      What it is
                    </dt>
                    <dd className="font-sans text-bone-dim">{repo.what}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-wider text-bone-faint mb-1">
                      The hard part
                    </dt>
                    <dd className="font-sans text-bone-dim">{repo.hardPart}</dd>
                  </div>
                </dl>
              </details>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

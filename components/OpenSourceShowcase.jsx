'use client';

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
              className="border-t border-ink/15 py-9 sm:py-10 grid gap-6 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-ink-faint mb-1.5">{repo.category}</p>
                <h3 className="font-serif text-2xl text-ink leading-snug">{repo.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{repo.tagline}</p>
                <p className="mt-4 font-mono text-xs leading-relaxed text-ink-faint">
                  {repo.stack.join(' · ')}
                </p>
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
                  <a
                    href={repo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-clay hover:text-clay-deep"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                  {repo.npm && (
                    <a
                      href={repo.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw text-clay hover:text-clay-deep"
                    >
                      npm: {repo.npmLabel} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </p>
                {repo.note && (
                  <p className="mt-2 font-mono text-2xs text-ink-faint">{repo.note}</p>
                )}
              </div>

              <div className="lg:col-span-5">
                <dl className="grid gap-5 text-sm leading-relaxed">
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-wider text-ink-faint mb-1">
                      What it is
                    </dt>
                    <dd className="text-ink-soft">{repo.what}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-wider text-ink-faint mb-1">
                      The hard part
                    </dt>
                    <dd className="text-ink-soft">{repo.hardPart}</dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-3">
                <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-5 lg:border-l lg:border-ink/15 lg:pl-6">
                  {repo.stats.map((stat) => (
                    <div key={stat.label}>
                      <dd className="font-serif text-xl sm:text-2xl text-dusk-deep tracking-tight">
                        {stat.value}
                      </dd>
                      <dt className="mt-0.5 text-xs text-ink-faint leading-snug">{stat.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          ))}
        </ul>
    </Section>
  );
}

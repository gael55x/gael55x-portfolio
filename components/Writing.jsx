'use client';

import Section from '@/components/Section';
import { writing } from '@/data/writing';

export default function Writing() {

  return (
    <Section
      id="writing"
      index="04"
      kicker="Writing"
      title="Engineering lessons, written down"
      sub={writing.intro}
    >

        <ul>
          {writing.articles.map((article) => (
            <li
              key={article.url}
              className="border-t border-ink/15"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 py-6 sm:py-7 lg:grid-cols-12 lg:gap-10 hover:bg-paper-deep/60 transition-colors sm:-mx-4 sm:px-4"
              >
                <p className="font-mono text-xs text-dusk-deep lg:col-span-3 lg:pt-1">
                  {article.meta}
                </p>
                <div className="lg:col-span-9">
                  <h3 className="font-serif text-lg sm:text-xl text-ink leading-snug group-hover:text-clay transition-colors">
                    {article.title}
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block font-mono text-sm text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay"
                    >
                      ↗
                    </span>
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {article.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <p className="border-t border-ink/15 pt-5">
          <a
            href={writing.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay transition-colors"
          >
            All essays on Medium <span aria-hidden="true">↗</span>
          </a>
        </p>
    </Section>
  );
}

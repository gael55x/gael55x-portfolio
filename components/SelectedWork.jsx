'use client';

import Section from '@/components/Section';
import { selectedWork } from '@/data/selectedWork';

export default function SelectedWork() {

  return (
    <Section
      id="work"
      index="01"
      kicker="Selected work"
      title="Impact at scale"
      sub="Problem, approach, measurable outcomes, and why it mattered for the business."
    >

        <ul>
          {selectedWork.map((item, index) => (
            <li
              key={item.id}
              className="border-t border-ink/15 py-9 sm:py-11 grid gap-6 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-ink-faint mb-1.5">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-2xl text-ink leading-snug">{item.company}</h3>
                <p className="mt-1 text-sm text-ink-soft">{item.role}</p>
                <p className="mt-1 font-mono text-xs text-dusk-deep">{item.dates}</p>
                <p className="mt-4 font-mono text-xs leading-relaxed text-ink-faint">
                  {item.stack.join(' · ')}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-mono text-xs text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay transition-colors"
                  >
                    {item.link.label} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>

              <div className="lg:col-span-8">
                <h4 className="font-serif text-xl sm:text-2xl text-ink leading-snug">
                  {item.title}
                </h4>

                <div className="mt-4 border-l-2 border-clay pl-4 sm:pl-5">
                  <p className="font-mono text-2xs uppercase tracking-wider text-clay mb-1">
                    Result
                  </p>
                  <p className="text-ink font-medium leading-relaxed">{item.result}</p>
                </div>

                <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-wider text-ink-faint mb-1">
                      Problem
                    </dt>
                    <dd className="text-sm text-ink-soft leading-relaxed">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-wider text-ink-faint mb-1">
                      Action
                    </dt>
                    <dd className="text-sm text-ink-soft leading-relaxed">{item.action}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-mono text-2xs uppercase tracking-wider text-ink-faint mb-1">
                      Business impact
                    </dt>
                    <dd className="text-sm text-ink-soft leading-relaxed">{item.business}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        <blockquote className="border-t border-ink/15 pt-9 sm:pt-11 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8 lg:col-start-5 border-l-2 border-sand pl-4 sm:pl-5">
            <p className="font-serif italic text-lg sm:text-xl text-ink leading-relaxed">
              &ldquo;Gaille quickly stood out as a brilliant full-stack developer. He is incredibly
              smart, hardworking, and dedicated, often going the extra mile to deliver high-quality
              work. He communicates openly, collaborates effectively, and uplifts those around
              him.&rdquo;
            </p>
            <cite className="mt-3 block text-sm not-italic">
              <span className="text-ink font-medium">Sheldon Arthur Sagrado</span>
              <span className="text-ink-faint"> · Full-stack Developer, Bitwork Solutions</span>
            </cite>
          </div>
        </blockquote>
    </Section>
  );
}

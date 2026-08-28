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
            className="border-t border-bone/15 py-7 sm:py-8 grid gap-5 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-4">
              <p className="font-mono text-2xs text-bone-faint mb-1">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-mono text-lg font-bold text-bone leading-snug">
                {item.company}
              </h3>
              <p className="mt-0.5 font-sans text-xs text-bone-dim">{item.role}</p>
              <p className="mt-1 font-mono text-xs text-dusk">{item.dates}</p>
              <p className="mt-3 font-mono text-2xs leading-relaxed text-bone-faint">
                {item.stack.join(' · ')}
              </p>
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-mono text-xs link-draw text-clay hover:text-dusk-pale"
                >
                  {item.link.label} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            <div className="lg:col-span-8">
              <h4 className="font-mono text-base sm:text-lg font-medium text-bone leading-snug">
                {item.title}
              </h4>

              <div className="mt-3 border-l-2 border-clay pl-4">
                <p className="font-mono text-2xs uppercase tracking-wider text-clay mb-1">
                  Result
                </p>
                <p className="font-sans text-sm text-bone leading-relaxed">{item.result}</p>
              </div>

              <details className="fold mt-4">
                <summary className="font-mono text-2xs lowercase tracking-wider text-bone-faint hover:text-clay transition-colors">
                  problem / approach / business impact
                </summary>
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-wider text-bone-faint mb-1">
                      Problem
                    </dt>
                    <dd className="font-sans text-sm text-bone-dim leading-relaxed">
                      {item.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-wider text-bone-faint mb-1">
                      Action
                    </dt>
                    <dd className="font-sans text-sm text-bone-dim leading-relaxed">
                      {item.action}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-mono text-2xs uppercase tracking-wider text-bone-faint mb-1">
                      Business impact
                    </dt>
                    <dd className="font-sans text-sm text-bone-dim leading-relaxed">
                      {item.business}
                    </dd>
                  </div>
                </dl>
              </details>
            </div>
          </li>
        ))}
      </ul>

      <blockquote className="border-t border-bone/15 pt-7 sm:pt-8 lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8 lg:col-start-5 border-l-2 border-sand/40 pl-4">
          <p className="font-sans italic text-sm sm:text-base text-bone-dim leading-relaxed">
            &ldquo;Gaille quickly stood out as a brilliant full-stack developer. He is incredibly
            smart, hardworking, and dedicated, often going the extra mile to deliver high-quality
            work. He communicates openly, collaborates effectively, and uplifts those around
            him.&rdquo;
          </p>
          <cite className="mt-2 block font-mono text-xs not-italic">
            <span className="text-bone">Sheldon Arthur Sagrado</span>
            <span className="text-bone-faint"> · Full-stack Developer, Bitwork Solutions</span>
          </cite>
        </div>
      </blockquote>
    </Section>
  );
}

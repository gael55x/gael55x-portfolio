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
          <li key={article.url} className="border-t border-bone/15">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1.5 py-5 lg:grid-cols-12 lg:gap-10 hover:bg-panel/60 transition-colors sm:-mx-4 sm:px-4"
            >
              <p className="font-mono text-2xs text-dusk lg:col-span-3 lg:pt-1">{article.meta}</p>
              <div className="lg:col-span-9">
                <h3 className="font-mono text-sm sm:text-base font-medium text-bone leading-snug group-hover:text-clay transition-colors">
                  {article.title}
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block text-2xs text-bone-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay"
                  >
                    ↗
                  </span>
                </h3>
                <p className="mt-1 font-sans text-xs leading-relaxed text-bone-dim">
                  {article.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <p className="border-t border-bone/15 pt-4">
        <a
          href={writing.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs link-draw text-clay hover:text-dusk-pale"
        >
          All essays on Medium <span aria-hidden="true">↗</span>
        </a>
      </p>
    </Section>
  );
}

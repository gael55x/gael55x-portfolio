import Section from '@/components/Section';
import { writing } from '@/data/writing';

export default function Writing() {
  return (
    <Section id="writing" index="04" label="Writing" title="Engineering lessons, written down">
      <div className="writing-list">
        {writing.articles.map((article) => (
          <article key={article.url}>
            <p className="eyebrow">{article.meta}</p>
            <div>
              <h3>
                <a href={article.url}>{article.title}</a>
              </h3>
              <p>{article.description}</p>
            </div>
          </article>
        ))}
      </div>
      <a href={writing.profileUrl} className="text-link writing-more">
        All essays on Medium
      </a>
    </Section>
  );
}

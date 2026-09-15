import { sections } from '@/data/sections';

export function SectionLabel({ id }) {
  const index = sections.findIndex((section) => section.id === id);
  return (
    <p className="eyebrow">
      <span>{String(index + 1).padStart(2, '0')}</span> / {sections[index].label}
    </p>
  );
}

export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section-heading">
          <SectionLabel id={id} />
          <div>
            <h2 id={`${id}-title`}>{title}</h2>
            {intro && <p className="section-intro">{intro}</p>}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}

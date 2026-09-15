export default function Section({ id, index, label, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section-heading">
          <p className="eyebrow">
            <span>{index}</span>
            {label !== title && ` / ${label}`}
          </p>
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

import Section from '@/components/Section';
import { openSource, projects } from '@/data/projects';

export default function OpenSourceShowcase() {
  return (
    <Section
      id="open-source"
      title="Infrastructure I build in public"
      intro="Shipped tools with commits, releases, benchmarks, and packages you can inspect, not weekend demos."
      className="tools-section"
    >
      <div className="tools-grid">
        {openSource.map((repo) => (
          <article className="tool" key={repo.id} aria-labelledby={`${repo.id}-title`}>
            <p className="eyebrow">{repo.category}</p>
            <h3 id={`${repo.id}-title`}>{repo.name}</h3>
            <h4>{repo.title}</h4>
            <p>{repo.description}</p>

            <details className="benchmark-notes">
              <summary>Benchmark & tradeoffs</summary>
              <p>{repo.benchmark}</p>
            </details>
            <p className="stack">{repo.stack}</p>
            <div className="tool-links">
              <a href={repo.github} aria-label={`${repo.name} source on GitHub`}>
                Source
              </a>
              <a href={repo.evidence} aria-label={`${repo.name} benchmark methodology`}>
                Benchmark
              </a>
              <a href={repo.npm} aria-label={`${repo.name} package on npm`}>
                npm
              </a>
            </div>
          </article>
        ))}
      </div>
      <details id="projects" className="project-archive">
        <summary>
          Range beyond the day job{' '}
          <span className="archive-count">{String(projects.length).padStart(2, '0')} projects</span>
          <span className="disclosure-mark" aria-hidden="true" />
        </summary>
        <ul>
          {projects.map((project) => {
            const Title = project.href ? 'a' : 'div';
            return (
              <li key={project.name}>
                <Title className="project-title" href={project.href}>
                  <strong>{project.name}</strong>
                  <span className="eyebrow">{project.type}</span>
                </Title>
                <p>{project.description}</p>
              </li>
            );
          })}
        </ul>
      </details>
    </Section>
  );
}

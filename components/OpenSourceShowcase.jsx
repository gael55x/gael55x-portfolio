import Section from '@/components/Section';
import SpatialSurface from '@/components/SpatialSurface';
import ToolSculpture from '@/components/ToolSculpture';
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
          <SpatialSurface
            as="article"
            className="tool"
            key={repo.id}
            aria-labelledby={`${repo.id}-title`}
          >
            {repo.video ? (
              <div className="tool-sculpture">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={repo.poster}
                  aria-label={`${repo.name} launch video`}
                >
                  <source src={repo.video} type="video/mp4" />
                  <a href={repo.launchVideo}>Watch the {repo.name} launch video</a>
                </video>
              </div>
            ) : (
              <ToolSculpture kind={repo.id} />
            )}
            <div className="tool-copy">
              <p className="eyebrow">{repo.category}</p>
              <h3 id={`${repo.id}-title`}>{repo.name}</h3>
              <h4>{repo.title}</h4>
              <p>{repo.description}</p>

              {repo.benchmark && (
                <details className="benchmark-notes">
                  <summary>Benchmark & tradeoffs</summary>
                  <p>{repo.benchmark}</p>
                </details>
              )}
              <p className="stack">{repo.stack}</p>
              <div className="tool-links">
                <a href={repo.github} aria-label={`${repo.name} source on GitHub`}>
                  Source
                </a>
                {repo.website && (
                  <a href={repo.website} aria-label={`${repo.name} website`}>
                    Website
                  </a>
                )}
                {repo.launchVideo && (
                  <a href={repo.launchVideo} aria-label={`${repo.name} launch video on Facebook`}>
                    Launch video
                  </a>
                )}
                {repo.evidence && (
                  <a href={repo.evidence} aria-label={`${repo.name} benchmark methodology`}>
                    Benchmark
                  </a>
                )}
                {repo.npm && (
                  <a href={repo.npm} aria-label={`${repo.name} package on npm`}>
                    npm
                  </a>
                )}
              </div>
            </div>
          </SpatialSurface>
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

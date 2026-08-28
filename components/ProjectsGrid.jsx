import Image from 'next/image';

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article key={project.num} className="group flex flex-col">
          <div className="frame-offset relative h-36 w-full border border-bone/20 bg-panel">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className={`${
                project.image.includes('BuhAI') || project.image.includes('Ren')
                  ? 'object-contain p-3'
                  : 'object-cover'
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 20rem"
            />
          </div>
          <div className="flex flex-1 flex-col pt-3.5">
            <p className="font-mono text-2xs lowercase tracking-wider text-bone-faint">
              <span className="text-clay">{project.num}</span>
              <span className="mx-2 text-bone/30" aria-hidden="true">
                /
              </span>
              {project.category}
            </p>
            <h3 className="mt-1.5 font-mono text-sm font-bold text-bone leading-snug">
              {project.title}
              {project.subtitle && (
                <span className="font-normal text-bone-faint"> · {project.subtitle}</span>
              )}
            </h3>
            <p className="mt-1.5 flex-1 font-sans text-xs leading-relaxed text-bone-dim">
              {project.description}
            </p>
            <p className="mt-2.5 font-mono text-2xs leading-relaxed text-bone-faint">
              {project.stack.join(' · ')}
            </p>
            <p className="mt-2.5 flex gap-4 border-t border-bone/15 pt-2.5 font-mono text-xs">
              {project.live !== project.github && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw text-clay hover:text-dusk-pale"
                >
                  Live <span aria-hidden="true">↗</span>
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw text-clay hover:text-dusk-pale"
              >
                Source <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

'use client';

import Image from 'next/image';

export default function ProjectsGrid({ projects }) {

  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <article
          key={project.num}
          className="group flex flex-col"
        >
          <div className="frame-offset relative h-40 w-full border border-ink/20 bg-paper-deep">
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
          <div className="flex flex-1 flex-col pt-4">
            <p className="font-mono text-2xs tracking-wider text-ink-faint">
              <span className="text-clay">{project.num}</span>
              <span className="mx-2 text-ink/30" aria-hidden="true">
                /
              </span>
              {project.category}
            </p>
            <h3 className="mt-2 font-serif text-xl text-ink leading-snug">
              {project.title}
              {project.subtitle && (
                <span className="text-ink-faint italic"> · {project.subtitle}</span>
              )}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              {project.description}
            </p>
            <p className="mt-3 font-mono text-2xs leading-relaxed text-ink-faint">
              {project.stack.join(' · ')}
            </p>
            <p className="mt-3 flex gap-4 border-t border-ink/15 pt-3 font-mono text-xs">
              {project.live !== project.github && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw text-clay hover:text-clay-deep"
                >
                  Live <span aria-hidden="true">↗</span>
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw text-clay hover:text-clay-deep"
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

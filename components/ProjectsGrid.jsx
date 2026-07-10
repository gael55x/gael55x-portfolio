'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

export default function ProjectsGrid({ projects }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <motion.article
          key={project.num}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.3, delay: reduceMotion ? 0 : (index % 3) * 0.06 }}
          className="group rounded-xl border border-white/10 bg-surface/90 overflow-hidden flex flex-col hover:border-accent/30 transition-colors"
        >
          <div className="relative h-36 w-full bg-surface-deep overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`${
                project.image.includes('BuhAI') || project.image.includes('Ren')
                  ? 'object-contain p-3'
                  : 'object-cover'
              } transition-transform duration-300 group-hover:scale-105`}
              sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 20rem"
            />
          </div>
          <div className="p-5 flex flex-col flex-1 gap-2.5">
            <p className="text-accent/90 font-mono text-xs uppercase tracking-wider">
              {project.category}
            </p>
            <h3 className="text-base font-semibold text-white font-sans leading-snug">
              {project.title}
            </h3>
            <p className="text-white/65 text-sm leading-relaxed font-sans flex-1">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10 text-xs font-mono"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 pt-2.5 border-t border-white/10">
              {project.live !== project.github && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — live demo`}
                  className="w-9 h-9 rounded-full bg-white/5 flex justify-center items-center text-white/70 hover:text-accent hover:bg-white/10 transition-colors"
                >
                  <FiExternalLink className="text-base" />
                </Link>
              )}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — source on GitHub`}
                className="w-9 h-9 rounded-full bg-white/5 flex justify-center items-center text-white/70 hover:text-accent hover:bg-white/10 transition-colors"
              >
                <BsGithub className="text-base" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

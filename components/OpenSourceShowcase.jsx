'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { FiPackage } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { openSource } from '@/data/projects';

export default function OpenSourceShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="open-source" className="py-20 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center xl:text-left"
        >
          <p className="text-accent font-mono text-sm mb-2 tracking-wide">Open source</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Infrastructure I build in public
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto xl:mx-0 text-base leading-relaxed font-sans">
            Shipped tools with commits, releases, benchmarks, and packages you can inspect —
            not weekend demos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {openSource.map((repo, index) => (
            <motion.article
              key={repo.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : (index % 2) * 0.08 }}
              className="group rounded-xl border border-white/10 bg-surface/90 p-6 sm:p-7 flex flex-col gap-4 hover:border-accent/30 transition-colors"
            >
              <header>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-accent/90 font-mono text-xs uppercase tracking-wider">
                    {repo.category}
                  </p>
                  <div className="flex items-center gap-2">
                    {repo.npm && (
                      <Link
                        href={repo.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${repo.name} on npm`}
                        className="w-9 h-9 rounded-full bg-white/5 flex justify-center items-center text-white/70 hover:text-accent hover:bg-white/10 transition-colors"
                      >
                        <FiPackage className="text-base" />
                      </Link>
                    )}
                    <Link
                      href={repo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${repo.name} on GitHub`}
                      className="w-9 h-9 rounded-full bg-white/5 flex justify-center items-center text-white/70 hover:text-accent hover:bg-white/10 transition-colors"
                    >
                      <BsGithub className="text-base" />
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans">
                  {repo.name}
                </h3>
                <p className="text-white/60 text-sm font-sans mt-0.5">{repo.tagline}</p>
              </header>

              <div className="grid grid-cols-3 rounded-lg border border-white/10 bg-surface-deep overflow-hidden">
                {repo.stats.map((stat, statIndex) => (
                  <div
                    key={stat.label}
                    className={`p-3 flex flex-col gap-0.5 border-white/10 ${
                      statIndex > 0 ? 'border-l' : ''
                    }`}
                  >
                    <span className="text-white font-semibold font-sans text-sm sm:text-base leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-white/50 text-xs leading-snug font-sans">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <dl className="text-sm space-y-3 flex-1 font-sans">
                <div>
                  <dt className="text-white/45 text-xs uppercase tracking-wider font-mono mb-1">
                    What it is
                  </dt>
                  <dd className="text-white/80 leading-relaxed">{repo.what}</dd>
                </div>
                <div>
                  <dt className="text-white/45 text-xs uppercase tracking-wider font-mono mb-1">
                    The hard part
                  </dt>
                  <dd className="text-white/80 leading-relaxed">{repo.hardPart}</dd>
                </div>
              </dl>

              <footer className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                {repo.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-accent/90 bg-accent/10 px-2 py-0.5 rounded border border-accent/20 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {repo.npmLabel && (
                  <span className="ml-auto text-white/40 text-xs font-mono">
                    npm: {repo.npmLabel}
                  </span>
                )}
                {repo.note && (
                  <span className="ml-auto text-white/40 text-xs font-mono">{repo.note}</span>
                )}
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { selectedWork } from '@/data/selectedWork';

export default function SelectedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-20 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center xl:text-left">
          <p className="text-accent font-mono text-sm mb-2 tracking-wide">
            Selected work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Impact at scale
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto xl:mx-0 text-base leading-relaxed font-sans">
            Problem, approach, measurable outcomes, and why it mattered for the business.
          </p>
        </div>

        <ul className="flex flex-col gap-8">
          {selectedWork.map((item, index) => (
            <motion.li
              key={item.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.05 }}
              className="rounded-xl border border-white/10 bg-surface/90 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans">
                    {item.title}
                  </h3>
                  <p className="text-accent text-sm font-mono mt-1">
                    {item.company} · {item.role}
                  </p>
                </div>
              </div>
              <dl className="grid gap-4 text-sm sm:text-base">
                <div>
                  <dt className="text-white/50 font-mono text-xs uppercase tracking-wider mb-1">
                    Problem
                  </dt>
                  <dd className="text-white/85 leading-relaxed font-sans">{item.problem}</dd>
                </div>
                <div>
                  <dt className="text-white/50 font-mono text-xs uppercase tracking-wider mb-1">
                    Action
                  </dt>
                  <dd className="text-white/85 leading-relaxed font-sans">{item.action}</dd>
                </div>
                <div>
                  <dt className="text-white/50 font-mono text-xs uppercase tracking-wider mb-1">
                    Result
                  </dt>
                  <dd className="text-white/90 leading-relaxed font-sans font-medium">
                    {item.result}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/50 font-mono text-xs uppercase tracking-wider mb-1">
                    Business impact
                  </dt>
                  <dd className="text-white/80 leading-relaxed font-sans">{item.business}</dd>
                </div>
              </dl>
              {item.stack && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <ul className="flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="text-accent/90 bg-accent/10 px-2 py-0.5 rounded text-xs font-mono border border-accent/20"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.li>
          ))}
        </ul>

        <blockquote className="mt-10 rounded-xl border border-white/10 bg-surface/90 p-6 sm:p-8 text-center">
          <p className="text-white/85 italic text-base leading-relaxed font-sans">
            &ldquo;Gaille quickly stood out as a brilliant full-stack developer. He is incredibly
            smart, hardworking, and dedicated, often going the extra mile to deliver high-quality
            work. He communicates openly, collaborates effectively, and uplifts those around
            him.&rdquo;
          </p>
          <cite className="block mt-4 text-sm not-italic">
            <span className="text-white font-medium">Sheldon Arthur Sagrado</span>
            <span className="text-white/50"> · Full-stack Developer, Bitwork Solutions</span>
          </cite>
        </blockquote>
      </div>
    </section>
  );
}

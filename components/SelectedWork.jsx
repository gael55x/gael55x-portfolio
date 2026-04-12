'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { selectedWork } from '@/data/selectedWork';

export default function SelectedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-16 sm:py-24 bg-black/45 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="mb-12 sm:mb-14 text-center xl:text-left">
          <p className="text-green-400/90 font-mono text-sm mb-2 tracking-wide">
            Selected work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Impact at scale
          </h2>
          <p className="mt-3 text-white/75 max-w-2xl mx-auto xl:mx-0 text-base leading-relaxed font-sans">
            Problem, approach, measurable outcomes, and why it mattered for the business.
          </p>
        </div>

        <ul className="flex flex-col gap-8 sm:gap-10">
          {selectedWork.map((item, index) => (
            <motion.li
              key={item.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.05 }}
              className="rounded-xl border border-white/10 bg-[#14141c]/90 p-6 sm:p-8 shadow-lg"
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
              <dl className="grid gap-4 sm:gap-5 text-sm sm:text-base">
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
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

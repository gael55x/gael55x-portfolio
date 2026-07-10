'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { proofPoints } from '@/data/proof';

/* 2-col grid below lg, 4-col at lg+ */
const CELL_BORDERS = [
  '',
  'border-l',
  'lg:border-l max-lg:border-t',
  'border-l max-lg:border-t',
];

export default function ProofBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Verifiable track record" className="relative z-10 py-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35 }}
          className="rounded-xl border border-white/10 bg-surface/90 grid grid-cols-2 lg:grid-cols-4 overflow-hidden"
        >
          {proofPoints.map((point, index) => (
            <a
              key={point.label}
              href={point.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-5 sm:p-6 flex flex-col gap-1.5 hover:bg-white/5 transition-colors border-white/10 ${CELL_BORDERS[index]}`}
            >
              <span className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
                {point.value}
              </span>
              <span className="text-white/60 text-xs sm:text-sm leading-snug font-sans">
                {point.label}
              </span>
              <span className="mt-auto pt-2 inline-flex items-center gap-1 text-accent/80 group-hover:text-accent text-xs font-mono">
                {point.linkLabel}
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </motion.div>
        <p className="mt-2 text-right text-white/30 text-xs font-mono">
          every number links to its source
        </p>
      </div>
    </section>
  );
}

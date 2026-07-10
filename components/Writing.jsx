'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { writing } from '@/data/writing';

export default function Writing() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="writing" className="py-20 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center xl:text-left"
        >
          <p className="text-accent font-mono text-sm mb-2 tracking-wide">Writing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Engineering lessons, written down
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto xl:mx-0 text-base leading-relaxed font-sans">
            {writing.intro}
          </p>
        </motion.div>

        <ul className="flex flex-col gap-4">
          {writing.articles.map((article, index) => (
            <motion.li
              key={article.url}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: reduceMotion ? 0 : index * 0.05 }}
            >
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-surface/90 p-5 sm:p-6 flex items-start justify-between gap-4 hover:border-accent/30 transition-colors"
              >
                <div>
                  <p className="text-white/40 text-xs font-mono mb-1.5">{article.meta}</p>
                  <h3 className="text-base sm:text-lg font-semibold text-white font-sans leading-snug group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-1.5 text-white/60 text-sm leading-relaxed font-sans">
                    {article.description}
                  </p>
                </div>
                <FiArrowUpRight className="shrink-0 mt-1 text-white/40 group-hover:text-accent transition-colors text-xl" />
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="mt-6 text-center xl:text-left">
          <Link
            href={writing.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover text-sm font-mono transition-colors"
          >
            All essays on Medium <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

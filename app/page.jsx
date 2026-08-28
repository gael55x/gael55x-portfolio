'use client';

import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';

import Socials from '@/components/Socials';
import HeroScene from '@/components/HeroScene';
import CebuClock from '@/components/CebuClock';
import Section from '@/components/Section';
import SelectedWork from '@/components/SelectedWork';
import MobileHireBar from '@/components/MobileHireBar';
import ProofBand from '@/components/ProofBand';
import OpenSourceShowcase from '@/components/OpenSourceShowcase';
import ProjectsGrid from '@/components/ProjectsGrid';
import Writing from '@/components/Writing';
import SpeakingGallery from '@/components/SpeakingGallery';

import { projects } from '../data/projects';
import { about, credentials, skillNames } from '../data/resume';

const RESUME_HREF = '/assets/resume/Amolong_Gaille_Resume.pdf';
const MAIL_HREF = 'mailto:gaille.amolong1@gmail.com?subject=Interview%20request';

/* The hero subline, kept verbatim and set as a ruled ledger.
   Each line maps to one structure in the sculpture. */
const HERO_PROOF = [
  { line: 'SIEM for 170k+ users at Willed', plane: 'dusk' },
  { line: '5,000+ provider health platform at Referrin', plane: 'sand' },
  { line: '20× CV pipeline speedup at BitWork', plane: 'clay' },
  { line: 'agent devtools on npm', plane: 'lattice' },
];

/* Swatches sampled from the portrait; the whole site runs on them. */
const PALETTE = [
  { name: 'sand', hex: '#d8d0bc', chip: 'bg-sand' },
  { name: 'clay', hex: '#8f4938', chip: 'bg-clay' },
  { name: 'dusk', hex: '#3f8fca', chip: 'bg-dusk' },
  { name: 'ink', hex: '#242936', chip: 'bg-ink' },
];

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Home() {
  const year = new Date().getFullYear();
  const [highlight, setHighlight] = useState(null);

  return (
    <MotionConfig reducedMotion="user">
      <main id="main" className="pb-24 lg:pb-0">
        {/* ── HERO ── */}
        <section id="home">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 xl:py-20">
            <div className="grid gap-14 xl:grid-cols-12 xl:gap-10">
              <motion.div
                variants={heroStagger}
                initial="hidden"
                animate="visible"
                className="xl:col-span-7"
              >
                <motion.p
                  variants={heroItem}
                  className="mb-6 font-mono text-xs sm:text-sm tracking-wide text-ink-faint"
                >
                  Gaille Amolong · Cebu, PH · remote
                  <CebuClock />
                </motion.p>
                <motion.h1
                  variants={heroItem}
                  className="font-serif text-4xl sm:text-6xl xl:text-display-lg leading-tight sm:leading-none tracking-tight text-ink"
                >
                  I ship production AI and security systems and{' '}
                  <em className="text-clay">publish the proof</em>.
                </motion.h1>

                <motion.ul
                  variants={heroItem}
                  className="mt-10 max-w-md"
                  onMouseLeave={() => setHighlight(null)}
                >
                  {HERO_PROOF.map((item, i) => (
                    <li
                      key={item.line}
                      onMouseEnter={() => setHighlight(item.plane)}
                      className="flex items-baseline gap-4 border-t border-ink/15 py-2.5 last:border-b hover:bg-paper-deep/60 transition-colors"
                    >
                      <span className="font-mono text-2xs text-dusk-deep" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm sm:text-base text-ink-soft">{item.line}</span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  variants={heroItem}
                  className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
                >
                  <a
                    href={RESUME_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-clay px-5 py-3 font-mono text-xs tracking-wide text-paper hover:bg-clay-deep transition-colors"
                  >
                    download resume
                  </a>
                  <a
                    href={MAIL_HREF}
                    className="font-mono text-xs text-ink underline decoration-ink/30 underline-offset-4 hover:text-clay hover:decoration-clay transition-colors"
                  >
                    email me
                  </a>
                  <Socials containerStyles="flex gap-5" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="xl:col-span-5"
              >
                <HeroScene highlight={highlight} />
                <div className="relative mx-auto mt-14 flex max-w-96 flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="font-mono text-2xs text-ink-faint">
                    site palette, sampled from this photo
                  </span>
                  <span className="flex items-center gap-3">
                    {PALETTE.map((swatch) => (
                      <span key={swatch.name} className="flex items-center gap-1.5">
                        <span
                          aria-hidden="true"
                          className={`inline-block h-3 w-3 border border-ink/20 ${swatch.chip}`}
                        />
                        <span className="font-mono text-2xs text-ink-faint">{swatch.hex}</span>
                      </span>
                    ))}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROOF ── */}
        <ProofBand />

        {/* ── SELECTED WORK ── */}
        <SelectedWork />

        {/* ── OPEN SOURCE ── */}
        <OpenSourceShowcase />

        {/* ── MORE PROJECTS ── */}
        <Section
          id="projects"
          index="03"
          kicker="More projects"
          title="Range beyond the day job"
          sub="Smaller builds that show range: mobile AI, edtech, and volunteer infrastructure."
        >
          <ProjectsGrid projects={projects} />
        </Section>

        {/* ── WRITING ── */}
        <Writing />

        {/* ── ABOUT ── */}
        <Section id="about" index="05" kicker={about.title}>
          <div className="grid gap-10 lg:grid-cols-12">
            <p className="lg:col-span-7 font-serif text-xl sm:text-2xl leading-relaxed text-ink">
              {about.lead}
            </p>
            <ul className="lg:col-span-5">
              {credentials.map((credential) => (
                <li key={credential.label} className="border-t border-ink/15 last:border-b">
                  <a
                    href={credential.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-3 py-3.5"
                  >
                    <span>
                      <span className="block text-sm font-medium text-ink group-hover:text-clay transition-colors">
                        {credential.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-ink-faint">
                        {credential.detail}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12">
            <SpeakingGallery />
          </div>
          <p className="mt-12 border-t border-ink/15 pt-5 font-mono text-xs leading-loose text-ink-faint">
            {skillNames.join(' · ')}
          </p>
        </Section>

        {/* ── CONTACT: the page ends at night ── */}
        <section id="contact" className="scroll-mt-0 bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
            <p className="mb-3 font-mono text-xs tracking-wide text-paper/60">
              <span className="text-dusk-pale">06</span>
              <span className="mx-2 text-paper/30" aria-hidden="true">
                /
              </span>
              Contact
            </p>
            <h2 className="max-w-3xl font-serif text-3xl sm:text-4xl xl:text-display-sm leading-tight tracking-tight text-paper">
              Email is fastest. I typically reply within one business day.
            </h2>
            <a
              href={MAIL_HREF}
              className="mt-9 inline-block break-all font-serif text-2xl sm:text-5xl text-dusk-pale underline decoration-dusk/50 underline-offset-8 hover:decoration-dusk-pale transition-colors"
            >
              gaille.amolong1@gmail.com
            </a>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clay px-5 py-3 font-mono text-xs tracking-wide text-paper hover:bg-clay-deep transition-colors"
              >
                resume pdf
              </a>
              <Socials
                containerStyles="flex gap-5"
                linkStyles="font-mono text-xs text-paper/70 underline decoration-paper/25 underline-offset-4 hover:text-dusk-pale hover:decoration-dusk-pale transition-colors"
              />
            </div>
          </div>
          <footer className="border-t border-paper/15">
            <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-3 px-5 py-6 sm:px-8">
              <p className="font-mono text-2xs text-paper/60">
                © {year} Gaille Amolong · designed and built in Cebu
              </p>
              <p className="font-mono text-2xs text-paper/60">
                Set in Newsreader, Inter, and JetBrains Mono
              </p>
            </div>
          </footer>
        </section>

        <MobileHireBar />
      </main>
    </MotionConfig>
  );
}

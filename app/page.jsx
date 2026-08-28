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
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-14 xl:py-20">
            <div className="grid gap-14 xl:grid-cols-12 xl:gap-10">
              <motion.div
                variants={heroStagger}
                initial="hidden"
                animate="visible"
                className="xl:col-span-7"
              >
                <motion.p
                  variants={heroItem}
                  className="mb-5 font-mono text-xs tracking-wide text-bone-faint"
                >
                  Gaille Amolong · Cebu, PH · remote
                  <CebuClock />
                </motion.p>
                <motion.h1
                  variants={heroItem}
                  className="font-mono text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-bone"
                >
                  I ship production AI and security systems and{' '}
                  <em className="text-clay">publish the proof</em>.
                </motion.h1>

                <motion.ul
                  variants={heroItem}
                  className="mt-8 max-w-md"
                  onMouseLeave={() => setHighlight(null)}
                >
                  {HERO_PROOF.map((item, i) => (
                    <li
                      key={item.line}
                      onMouseEnter={() => setHighlight(item.plane)}
                      className="flex items-baseline gap-4 border-t border-bone/15 py-2 last:border-b hover:bg-panel/70 transition-colors"
                    >
                      <span className="font-mono text-2xs text-dusk" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-sans text-sm text-bone-dim">{item.line}</span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  variants={heroItem}
                  className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
                >
                  <a
                    href={RESUME_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-clay px-5 py-3 font-mono text-xs tracking-wide text-night hover:bg-dusk-pale transition-colors"
                  >
                    download resume
                  </a>
                  <a
                    href={MAIL_HREF}
                    className="link-draw font-mono text-xs text-bone hover:text-clay"
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
                className="group xl:col-span-5"
              >
                <HeroScene highlight={highlight} />
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
          <div className="grid gap-9 lg:grid-cols-12">
            <p className="lg:col-span-7 font-sans text-sm sm:text-base leading-relaxed text-bone-dim">
              {about.lead}
            </p>
            <ul className="lg:col-span-5">
              {credentials.map((credential) => (
                <li key={credential.label} className="border-t border-bone/15 last:border-b">
                  <a
                    href={credential.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-3 py-3"
                  >
                    <span>
                      <span className="block font-mono text-xs font-medium text-bone group-hover:text-clay transition-colors">
                        {credential.label}
                      </span>
                      <span className="mt-0.5 block font-sans text-2xs text-bone-faint">
                        {credential.detail}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-bone-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <SpeakingGallery />
          </div>
          <p className="mt-10 border-t border-bone/15 pt-4 font-mono text-2xs leading-loose text-bone-faint">
            {skillNames.join(' · ')}
          </p>
        </Section>

        {/* ── CONTACT ── */}
        <section id="contact" className="scroll-mt-14 border-t border-bone/15 bg-panel/60">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
            <p className="mb-3 font-mono text-2xs lowercase tracking-widest text-bone-faint">
              <span className="text-clay">06</span>
              <span className="mx-2 text-bone/30" aria-hidden="true">
                /
              </span>
              Contact
            </p>
            <h2 className="max-w-2xl font-mono text-xl sm:text-2xl font-bold tracking-tight text-bone">
              Email is fastest. I typically reply within one business day.
            </h2>
            <a
              href={MAIL_HREF}
              className="mt-7 inline-block break-all font-mono text-lg sm:text-3xl font-medium text-dusk-pale underline decoration-dusk/40 underline-offset-8 hover:decoration-dusk-pale transition-colors"
            >
              gaille.amolong1@gmail.com
            </a>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clay px-5 py-3 font-mono text-xs tracking-wide text-night hover:bg-dusk-pale transition-colors"
              >
                resume pdf
              </a>
              <Socials containerStyles="flex gap-5" />
            </div>
          </div>
          <footer className="border-t border-bone/15">
            <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-3 px-5 py-5 sm:px-8">
              <p className="font-mono text-2xs text-bone-faint">
                © {year} Gaille Amolong · designed and built in Cebu
              </p>
              <p className="font-mono text-2xs text-bone-faint">
                Set in JetBrains Mono and Inter
              </p>
            </div>
          </footer>
        </section>

        <MobileHireBar />
      </main>
    </MotionConfig>
  );
}

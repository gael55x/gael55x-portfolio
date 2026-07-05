'use client';

import { Button } from '@/components/ui/button';
import { FiDownload, FiMail } from 'react-icons/fi';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import SelectedWork from '@/components/SelectedWork';
import MobileHireBar from '@/components/MobileHireBar';

import { projects } from '../data/projects';
import { about, skillNames } from '../data/resume';

const ProjectsCarousel = dynamic(() => import('@/components/ProjectsCarousel'), {
  ssr: false,
});

const RESUME_HREF = '/assets/resume/Amolong_Gaille_Resume.pdf';
const MAIL_HREF =
  'mailto:gaille.amolong1@gmail.com?subject=Interview%20request%20%E2%80%94%20Gaille%20Amolong';

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen relative pb-24 lg:pb-0">
      {/* ── HERO ── */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center py-12 px-4 relative z-10 scroll-mt-28"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-14">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center xl:text-left order-2 xl:order-none flex-1"
            >
              <p className="text-sm sm:text-base text-accent font-mono tracking-wide mb-4">
                AI Platform Software Engineer
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-white font-sans tracking-tight">
                I cut a manufacturing CV pipeline from 10&nbsp;min to 30&nbsp;sec and ship secure platforms to 170,000+ users.
              </h1>
              <p className="text-white/60 text-base sm:text-lg mb-6 font-sans">
                Willed <span className="text-white/40">(170k+ users)</span> · Referrin Health{' '}
                <span className="text-white/40">(5k+ providers)</span> · BitWork Solutions{' '}
                <span className="text-white/40">(Lead)</span>
              </p>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center xl:justify-start mb-8 text-xs sm:text-sm font-mono text-white/50">
                <li className="flex items-center gap-1.5">
                  <span className="text-accent">✓</span> 170k+ users shipped
                </li>
                <li className="flex items-center gap-1.5 border-l border-white/10 pl-5">
                  <span className="text-accent">✓</span> 20x CV speedup
                </li>
                <li className="flex items-center gap-1.5 border-l border-white/10 pl-5">
                  <span className="text-accent">✓</span> 5k+ providers
                </li>
                <li className="flex items-center gap-1.5 border-l border-white/10 pl-5">
                  <span className="text-accent">✓</span> AWS certified
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 justify-center xl:justify-start">
                <Link
                  href={RESUME_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none min-w-44"
                >
                  <Button
                    size="lg"
                    className="w-full uppercase flex items-center justify-center gap-2 bg-accent text-primary hover:bg-accent-hover font-semibold"
                  >
                    <span>Download resume</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>
                <Link href={MAIL_HREF} className="flex-1 sm:flex-none min-w-44">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full uppercase flex items-center justify-center gap-2 border-accent/60 text-accent hover:bg-accent/10"
                  >
                    <span>Email me</span>
                    <FiMail className="text-xl" />
                  </Button>
                </Link>
              </div>
              <div className="mt-6">
                <Socials
                  containerStyles="flex gap-4 justify-center xl:justify-start"
                  iconStyles="w-10 h-10 border border-white/15 rounded-full flex justify-center items-center text-white/70 text-base hover:border-accent hover:text-accent transition-all duration-200"
                />
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.05 }}
              className="order-1 xl:order-none mb-4 xl:mb-0 flex-shrink-0"
            >
              <Photo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <SelectedWork />

      {/* ── SIDE PROJECTS ── */}
      <section id="projects" className="py-20 relative z-10 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans">
              Side projects
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-4 rounded-full" />
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base font-sans">
              Independent work that shows range beyond employer projects ({projects.length}{' '}
              projects).
            </p>
          </motion.div>

          <ProjectsCarousel projects={projects} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 relative z-10 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans text-center xl:text-left">
            {about.title}
          </h2>
          <div className="h-1 w-24 bg-accent rounded-full mb-8 mx-auto xl:mx-0" />
          <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto xl:mx-0 mb-8 font-sans">
            {about.lead}
          </p>
          <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
            {skillNames.map((skill) => (
              <span
                key={skill}
                className="text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 relative z-10 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans">Contact</h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-4 rounded-full" />
            <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base font-sans">
              Email is fastest. I typically reply within one business day.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto rounded-xl border border-white/10 bg-surface/90 p-6 sm:p-8 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-accent text-primary hover:bg-accent-hover font-semibold gap-2">
                  <FiDownload /> Resume PDF
                </Button>
              </Link>
              <Link href={MAIL_HREF} className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-accent/50 text-accent hover:bg-accent/10 gap-2"
                >
                  <FiMail /> Email
                </Button>
              </Link>
            </div>
            <p className="text-white/50 text-sm font-mono text-center">
              gaille.amolong1@gmail.com
            </p>
            <Socials
              containerStyles="flex gap-3 justify-center"
              iconStyles="w-10 h-10 border border-white/15 rounded-full flex justify-center items-center text-white/70 hover:border-accent hover:text-accent transition-all duration-200"
            />
          </div>
        </div>
      </section>

      <MobileHireBar />
    </div>
  );
}

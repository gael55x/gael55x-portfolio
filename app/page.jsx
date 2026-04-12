'use client';

import { Button } from '@/components/ui/button';
import { FiDownload, FiMail, FiExternalLink } from 'react-icons/fi';
import { BsArrowUpRight, BsGithub, BsMic, BsCalendar } from 'react-icons/bs';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import MatrixRain from '@/components/MatrixRain';
import HackerCard from '@/components/HackerCard';
import TerminalStatusBar from '@/components/TerminalStatusBar';
import TerminalCertCarousel from '@/components/TerminalCertCarousel';
import SelectedWork from '@/components/SelectedWork';
import MobileHireBar from '@/components/MobileHireBar';

import { projects } from '../data/projects';
import { certifications } from '../data/certifications';
import { about, experience, education, skills } from '../data/resume';
import { stats } from '../data/stats';
import { speakingEvents, advocacyActivities } from '../data/speaking';
import { contactInfo } from '../data/contact';

const ThreeHeroBackground = dynamic(() => import('@/components/ThreeHeroBackground'), {
  ssr: false,
});

const RESUME_HREF = '/assets/resume/Amolong_Gaille_Resume.pdf';
const MAIL_HREF =
  'mailto:gaille.amolong1@gmail.com?subject=Interview%20request%20%E2%80%94%20Gaille%20Amolong';

const topSpeaking = speakingEvents.slice(0, 1);
const featuredProjects = projects.filter((p) => p.featured);
const moreProjects = projects.filter((p) => !p.featured);

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen relative pb-24 lg:pb-0">
      <MatrixRain />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center py-12 px-4 relative z-10 scroll-mt-28"
      >
        <div className="container mx-auto relative z-10 max-w-[1100px]">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-14">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center xl:text-left order-2 xl:order-none flex-1"
            >
              <p className="text-sm sm:text-base text-green-400/90 font-mono tracking-wide mb-3">
                Lead Software Engineer · AI systems, backend, platform security
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[2.75rem] font-bold mb-5 leading-tight text-white font-sans tracking-tight">
                I ship production AI and platforms—measured in seconds, users, and incidents avoided.
              </h1>
              <p className="text-white/70 text-base sm:text-lg mb-6 font-sans">
                Bitwork Solutions · Willed · early-stage products (e.g. Referrin)
              </p>
              <ul className="text-left max-w-xl mx-auto xl:mx-0 space-y-3 mb-8 text-sm sm:text-base text-white/85 font-sans leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-green-400 font-mono shrink-0">—</span>
                  <span>
                    Computer vision and pipeline work that cut processing from about{' '}
                    <strong className="text-white">10 minutes to ~30 seconds (~20×)</strong>, with
                    roughly <strong className="text-white">+25% precision</strong> and{' '}
                    <strong className="text-white">+40% throughput</strong> in manufacturing
                    workflows (Bitwork).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-mono shrink-0">—</span>
                  <span>
                    Security-minded platform engineering on a product serving{' '}
                    <strong className="text-white">150k+ users</strong>—SIEM/security-oriented work,
                    features, and CI/CD (Willed).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-mono shrink-0">—</span>
                  <span>
                    Full-stack and infra contributions as an early product reached{' '}
                    <strong className="text-white">5k+ users</strong> (Referrin).
                  </span>
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-white/45 font-mono mb-6">
                Bitwork Solutions · Willed · Referrin
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 justify-center xl:justify-start">
                <Link
                  href={RESUME_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none min-w-[200px]"
                >
                  <Button
                    size="lg"
                    className="w-full uppercase flex items-center justify-center gap-2 bg-accent text-primary hover:bg-accent-hover font-semibold"
                  >
                    <span>Download resume</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>
                <Link href={MAIL_HREF} className="flex-1 sm:flex-none min-w-[200px]">
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
              <div className="mt-8">
                <Socials
                  containerStyles="flex gap-4 sm:gap-6 justify-center xl:justify-start flex-wrap"
                  iconStyles="w-9 h-9 sm:w-10 sm:h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.05 }}
              className="order-1 xl:order-none mb-4 xl:mb-0 flex-shrink-0 relative"
            >
              <div
                className="absolute -inset-16 -z-10 pointer-events-none opacity-35 blur-[0.5px] hidden md:block w-[min(100vw,520px)] h-[min(100vw,520px)] max-w-[520px] max-h-[520px] mx-auto"
                style={{
                  maskImage:
                    'radial-gradient(circle at 55% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
                  WebkitMaskImage:
                    'radial-gradient(circle at 55% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
                }}
              >
                <ThreeHeroBackground className="h-full w-full min-h-[280px]" />
              </div>
              <Photo />
            </motion.div>
          </div>
        </div>
      </section>

      <SelectedWork />

      <section id="stats" className="py-16 sm:py-20 bg-black/50 relative z-10 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center mb-10 sm:mb-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans tracking-tight">
              Impact at a glance
            </h2>
            <p className="text-white/55 font-mono text-sm mb-4">Headline metrics</p>
            <div className="h-1 w-24 sm:w-32 bg-green-400 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, index) => (
              <HackerCard key={item.text} delay={index * 0.06}>
                <div className="flex flex-col items-center justify-center gap-2 group p-5 text-center">
                  <span className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-green-400 group-hover:text-green-300 transition-colors font-mono leading-none">
                    {item.display}
                  </span>
                  <p className="text-white/75 text-xs sm:text-sm font-sans leading-snug max-w-[14rem]">
                    {item.text}
                  </p>
                </div>
              </HackerCard>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 bg-black/40 relative z-10 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-sans text-center xl:text-left">
            {about.title}
          </h2>
          <div className="h-1 w-24 bg-green-400 rounded-full mb-8 mx-auto xl:mx-0" />
          <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto xl:mx-0 mb-4 font-sans">
            {about.lead}
          </p>
          <p className="text-white/60 text-sm sm:text-base mb-10 max-w-2xl mx-auto xl:mx-0 font-sans">
            {about.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {about.info.map((item, index) => (
              <div
                key={index}
                className="bg-[#1e1e2a] rounded-xl px-4 py-3 sm:p-4 border border-white/5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4"
              >
                <span className="text-white/50 text-sm font-mono">{item.fieldName}</span>
                <span className="text-white text-sm sm:text-base text-right font-sans break-words">
                  {item.fieldValue}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="py-16 sm:py-20 bg-black/60 relative z-10 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans">Resume</h2>
            <div className="h-1 w-24 sm:w-32 bg-green-400 mx-auto mb-4 rounded-full" />
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-sans">
              Experience, education, and skills—organized for fast scanning.
            </p>
          </motion.div>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8 h-auto p-1">
              <TabsTrigger value="experience" className="text-xs sm:text-sm font-sans">
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="text-xs sm:text-sm font-sans">
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className="text-xs sm:text-sm font-sans">
                Skills
              </TabsTrigger>
            </TabsList>

            <div className="w-full mt-6 min-h-[40vh]">
              <TabsContent value="experience" className="w-full focus-visible:outline-none">
                <div className="flex flex-col gap-6">
                  <p className="text-white/65 text-center max-w-2xl mx-auto font-sans text-sm">
                    {experience.description}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {experience.items.map((item, index) => (
                      <HackerCard key={`${item.company}-${index}`} delay={index * 0.05}>
                        <div className="p-5 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                            <span className="text-green-400 font-mono text-xs bg-green-400/10 px-2 py-1 rounded border border-green-400/30 w-fit">
                              {item.duration}
                            </span>
                            <span className="text-white/55 text-xs font-mono">{item.company}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2 font-sans">
                            {item.position}
                          </h4>
                          <p className="text-white/75 text-sm leading-relaxed font-sans">
                            {item.description}
                          </p>
                        </div>
                      </HackerCard>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education" className="w-full focus-visible:outline-none">
                <div className="flex flex-col gap-6">
                  <p className="text-white/65 text-center max-w-2xl mx-auto font-sans text-sm">
                    {education.description}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {education.items.map((item, index) => (
                      <HackerCard key={`${item.institution}-${index}`} delay={index * 0.05}>
                        <div className="p-5 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                            <span className="text-green-400 font-mono text-xs bg-green-400/10 px-2 py-1 rounded border border-green-400/30 w-fit">
                              {item.duration}
                            </span>
                            <span className="text-white/55 text-xs font-mono">
                              {item.institution}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2 font-sans">
                            {item.degree}
                          </h4>
                          <p className="text-white/75 text-sm leading-relaxed font-sans">
                            {item.description}
                          </p>
                        </div>
                      </HackerCard>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full focus-visible:outline-none">
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-semibold text-center text-white font-sans">
                    {skills.title}
                  </h3>
                  <p className="text-white/60 text-center max-w-2xl mx-auto text-sm font-sans px-2">
                    {skills.description}
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 max-w-5xl mx-auto">
                    {skills.skillList.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-[#1e1e2a] rounded-lg px-2 py-3 sm:p-3 border border-white/5 flex flex-col items-center gap-2 hover:border-accent/25 transition-colors"
                      >
                        <div className="text-2xl sm:text-3xl text-accent">{skill.icon}</div>
                        <p className="text-white/80 text-center text-[10px] sm:text-xs leading-tight font-sans">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 relative z-10 bg-black/40 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans">
              Selected code & products
            </h2>
            <div className="h-1 w-24 sm:w-32 bg-green-400 mx-auto mb-4 rounded-full" />
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-sans px-2">
              Problem, approach, outcome, and business angle—then repository or demo links.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.num}
                className="rounded-xl border border-white/10 bg-[#14141c]/80 overflow-hidden flex flex-col"
              >
                <div className="relative h-48 sm:h-52 w-full bg-gradient-to-br from-gray-900/90 to-black/90">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={
                      project.image.includes('BuhAI') || project.image.includes('Ren')
                        ? 'object-contain p-4'
                        : 'object-cover'
                    }
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
                  <p className="text-green-400/90 font-mono text-xs uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-white font-sans leading-snug">
                    {project.title}
                  </h3>
                  <dl className="text-sm space-y-2 flex-1 font-sans">
                    <div>
                      <dt className="text-white/45 text-xs uppercase tracking-wider font-mono">
                        Problem
                      </dt>
                      <dd className="text-white/80">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-white/45 text-xs uppercase tracking-wider font-mono">
                        Result
                      </dt>
                      <dd className="text-white/90 font-medium">{project.result}</dd>
                    </div>
                    <div>
                      <dt className="text-white/45 text-xs uppercase tracking-wider font-mono">
                        Business impact
                      </dt>
                      <dd className="text-white/70">{project.businessImpact}</dd>
                    </div>
                  </dl>
                  <div>
                    <p className="text-green-400 font-mono text-xs mb-2">Stack</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {project.stack.map((s, i) => (
                        <li
                          key={i}
                          className="text-green-400/90 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/25 text-[10px] sm:text-xs font-mono"
                        >
                          {s.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full bg-white/5 flex justify-center items-center hover:bg-white/10"
                          >
                            <FiExternalLink className="text-white text-lg" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Demo / primary link</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full bg-white/5 flex justify-center items-center hover:bg-white/10"
                          >
                            <BsGithub className="text-white text-lg" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Source</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <details className="mt-12 group max-w-3xl mx-auto">
            <summary className="cursor-pointer list-none text-center font-mono text-green-400 hover:text-green-300 text-sm py-3 px-4 rounded-lg border border-green-400/30 bg-green-400/5 [&::-webkit-details-marker]:hidden flex items-center justify-center gap-2">
              <span>More projects & repositories ({moreProjects.length})</span>
              <span className="text-xs opacity-70 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <ul className="mt-6 space-y-4 border-t border-white/10 pt-6">
              {moreProjects.map((project) => (
                <li
                  key={project.num}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 pb-4 border-b border-white/5 last:border-0"
                >
                  <span className="font-mono text-green-400/80 text-sm w-8 shrink-0">{project.num}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold font-sans">{project.title}</h4>
                    <p className="text-white/65 text-sm mt-1 font-sans line-clamp-2">
                      {project.result}
                    </p>
                    <div className="flex gap-3 mt-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:underline font-mono inline-flex items-center gap-1"
                      >
                        GitHub <BsArrowUpRight className="text-[10px]" />
                      </Link>
                      {project.live !== project.github && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-white/60 hover:text-white font-mono inline-flex items-center gap-1"
                        >
                          Link <BsArrowUpRight className="text-[10px]" />
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      <section id="certifications" className="py-16 sm:py-20 bg-black/60 relative z-10 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans">Certifications</h2>
            <div className="h-1 w-24 sm:w-32 bg-green-400 mx-auto mb-4 rounded-full" />
            <p className="text-white/75 max-w-2xl mx-auto text-sm sm:text-base font-sans px-2">
              Continuous learning across cloud, AI, and full-stack delivery.
            </p>
          </motion.div>
          <TerminalCertCarousel certifications={certifications} />
        </div>
      </section>

      <section id="speaking" className="py-16 sm:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans">Speaking</h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-4 rounded-full" />
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-sans px-2">
              Representative talk—AI, deployment, and responsible shipping.
            </p>
          </motion.div>

          {topSpeaking.map((event, index) => (
            <motion.div
              key={index}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] rounded-2xl overflow-hidden shadow-lg mb-10"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 h-56 sm:h-64 lg:h-80 relative">
                  <Image src={event.imageUrl} alt={event.title} fill className="object-cover" />
                  <div className="absolute bottom-3 left-3 bg-accent/90 text-white py-1.5 px-3 rounded-full flex items-center gap-2 text-xs">
                    <BsCalendar />
                    <span>{event.date}</span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 font-sans leading-snug">
                      {event.title}
                    </h4>
                    <p className="text-white/60 mb-3 text-sm">{event.venue}</p>
                    <p className="text-white/75 mb-6 text-sm sm:text-base font-sans leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <Link href={event.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button className="bg-accent hover:bg-accent/80 text-primary rounded-full px-6 py-2.5 flex items-center gap-2 w-full sm:w-auto justify-center font-semibold">
                      View <BsArrowUpRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {advocacyActivities[0] && (
            <div className="bg-gradient-to-br from-[#1e1e2a] to-[#2d2d3a] rounded-2xl p-6 sm:p-8 shadow-lg border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2 font-sans">
                <BsMic className="text-accent shrink-0" />
                {advocacyActivities[0].title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-4 font-sans leading-relaxed">
                {advocacyActivities[0].description}
              </p>
              <blockquote className="border-l-2 border-accent/50 pl-4 text-white/85 italic text-sm sm:text-base font-sans">
                {advocacyActivities[0].quote}
              </blockquote>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 bg-black/60 relative z-10 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-sans">Contact</h2>
            <div className="h-1 w-24 sm:w-32 bg-green-400 mx-auto mb-4 rounded-full" />
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base font-sans px-2">
              Hiring or collaborating? Use the channels below—fastest path is email.
            </p>
          </motion.div>

          <div className="flex flex-col xl:flex-row gap-8 max-w-3xl mx-auto">
            <HackerCard>
              <div className="p-6 sm:p-8 flex flex-col gap-5">
                <h3 className="text-xl text-green-400 font-mono">Next steps</h3>
                <p className="text-white/70 text-sm font-sans leading-relaxed">
                  Download the resume for ATS and panel reviews, or email with role, stack, and timeline—I
                  typically reply within one business day.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-accent text-primary hover:bg-accent-hover font-semibold gap-2">
                      <FiDownload /> Resume PDF
                    </Button>
                  </Link>
                  <Link href={MAIL_HREF} className="flex-1">
                    <Button variant="outline" className="w-full border-accent/50 text-accent hover:bg-accent/10 gap-2">
                      <FiMail /> Email
                    </Button>
                  </Link>
                </div>
                <div className="pt-2">
                  <p className="text-white/50 text-xs font-mono mb-3">Also on</p>
                  <Socials
                    containerStyles="flex gap-3 flex-wrap"
                    iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                  />
                </div>
              </div>
            </HackerCard>

            <HackerCard>
              <ul className="flex flex-col gap-6 p-6 sm:p-8">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 text-green-400 rounded-md flex items-center justify-center border border-green-500/30 shrink-0">
                      <div className="text-xl">{item.icon}</div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/50 font-mono text-xs">{item.title}</p>
                      {item.title === 'Email' ? (
                        <a
                          href={MAIL_HREF}
                          className="text-base sm:text-lg text-white font-sans break-all hover:text-accent transition-colors"
                        >
                          {item.description}
                        </a>
                      ) : (
                        <p className="text-base sm:text-lg text-white font-sans break-words">{item.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </HackerCard>
          </div>
        </div>
      </section>

      <TerminalStatusBar />
      <MobileHireBar />
    </div>
  );
}

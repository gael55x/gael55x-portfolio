'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function imageFitClass(image) {
  if (image.includes('BuhAI') || image.includes('Ren')) return 'object-contain p-4';
  return 'object-cover';
}

export default function ProjectsCarousel({ projects }) {
  return (
    <div className="projects-swiper relative mx-auto max-w-4xl px-8 sm:px-12 md:px-14">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        loop={projects.length > 1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={{ enabled: true }}
        a11y={{
          prevSlideMessage: 'Previous project',
          nextSlideMessage: 'Next project',
          paginationBulletMessage: 'Go to project {{index}}',
        }}
        className="projects-swiper-inner !pb-14"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.num}>
            <article className="mx-auto max-w-xl rounded-xl border border-white/10 bg-surface/90 overflow-hidden flex flex-col hover:border-accent/20 transition-colors">
              <div className="relative h-48 sm:h-52 w-full bg-gradient-to-br from-surface/90 to-surface-deep/90">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={imageFitClass(project.image)}
                  sizes="(max-width: 768px) 100vw, 36rem"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
                <p className="text-accent/90 font-mono text-xs uppercase tracking-wider">
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
                  <p className="text-accent font-mono text-xs mb-2">Stack</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.stack.map((s, i) => (
                      <li
                        key={i}
                        className="text-accent/90 bg-accent/10 px-2 py-0.5 rounded border border-accent/20 text-xs font-mono"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

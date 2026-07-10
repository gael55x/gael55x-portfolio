'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { speaking } from '@/data/speaking';

export default function SpeakingGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {speaking.map((photo, index) => (
        <motion.figure
          key={photo.src}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.3, delay: reduceMotion ? 0 : index * 0.06 }}
          className="group"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-surface-deep">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <figcaption className="mt-2 text-white/50 text-xs font-sans leading-snug">
            {photo.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

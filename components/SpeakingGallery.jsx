'use client';

import Image from 'next/image';
import { speaking } from '@/data/speaking';

export default function SpeakingGallery() {

  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {speaking.map((photo, index) => (
        <figure
          key={photo.src}
          className={index === 1 ? 'sm:mt-6' : ''}
        >
          <div className="frame-offset relative aspect-video border border-bone/20 bg-panel">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <figcaption className="mt-2 font-mono text-2xs leading-snug text-bone-faint">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

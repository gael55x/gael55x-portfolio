'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

/**
 * The signature spatial object: the portrait held inside four interdependent
 * planes (sand slab, dusk frame, ink lattice, clay block). Pointer position
 * tilts the whole rig a few degrees; once the visitor scrolls into the work
 * the composition settles toward flat. Pure CSS 3D, no WebGL.
 */
export default function HeroScene({ highlight = null }) {
  const sceneRef = useRef(null);
  const rigRef = useRef(null);
  const frame = useRef(0);
  const reduceMotion = usePrefersReducedMotion();
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return undefined;

    const onMove = (event) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rig = rigRef.current;
        const scene = sceneRef.current;
        if (!rig || !scene) return;
        const rect = scene.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = Math.max(-1, Math.min(1, (event.clientX - cx) / (rect.width * 1.4)));
        const dy = Math.max(-1, Math.min(1, (event.clientY - cy) / (rect.height * 1.4)));
        rig.style.setProperty('--rx', (dx * 7).toFixed(2));
        rig.style.setProperty('--ry', (-dy * 5).toFixed(2));
      });
    };

    const onLeave = () => {
      const rig = rigRef.current;
      if (!rig) return;
      rig.style.setProperty('--rx', '0');
      rig.style.setProperty('--ry', '0');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, [reduceMotion]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setSettled(entry.intersectionRatio < 0.4),
      { threshold: [0, 0.4, 1] }
    );
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sceneRef}
      data-settled={settled}
      data-highlight={highlight ?? undefined}
      className="scene relative mx-auto w-full max-w-72 sm:max-w-80 xl:max-w-96 aspect-portrait"
    >
      <div className="scene-idle">
        <div ref={rigRef} className="scene-rig">
          <div aria-hidden="true" className="plane plane-lattice" />
          <div aria-hidden="true" className="plane plane-sand" />
          <div aria-hidden="true" className="plane plane-dusk" />
          <div className="plane plane-portrait">
            <Image
              src="/assets/portrait.jpg"
              alt="Gaille Amolong at dusk in Cebu"
              fill
              priority
              quality={82}
              className="object-cover"
              sizes="(max-width: 640px) 300px, 380px"
            />
          </div>
          <div aria-hidden="true" className="plane plane-clay" />
        </div>
      </div>
    </div>
  );
}

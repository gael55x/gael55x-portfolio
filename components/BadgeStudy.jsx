'use client';

import Image from 'next/image';
import badgePoster from '@/public/assets/badge-study-poster.png';
import { useEffect, useRef, useState } from 'react';

const messages = {
  loading: 'Loading the badge study.',
  ready: '3D ready. Move your pointer to explore, or press Enter to rotate.',
  unavailable: '3D is unavailable. The static study shows the same layers.',
  interrupted: '3D was interrupted. The static study is still available.',
};

export default function BadgeStudy() {
  const canvas = useRef(null);
  const scene = useRef(null);
  const [phase, setPhase] = useState('idle');
  const active = phase === 'loading' || phase === 'ready';

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    let dispose;
    const element = canvas.current;
    const stage = element.parentElement;
    // Touch browsers may not focus buttons, so blur alone cannot release the GPU.
    const onOutsidePress = (event) => {
      if (!stage.contains(event.target)) setPhase('idle');
    };
    const onContextLost = (event) => {
      event.preventDefault();
      setPhase('interrupted');
    };
    element.addEventListener('webglcontextlost', onContextLost);
    document.addEventListener('pointerdown', onOutsidePress);
    import('@/lib/badgeScene')
      .then(({ createBadgeScene }) => {
        if (cancelled) return;
        const view = createBadgeScene(element);
        scene.current = view;
        dispose = view.dispose;
        setPhase('ready');
      })
      .catch(() => {
        if (!cancelled) setPhase('unavailable');
      });
    return () => {
      cancelled = true;
      element.removeEventListener('webglcontextlost', onContextLost);
      document.removeEventListener('pointerdown', onOutsidePress);
      dispose?.();
      scene.current = null;
    };
  }, [active]);

  function explore(event) {
    if (
      event.pointerType !== 'mouse' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    if (!active) setPhase('loading');
  }

  return (
    <div className="badge-study">
      <noscript>
        <style>{`.study-hint, .study-trigger { display: none; }`}</style>
      </noscript>
      <div className="study-stage" data-phase={phase}>
        <Image
          src={badgePoster}
          alt="Conceptual scan board, detected contour, and solid badge in three layers"
          fill
          sizes="(max-width: 600px) calc(100vw - 72px), (max-width: 960px) 55vw, 650px"
        />
        <button
          type="button"
          className="study-trigger"
          aria-label="Rotate the three-dimensional badge study"
          aria-describedby="study-description"
          onPointerEnter={explore}
          onPointerMove={(event) => {
            if (
              event.pointerType !== 'mouse' ||
              !scene.current ||
              window.matchMedia('(prefers-reduced-motion: reduce)').matches
            )
              return;
            const bounds = event.currentTarget.getBoundingClientRect();
            scene.current.point(
              (event.clientX - bounds.left) / bounds.width,
              (event.clientY - bounds.top) / bounds.height,
            );
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === 'mouse') setPhase('idle');
          }}
          onBlur={() => setPhase('idle')}
          onPointerCancel={() => setPhase('idle')}
          onClick={() => {
            if (active) scene.current?.rotate();
            else setPhase('loading');
          }}
        />
        {active && <canvas ref={canvas} aria-hidden="true" />}
      </div>
      <p className="study-hint" aria-hidden="true">
        <span>Hover to explore · </span>Tap or press Enter to rotate
      </p>
      <p id="study-description" className="sr-only">
        Conceptual scan board, detected contour, and solid badge in three layers.
      </p>
      <p className="sr-only" role="status">
        {messages[phase] || ''}
      </p>
    </div>
  );
}

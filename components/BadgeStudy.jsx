'use client';

import Image from 'next/image';
import badgePoster from '@/public/assets/badge-study-poster.png';
import { useCallback, useEffect, useRef, useState } from 'react';

const phrases = ['Physical scan.', 'Detected geometry.', 'Production asset.'];
const messages = {
  loading: 'Loading the badge study.',
  ready: '3D ready. A scan reveals the emblem’s contours and lifts the vector asset.',
  unavailable: '3D is unavailable. The static study shows the same layers.',
  interrupted: '3D was interrupted. The static study is still available.',
};
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function BadgeStudy() {
  const canvas = useRef(null);
  const stageEl = useRef(null);
  const view = useRef(null);
  const releaseTimer = useRef(null);
  const pointerInside = useRef(false);
  const [phase, setPhase] = useState('idle');
  const [stage, setStage] = useState(-1);
  const active = phase === 'loading' || phase === 'ready';

  const leave = useCallback(() => {
    pointerInside.current = false;
    clearTimeout(releaseTimer.current);
    if (reduced()) {
      setPhase('idle');
      return;
    }
    const scene = view.current;
    if (!scene) {
      setPhase('idle');
      return;
    }
    scene.retract().then((settled) => {
      if (settled && view.current === scene) {
        releaseTimer.current = setTimeout(() => setPhase('idle'), 1500);
      }
    });
  }, []);
  function start() {
    clearTimeout(releaseTimer.current);
    if (!active) setPhase('loading');
    else if (reduced()) view.current?.showEnd();
    else view.current?.play();
  }

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    const element = canvas.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = () => setPhase('idle');
    const onVisibilityChange = () => {
      if (document.hidden) setPhase('idle');
    };
    const visibility = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setPhase('idle');
    });
    visibility.observe(stageEl.current);
    const onOutsidePress = (event) => {
      if (!stageEl.current.contains(event.target)) leave();
    };
    const onContextLost = (event) => {
      event.preventDefault();
      setPhase('interrupted');
    };
    element.addEventListener('webglcontextlost', onContextLost);
    document.addEventListener('pointerdown', onOutsidePress);
    motion.addEventListener('change', onMotionChange);
    document.addEventListener('visibilitychange', onVisibilityChange);
    import('@/lib/badgeScene')
      .then(({ createBadgeScene }) => {
        if (cancelled) return;
        view.current = createBadgeScene(element, {
          onStage: (next) => {
            if (!motion.matches) setStage(next);
          },
        });
        setPhase('ready');
        if (reduced()) view.current.showEnd();
        else view.current.play();
      })
      .catch(() => {
        if (!cancelled) setPhase('unavailable');
      });
    return () => {
      cancelled = true;
      element.removeEventListener('webglcontextlost', onContextLost);
      document.removeEventListener('pointerdown', onOutsidePress);
      motion.removeEventListener('change', onMotionChange);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      visibility.disconnect();
      clearTimeout(releaseTimer.current);
      view.current?.dispose();
      view.current = null;
      setStage(-1);
    };
  }, [active, leave]);

  return (
    <>
      <noscript>
        <style>{`.study-trigger, .study-touch-cue { display: none; }`}</style>
      </noscript>
      <div className="badge-study">
        <div className="study-stage" ref={stageEl} data-phase={phase}>
          <Image
            src={badgePoster}
            alt="Conceptual relief emblem on a scan bed between four marker tags"
            fill
            sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 960px) calc(100vw - 238px), 720px"
          />
          <button
            type="button"
            className="study-trigger"
            aria-label="Play the badge study: physical scan, detected geometry, production asset"
            aria-describedby="study-description"
            onPointerMove={(event) => {
              if (event.pointerType !== 'mouse' || reduced()) return;
              // Scrolling can place the stage under a stationary pointer. Only
              // actual pointer movement starts a hover session.
              if (!pointerInside.current || phase === 'idle') start();
              pointerInside.current = true;
              if (!view.current) return;
              const bounds = event.currentTarget.getBoundingClientRect();
              view.current.point(
                (event.clientX - bounds.left) / bounds.width,
                (event.clientY - bounds.top) / bounds.height,
              );
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === 'mouse') leave();
            }}
            onBlur={leave}
            onPointerCancel={leave}
            onClick={start}
          />
          <span className="study-touch-cue" aria-hidden="true">
            Tap to scan
          </span>
          {active && <canvas ref={canvas} aria-hidden="true" />}
        </div>
        <p id="study-description" className="sr-only">
          A relief emblem is scanned, its contours are detected, and the vector asset lifts off.
        </p>
        <p className="sr-only" role="status">
          {messages[phase] || ''}
        </p>
      </div>
      <figcaption>
        <h5 className="study-title">
          {phrases.map((phrase, i) => (
            <span key={phrase} data-dim={stage >= 0 && stage !== i ? 'true' : undefined}>
              {phrase}
            </span>
          ))}
        </h5>
        <p className="pipeline-caption">Conceptual illustration, not a production scan.</p>
      </figcaption>
    </>
  );
}

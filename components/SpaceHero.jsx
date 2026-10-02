'use client';

import { useEffect, useRef, useState } from 'react';

export default function SpaceHero({ children }) {
  const element = useRef(null);
  const canvas = useRef(null);
  const scene = useRef(null);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const update = () => setActive(visible && !motion.matches && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(element.current);
    motion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    const updateScroll = () => {
      const bounds = element.current.getBoundingClientRect();
      scene.current?.scroll(Math.max(0, Math.min(1, -bounds.top / bounds.height)));
    };
    const contextLost = (event) => {
      event.preventDefault();
      setReady(false);
      setActive(false);
    };
    const surface = canvas.current;
    surface.addEventListener('webglcontextlost', contextLost);
    import('@/lib/spaceScene')
      .then(({ createSpaceScene }) => {
        if (cancelled) return;
        scene.current = createSpaceScene(surface);
        setReady(true);
        updateScroll();
        window.addEventListener('scroll', updateScroll, { passive: true });
      })
      .catch(() => {
        if (!cancelled) {
          setReady(false);
          setActive(false);
        }
      });
    return () => {
      cancelled = true;
      window.removeEventListener('scroll', updateScroll);
      surface.removeEventListener('webglcontextlost', contextLost);
      scene.current?.dispose();
      scene.current = null;
      setReady(false);
    };
  }, [active]);

  return (
    <section
      ref={element}
      id="home"
      className="hero-shell"
      aria-labelledby="hero-title"
      data-space-ready={ready || undefined}
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse') return;
        const bounds = event.currentTarget.getBoundingClientRect();
        scene.current?.point(
          (event.clientX - bounds.left) / bounds.width,
          (event.clientY - bounds.top) / bounds.height,
        );
      }}
      onPointerLeave={() => scene.current?.leave()}
    >
      {active && <canvas ref={canvas} className="space-canvas" aria-hidden="true" />}
      {children}
    </section>
  );
}

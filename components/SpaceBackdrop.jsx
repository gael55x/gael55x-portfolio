'use client';

import { useEffect, useRef } from 'react';

const stars = Array.from({ length: 90 }, (_, index) => ({
  x: (index * 371.3 + 37) % 1000,
  y: (index * 237.1 + 83) % 1000,
}));

// The static SVG is also the server/no-JS/reduced-motion fallback.
export default function SpaceBackdrop() {
  const surface = useRef(null);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const circles = [...surface.current.querySelectorAll('circle')];
    const offsets = stars.map(() => ({ x: 0, y: 0 }));
    let cursor = null;
    let frame = 0;
    function draw() {
      frame = 0;
      let moving = false;
      const width = window.innerWidth;
      const height = window.innerHeight;
      stars.forEach((star, i) => {
        let targetX = 0;
        let targetY = 0;
        if (cursor) {
          const dx = (star.x / 1000) * width - cursor.x;
          const dy = (star.y / 1000) * height - cursor.y;
          const distance = Math.hypot(dx, dy);
          const strength = Math.pow(Math.max(0, 1 - distance / 130), 2) * 64;
          targetX = (distance < 1 ? Math.cos(i * 2.4) : dx / distance) * strength;
          targetY = (distance < 1 ? Math.sin(i * 2.4) : dy / distance) * strength;
        }
        const offset = offsets[i];
        offset.x += (targetX - offset.x) * 0.18;
        offset.y += (targetY - offset.y) * 0.18;
        if (Math.abs(offset.x - targetX) + Math.abs(offset.y - targetY) > 0.05) moving = true;
        if (Math.abs(offset.x) + Math.abs(offset.y) > 0.1) {
          circles[i].setAttribute(
            'transform',
            `translate(${(offset.x / width) * 1000} ${(offset.y / height) * 1000})`,
          );
        } else circles[i].removeAttribute('transform');
      });
      if (moving) frame = requestAnimationFrame(draw);
    }
    function requestDraw() {
      if (!frame) frame = requestAnimationFrame(draw);
    }
    function move(event) {
      if (event.pointerType !== 'mouse' || motion.matches || document.hidden) return;
      cursor = { x: event.clientX, y: event.clientY };
      requestDraw();
    }
    function reset() {
      cursor = null;
      requestDraw();
    }
    function leave(event) {
      if (!event.relatedTarget) reset();
    }
    function restoreStatic() {
      if (!motion.matches && !document.hidden) return;
      cancelAnimationFrame(frame);
      frame = 0;
      cursor = null;
      offsets.forEach((offset, i) => {
        offset.x = offset.y = 0;
        circles[i].removeAttribute('transform');
      });
    }
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerout', leave);
    window.addEventListener('blur', reset);
    window.addEventListener('resize', reset, { passive: true });
    motion.addEventListener('change', restoreStatic);
    document.addEventListener('visibilitychange', restoreStatic);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', reset);
      window.removeEventListener('resize', reset);
      motion.removeEventListener('change', restoreStatic);
      document.removeEventListener('visibilitychange', restoreStatic);
    };
  }, []);
  return (
    <div className="space-backdrop" aria-hidden="true">
      <svg ref={surface} viewBox="0 0 1000 1000" preserveAspectRatio="none" focusable="false">
        {stars.map((star, index) => (
          <circle
            key={index}
            className="space-star"
            cx={star.x}
            cy={star.y}
            r={index % 9 === 0 ? 1.3 : 0.65}
            opacity={0.18 + (index % 5) * 0.1}
          />
        ))}
      </svg>
    </div>
  );
}

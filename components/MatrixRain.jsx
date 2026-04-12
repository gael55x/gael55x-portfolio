'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mobile = window.matchMedia('(max-width: 767px)');
    const update = () => setAllowMotion(!mobile.matches);
    update();
    mobile.addEventListener('change', update);
    return () => mobile.removeEventListener('change', update);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    if (reducedMotion || !allowMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor((Math.random() * canvas.height) / fontSize);
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F4';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i += 2) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animate = () => {
      draw();
      animationRef.current = setTimeout(() => {
        requestAnimationFrame(animate);
      }, 33);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [resizeCanvas, reducedMotion, allowMotion]);

  if (reducedMotion || !allowMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.08]"
      style={{ willChange: 'auto' }}
    />
  );
};

export default MatrixRain;

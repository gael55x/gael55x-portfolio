'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

export default function ThreeHeroBackground({ className = '' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isDesktop) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.08);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const group = new THREE.Group();
    scene.add(group);

    const wire = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.75, 0.55, 160, 24),
      new THREE.MeshBasicMaterial({
        color: 0x00ff7a,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      }),
    );
    group.add(wire);

    const shellEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.8, 1)),
      new THREE.LineBasicMaterial({
        color: 0x00ffc6,
        transparent: true,
        opacity: 0.12,
      }),
    );
    group.add(shellEdges);

    const particleCount = 600;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 4 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: 0x00ffb3,
        size: 0.035,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    scene.add(particles);

    let rafId = 0;
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      pointer.x = x;
      pointer.y = y;
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const renderFrame = (t) => {
      const time = t * 0.001;
      group.rotation.y = time * 0.18 + pointer.x * 0.16;
      group.rotation.x = time * 0.08 + pointer.y * 0.12;
      particles.rotation.y = -time * 0.03;
      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(renderFrame);
    };

    if (!prefersReducedMotion) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      rafId = window.requestAnimationFrame(renderFrame);
    } else {
      renderer.render(scene, camera);
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();

      particlesGeometry.dispose();
      particles.material.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      shellEdges.geometry.dispose();
      shellEdges.material.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion, isDesktop]);

  if (prefersReducedMotion || !isDesktop) {
    return null;
  }

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

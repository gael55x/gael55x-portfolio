// A shared, seeded galaxy powers both WebGL and the static SVG fallback.
export function galaxyParticles(count = 14000) {
  let seed = 42689;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const radius = Math.pow(random(), 0.7) * 4.5;
    const arm = (i % 3) * ((Math.PI * 2) / 3);
    const angle = arm + radius * 1.55;
    const spread = 0.09 + radius * 0.16;
    const scatter = () => (random() - 0.5) * (random() - 0.5) * spread * 7;
    positions[i * 3] = Math.cos(angle) * radius + scatter();
    positions[i * 3 + 1] = scatter() * 0.26;
    positions[i * 3 + 2] = Math.sin(angle) * radius + scatter();
    const blend = Math.min(1, radius / 3.3);
    colors[i * 3] = 1 - blend * 0.56;
    colors[i * 3 + 1] = 0.82 - blend * 0.18;
    colors[i * 3 + 2] = 0.6 + blend * 0.4;
    sizes[i] = 0.6 + Math.pow(random(), 6) * 3.8;
  }
  return { positions, colors, sizes };
}

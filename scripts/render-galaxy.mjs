import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { galaxyParticles } from '../lib/galaxyGeometry.mjs';

const { positions, colors, sizes } = galaxyParticles(8000);
const points = [];
const dust = [];
for (let i = 0; i < sizes.length; i++) {
  const x = positions[i * 3];
  const y = positions[i * 3 + 1];
  const z = positions[i * 3 + 2];
  const tiltedY = y * Math.cos(0.88) - z * Math.sin(0.88);
  const projectedX = x * Math.cos(-0.27) - tiltedY * Math.sin(-0.27);
  const projectedY = x * Math.sin(-0.27) + tiltedY * Math.cos(-0.27);
  const color = Array.from(colors.slice(i * 3, i * 3 + 3), (c) => Math.round(c * 255));
  if (i % 4 === 0)
    dust.push(
      `<circle cx="${(750 + projectedX * 95).toFixed(1)}" cy="${(410 - projectedY * 95).toFixed(1)}" r="8" fill="rgb(${color.join(' ')})" opacity=".035"/>`,
    );
  points.push(
    `<circle cx="${(750 + projectedX * 95).toFixed(1)}" cy="${(410 - projectedY * 95).toFixed(1)}" r="${(sizes[i] * 0.6).toFixed(2)}" fill="rgb(${color.join(' ')})" opacity="${(0.26 + sizes[i] * 0.1).toFixed(2)}"/>`,
  );
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><radialGradient id="core"><stop stop-color="#ffe3b3" stop-opacity=".75"/><stop offset=".18" stop-color="#b3c7ef" stop-opacity=".09"/><stop offset="1" stop-color="#91b6f2" stop-opacity="0"/></radialGradient><filter id="blur"><feGaussianBlur stdDeviation="4"/></filter></defs><ellipse cx="750" cy="410" rx="350" ry="265" fill="url(#core)"/><g filter="url(#blur)">${dust.join('')}</g>${points.join('')}</svg>`;
await sharp(Buffer.from(svg))
  .resize(1800, 1200)
  .webp({ quality: 88 })
  .toFile(fileURLToPath(new URL('../public/assets/space/galaxy.webp', import.meta.url)));
console.log('Rendered the shared particle geometry as a static galaxy fallback.');

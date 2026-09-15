import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import * as THREE from 'three';

// Real Three geometry and the production timeline; only the GPU and browser clock
// are substituted. This tests choreography, continuous input and resource lifetime.
let time = 100,
  nextId = 0,
  scene,
  camera;
const frames = new Map(),
  stages = [];
class Renderer {
  shadowMap = {};
  setPixelRatio() {}
  setSize() {}
  dispose() {}
  forceContextLoss() {}
  render(value, viewCamera) {
    scene = value;
    camera = viewCamera;
    camera.updateMatrixWorld();
  }
}
const context = {
  THREE: { ...THREE, WebGLRenderer: Renderer },
  window: { devicePixelRatio: 1 },
  performance: { now: () => time },
  ResizeObserver: class {
    observe() {}
    disconnect() {}
  },
  requestAnimationFrame: (fn) => {
    frames.set(++nextId, fn);
    return nextId;
  },
  cancelAnimationFrame: (id) => frames.delete(id),
};
const source = readFileSync(new URL('../lib/badgeScene.js', import.meta.url), 'utf8')
  .replace("import * as THREE from 'three';", '')
  .replace('export function createBadgeScene', 'function createBadgeScene');
vm.runInNewContext(source, context);
const view = context.createBadgeScene(
  {
    getBoundingClientRect: () => ({ width: 600, height: 400 }),
  },
  { onStage: (stage) => stages.push(stage) },
);
const rig = scene.getObjectByName('study');
const scan = scene.getObjectByName('scan-sheet');
const vector = scene.getObjectByName('detected-contours');
const sourceMaterials = scene
  .getObjectByName('source-emblem')
  .children.map((mesh) => mesh.material);
const sourceColors = () => sourceMaterials.map((material) => material.color.getHex());
const restingColors = sourceColors();
function tick(ms = 16, timestampOffset = 0) {
  time += ms;
  const callbacks = [...frames.values()];
  frames.clear();
  callbacks.forEach((fn) => fn(time + timestampOffset));
  assert(frames.size <= 1, 'One pending animation frame at most');
}
function settle() {
  for (let i = 0; i < 240 && frames.size; i++) tick();
  assert.equal(frames.size, 0, 'Finite animation must stop rendering');
}
assert.equal(frames.size, 0, 'Creating the static rest pose schedules no idle loop');
assert(!scan.visible && !vector.visible);
view.play();
tick();
tick(700);
assert(scan.visible && vector.visible, 'Hover sequence actually scans and detects');
assert.equal(stages.at(-1), 1);
const scanStart = scan.position.z;
tick(300);
assert(scan.position.z > scanStart, 'Scan advances across the bed');
settle();
assert(!scan.visible && vector.visible && vector.position.y > 0.4, 'Finish lifts the vector asset');
assert.equal(stages.at(-1), 2);
assert.notDeepEqual(sourceColors(), restingColors, 'The source recedes beneath the lifted asset');
const bed = scene.getObjectByName('scan-bed');
bed.geometry.computeBoundingBox();
for (const [x, y] of [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
]) {
  view.point(x, y);
  settle();
  const { min, max } = bed.geometry.boundingBox;
  for (const bx of [min.x, max.x])
    for (const by of [min.y, max.y])
      for (const bz of [min.z, max.z]) {
        const projected = new THREE.Vector3(bx, by, bz)
          .applyMatrix4(bed.matrixWorld)
          .project(camera);
        assert(
          Math.abs(projected.x) < 0.98 && Math.abs(projected.y) < 0.98,
          `The scan bed stays inside the viewport at hover (${x},${y}): projected (${projected.x.toFixed(3)},${projected.y.toFixed(3)})`,
        );
      }
}
view.point(0.5, 0.5);
settle();
const poses = [];
for (let i = 1; i <= 40; i++) {
  view.point(0.5 + i / 100, 0.5);
  tick(16, -1); // Pointer events can arrive after the current rAF timestamp.
  poses.push(rig.rotation.y);
}
assert(poses.at(-1) > 0.14, 'Follows while the pointer is moving');
assert(
  poses.every((yaw, i) => yaw >= (poses[i - 1] || 0)),
  'Never moves away from the input',
);
settle();
assert(Math.abs(rig.rotation.y - 0.176) < 1e-8);
const retract = view.retract();
tick(200);
assert(vector.visible, 'Exit animates before releasing the canvas');
settle();
assert(await retract);
assert(!vector.visible && !scan.visible);
assert.deepEqual(sourceColors(), restingColors, 'Retraction restores original source colors');
view.play();
tick();
tick(800);
const interrupted = view.retract();
tick(100);
const beforeReplay = vector.position.y;
view.play();
tick();
assert(
  Math.abs(vector.position.y - beforeReplay) < 0.05,
  'Replay cannot snap the lifted geometry to rest',
);
assert.equal(await interrupted, false, 'Re-entry cancels pending disposal');
view.showEnd();
assert.equal(frames.size, 0, 'Reduced motion cancels any pending animation');
assert(vector.visible && !scan.visible);
const geometryCounts = new Map();
scene.traverse((object) => {
  const geometry = object.geometry;
  if (geometry && !geometryCounts.has(geometry)) {
    geometryCounts.set(geometry, 0);
    geometry.addEventListener('dispose', () =>
      geometryCounts.set(geometry, geometryCounts.get(geometry) + 1),
    );
  }
});
view.play();
view.dispose();
assert.equal(frames.size, 0);
assert(
  [...geometryCounts.values()].every((count) => count === 1),
  'Each shared geometry disposed exactly once',
);
console.log('PASS: scan, lift, finite playback, hover, exit/re-entry, reduced motion and disposal');

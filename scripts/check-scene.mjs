import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import * as THREE from 'three';

// Exercise the actual scene with real Three geometry, a renderer spy and controlled
// frame timestamps. Only module bindings are adapted for this isolated VM context.
function checkScene() {
  let time = 100,
    nextId = 0,
    yaw = 0;
  const frames = new Map(),
    poses = [];
  class Renderer {
    setPixelRatio() {}
    setSize() {}
    dispose() {}
    forceContextLoss() {}
    render(scene) {
      yaw = scene.children.find((item) => item.isGroup).rotation.y;
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
  const view = context.createBadgeScene({
    getBoundingClientRect: () => ({ width: 600, height: 400 }),
  });
  function tick(timestamp) {
    const callbacks = [...frames.values()];
    frames.clear();
    callbacks.forEach((fn) => fn(timestamp));
  }
  for (let step = 1; step <= 40; step++) {
    time += 16;
    view.point(0.5 + step / 100, 0.5);
    tick(time - 1); // Pointer event occurs just after the frame's timestamp.
    poses.push(yaw);
    assert(frames.size <= 1);
  }
  assert(poses.at(-1) > 0.4, 'The badge must follow while the pointer is still moving');
  for (let step = 0; step < 60 && frames.size; step++) {
    time += 16;
    tick(time);
  }
  assert.equal(frames.size, 0, 'Rendering stops after input settles');
  assert(Math.abs(yaw - 0.48) < 1e-8, 'Settles exactly at pointer target');
  view.point(0.2, 0.5);
  view.rotate();
  assert.equal(frames.size, 0, 'Keyboard cancels pending movement');
  view.point(0.8, 0.5);
  view.dispose();
  assert.equal(frames.size, 0, 'Disposal cancels pending movement');
  assert(
    poses.every((value, index) => value >= (poses[index - 1] || 0)),
    'Continuous input must never move away from its target',
  );
}
checkScene();
console.log('PASS: continuous hover, exact settling, idle rendering, keyboard and disposal');

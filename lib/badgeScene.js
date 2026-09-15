import * as THREE from 'three';

/** Badge Guru study. A relief emblem sits on a scan bed between four marker
 * tags. On play, a light sheet sweeps the bed; behind it the emblem is
 * replaced by its vector contours, then the vector layer lifts off as the
 * production asset while the physical emblem returns beneath it.
 * Finite 2.7 s sequence, render-on-demand, no idle loop, no loaders. */

const DURATION = 2.7;
const LIFT = 0.28;
const BED = { w: 3.2, d: 2.4, t: 0.08 };
const MARKERS = [
  [-1.32, -0.96],
  [1.32, -0.96],
  [-1.32, 0.96],
  [1.32, 0.96],
];
// Conceptual 4x4 cell patterns; not a real ArUco dictionary.
const PATTERNS = [0x9a5c, 0x6b93, 0xc5a6, 0x3d69];

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const span = (t, a, b) => clamp01((t - a) / (b - a));
const { lerp } = THREE.MathUtils;
const outQuint = (t) => 1 - (1 - t) ** 5;
const inOutCubic = (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);
const backOut = (t) => 1 + 2.7 * (t - 1) ** 3 + 1.7 * (t - 1) ** 2;
// Scanner glide: near-constant speed with soft ends.
const glide = (t) => 0.7 * t + 0.3 * inOutCubic(t);
const bits = (n) => n.toString(2).split('1').length - 1;

function shield(s) {
  const w = 0.75 * s;
  const h = 0.85 * s;
  const r = 0.1 * s;
  const shape = new THREE.Shape();
  shape.moveTo(-w + r, h);
  shape.lineTo(w - r, h);
  shape.quadraticCurveTo(w, h, w, h - r);
  shape.lineTo(w, 0.1 * s);
  shape.quadraticCurveTo(w, -0.45 * s, 0, -h);
  shape.quadraticCurveTo(-w, -0.45 * s, -w, 0.1 * s);
  shape.lineTo(-w, h - r);
  shape.quadraticCurveTo(-w, h, -w + r, h);
  return shape;
}

// G outline from the site’s JetBrains Mono Bold; see docs/design/jetbrains-mono-OFL.txt.
function monogram() {
  const shape = new THREE.Shape();
  shape.moveTo(0.0008, -0.45);
  shape.quadraticCurveTo(-0.0836, -0.45, -0.1464, -0.4182);
  shape.quadraticCurveTo(-0.2091, -0.3865, -0.2438, -0.3281);
  shape.quadraticCurveTo(-0.2784, -0.2697, -0.2784, -0.191);
  shape.lineTo(-0.2784, 0.191);
  shape.quadraticCurveTo(-0.2784, 0.2709, -0.2438, 0.3287);
  shape.quadraticCurveTo(-0.2091, 0.3865, -0.1464, 0.4182);
  shape.quadraticCurveTo(-0.0836, 0.45, 0.0008, 0.45);
  shape.quadraticCurveTo(0.0853, 0.45, 0.1475, 0.418);
  shape.quadraticCurveTo(0.2096, 0.386, 0.244, 0.3283);
  shape.quadraticCurveTo(0.2784, 0.2707, 0.2784, 0.191);
  shape.lineTo(0.1282, 0.191);
  shape.quadraticCurveTo(0.1282, 0.2527, 0.0947, 0.2856);
  shape.quadraticCurveTo(0.0612, 0.3184, 0.0004, 0.3184);
  shape.quadraticCurveTo(-0.0605, 0.3184, -0.0944, 0.2857);
  shape.quadraticCurveTo(-0.1282, 0.253, -0.1282, 0.1915);
  shape.lineTo(-0.1282, -0.191);
  shape.quadraticCurveTo(-0.1282, -0.252, -0.0944, -0.2854);
  shape.quadraticCurveTo(-0.0605, -0.3189, 0.0004, -0.3189);
  shape.quadraticCurveTo(0.0612, -0.3189, 0.0947, -0.2854);
  shape.quadraticCurveTo(0.1282, -0.2518, 0.1282, -0.1907);
  shape.lineTo(0.1282, -0.1019);
  shape.lineTo(-0.0213, -0.1019);
  shape.lineTo(-0.0213, 0.0281);
  shape.lineTo(0.2784, 0.0281);
  shape.lineTo(0.2784, -0.191);
  shape.quadraticCurveTo(0.2784, -0.2695, 0.244, -0.3277);
  shape.quadraticCurveTo(0.2096, -0.386, 0.1475, -0.418);
  shape.quadraticCurveTo(0.0853, -0.45, 0.0008, -0.45);
  shape.closePath();
  return shape;
}

function roundedRect(w, h, r) {
  const x = w / 2;
  const y = h / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-x + r, -y);
  shape.lineTo(x - r, -y);
  shape.quadraticCurveTo(x, -y, x, -y + r);
  shape.lineTo(x, y - r);
  shape.quadraticCurveTo(x, y, x - r, y);
  shape.lineTo(-x + r, y);
  shape.quadraticCurveTo(-x, y, -x, y - r);
  shape.lineTo(-x, -y + r);
  shape.quadraticCurveTo(-x, -y, -x + r, -y);
  return shape;
}

// Shapes are drawn in XY; rotating -90deg about X puts them flat on the bed
// with shape +y pointing away from the camera and extrusion pointing up.
function relief(shape, depth, material, y) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.012,
    bevelSegments: 2,
    curveSegments: 20,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = y;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function outline(shape, material, radius = 0.011) {
  const points = shape.getPoints(36).map((p) => new THREE.Vector3(p.x, 0, -p.y));
  const path = new THREE.CurvePath();
  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    if (a.distanceToSquared(b) > 1e-8) path.add(new THREE.LineCurve3(a, b));
  }
  const geometry = new THREE.TubeGeometry(path, path.curves.length * 3, radius, 5, true);
  return new THREE.Mesh(geometry, material);
}

export function createBadgeScene(canvas, { onStage = () => {} } = {}) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'low-power',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.localClippingEnabled = true;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.5, 30);
  const camFrom = new THREE.Vector3(3.3, 3.5, 4.1);
  const camTo = new THREE.Vector3(3.2, 3.7, 3.95);
  const target = new THREE.Vector3(0, -0.05, 0);

  scene.add(new THREE.HemisphereLight(0x3a4150, 0x0b0d12, 0.9));
  const key = new THREE.DirectionalLight(0xfff1e0, 2.4);
  key.position.set(2.5, 5, 3);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = key.shadow.camera.bottom = -2.6;
  key.shadow.camera.right = key.shadow.camera.top = 2.6;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 14;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.02;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x78b7df, 1.8);
  rim.position.set(-3, 2, -4);
  scene.add(rim);

  // Clip planes are defined in rig space and re-projected to world each frame,
  // so the cut line stays aligned with the scanner while the rig follows the pointer.
  const physicalPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 10);
  const vectorPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), -10);
  const localPlane = new THREE.Plane();
  const normalMatrix = new THREE.Matrix3();

  const physical = { clippingPlanes: [physicalPlane], clipShadows: true };
  const materials = {
    bed: new THREE.MeshStandardMaterial({ color: 0x323a4c, roughness: 0.85 }),
    print: new THREE.MeshStandardMaterial({ color: 0x0f1218, roughness: 0.95 }),
    cell: new THREE.MeshStandardMaterial({ color: 0xe9e4d9, roughness: 0.95 }),
    base: new THREE.MeshStandardMaterial({
      color: 0xa35138,
      roughness: 0.45,
      metalness: 0.15,
      ...physical,
    }),
    inset: new THREE.MeshStandardMaterial({
      color: 0xe59a79,
      roughness: 0.4,
      metalness: 0.2,
      ...physical,
    }),
    relief: new THREE.MeshStandardMaterial({
      color: 0xe9e4d9,
      roughness: 0.35,
      metalness: 0.3,
      ...physical,
    }),
    vector: new THREE.MeshBasicMaterial({
      color: 0x78b7df,
      transparent: true,
      clippingPlanes: [vectorPlane],
    }),
    line: new THREE.MeshBasicMaterial({ color: 0x9fd0f0, transparent: true, opacity: 0 }),
    glow: new THREE.MeshBasicMaterial({
      color: 0x78b7df,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    }),
  };

  const rig = new THREE.Group();
  rig.name = 'study';
  scene.add(rig);

  const bed = new THREE.Mesh(
    new THREE.ExtrudeGeometry(roundedRect(BED.w, BED.d, 0.08), {
      depth: BED.t,
      bevelEnabled: false,
      curveSegments: 8,
    }),
    materials.bed,
  );
  bed.rotation.x = -Math.PI / 2;
  bed.name = 'scan-bed';
  bed.position.y = -BED.t; // bed top sits at y = 0
  bed.receiveShadow = true;
  rig.add(bed);

  const markerGeometry = new THREE.PlaneGeometry(0.34, 0.34).rotateX(-Math.PI / 2);
  const cellSize = 0.34 / 6;
  const cellGeometry = new THREE.PlaneGeometry(cellSize, cellSize).rotateX(-Math.PI / 2);
  const cells = new THREE.InstancedMesh(
    cellGeometry,
    materials.cell,
    PATTERNS.reduce((n, p) => n + bits(p), 0),
  );
  cells.receiveShadow = true;
  const placement = new THREE.Matrix4();
  let cell = 0;
  MARKERS.forEach(([x, z], i) => {
    const tag = new THREE.Mesh(markerGeometry, materials.print);
    tag.position.set(x, 0.003, z);
    tag.receiveShadow = true;
    rig.add(tag);
    for (let bit = 0; bit < 16; bit++) {
      if (!((PATTERNS[i] >> bit) & 1)) continue;
      placement.makeTranslation(
        x + ((bit % 4) - 1.5) * cellSize,
        0.005,
        z + (Math.floor(bit / 4) - 1.5) * cellSize,
      );
      cells.setMatrixAt(cell++, placement);
    }
  });
  rig.add(cells);

  const frames = MARKERS.map(([x, z]) => {
    const frameMesh = outline(roundedRect(0.46, 0.46, 0.02), materials.vector);
    frameMesh.position.set(x, 0.012, z);
    frameMesh.visible = false;
    rig.add(frameMesh);
    return frameMesh;
  });

  const emblem = new THREE.Group();
  emblem.name = 'source-emblem';
  emblem.scale.set(1.15, 1, 1.15);
  emblem.add(relief(shield(1), 0.12, materials.base, 0));
  emblem.add(relief(shield(0.8), 0.05, materials.inset, 0.13));
  emblem.add(relief(monogram(), 0.045, materials.relief, 0.19));
  rig.add(emblem);
  const sourceColors = emblem.children.map(({ material }) => [material, material.color.clone()]);

  const vectorLayer = new THREE.Group();
  vectorLayer.name = 'detected-contours';
  vectorLayer.scale.set(1.15, 1, 1.15);
  const monogramLine = outline(monogram(), materials.vector);
  monogramLine.position.y = 0.12;
  vectorLayer.add(outline(shield(1), materials.vector), monogramLine);
  vectorLayer.visible = false;
  rig.add(vectorLayer);

  const scanner = new THREE.Group();
  scanner.name = 'scan-sheet';
  const emitter = new THREE.Mesh(new THREE.BoxGeometry(BED.w + 0.1, 0.02, 0.02), materials.line);
  emitter.position.y = 0.85;
  const curtain = new THREE.Mesh(new THREE.PlaneGeometry(BED.w + 0.1, 0.8), materials.glow);
  curtain.position.y = 0.45;
  const spillMaterial = materials.glow.clone();
  materials.spill = spillMaterial;
  const spill = new THREE.Mesh(
    new THREE.PlaneGeometry(BED.w + 0.1, 0.4).rotateX(-Math.PI / 2),
    spillMaterial,
  );
  spill.position.y = 0.006;
  scanner.add(emitter, curtain);
  scanner.visible = false;
  rig.add(scanner);
  rig.add(spill);

  const state = {
    scan: 0,
    sweep: -1.4,
    cutPhysical: -10,
    cutVector: -10,
    lift: 0,
    alpha: 1,
    push: 0,
    frames: [0, 0, 0, 0],
  };
  const popAt = [-1, -1, -1, -1];
  const pointerTo = new THREE.Vector2();
  let from = null;
  let mode = 'rest';
  let stage = -1;
  let t0 = 0;
  let frame = 0;
  let lastNow = 0;
  let resolveRetract = null;
  let disposed = false;

  function rest() {
    Object.assign(state, {
      scan: 0,
      sweep: -1.4,
      cutPhysical: -10,
      cutVector: -10,
      lift: 0,
      alpha: 1,
      push: 0,
    });
    state.frames.fill(0);
    popAt.fill(-1);
  }
  function setStage(i) {
    if (i === stage) return;
    stage = i;
    onStage(i);
  }
  function apply() {
    scanner.position.z = state.sweep;
    scanner.visible = state.scan > 0.001;
    materials.line.opacity = state.scan;
    materials.glow.opacity = 0.11 * state.scan;
    const returning = mode === 'play' && state.lift > 0 && state.cutPhysical > -1.4;
    spill.position.z = returning ? state.cutPhysical : state.sweep;
    spillMaterial.opacity = returning ? 0.035 : 0.11 * state.scan;
    spill.visible = spillMaterial.opacity > 0;
    const rise = state.lift / LIFT;
    sourceColors.forEach(([material, color]) => {
      material.color.copy(color).lerp(materials.bed.color, rise * 0.55);
    });
    // The lifted layer parallaxes slightly against the bed so its height reads.
    vectorLayer.position.set(
      rig.rotation.y * 0.14 * rise,
      0.15 + state.lift,
      -rig.rotation.x * 0.3 * rise,
    );
    vectorLayer.visible = state.alpha > 0.001 && state.cutVector > -9;
    materials.vector.opacity = state.alpha;
    frames.forEach((frameMesh, i) => {
      const s = state.frames[i];
      frameMesh.visible = s > 0.001;
      frameMesh.scale.setScalar(Math.max(s, 0.001));
    });
    camera.position.lerpVectors(camFrom, camTo, state.push);
    camera.lookAt(target);
    rig.updateMatrixWorld();
    normalMatrix.getNormalMatrix(rig.matrixWorld);
    localPlane.normal.set(0, 0, 1);
    localPlane.constant = -state.cutPhysical; // keep z >= cutPhysical
    physicalPlane.copy(localPlane).applyMatrix4(rig.matrixWorld, normalMatrix);
    localPlane.normal.set(0, 0, -1);
    localPlane.constant = state.cutVector; // keep z <= cutVector
    vectorPlane.copy(localPlane).applyMatrix4(rig.matrixWorld, normalMatrix);
  }
  function render() {
    if (!disposed) renderer.render(scene, camera);
  }

  function advancePlay(t) {
    const sweep = -1.4 + 2.8 * glide(span(t, 0.25, 1.65));
    state.scan = span(t, 0, 0.25) - span(t, 1.65, 1.9);
    state.sweep = sweep;
    state.cutVector = t < 0.25 ? -10 : t < 1.65 ? sweep : 10;
    if (t < 1.75) state.cutPhysical = t < 0.25 ? -10 : sweep;
    else {
      const back = inOutCubic(span(t, 1.75, 2.35));
      state.cutPhysical = back >= 1 ? -10 : lerp(1.4, -1.4, back);
    }
    state.lift = LIFT * outQuint(span(t, 1.7, 2.5));
    state.alpha = 1;
    state.push = inOutCubic(span(t, 0, DURATION));
    MARKERS.forEach(([, z], i) => {
      if (popAt[i] < 0 && t >= 0.25 && sweep >= z) popAt[i] = t;
      state.frames[i] =
        popAt[i] < 0 ? 0 : backOut(span(t, popAt[i], popAt[i] + 0.22)) * (1 - span(t, 1.75, 2.25));
    });
    if (t >= 1.75) setStage(2);
    else if (t >= 0.5) setStage(1);
    if (t < DURATION) return true;
    mode = 'done';
    return false;
  }
  function advanceRetract(t) {
    const k = inOutCubic(span(t, 0, 0.45));
    state.scan = lerp(from.scan, 0, k);
    state.lift = lerp(from.lift, 0, k);
    state.alpha = lerp(from.alpha, 0, k);
    state.push = lerp(from.push, 0, k);
    state.cutPhysical = lerp(from.cutPhysical, -1.4, k);
    state.cutVector = from.cutVector;
    from.frames.forEach((f, i) => {
      state.frames[i] = lerp(f, 0, k);
    });
    if (k < 1) return true;
    rest();
    mode = 'rest';
    setStage(-1);
    const done = resolveRetract;
    resolveRetract = null;
    done?.(true);
    return false;
  }
  function tick(now) {
    frame = 0;
    const dt = Math.max(0, now - lastNow);
    lastNow = now;
    const k = 1 - Math.exp(-dt / 70);
    rig.rotation.x = lerp(rig.rotation.x, pointerTo.x, k);
    rig.rotation.y = lerp(rig.rotation.y, pointerTo.y, k);
    let busy =
      Math.abs(rig.rotation.x - pointerTo.x) + Math.abs(rig.rotation.y - pointerTo.y) > 0.0006;
    if (!busy) rig.rotation.set(pointerTo.x, pointerTo.y, 0);
    if (mode === 'play' && t0 === null) t0 = now;
    const t = Math.max(0, (now - t0) / 1000);
    if (mode === 'play') busy = advancePlay(t) || busy;
    else if (mode === 'retract') busy = advanceRetract(t) || busy;
    apply();
    render();
    if (busy) frame = requestAnimationFrame(tick);
  }
  function schedule() {
    if (disposed || frame) return;
    lastNow = performance.now();
    frame = requestAnimationFrame(tick);
  }
  function resize() {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    apply();
    render();
  }
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  function begin() {
    if (disposed) return;
    rest();
    setStage(0);
    mode = 'play';
    t0 = null;
    schedule();
  }
  function retract() {
    if (mode === 'rest') return Promise.resolve(true);
    return new Promise((resolve) => {
      resolveRetract?.(false);
      resolveRetract = resolve;
      from = { ...state, frames: [...state.frames] };
      pointerTo.set(0, 0);
      mode = 'retract';
      t0 = performance.now();
      schedule();
    });
  }

  return {
    /** Replay passes through rest so quick re-entry cannot snap the geometry. */
    play() {
      if (mode === 'rest') begin();
      else
        retract().then((settled) => {
          if (settled) begin();
        });
    },
    /** Reduced motion: the finished state, rendered once, no loop. */
    showEnd() {
      cancelAnimationFrame(frame);
      frame = 0;
      resolveRetract?.(false);
      resolveRetract = null;
      rest();
      Object.assign(state, { cutVector: 10, lift: LIFT, push: 1 });
      mode = 'done';
      setStage(2);
      apply();
      render();
    },
    point(x, y) {
      pointerTo.set((y - 0.5) * 0.1, (x - 0.5) * 0.44);
      schedule();
    },
    /** Ease back to rest. Resolves true when settled, false if play() interrupts. */
    retract,
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      frame = 0;
      resolveRetract?.(false);
      resolveRetract = null;
      observer.disconnect();
      cells.dispose();
      const geometries = new Set();
      scene.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry);
      });
      geometries.forEach((geometry) => geometry.dispose());
      Object.values(materials).forEach((material) => material.dispose());
      key.shadow.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}

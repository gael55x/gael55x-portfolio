import * as THREE from 'three';
import { galaxyParticles } from './galaxyGeometry.mjs';

const pointVertex = `
  attribute float aSize;
  varying vec3 vColor;
  uniform float uPixelRatio;
  uniform float uScale;
  uniform vec2 uPointer;
  uniform float uRepulsion;
  uniform float uAspect;
  void main() {
    vColor = color;
    vec4 view = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * view;
    vec2 delta = gl_Position.xy / gl_Position.w - uPointer;
    float distanceToPointer = length(delta * vec2(uAspect, 1.0));
    float influence = 1.0 - smoothstep(0.0, 0.24, distanceToPointer);
    vec2 direction = normalize(delta + vec2(0.00001));
    gl_Position.xy += direction * influence * uRepulsion * 0.18 * gl_Position.w;
    gl_PointSize = clamp(aSize * uPixelRatio * uScale / -view.z, 1.0, 68.0);
  }
`;
const pointFragment = `
  varying vec3 vColor;
  uniform float uOpacity;
  void main() {
    float distanceToCenter = length(gl_PointCoord - 0.5);
    if (distanceToCenter > 0.5) discard;
    float glow = pow(1.0 - distanceToCenter * 2.0, 2.0);
    gl_FragColor = vec4(vColor, glow * uOpacity);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

// Pointer, scroll and resize ease into a pose, then stop all GPU rendering.
export function createSpaceScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
  renderer.setPixelRatio(pixelRatio);
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
  camera.position.z = 10;
  const pointer = new THREE.Vector2();
  const targetPointer = new THREE.Vector2();
  const pointerUniforms = {
    uPointer: { value: pointer },
    uRepulsion: { value: 0 },
    uAspect: { value: 1 },
  };
  const rig = new THREE.Group();
  rig.name = 'galaxy';
  scene.add(rig);
  const galaxy = new THREE.Group();
  galaxy.rotation.set(0.88, 0.0, -0.27);
  rig.add(galaxy);
  const { positions, colors, sizes } = galaxyParticles();
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  galaxy.add(
    new THREE.Points(
      geometry,
      new THREE.ShaderMaterial({
        vertexShader: pointVertex,
        fragmentShader: pointFragment,
        uniforms: {
          uPixelRatio: { value: pixelRatio },
          uScale: { value: 11 },
          uOpacity: { value: 0.82 },
          ...pointerUniforms,
        },
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    ),
  );
  const dust = new THREE.Points(
    geometry,
    new THREE.ShaderMaterial({
      vertexShader: pointVertex,
      fragmentShader: pointFragment,
      uniforms: {
        uPixelRatio: { value: pixelRatio },
        uScale: { value: 110 },
        uOpacity: { value: 0.024 },
        ...pointerUniforms,
      },
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  dust.name = 'galactic-dust';
  galaxy.add(dust);
  const core = new THREE.Mesh(
    new THREE.PlaneGeometry(4.8, 4.8),
    new THREE.ShaderMaterial({
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `varying vec2 vUv; void main() {
        float d = length(vUv - 0.5) * 2.0;
        float light = exp(-d * 11.0) * 0.8 + exp(-d * 4.0) * 0.07;
        gl_FragColor = vec4(1.0, 0.83, 0.63, light);
      }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  rig.add(core);
  const stars = new Float32Array(360 * 3);
  for (let i = 0; i < 360; i++) {
    stars[i * 3] = (((i * 0.6180339887) % 1) - 0.5) * 30;
    stars[i * 3 + 1] = (((i * 0.4142135623) % 1) - 0.5) * 18;
    stars[i * 3 + 2] = -3 - ((i * 0.7320508) % 1) * 8;
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(stars, 3));
  const starSizes = new Float32Array(360).fill(0.9);
  const starColors = new Float32Array(360 * 3);
  for (let i = 0; i < 360; i++) starColors.set([0.72, 0.8, 0.95], i * 3);
  starGeometry.setAttribute('aSize', new THREE.BufferAttribute(starSizes, 1));
  starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
  const starField = new THREE.Points(
    starGeometry,
    new THREE.ShaderMaterial({
      vertexShader: pointVertex,
      fragmentShader: pointFragment,
      uniforms: {
        uPixelRatio: { value: pixelRatio },
        uScale: { value: 18 },
        uOpacity: { value: 0.65 },
        ...pointerUniforms,
      },
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  scene.add(starField);
  let frame = 0;
  let disposed = false;
  let scrollProgress = 0;
  let horizontal = 0;
  let vertical = 0;
  let baseX = 0;
  let baseY = 0;
  let repulsion = 0;
  function draw() {
    frame = 0;
    if (disposed) return;
    const yaw = horizontal * 0.22 + scrollProgress * 0.34;
    const pitch = vertical * 0.12;
    rig.rotation.y += (yaw - rig.rotation.y) * 0.11;
    rig.rotation.x += (pitch - rig.rotation.x) * 0.11;
    rig.position.set(baseX + horizontal * 0.12, baseY - scrollProgress * 0.45, 0);
    starField.rotation.y = rig.rotation.y * 0.12;
    pointer.lerp(targetPointer, 0.18);
    pointerUniforms.uRepulsion.value += (repulsion - pointerUniforms.uRepulsion.value) * 0.18;
    renderer.render(scene, camera);
    if (
      Math.abs(yaw - rig.rotation.y) +
        Math.abs(pitch - rig.rotation.x) +
        pointer.distanceTo(targetPointer) +
        Math.abs(repulsion - pointerUniforms.uRepulsion.value) >
      0.0001
    ) {
      frame = requestAnimationFrame(draw);
    }
  }
  function requestDraw() {
    if (!disposed && !frame) frame = requestAnimationFrame(draw);
  }
  function resize() {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    camera.aspect = width / height;
    pointerUniforms.uAspect.value = camera.aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    const viewHeight = 2 * Math.tan(THREE.MathUtils.degToRad(21)) * camera.position.z;
    const narrow = width <= 960;
    baseX = narrow ? 0 : viewHeight * camera.aspect * 0.25;
    baseY = narrow ? -viewHeight * 0.23 : -0.1;
    rig.scale.setScalar(narrow ? (viewHeight * camera.aspect) / 8 : 0.87);
    requestDraw();
  }
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();
  return {
    point(x, y) {
      horizontal = (Math.max(0, Math.min(1, x)) - 0.5) * 2;
      vertical = (Math.max(0, Math.min(1, y)) - 0.5) * 2;
      targetPointer.set(horizontal, -vertical);
      repulsion = 1;
      requestDraw();
    },
    leave() {
      horizontal = 0;
      vertical = 0;
      repulsion = 0;
      requestDraw();
    },
    scroll(progress) {
      scrollProgress = progress;
      requestDraw();
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      const geometries = new Set();
      const materials = new Set();
      scene.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) materials.add(object.material);
      });
      geometries.forEach((item) => item.dispose());
      materials.forEach((item) => item.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}

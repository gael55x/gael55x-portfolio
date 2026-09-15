import * as THREE from 'three';

/** A render-on-demand scene: no idle loop, textures, shadows, or loaders.
 * Imperative code owns the WebGL resources and disposes them on close. */
export function createBadgeScene(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'low-power',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.set(5, 5.5, 7);
  camera.lookAt(0, 0.5, 0);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x31384a, 3));
  const light = new THREE.DirectionalLight(0xffffff, 4);
  light.position.set(3, 6, 3);
  scene.add(light);

  const rig = new THREE.Group();
  scene.add(rig);
  const boardMaterial = new THREE.MeshStandardMaterial({ color: 0x8c9bb4, roughness: 0.7 });
  const badgeMaterial = new THREE.MeshStandardMaterial({
    color: 0xe59a79,
    metalness: 0.65,
    roughness: 0.3,
  });
  const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0xd2d7e3, wireframe: true });
  const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x1f2531 });
  const board = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.1, 3), boardMaterial);
  rig.add(board);
  for (const x of [-1.35, 1.35]) {
    for (const z of [-1.15, 1.15]) {
      const marker = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.01, 0.28), markerMaterial);
      marker.position.set(x, 0.06, z);
      rig.add(marker);
    }
  }
  const scan = new THREE.Mesh(new THREE.CylinderGeometry(0.84, 0.84, 0.015, 48), markerMaterial);
  scan.position.y = 0.065;
  rig.add(scan);

  const contour = new THREE.Mesh(new THREE.TorusGeometry(0.86, 0.018, 4, 48), outlineMaterial);
  contour.rotation.x = Math.PI / 2;
  rig.add(contour);
  const output = new THREE.Group();
  const badge = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.88, 0.16, 64), badgeMaterial);
  output.add(badge);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.035, 8, 64), badgeMaterial);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.09;
  output.add(rim);
  // A small G mark ties the conceptual badge to the portfolio owner.
  const mark = new THREE.Mesh(
    new THREE.TorusGeometry(0.33, 0.045, 8, 48, Math.PI * 1.65),
    markerMaterial,
  );
  mark.rotation.x = -Math.PI / 2;
  mark.position.y = 0.1;
  output.add(mark);
  rig.add(output);

  let frame = 0;
  let lastFrame = 0;
  const motionTo = new THREE.Vector2();
  function render() {
    renderer.render(scene, camera);
  }
  function settle(now) {
    // Pointer events can precede rAF in the same frame; never extrapolate backward.
    const follow = 1 - Math.exp(-Math.max(0, now - lastFrame) / 45);
    lastFrame = now;
    rig.rotation.x = THREE.MathUtils.lerp(rig.rotation.x, motionTo.x, follow);
    rig.rotation.y = THREE.MathUtils.lerp(rig.rotation.y, motionTo.y, follow);
    const settled =
      Math.abs(rig.rotation.x - motionTo.x) + Math.abs(rig.rotation.y - motionTo.y) < 0.001;
    if (settled) rig.rotation.set(motionTo.x, motionTo.y, 0);
    render();
    frame = settled ? 0 : requestAnimationFrame(settle);
  }
  function resize() {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    render();
  }
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  contour.position.y = 0.85;
  output.position.y = 1.7;
  resize();

  return {
    rotate() {
      cancelAnimationFrame(frame);
      frame = 0;
      rig.rotation.y += Math.PI / 6;
      render();
    },
    point(x, y) {
      motionTo.set((y - 0.5) * 0.3, (x - 0.5) * 1.2);
      if (!frame) {
        lastFrame = performance.now();
        frame = requestAnimationFrame(settle);
      }
    },
    dispose() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      scene.traverse((object) => {
        object.geometry?.dispose();
      });
      for (const material of [boardMaterial, badgeMaterial, outlineMaterial, markerMaterial])
        material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}

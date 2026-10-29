import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const BG = '#05040f';
const UP = new THREE.Vector3(0, 1, 0);
const TAN_HALF_FOV = Math.tan(THREE.MathUtils.degToRad(25));

// One entry per section, in SECTIONS order.
const ORBITS = [
  { radius: 9, y: 0.8 },
  { radius: 13.5, y: -0.6 },
  { radius: 10.5, y: 1.4 },
  { radius: 15.5, y: -1.1 },
  { radius: 12, y: 0.3 },
  { radius: 17, y: -0.3 }
];

function damp(rate, dt) {
  return 1 - Math.exp(-rate * dt);
}

function makeGlowTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.45)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Draws a logo onto a white rounded tile so transparent PNGs read well on a cube face.
function makeLogoTexture(src) {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const paintTile = () => {
    ctx.fillStyle = '#dcd8ee';
    ctx.fillRect(0, 0, size, size);
  };
  paintTile();
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const img = new Image();
  img.onload = () => {
    const pad = 30;
    const box = size - pad * 2;
    const scale = Math.min(box / img.width, box / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    paintTile();
    ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
    tex.needsUpdate = true;
  };
  img.src = src;
  return tex;
}

function makeStars() {
  const count = 2600;
  const positions = new Float32Array(count * 3);
  const v = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    v.randomDirection().multiplyScalar(120 + Math.random() * 200);
    v.toArray(positions, i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: '#cfd8ff',
    size: 0.9,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
    fog: false
  });
  return new THREE.Points(geo, mat);
}

function makeGalaxy(glowTex) {
  const count = 7000;
  const arms = 3;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const inner = new THREE.Color('#8b6bff');
  const outer = new THREE.Color('#8fd0ff');
  const c = new THREE.Color();
  const scatter = () => Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1);
  for (let i = 0; i < count; i++) {
    const r = 5.5 + Math.pow(Math.random(), 1.5) * 22;
    const angle = ((i % arms) / arms) * Math.PI * 2 + r * 0.24;
    const spread = r * 0.22;
    positions[i * 3] = Math.cos(angle) * r + scatter() * spread;
    positions[i * 3 + 1] = scatter() * spread * 0.25;
    positions[i * 3 + 2] = Math.sin(angle) * r + scatter() * spread;
    c.copy(inner).lerp(outer, (r - 5.5) / 22);
    c.toArray(colors, i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.16,
    map: glowTex,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  return new THREE.Points(geo, mat);
}

function makeOrbitRing(radius, y, color) {
  const points = [];
  for (let i = 0; i <= 128; i++) {
    const a = (i / 128) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(a) * radius, y, Math.sin(a) * radius));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.16, depthWrite: false });
  return new THREE.Line(geo, mat);
}

// 3D take on the ZZMTech mark: two slanted bars with a bright sheet between them.
function makeCore(glowTex) {
  const group = new THREE.Group();
  const logo = new THREE.Group();
  group.add(logo);

  const barGeo = new RoundedBoxGeometry(4.2, 1.1, 0.7, 4, 0.32);
  const top = new THREE.Mesh(
    barGeo,
    new THREE.MeshStandardMaterial({ color: '#6d4bff', emissive: '#5b2bff', emissiveIntensity: 0.25, metalness: 0.3, roughness: 0.25 })
  );
  top.position.set(-0.15, 1.2, 0);
  top.rotation.z = 0.2;
  const bottom = new THREE.Mesh(
    barGeo,
    new THREE.MeshStandardMaterial({ color: '#7fa8ff', emissive: '#4d7dff', emissiveIntensity: 0.2, metalness: 0.3, roughness: 0.25 })
  );
  bottom.position.set(0.15, -1.2, 0);
  bottom.rotation.z = 0.2;
  const sheet = new THREE.Mesh(
    new RoundedBoxGeometry(3.3, 0.08, 1.4, 2, 0.04),
    new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.45 })
  );
  sheet.rotation.set(0.5, 0, 0.2);
  logo.add(top, bottom, sheet);

  const shell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(4.4, 1),
    new THREE.MeshBasicMaterial({ color: '#8fd0ff', wireframe: true, transparent: true, opacity: 0.1, depthWrite: false })
  );
  const cage = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(5.3, 0)),
    new THREE.LineBasicMaterial({ color: '#8b6bff', transparent: true, opacity: 0.3, depthWrite: false })
  );
  const halo = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: glowTex, color: '#5b2bff', transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  halo.scale.setScalar(16);
  group.add(halo, shell, cage);

  return {
    group,
    update(t, dt, motion) {
      logo.rotation.y = Math.sin(t * 0.35) * 0.5 * motion;
      logo.position.y = Math.sin(t * 0.8) * 0.15 * motion;
      shell.rotation.y += dt * 0.08 * motion;
      shell.rotation.x += dt * 0.03 * motion;
      cage.rotation.y -= dt * 0.05 * motion;
      cage.rotation.z += dt * 0.02 * motion;
    }
  };
}

function standardMat(color, emissiveIntensity = 0.35) {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity, metalness: 0.35, roughness: 0.3 });
}

// Builds the planet body for each section. Returns the per-frame update and the
// materials whose glow responds to hover/focus.
function buildBody(id, color, ctx) {
  const body = new THREE.Group();
  const glowMats = [];
  let update = () => {};
  const extraHits = [];

  if (id === 'about') {
    const m = standardMat(color);
    m.flatShading = true;
    glowMats.push(m);
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), m);
    const frame = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.OctahedronGeometry(1.65, 0)),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.55 })
    );
    body.add(gem, frame);
    update = (t, dt, s) => {
      gem.rotation.y += dt * 0.7 * s.motion;
      frame.rotation.y -= dt * 0.35 * s.motion;
      frame.rotation.x = Math.sin(t * 0.5) * 0.3;
    };
  }

  if (id === 'services') {
    const m = standardMat(color, 0.4);
    glowMats.push(m);
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.62, 0.2, 140, 18), m);
    body.add(knot);
    const moonGeo = new THREE.SphereGeometry(0.17, 20, 14);
    const hitGeo = new THREE.SphereGeometry(0.5, 8, 8);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    const moons = [];
    for (let i = 0; i < ctx.serviceCount; i++) {
      const general = i < ctx.serviceCount / 2;
      const pivot = new THREE.Group();
      pivot.rotation.x = (general ? 0.35 : -0.35) + (i % 3) * 0.12;
      pivot.rotation.z = (i % 2 ? 0.2 : -0.2);
      const mat = standardMat(general ? '#c2b3ff' : '#8fd0ff', 0.12);
      const moon = new THREE.Mesh(moonGeo, mat);
      moon.position.x = general ? 1.75 : 2.45;
      const hit = new THREE.Mesh(hitGeo, hitMat);
      hit.userData.serviceIndex = i;
      moon.add(hit);
      pivot.add(moon);
      body.add(pivot);
      extraHits.push(hit);
      moons.push({ pivot, moon, mat, offset: (i / (ctx.serviceCount / 2)) * Math.PI * 2, speed: general ? 0.45 : 0.3 });
    }
    update = (t, dt, s) => {
      knot.rotation.y += dt * 0.5 * s.motion;
      knot.rotation.x += dt * 0.2 * s.motion;
      moons.forEach((m, i) => {
        m.pivot.rotation.y = m.offset + t * m.speed * s.motion;
        const on = i === s.hoverService || i === s.activeService;
        m.mat.emissiveIntensity = THREE.MathUtils.lerp(m.mat.emissiveIntensity, on ? 1.8 : 0.12, damp(10, dt));
        m.moon.scale.setScalar(THREE.MathUtils.lerp(m.moon.scale.x, on ? 1.8 : 1, damp(10, dt)));
      });
    };
  }

  if (id === 'process') {
    const m = standardMat(color, 0.3);
    glowMats.push(m);
    const hub = new THREE.Mesh(new THREE.SphereGeometry(0.42, 24, 16), m);
    body.add(hub);
    const ring = new THREE.Group();
    ring.rotation.x = 0.5;
    const stepGeo = new RoundedBoxGeometry(0.34, 0.34, 0.34, 2, 0.06);
    const steps = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const mat = standardMat(color, 0.2);
      const step = new THREE.Mesh(stepGeo, mat);
      step.position.set(Math.cos(a) * 1.25, 0, Math.sin(a) * 1.25);
      ring.add(step);
      steps.push(mat);
    }
    body.add(ring);
    update = (t, dt, s) => {
      ring.rotation.y += dt * 0.4 * s.motion;
      const lit = Math.floor(t * 1.6) % 8;
      steps.forEach((mat, i) => {
        const target = i === lit ? 2.4 : i < lit ? 0.7 : 0.15;
        mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, target, damp(8, dt));
      });
    };
  }

  if (id === 'team') {
    const m = standardMat(color, 0.3);
    glowMats.push(m);
    const planet = new THREE.Mesh(new THREE.SphereGeometry(0.95, 48, 32), m);
    const band = new THREE.Mesh(
      new THREE.RingGeometry(1.35, 1.95, 72),
      new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.45, depthWrite: false })
    );
    band.rotation.x = Math.PI / 2.3;
    const moon = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), standardMat('#ffffff', 0.8));
    const moonPivot = new THREE.Group();
    moon.position.x = 2.4;
    moonPivot.add(moon);
    moonPivot.rotation.z = 0.4;
    body.add(planet, band, moonPivot);
    update = (t, dt, s) => {
      planet.rotation.y += dt * 0.3 * s.motion;
      band.rotation.z += dt * 0.2 * s.motion;
      moonPivot.rotation.y = t * 0.9 * s.motion;
    };
  }

  if (id === 'clients') {
    const cluster = new THREE.Group();
    const cubeGeo = new RoundedBoxGeometry(0.62, 0.62, 0.62, 3, 0.06);
    const cubes = [];
    ctx.clientLogos.slice(0, 8).forEach((logo, i) => {
      const map = makeLogoTexture(logo.src);
      ctx.textures.push(map);
      const mat = new THREE.MeshStandardMaterial({ map, emissive: '#ffffff', emissiveMap: map, emissiveIntensity: 0.06, roughness: 0.6, metalness: 0 });
      const cube = new THREE.Mesh(cubeGeo, mat);
      const base = new THREE.Vector3(i & 1 ? 0.38 : -0.38, i & 2 ? 0.38 : -0.38, i & 4 ? 0.38 : -0.38);
      cube.position.copy(base);
      cluster.add(cube);
      cubes.push({ cube, base });
    });
    const frame = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(2.2, 2.2, 2.2)),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.6 })
    );
    body.add(cluster, frame);
    update = (t, dt, s) => {
      cluster.rotation.y += dt * 0.45 * s.motion;
      cluster.rotation.x = Math.sin(t * 0.4) * 0.35;
      frame.rotation.y -= dt * 0.2 * s.motion;
      const spread = 1 + Math.max(s.hover, s.focus) * 0.9 + Math.sin(t * 1.2) * 0.05;
      cubes.forEach(({ cube, base }) => cube.position.copy(base).multiplyScalar(spread));
    };
  }

  if (id === 'contact') {
    const m = standardMat(color, 0.4);
    m.flatShading = true;
    glowMats.push(m);
    const beacon = new THREE.Mesh(new THREE.IcosahedronGeometry(0.85, 0), m);
    body.add(beacon);
    const pulses = [0, 0.5].map((phase) => {
      const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.6, depthWrite: false });
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.95, 1.03, 64), mat);
      ring.rotation.x = -Math.PI / 2;
      body.add(ring);
      return { ring, mat, phase };
    });
    update = (t, dt, s) => {
      beacon.rotation.y += dt * 0.8 * s.motion;
      beacon.rotation.x += dt * 0.3 * s.motion;
      pulses.forEach((p) => {
        const k = (t * 0.45 + p.phase) % 1;
        p.ring.scale.setScalar(1 + k * 2.4);
        p.mat.opacity = (1 - k) * 0.7;
      });
    };
  }

  return { body, glowMats, update, extraHits };
}

/**
 * Mounts the ZZMTech universe on a canvas.
 * Throws if WebGL is unavailable, so callers can fall back to the plain UI.
 */
export function createUniverse(canvas, options) {
  const { sections, serviceCount, clientLogos, reducedMotion, getLabel, getServiceTip, onHover, onSelect, onHoverService, onSelectService, onReady } =
    options;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG);
  scene.fog = new THREE.FogExp2(BG, 0.011);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);

  scene.add(new THREE.AmbientLight('#8a86c8', 0.35));
  scene.add(new THREE.HemisphereLight('#8fd0ff', '#2a1660', 0.6));
  const key = new THREE.DirectionalLight('#ffffff', 1.1);
  key.position.set(10, 14, 12);
  scene.add(key);
  const coreLight = new THREE.PointLight('#8b6bff', 260, 0, 1.6);
  scene.add(coreLight);

  const glowTex = makeGlowTexture();
  const textures = [glowTex];

  scene.add(makeStars());
  const core = makeCore(glowTex);
  scene.add(core.group);

  const system = new THREE.Group();
  system.rotation.x = 0.06;
  scene.add(system);
  const galaxy = makeGalaxy(glowTex);
  system.add(galaxy);

  const hitMat = new THREE.MeshBasicMaterial({ visible: false });
  const hitGeo = new THREE.SphereGeometry(2.1, 12, 10);
  const ctx = { serviceCount, clientLogos, textures };

  const nodes = sections.map((section, i) => {
    const orbit = ORBITS[i % ORBITS.length];
    const angle = (i / sections.length) * Math.PI * 2 + 0.35;
    const color = new THREE.Color(section.color);
    const group = new THREE.Group();
    group.position.set(Math.cos(angle) * orbit.radius, orbit.y, Math.sin(angle) * orbit.radius);
    const { body, glowMats, update, extraHits } = buildBody(section.id, color, ctx);
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    glow.scale.setScalar(4.5);
    const hit = new THREE.Mesh(hitGeo, hitMat);
    hit.userData.sectionId = section.id;
    group.add(glow, body, hit);
    system.add(group);
    system.add(makeOrbitRing(orbit.radius, orbit.y, color));
    return {
      id: section.id,
      group,
      body,
      glow,
      hit,
      extraHits,
      update,
      glowMats: glowMats.map((m) => ({ mat: m, base: m.emissiveIntensity })),
      hover: 0,
      focus: 0,
      focusDistance: section.id === 'services' ? 13 : 9
    };
  });
  const nodeById = new Map(nodes.map((n) => [n.id, n]));
  const nodeHits = nodes.map((n) => n.hit);
  const serviceHits = nodeById.get('services')?.extraHits ?? [];

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.55, 0.45, 0.62);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // ---- interaction state ----
  const state = {
    focused: null,
    hovered: null,
    uiHovered: null,
    hoverService: -1,
    activeService: -1,
    yaw: 0,
    yawVelocity: 0,
    autoSpin: reducedMotion ? 0 : 1,
    motion: reducedMotion ? 0.25 : 1
  };
  const pointer = new THREE.Vector2(2, 2);
  const parallax = new THREE.Vector2();
  let pointerDirty = false;
  let drag = null;
  const raycaster = new THREE.Raycaster();

  // ---- camera rig ----
  let width = 1;
  let height = 1;
  const homePos = new THREE.Vector3();
  const homeLook = new THREE.Vector3();
  const camPos = new THREE.Vector3();
  const camLook = new THREE.Vector3();
  const targetPos = new THREE.Vector3();
  const targetLook = new THREE.Vector3();
  const tmp = new THREE.Vector3();
  const tmp2 = new THREE.Vector3();

  function computeHome() {
    const aspect = width / height;
    const portrait = aspect < 0.9;
    const d = THREE.MathUtils.clamp((portrait ? 11.5 : 16) / (TAN_HALF_FOV * aspect), 30, 64);
    homePos.set(0, d * (portrait ? 0.5 : 0.34), d);
    // On phones the hero copy fills the bottom half, so aim lower to lift the system up.
    homeLook.set(0, portrait ? -d * 0.2 : 0, 0);
  }

  function resize() {
    width = canvas.clientWidth || window.innerWidth;
    height = canvas.clientHeight || window.innerHeight;
    renderer.setSize(width, height, false);
    composer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    computeHome();
  }
  resize();
  camPos.copy(homePos);
  if (!reducedMotion) camPos.set(0, homePos.y * 2.4, homePos.z * 2.6);
  camLook.set(0, 0, 0);

  function updateCameraTarget() {
    const node = state.focused && nodeById.get(state.focused);
    if (!node) {
      targetPos.copy(homePos);
      targetPos.x += parallax.x * 2;
      targetPos.y += parallax.y * 1.2;
      targetLook.copy(homeLook);
      return;
    }
    const p = node.group.getWorldPosition(tmp);
    const outward = tmp2.set(p.x, 0, p.z).normalize();
    targetPos.copy(p).addScaledVector(outward, node.focusDistance);
    targetPos.y += node.focusDistance * 0.32;
    targetLook.copy(p);
    const viewHalfHeight = node.focusDistance * TAN_HALF_FOV;
    if (width >= 900) {
      // Panel sits on the right: shift the view so the planet lands in the left third.
      const right = tmp2.copy(p).sub(targetPos).normalize().cross(UP).normalize();
      targetLook.addScaledVector(right, viewHalfHeight * (width / height) * 0.36);
    } else {
      // Bottom sheet: push the planet into the top part of the screen.
      targetLook.y -= viewHalfHeight * 0.75;
    }
  }

  // ---- labels ----
  const projected = new THREE.Vector3();
  function placeLabel(el, worldPos, yOffset) {
    if (!el) return;
    projected.copy(worldPos);
    projected.y += yOffset;
    projected.project(camera);
    const visible = projected.z < 1 && Math.abs(projected.x) < 1.2 && Math.abs(projected.y) < 1.2;
    const x = (projected.x * 0.5 + 0.5) * width;
    const y = (-projected.y * 0.5 + 0.5) * height;
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
    el.style.visibility = visible ? 'visible' : 'hidden';
  }

  // ---- picking ----
  function pick() {
    raycaster.setFromCamera(pointer, camera);
    if (state.focused === 'services' && serviceHits.length) {
      const hitService = raycaster.intersectObjects(serviceHits, false)[0];
      if (hitService) return { service: hitService.object.userData.serviceIndex };
    }
    const hitNode = raycaster.intersectObjects(nodeHits, false)[0];
    return hitNode ? { section: hitNode.object.userData.sectionId } : null;
  }

  function setPointer(e) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    parallax.set(pointer.x, pointer.y);
    pointerDirty = true;
  }

  function onPointerDown(e) {
    setPointer(e);
    drag = { x: e.clientX, y: e.clientY, lastX: e.clientX, moved: 0 };
    canvas.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e) {
    setPointer(e);
    if (!drag) return;
    const dx = e.clientX - drag.lastX;
    drag.lastX = e.clientX;
    drag.moved = Math.max(drag.moved, Math.hypot(e.clientX - drag.x, e.clientY - drag.y));
    if (!state.focused && drag.moved > 4) {
      state.yaw += dx * 0.005;
      state.yawVelocity = dx * 0.3;
    }
  }

  function onPointerUp(e) {
    setPointer(e);
    const wasClick = drag && drag.moved < 6;
    drag = null;
    if (!wasClick) return;
    const hit = pick();
    if (hit?.service !== undefined) onSelectService?.(hit.service);
    else if (hit?.section) onSelect?.(hit.section);
  }

  function onPointerLeave() {
    pointer.set(2, 2);
    parallax.set(0, 0);
    pointerDirty = true;
  }

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointerleave', onPointerLeave);
  window.addEventListener('resize', resize);

  // ---- loop ----
  let last = performance.now();
  let elapsed = 0;
  let frame = 0;
  let raf = 0;
  let readyFired = false;

  function tick() {
    raf = requestAnimationFrame(tick);
    const now = performance.now();
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    elapsed += dt;
    const t = elapsed;

    if (pointerDirty && !drag) {
      pointerDirty = false;
      const hit = pick();
      const nextHover = hit?.section ?? null;
      const nextService = hit?.service ?? -1;
      if (nextHover !== state.hovered) {
        state.hovered = nextHover;
        onHover?.(nextHover);
      }
      if (nextService !== state.hoverService) {
        state.hoverService = nextService;
        onHoverService?.(nextService);
      }
      canvas.style.cursor = nextHover || nextService >= 0 ? 'pointer' : 'grab';
    }

    // System rotation: slow auto-spin, paused while something is hovered or focused.
    const idle = !state.focused && !state.hovered && !state.uiHovered && !drag;
    state.autoSpin = THREE.MathUtils.lerp(state.autoSpin, idle && !reducedMotion ? 1 : 0, damp(2, dt));
    if (!drag) {
      state.yaw += state.yawVelocity * dt;
      state.yawVelocity *= Math.exp(-dt * 3);
    }
    state.yaw += dt * 0.045 * state.autoSpin;
    system.rotation.y = state.yaw;
    galaxy.rotation.y = t * 0.012 * state.motion;

    core.update(t, dt, state.motion);
    coreLight.intensity = 90 + Math.sin(t * 1.4) * 15 * state.motion;

    const activeHover = state.uiHovered ?? state.hovered;
    nodes.forEach((n) => {
      n.hover = THREE.MathUtils.lerp(n.hover, activeHover === n.id ? 1 : 0, damp(8, dt));
      n.focus = THREE.MathUtils.lerp(n.focus, state.focused === n.id ? 1 : 0, damp(4, dt));
      const lift = Math.max(n.hover, n.focus);
      n.body.scale.setScalar(1 + lift * 0.2);
      n.body.position.y = Math.sin(t * 0.9 + n.group.position.x) * 0.18 * state.motion;
      n.glow.material.opacity = 0.18 + n.hover * 0.22 - n.focus * 0.1;
      n.glowMats.forEach(({ mat, base }) => {
        mat.emissiveIntensity = base + n.hover * 0.8 + n.focus * 0.15;
      });
      n.update(t, dt, { motion: state.motion, hover: n.hover, focus: n.focus, hoverService: state.hoverService, activeService: state.activeService });
    });

    updateCameraTarget();
    const k = damp(reducedMotion ? 10 : state.focused ? 2.6 : 1.6, dt);
    camPos.lerp(targetPos, k);
    camLook.lerp(targetLook, k);
    camera.position.copy(camPos);
    camera.lookAt(camLook);

    composer.render(dt);

    nodes.forEach((n) => placeLabel(getLabel?.(n.id), n.group.getWorldPosition(tmp), 2.3 * (1 + n.hover * 0.2)));
    if (state.hoverService >= 0 && serviceHits[state.hoverService]) {
      placeLabel(getServiceTip?.(), serviceHits[state.hoverService].getWorldPosition(tmp), 0.45);
    }

    frame += 1;
    if (!readyFired && frame > 2) {
      readyFired = true;
      onReady?.();
    }
  }
  tick();

  return {
    focus(id) {
      state.focused = id && nodeById.has(id) ? id : null;
      if (state.focused !== 'services') state.activeService = -1;
    },
    setHover(id) {
      state.uiHovered = id;
    },
    setActiveService(index) {
      state.activeService = index ?? -1;
    },
    dispose() {
      cancelAnimationFrame(raf);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', resize);
      scene.traverse((obj) => {
        obj.geometry?.dispose();
        const mats = Array.isArray(obj.material) ? obj.material : obj.material ? [obj.material] : [];
        mats.forEach((m) => m.dispose());
      });
      textures.forEach((tex) => tex.dispose());
      composer.dispose();
      renderer.dispose();
    }
  };
}

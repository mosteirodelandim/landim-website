/**
 * WebGL hero — fullscreen shader quad over the hero image.
 * Loaded dynamically ONLY when html[data-motion="full"].
 *
 * Effects: ambient flow-noise breathing, cursor-velocity ripple,
 * scroll-velocity stretch, vignette + warm grade + grain.
 * DPR capped at 1.5, paused when offscreen, disposed on page swap.
 */
import {
  WebGLRenderer,
  OrthographicCamera,
  Scene,
  Mesh,
  PlaneGeometry,
  ShaderMaterial,
  TextureLoader,
  Vector2,
  SRGBColorSpace,
  LinearFilter,
  type Texture,
} from "three";

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;

  uniform sampler2D uTexture;
  uniform vec2 uPlaneRes;
  uniform vec2 uImageRes;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseVel;
  uniform float uScrollVel;
  uniform float uReveal;
  uniform vec2 uClick;
  uniform float uClickAge; // seconds since click; large = inactive
  varying vec2 vUv;

  // --- Ashima 2D simplex noise (public domain) ---
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 10.0) * x); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  vec2 coverUv(vec2 uv) {
    float planeAspect = uPlaneRes.x / uPlaneRes.y;
    float imageAspect = uImageRes.x / uImageRes.y;
    vec2 scale = (planeAspect > imageAspect)
      ? vec2(1.0, imageAspect / planeAspect)
      : vec2(planeAspect / imageAspect, 1.0);
    return (uv - 0.5) * scale + 0.5;
  }

  float grain(vec2 uv, float t) {
    return fract(sin(dot(uv * t, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = vUv;

    // Ambient breathing
    float n = snoise(uv * 2.6 + uTime * 0.06);
    uv += n * 0.0045 * uReveal;

    // Cursor ripple
    float d = distance(uv, uMouse);
    float ripple = smoothstep(0.38, 0.0, d) * uMouseVel;
    vec2 dir = normalize(uv - uMouse + 1e-5);
    uv += dir * ripple * 0.045;

    // Click burst — expanding ring wave
    float cd = distance(uv, uClick);
    float wave = sin((cd - uClickAge * 0.55) * 42.0);
    float burst = wave * exp(-cd * 5.0) * exp(-uClickAge * 2.6) * step(uClickAge, 2.5);
    vec2 cdir = normalize(uv - uClick + 1e-5);
    uv += cdir * burst * 0.03;

    // Scroll stretch
    uv.y += uScrollVel * (uv.y - 0.5) * 0.22;

    // Intro zoom (reveal 0 -> 1 eases scale 1.12 -> 1.0)
    float z = mix(1.12, 1.0, uReveal);
    uv = (uv - 0.5) / z + 0.5;

    vec3 color = texture2D(uTexture, coverUv(uv)).rgb;

    // Warm linen grade
    color = mix(color, color * vec3(1.05, 1.0, 0.93), 0.35);

    // Vignette
    float vig = smoothstep(1.05, 0.32, distance(vUv, vec2(0.5)));
    color *= mix(0.78, 1.0, vig);

    // Grain
    color += (grain(vUv, fract(uTime) + 1.0) - 0.5) * 0.05;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export interface HeroGL {
  destroy: () => void;
}

export function createHeroGL(canvas: HTMLCanvasElement): HeroGL | null {
  const src = canvas.dataset.src;
  if (!src) return null;

  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: "high-performance",
    });
  } catch {
    return null;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  renderer.setPixelRatio(dpr);

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const uniforms = {
    uTexture: { value: null as Texture | null },
    uPlaneRes: { value: new Vector2(1, 1) },
    uImageRes: { value: new Vector2(1, 1) },
    uTime: { value: 0 },
    uMouse: { value: new Vector2(0.5, 0.5) },
    uMouseVel: { value: 0 },
    uScrollVel: { value: 0 },
    uReveal: { value: 0 },
    uClick: { value: new Vector2(0.5, 0.5) },
    uClickAge: { value: 99 },
  };

  const material = new ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms });
  scene.add(new Mesh(new PlaneGeometry(2, 2), material));

  let raf = 0;
  let visible = true;
  let running = false;
  let destroyed = false;

  const mouseTarget = new Vector2(0.5, 0.5);
  let mouseVelTarget = 0;
  let scrollVelTarget = 0;
  let lastScrollY = window.scrollY;
  let lastMouse = new Vector2(0.5, 0.5);

  function resize(): void {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    uniforms.uPlaneRes.value.set(w, h);
  }

  function onPointerMove(e: PointerEvent): void {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1 - (e.clientY - rect.top) / rect.height;
    mouseTarget.set(x, y);
    mouseVelTarget = Math.min(
      1,
      mouseVelTarget + lastMouse.distanceTo(mouseTarget) * 2.4,
    );
    lastMouse.copy(mouseTarget);
  }

  function onPointerDown(e: PointerEvent): void {
    const rect = canvas.getBoundingClientRect();
    if (e.clientY < rect.top || e.clientY > rect.bottom) return;
    uniforms.uClick.value.set(
      (e.clientX - rect.left) / rect.width,
      1 - (e.clientY - rect.top) / rect.height,
    );
    uniforms.uClickAge.value = 0;
  }

  let start = performance.now();
  let lastTick = start;

  function tick(now: number): void {
    if (destroyed) return;
    raf = requestAnimationFrame(tick);
    if (!visible) return;

    const dt = Math.min(0.1, (now - lastTick) / 1000);
    lastTick = now;
    uniforms.uTime.value = (now - start) / 1000;
    uniforms.uClickAge.value += dt;

    // Lerp uniforms toward targets
    uniforms.uMouse.value.lerp(mouseTarget, 0.08);
    mouseVelTarget *= 0.9;
    uniforms.uMouseVel.value += (mouseVelTarget - uniforms.uMouseVel.value) * 0.08;

    const sy = window.scrollY;
    scrollVelTarget = Math.max(-1, Math.min(1, (sy - lastScrollY) / 60));
    lastScrollY = sy;
    uniforms.uScrollVel.value += (scrollVelTarget - uniforms.uScrollVel.value) * 0.07;

    if (uniforms.uReveal.value < 1) {
      uniforms.uReveal.value = Math.min(1, uniforms.uReveal.value + 0.012);
    }

    renderer.render(scene, camera);
  }

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  io.observe(canvas);

  const onResize = (): void => resize();

  new TextureLoader().load(
    src,
    (texture) => {
      if (destroyed) {
        texture.dispose();
        return;
      }
      texture.colorSpace = SRGBColorSpace;
      texture.minFilter = LinearFilter;
      texture.generateMipmaps = false;
      uniforms.uTexture.value = texture;
      uniforms.uImageRes.value.set(texture.image.width, texture.image.height);
      resize();
      window.addEventListener("resize", onResize);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerdown", onPointerDown, { passive: true });
      running = true;
      canvas.classList.add("is-live");
      raf = requestAnimationFrame(tick);
    },
    undefined,
    () => {
      /* texture failed: leave static hero visible */
    },
  );

  function destroy(): void {
    if (destroyed) return;
    destroyed = true;
    cancelAnimationFrame(raf);
    io.disconnect();
    if (running) {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
    }
    uniforms.uTexture.value?.dispose();
    material.dispose();
    renderer.dispose();
  }

  return { destroy };
}

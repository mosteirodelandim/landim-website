/**
 * Landing-page orchestration: preloader, WebGL hero boot, hero type reveal,
 * rotating italic word, cursor-following space previews, timeline markers.
 * Idempotent per page-load; everything degrades under data-motion="min".
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Tier = "full" | "medium" | "min";
const tier = (): Tier =>
  (document.documentElement.dataset.motion as Tier | undefined) ?? "min";

let ctx: gsap.Context | null = null;
let wordTimer: ReturnType<typeof setInterval> | null = null;

/* ------------------------------------------------------------------ */
/* Preloader                                                           */
/* ------------------------------------------------------------------ */

function runPreloader(): Promise<boolean> {
  const el = document.getElementById("preloader");
  if (!el) return Promise.resolve(false);

  const seen = sessionStorage.getItem("ml:preloaded");
  if (seen || tier() !== "full") {
    el.remove();
    return Promise.resolve(false);
  }
  sessionStorage.setItem("ml:preloaded", "1");
  document.documentElement.classList.add("menu-locked");

  const counter = el.querySelector<HTMLElement>(".preloader-counter");
  const line = el.querySelector<HTMLElement>(".preloader-line i");

  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      document.documentElement.classList.remove("menu-locked");
      el.remove();
      resolve(true);
    };

    // Hard failsafe: never hold the page hostage, whatever GSAP does.
    const failsafe = setTimeout(finish, 5000);

    const state = { p: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(failsafe);
        finish();
      },
    });

    tl.to(state, {
      p: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counter) counter.textContent = String(Math.round(state.p)).padStart(3, "0");
        if (line) line.style.transform = `scaleX(${state.p / 100})`;
      },
    })
      .to(el.querySelector(".preloader-inner"), {
        autoAlpha: 0,
        y: -28,
        duration: 0.5,
        ease: "power3.in",
      })
      .to(el, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.9,
        ease: "power4.inOut",
      });
  });
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function heroIntro(dramatic: boolean): void {
  const title = document.querySelector<HTMLElement>(".hero-title");
  const sub = document.querySelector<HTMLElement>(".hero-sub");
  const scrollHint = document.querySelector<HTMLElement>(".hero-scroll");
  const headerEl = document.getElementById("site-header");
  if (!title) return;

  if (tier() === "min") return; // CSS shows everything

  if (dramatic) {
    try {
      const split = new SplitText(title, { type: "lines,chars", linesClass: "hero-line" });

      gsap.set([sub, scrollHint, headerEl], { autoAlpha: 0 });
      gsap.set(title, { autoAlpha: 1 });

      const tl = gsap.timeline({ delay: 0.1 });
      tl.from(split.chars, {
        yPercent: 112,
        duration: 1.15,
        ease: "power4.out",
        stagger: { each: 0.024, from: "start" },
      })
        .to(sub, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.45")
        .to(headerEl, { autoAlpha: 1, duration: 0.7 }, "-=0.5")
        .to(scrollHint, { autoAlpha: 1, duration: 0.7 }, "-=0.4");
    } catch {
      gsap.set([title, sub, scrollHint, headerEl], { clearProps: "all" });
    }
  }

  // Subtle parallax of hero content against scroll
  if (tier() === "full") {
    gsap.to(".hero-content", {
      yPercent: -18,
      autoAlpha: 0.25,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
}

function startWordCycle(): void {
  const words = Array.from(document.querySelectorAll<HTMLElement>(".hero-word"));
  if (words.length < 2) return;
  let i = 0;

  if (tier() === "min") {
    // CSS keeps first word visible; no JS cycling needed
    return;
  }

  words.forEach((w, idx) => gsap.set(w, { autoAlpha: idx === 0 ? 1 : 0, y: idx === 0 ? 0 : 18 }));

  wordTimer = setInterval(() => {
    const current = words[i];
    i = (i + 1) % words.length;
    const next = words[i];
    gsap.to(current, { autoAlpha: 0, y: -18, duration: 0.55, ease: "power3.in" });
    gsap.fromTo(
      next,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out", delay: 0.3 },
    );
  }, 2800);
}

/* ------------------------------------------------------------------ */
/* Index of spaces — cursor-following preview                          */
/* ------------------------------------------------------------------ */

function initSpacesPreview(): void {
  if (tier() !== "full") return;
  const list = document.querySelector<HTMLElement>(".spaces-list");
  const preview = document.querySelector<HTMLElement>(".spaces-preview");
  if (!list || !preview) return;

  const imgs = Array.from(preview.querySelectorAll<HTMLElement>(".spaces-preview-img"));
  let active: HTMLElement | null = null;

  const xTo = gsap.quickTo(preview, "x", { duration: 0.5, ease: "power3.out" });
  const yTo = gsap.quickTo(preview, "y", { duration: 0.5, ease: "power3.out" });
  const rTo = gsap.quickTo(preview, "rotation", { duration: 0.6, ease: "power3.out" });

  let lastX = 0;
  list.addEventListener("pointermove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
    // Springy tilt from horizontal velocity
    const vel = e.clientX - lastX;
    lastX = e.clientX;
    rTo(gsap.utils.clamp(-10, 10, vel * 0.55));
  });

  list.querySelectorAll<HTMLElement>(".spaces-row").forEach((row) => {
    row.addEventListener("pointerenter", () => {
      const key = row.dataset.space;
      const img = imgs.find((m) => m.dataset.space === key) ?? null;
      // Kill any in-flight tweens and immediately hide all non-target images
      imgs.forEach((m) => {
        gsap.killTweensOf(m);
        if (m !== img) gsap.set(m, { autoAlpha: 0, scale: 1 });
      });
      active = img;
      // No `overwrite` here: it would also kill the quickTo x/y/rotation
      // tweens on `preview`, freezing the cursor-follow.
      gsap.to(preview, { autoAlpha: 1, duration: 0.3 });
      if (img) gsap.fromTo(img, { autoAlpha: 0, scale: 1.1 }, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "power3.out" });
    });
  });

  list.addEventListener("pointerleave", () => {
    gsap.to(preview, { autoAlpha: 0, duration: 0.3 });
    if (active) gsap.to(active, { autoAlpha: 0, duration: 0.3 });
    active = null;
  });
}

/* ------------------------------------------------------------------ */
/* Manifesto section — celestial ornament, scroll-driven parallax      */
/* ------------------------------------------------------------------ */

function initManifestoOrnament(): void {
  const ornament = document.querySelector<SVGElement>(".manifesto-ornament");
  if (!ornament || tier() === "min") return;

  ctx ??= gsap.context(() => {});
  ctx.add(() => {
    // Whole ornament drifts + rotates as the section passes through the viewport.
    gsap.fromTo(
      ornament,
      { yPercent: 9, rotation: -3 },
      {
        yPercent: -9,
        rotation: 3,
        ease: "none",
        transformOrigin: "50% 50%",
        scrollTrigger: {
          trigger: ".manifesto",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      },
    );

    // Per-element gentle, continuous float (independent of scroll) — adds life.
    const float = (
      sel: string,
      ampY: number,
      ampR: number,
      dur: number,
    ): void => {
      ornament.querySelectorAll<SVGElement>(sel).forEach((el, i) => {
        gsap.to(el, {
          yPercent: ampY,
          rotation: ampR,
          duration: dur,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.4,
          transformOrigin: "50% 50%",
        });
      });
    };

    float(".orn-moon", -7, 6, 6.5);
    float(".orn-ring", 4, -5, 9);
    float(".orn-ring-inner", -5, 6, 7.5);
    float(".orn-star", -9, 0, 5);
    float(".orn-dot", -6, 0, 4.2);
  });
}

/* ------------------------------------------------------------------ */
/* Events feature — floating ornament + media, all scroll-driven       */
/* ------------------------------------------------------------------ */

function initFeatureOrnament(): void {
  const ornament = document.querySelector<SVGElement>(".feature-ornament");
  const section = document.querySelector<HTMLElement>(".feature");
  if (!section || tier() === "min") return;

  ctx ??= gsap.context(() => {});
  ctx.add(() => {
    const st = (scrub: number) => ({
      trigger: ".feature",
      start: "top bottom",
      end: "bottom top",
      scrub,
    });

    if (ornament) {
      // Whole ornament drifts + rotates with scroll.
      gsap.fromTo(
        ornament,
        { yPercent: 8, rotation: 5 },
        { yPercent: -10, rotation: -5, ease: "none", transformOrigin: "50% 50%", scrollTrigger: st(1.4) },
      );

      const layer = (sel: string, fromY: number, toY: number, fromR = 0, toR = 0, scrub = 1.4): void => {
        ornament.querySelectorAll<SVGElement>(sel).forEach((el, i) => {
          gsap.fromTo(
            el,
            { yPercent: fromY, rotation: fromR },
            {
              yPercent: toY - i * 10,
              rotation: toR,
              ease: "none",
              transformOrigin: "50% 50%",
              scrollTrigger: st(scrub + i * 0.35),
            },
          );
        });
      };

      layer(".fo-ring", -20, 26, 14, -16, 2);
      layer(".fo-ring-inner", 22, -28, -16, 20, 2.2);
      layer(".fo-flute", 30, -46, -6, 8, 1.6);
      layer(".fo-spark", 46, -70, -20, 24, 1.1);
      layer(".fo-dot", 26, -40, 0, 0, 1);
    }

    // Feature images float at different scroll rates (parallax depth).
    const media = [
      { sel: ".feature-media-a", from: 14, to: -14 },
      { sel: ".feature-media-b", from: 26, to: -26 },
      { sel: ".feature-media-c", from: 8, to: -20 },
    ];
    media.forEach(({ sel, from, to }, i) => {
      const el = section.querySelector<HTMLElement>(sel);
      if (!el) return;
      gsap.fromTo(
        el,
        { yPercent: from },
        { yPercent: to, ease: "none", scrollTrigger: st(1 + i * 0.4) },
      );
    });
  });
}

/* ------------------------------------------------------------------ */
/* Momentos — pinned horizontal gallery (full tier)                    */
/* ------------------------------------------------------------------ */

function initMomentos(): void {
  const section = document.querySelector<HTMLElement>(".momentos");
  const track = document.querySelector<HTMLElement>(".momentos-track");
  if (!section || !track || tier() !== "full") return;

  ctx ??= gsap.context(() => {});
  ctx.add(() => {
    const distance = () => track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    // Per-panel parallax inside the horizontal motion
    section.querySelectorAll<HTMLElement>(".momentos-panel img").forEach((img) => {
      gsap.fromTo(
        img,
        { xPercent: -7 },
        {
          xPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest(".momentos-panel"),
            containerAnimation: tween,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        },
      );
    });

    // Progress hairline
    const bar = section.querySelector<HTMLElement>(".momentos-progress i");
    if (bar) {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
          },
        },
      );
    }
  });
}

/* ------------------------------------------------------------------ */
/* Marquee scroll-velocity skew (full tier)                            */
/* ------------------------------------------------------------------ */

function initMarqueeSkew(): void {
  if (tier() !== "full") return;
  const track = document.querySelector<HTMLElement>(".marquee-track");
  if (!track) return;

  ctx ??= gsap.context(() => {});
  ctx.add(() => {
    const skewTo = gsap.quickTo(track, "skewX", { duration: 0.4, ease: "power2.out" });
    ScrollTrigger.create({
      trigger: track,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        skewTo(gsap.utils.clamp(-8, 8, self.getVelocity() / -220));
      },
    });
  });
}

/* ------------------------------------------------------------------ */
/* Timeline band                                                       */
/* ------------------------------------------------------------------ */

function initTimeline(): void {
  if (tier() === "min") return;
  const rows = document.querySelectorAll<HTMLElement>(".timeline-item");
  if (!rows.length) return;

  ctx ??= gsap.context(() => {});
  ctx.add(() => {
    gsap.from(rows, {
      autoAlpha: 0,
      y: 44,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.14,
      scrollTrigger: { trigger: ".timeline", start: "top 78%", once: true },
    });

    const lineEl = document.querySelector<HTMLElement>(".timeline-rail i");
    if (lineEl && tier() === "full") {
      gsap.fromTo(
        lineEl,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );
    }
  });
}

/* ------------------------------------------------------------------ */
/* Lifecycle                                                           */
/* ------------------------------------------------------------------ */

let active = false;

export async function initLanding(): Promise<void> {
  if (active || !document.querySelector(".hero")) return;
  active = true;

  // Static fallback img is eager; hero intro runs once the preloader clears.
  const preloadPromise = runPreloader();
  const ranPreloader = await preloadPromise;

  heroIntro(ranPreloader);
  startWordCycle();
  initSpacesPreview();
  initManifestoOrnament();
  initFeatureOrnament();
  initMomentos();
  initMarqueeSkew();
  initTimeline();
}

function teardown(): void {
  active = false;
  ctx?.revert();
  ctx = null;
  if (wordTimer) {
    clearInterval(wordTimer);
    wordTimer = null;
  }
}

document.addEventListener("astro:before-swap", teardown);

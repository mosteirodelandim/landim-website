/**
 * Motion runtime.
 * Tier is decided by an inline script in BaseLayout <head> before paint:
 *   html[data-motion="full"]   — fine pointer, ≥1024px, no reduced-motion, ≥4GB
 *   html[data-motion="medium"] — ≥768px (tablets), no reduced-motion
 *   html[data-motion="min"]    — phones / reduced-motion: CSS-only, no scenes
 *
 * Responsibilities: Lenis smooth scroll (full), generic [data-reveal]
 * ScrollTrigger factory (full+medium), page-transition curtain, header state.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Tier = "full" | "medium" | "min";

const tier = (): Tier =>
  (document.documentElement.dataset.motion as Tier | undefined) ?? "min";

declare global {
  interface Window {
    __motionReady?: boolean;
    __lenis?: Lenis;
  }
}

let ctx: gsap.Context | null = null;

/* ------------------------------------------------------------------ */
/* Lenis                                                               */
/* ------------------------------------------------------------------ */

async function initLenis(): Promise<void> {
  if (window.__lenis || tier() !== "full") return;
  const { default: LenisCtor } = await import("lenis");
  const lenis = new LenisCtor({ duration: 1.15 });
  window.__lenis = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Anchor links route through Lenis
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname === location.pathname && url.hash) {
      const target = document.querySelector<HTMLElement>(url.hash);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80 });
        history.pushState(null, "", url.hash);
      }
    }
  });
}

/* ------------------------------------------------------------------ */
/* Generic reveal factory                                              */
/* ------------------------------------------------------------------ */

function buildReveals(): void {
  const t = tier();
  if (t === "min") return;

  ctx = gsap.context(() => {
    // Serif lines that unmask word-by-word (editorial headline treatment)
    document.querySelectorAll<HTMLElement>('[data-reveal="words"]').forEach((el) => {
      try {
        const split = new SplitText(el, { type: "lines,words", linesClass: "split-line" });
        gsap.set(el, { autoAlpha: 1 });
        gsap.from(split.words, {
          yPercent: 118,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.045,
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      } catch {
        gsap.set(el, { autoAlpha: 1 });
      }
    });

    document.querySelectorAll<HTMLElement>('[data-reveal="fade-up"]').forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 42 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.05,
          ease: "power3.out",
          delay: Number(el.dataset.revealDelay ?? 0),
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });

    document.querySelectorAll<HTMLElement>('[data-reveal="mask"]').forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 1, clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.25,
          ease: "power4.inOut",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    });

    document
      .querySelectorAll<HTMLElement>('[data-reveal="stagger-children"]')
      .forEach((el) => {
        gsap.fromTo(
          el.children,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          },
        );
      });

    document.querySelectorAll<HTMLElement>('[data-reveal="line"]').forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 1, scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.3,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        },
      );
    });

    if (t === "full") {
      document.querySelectorAll<HTMLElement>('[data-reveal="parallax"]').forEach((el) => {
        const amount = Number(el.dataset.parallax ?? 12);
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }
  });
}

/* ------------------------------------------------------------------ */
/* Page-transition curtain                                             */
/* ------------------------------------------------------------------ */

/** True only while a soft navigation raised the curtain. */
let curtainRaised = false;

function curtainIn(): Promise<void> {
  const curtain = document.getElementById("page-curtain");
  if (!curtain || tier() === "min") return Promise.resolve();
  return new Promise((resolve) => {
    // Neutralise the CSS translateY(100%) so GSAP owns the transform fully.
    gsap.set(curtain, { y: 0 });
    gsap.fromTo(
      curtain,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.55,
        ease: "power4.inOut",
        onComplete: () => {
          curtainRaised = true;
          resolve();
        },
      },
    );
  });
}

function curtainOut(): void {
  const curtain = document.getElementById("page-curtain");
  if (!curtain || !curtainRaised) return;
  curtainRaised = false;
  gsap.set(curtain, { y: 0 });
  gsap.fromTo(
    curtain,
    { yPercent: 0 },
    {
      yPercent: -100,
      duration: 0.6,
      ease: "power4.inOut",
      delay: 0.05,
      onComplete: () => {
        // Return to the resting CSS state (translateY(100%), below viewport).
        gsap.set(curtain, { clearProps: "all" });
      },
    },
  );
}

document.addEventListener("astro:before-preparation", (event) => {
  const e = event as Event & { loader: () => Promise<void> };
  const original = e.loader;
  e.loader = async () => {
    await curtainIn();
    await original();
  };
});

/* ------------------------------------------------------------------ */
/* Custom cursor (full tier only)                                      */
/* ------------------------------------------------------------------ */

function initCursor(): void {
  if (tier() !== "full" || document.getElementById("ml-cursor")) return;

  const dot = document.createElement("div");
  dot.id = "ml-cursor";
  dot.setAttribute("aria-hidden", "true");
  document.body.appendChild(dot);

  const xTo = gsap.quickTo(dot, "x", { duration: 0.35, ease: "power3.out" });
  const yTo = gsap.quickTo(dot, "y", { duration: 0.35, ease: "power3.out" });

  window.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "mouse") return;
      xTo(e.clientX);
      yTo(e.clientY);
      if (!dot.classList.contains("is-on")) dot.classList.add("is-on");
      const interactive = (e.target as HTMLElement).closest(
        "a, button, summary, [data-strip], [data-lightbox]",
      );
      dot.classList.toggle("is-hover", Boolean(interactive));
    },
    { passive: true },
  );

  document.addEventListener("pointerdown", () => dot.classList.add("is-down"));
  document.addEventListener("pointerup", () => dot.classList.remove("is-down"));
  document.documentElement.addEventListener("pointerleave", () =>
    dot.classList.remove("is-on"),
  );
}

/* ------------------------------------------------------------------ */
/* Lifecycle                                                            */
/* ------------------------------------------------------------------ */

function initPage(): void {
  ctx?.revert();
  ctx = null;
  buildReveals();
  curtainOut();
  ScrollTrigger.refresh();
}

document.addEventListener("astro:before-swap", () => {
  ctx?.revert();
  ctx = null;
});

document.addEventListener("astro:page-load", initPage);

// Dynamic import may resolve after the initial astro:page-load already
// fired — run once immediately if the document is ready.
if (document.readyState !== "loading") {
  initPage();
}

initLenis();
initCursor();
window.__motionReady = true;

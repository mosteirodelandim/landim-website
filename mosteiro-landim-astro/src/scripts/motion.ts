/**
 * Motion bootstrap — tiny, ships to every tier.
 * Heavy GSAP/Lenis code (motion-core) is dynamically imported only when the
 * tier allows animation, so phones (min tier) never download it.
 */
type Tier = "full" | "medium" | "min";

export {};

const tier = (document.documentElement.dataset.motion as Tier | undefined) ?? "min";

/* Header scroll state — needed on every tier, vanilla and cheap */
function initHeaderState(): void {
  const header = document.getElementById("site-header");
  if (!header || header.dataset.scrollBound) return;
  header.dataset.scrollBound = "true";
  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

initHeaderState();
document.addEventListener("astro:page-load", initHeaderState);

if (tier !== "min") {
  import("./motion-core");
} else {
  window.__motionReady = true;
}

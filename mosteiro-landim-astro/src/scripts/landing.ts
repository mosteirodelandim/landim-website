/**
 * Landing bootstrap — ships to every tier.
 * On the min tier (phones / reduced motion) it only removes the preloader;
 * the heavy GSAP code (landing-core) is dynamically imported elsewhere.
 */
type Tier = "full" | "medium" | "min";

export {};

function boot(): void {
  if (!document.querySelector(".hero")) return;
  const tier =
    (document.documentElement.dataset.motion as Tier | undefined) ?? "min";

  if (tier === "min") {
    document.getElementById("preloader")?.remove();
    return;
  }

  import("./landing-core").then((m) => m.initLanding());
}

boot();
document.addEventListener("astro:page-load", boot);

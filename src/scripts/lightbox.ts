/**
 * Lightbox controller — groups, keyboard, swipe, neighbor preload.
 */
interface LbItem {
  full: string;
  caption: string;
  alt: string;
}

let groups: Record<string, LbItem[]> = {};
let activeGroup: LbItem[] = [];
let index = 0;

function $(sel: string): HTMLElement | null {
  return document.querySelector(sel);
}

function collect(): void {
  groups = {};
  document.querySelectorAll<HTMLAnchorElement>("[data-lightbox]").forEach((el) => {
    const group = el.dataset.lightbox || "default";
    (groups[group] ??= []).push({
      full: el.href || el.dataset.full || "",
      caption: el.dataset.caption ?? "",
      alt: el.querySelector("img")?.alt ?? "",
    });
    el.dataset.lbIndex = String(groups[group].length - 1);
  });
}

function preload(i: number): void {
  const item = activeGroup[i];
  if (item) {
    const img = new Image();
    img.src = item.full;
  }
}

function render(switching = true): void {
  const dialog = $("#lightbox") as HTMLDialogElement | null;
  if (!dialog) return;
  const img = dialog.querySelector<HTMLImageElement>(".lb-img")!;
  const caption = dialog.querySelector(".lb-caption")!;
  const counter = dialog.querySelector(".lb-counter")!;
  const item = activeGroup[index];
  if (!item) return;

  const apply = () => {
    img.src = item.full;
    img.alt = item.alt || item.caption;
    caption.textContent = item.caption;
    counter.textContent = `${index + 1} / ${activeGroup.length}`;
    if (img.complete) {
      img.classList.remove("is-switching");
    } else {
      img.addEventListener("load", () => img.classList.remove("is-switching"), { once: true });
    }
  };

  if (switching) {
    img.classList.add("is-switching");
    setTimeout(apply, 120);
  } else {
    apply();
  }

  preload((index + 1) % activeGroup.length);
  preload((index - 1 + activeGroup.length) % activeGroup.length);
}

function open(group: string, i: number): void {
  const dialog = $("#lightbox") as HTMLDialogElement | null;
  if (!dialog) return;
  activeGroup = groups[group] ?? [];
  index = i;
  if (!activeGroup.length) return;
  dialog.showModal();
  document.documentElement.classList.add("menu-locked");
  window.__lenis?.stop();
  render(false);
}

function close(): void {
  const dialog = $("#lightbox") as HTMLDialogElement | null;
  dialog?.close();
}

function step(dir: 1 | -1): void {
  if (!activeGroup.length) return;
  index = (index + dir + activeGroup.length) % activeGroup.length;
  render();
}

let docBound = false;

function init(): void {
  const dialog = $("#lightbox") as HTMLDialogElement | null;
  if (!dialog) return;

  collect();

  if (!docBound) {
    docBound = true;
    // Capture phase + stopPropagation so Astro's ClientRouter does not navigate
    // to the image href before this handler can preventDefault.
    document.addEventListener(
      "click",
      (e) => {
        const trigger = (e.target as HTMLElement).closest<HTMLElement>("[data-lightbox]");
        if (!trigger) return;
        // Ignore the click that ends a strip drag (set by GalleryStrip).
        const guard = (window as unknown as { __lbDragUntil?: number }).__lbDragUntil ?? 0;
        if (performance.now() < guard) return;
        e.preventDefault();
        e.stopPropagation();
        open(trigger.dataset.lightbox || "default", Number(trigger.dataset.lbIndex ?? 0));
      },
      { capture: true },
    );
  }

  if (dialog.dataset.bound) return;
  dialog.dataset.bound = "true";

  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("menu-locked");
    window.__lenis?.start();
  });

  // Backdrop click closes (clicks outside the stage content)
  dialog.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target === dialog) close();
  });

  dialog.querySelector("[data-lb-close]")?.addEventListener("click", close);
  dialog.querySelector("[data-lb-prev]")?.addEventListener("click", () => step(-1));
  dialog.querySelector("[data-lb-next]")?.addEventListener("click", () => step(1));

  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  // Swipe
  let startX = 0;
  let startY = 0;
  dialog.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true },
  );
  dialog.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        step(dx < 0 ? 1 : -1);
      }
    },
    { passive: true },
  );
}

init();
document.addEventListener("astro:page-load", init);
document.addEventListener("astro:before-swap", () => {
  const dialog = $("#lightbox") as HTMLDialogElement | null;
  if (dialog?.open) dialog.close();
});

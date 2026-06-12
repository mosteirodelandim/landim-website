/**
 * i18n content loader.
 *
 * Two active locales: `pt` (default) and `en`.
 * Each locale has a matching set of JSON files under ./<locale>/.
 * `getContent(locale)` returns the strongly-typed content bundle for a locale,
 * falling back to PT when an unknown locale is requested.
 */
import { getRelativeLocaleUrl } from "astro:i18n";

// --- Portuguese (default, source of truth for the type shape) ---
import ptNotFound from "./pt/404.json";
import ptAboutUs from "./pt/about_us.json";
import ptCta from "./pt/cta.json";
import ptEvents from "./pt/events.json";
import ptFaq from "./pt/faq.json";
import ptGardens from "./pt/gardens.json";
import ptHistory from "./pt/history.json";
import ptIndex from "./pt/index.json";
import ptPhotoGallery from "./pt/photo_gallery.json";
import ptSidebar from "./pt/sidebar.json";
import ptUi from "./pt/ui.json";
import ptWineVineyards from "./pt/wine_vineyards.json";

// --- English ---
import enNotFound from "./en/404.json";
import enAboutUs from "./en/about_us.json";
import enCta from "./en/cta.json";
import enEvents from "./en/events.json";
import enFaq from "./en/faq.json";
import enGardens from "./en/gardens.json";
import enHistory from "./en/history.json";
import enIndex from "./en/index.json";
import enPhotoGallery from "./en/photo_gallery.json";
import enSidebar from "./en/sidebar.json";
import enUi from "./en/ui.json";
import enWineVineyards from "./en/wine_vineyards.json";

const pt = {
  notFound: ptNotFound.pt,
  aboutUs: ptAboutUs.pt,
  cta: ptCta.pt,
  events: ptEvents.pt,
  faq: ptFaq.pt,
  gardens: ptGardens.pt,
  history: ptHistory.pt,
  landing: ptIndex.pt,
  photoGallery: ptPhotoGallery.pt,
  sidebar: ptSidebar.pt,
  ui: ptUi.pt,
  wineVineyards: ptWineVineyards.pt,
};

const en = {
  notFound: enNotFound.en,
  aboutUs: enAboutUs.en,
  cta: enCta.en,
  events: enEvents.en,
  faq: enFaq.en,
  gardens: enGardens.en,
  history: enHistory.en,
  landing: enIndex.en,
  photoGallery: enPhotoGallery.en,
  sidebar: enSidebar.en,
  ui: enUi.en,
  wineVineyards: enWineVineyards.en,
} as const;

export type Locale = "pt" | "en";
export type Content = typeof pt;

export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

const bundles: Record<Locale, Content> = { pt, en: en as unknown as Content };

/** Normalise an arbitrary value (e.g. Astro.currentLocale) to a known locale. */
export function resolveLocale(locale: string | undefined): Locale {
  return locale === "en" ? "en" : "pt";
}

export function getContent(locale: string | undefined = "pt"): Content {
  return bundles[resolveLocale(locale)];
}

/**
 * Build a locale-aware path. PT (default) is served without a prefix,
 * EN under /en. Hash/query suffixes are preserved.
 */
export function localizePath(path: string, locale: string | undefined): string {
  const loc = resolveLocale(locale);
  // External / non-internal links pass through untouched.
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;

  const [pathname, hashOrQuery = ""] = splitSuffix(path);
  const clean = pathname === "/" ? "" : pathname.replace(/^\//, "");
  const base = getRelativeLocaleUrl(loc, clean).replace(/(?<=.)\/+$/, "");
  return `${base}${hashOrQuery}`;
}

function splitSuffix(path: string): [string, string] {
  const i = path.search(/[#?]/);
  if (i === -1) return [path, ""];
  return [path.slice(0, i), path.slice(i)];
}

/** Default (PT) content for places that are not yet locale-aware. */
export const t = pt;

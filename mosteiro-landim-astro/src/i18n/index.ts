/**
 * i18n content loader.
 * PT is the only active locale for now; the structure is ready for EN
 * (add src/i18n/en/*.json and extend `locales` below).
 */
import notFound from "./pt/404.json";
import aboutUs from "./pt/about_us.json";
import cta from "./pt/cta.json";
import events from "./pt/events.json";
import faq from "./pt/faq.json";
import gardens from "./pt/gardens.json";
import history from "./pt/history.json";
import index from "./pt/index.json";
import photoGallery from "./pt/photo_gallery.json";
import sidebar from "./pt/sidebar.json";
import wineVineyards from "./pt/wine_vineyards.json";

const pt = {
  notFound: notFound.pt,
  aboutUs: aboutUs.pt,
  cta: cta.pt,
  events: events.pt,
  faq: faq.pt,
  gardens: gardens.pt,
  history: history.pt,
  landing: index.pt,
  photoGallery: photoGallery.pt,
  sidebar: sidebar.pt,
  wineVineyards: wineVineyards.pt,
};

export type Locale = "pt" | "en";
export type Content = typeof pt;

const locales: Record<string, Content> = { pt };

export function getContent(locale: Locale = "pt"): Content {
  return locales[locale] ?? locales.pt;
}

export const t = getContent("pt");

import { getContent, localizePath } from "@/i18n";

export interface NavLink {
  href: string;
  label: string;
}

export function getNavLinks(locale: string | undefined): NavLink[] {
  const t = getContent(locale);
  return [
    { href: localizePath("/", locale), label: t.sidebar.landing },
    { href: localizePath("/about_us", locale), label: t.sidebar.aboutUs },
    { href: localizePath("/events", locale), label: t.sidebar.events },
    { href: localizePath("/photo_gallery", locale), label: t.sidebar.photos },
    { href: localizePath("/history", locale), label: t.sidebar.history.main },
    { href: localizePath("/gardens", locale), label: t.sidebar.gardens },
    { href: localizePath("/wine_vineyards", locale), label: t.sidebar.wine_vineyards },
    { href: localizePath("/faq", locale), label: t.sidebar.faq },
  ];
}

export function getContactLink(locale: string | undefined): NavLink {
  const t = getContent(locale);
  return { href: localizePath("/faq#location", locale), label: t.sidebar.contact };
}

export function getHistoryAnchors(locale: string | undefined): NavLink[] {
  const t = getContent(locale);
  return [
    { href: localizePath("/history#origins", locale), label: t.sidebar.history.origins },
    { href: localizePath("/history#priests", locale), label: t.sidebar.history.priests },
    { href: localizePath("/history#extinction", locale), label: t.sidebar.history.extinction },
    { href: localizePath("/history#sale", locale), label: t.sidebar.history.sale },
    { href: localizePath("/history#notable", locale), label: t.sidebar.history.notable },
    { href: localizePath("/history#book", locale), label: t.sidebar.history.book },
  ];
}

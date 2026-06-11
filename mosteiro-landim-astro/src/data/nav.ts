import { t } from "@/i18n";

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: t.sidebar.landing },
  { href: "/about_us", label: t.sidebar.aboutUs },
  { href: "/events", label: t.sidebar.events },
  { href: "/photo_gallery", label: t.sidebar.photos },
  { href: "/history", label: t.sidebar.history.main },
  { href: "/gardens", label: t.sidebar.gardens },
  { href: "/wine_vineyards", label: t.sidebar.wine_vineyards },
  { href: "/faq", label: t.sidebar.faq },
];

export const contactLink: NavLink = { href: "/faq#location", label: t.sidebar.contact };

export const historyAnchors: NavLink[] = [
  { href: "/history#origins", label: t.sidebar.history.origins },
  { href: "/history#priests", label: t.sidebar.history.priests },
  { href: "/history#extinction", label: t.sidebar.history.extinction },
  { href: "/history#sale", label: t.sidebar.history.sale },
  { href: "/history#notable", label: t.sidebar.history.notable },
  { href: "/history#book", label: t.sidebar.history.book },
];

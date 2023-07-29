import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import landingEN from './locales/en/index.json';
import landingPT from './locales/pt/index.json';
import ctaEN from './locales/en/cta.json';
import ctaPT from './locales/pt/cta.json';
import notFoundEN from './locales/en/404.json';
import notFoundPT from './locales/pt/404.json';
import sidebarEN from './locales/en/sidebar.json';
import sidebarPT from './locales/pt/sidebar.json';
import eventsEN from './locales/en/events.json';
import eventsPT from './locales/pt/events.json';
import historyEN from './locales/en/history.json';
import historyPT from './locales/pt/history.json';
import wineVinesEN from './locales/en/wine_vineyards.json';
import wineVinesPT from './locales/pt/wine_vineyards.json';
import faqEN from './locales/en/faq.json';
import faqPT from './locales/pt/faq.json';
import aboutUsEN from './locales/en/about_us.json';
import aboutUsPT from './locales/pt/about_us.json';
import gardensEN from './locales/en/gardens.json';
import gardensPT from './locales/pt/gardens.json';
import galleryEN from './locales/en/photo_gallery.json';
import galleryPT from './locales/pt/photo_gallery.json';


const resources = {
  pt: {
    landing: landingPT.pt,
    cta: ctaPT.pt,
    notFound: notFoundPT.pt,
    sidebar: sidebarPT.pt,
    events: eventsPT.pt,
    history: historyPT.pt,
    wine_vineyards: wineVinesPT.pt,
    faq: faqPT.pt,
    about_us: aboutUsPT.pt,
    gardens: gardensPT.pt,
    photo_gallery: galleryPT.pt,
  },
  en: {
    landing: landingEN.en,
    cta: ctaEN.en,
    notFound: notFoundEN.en,
    sidebar: sidebarEN.en,
    events: eventsEN.en,
    history: historyEN.en,
    wine_vineyards: wineVinesEN.en,
    faq: faqEN.en,
    about_us: aboutUsEN.en,
    gardens: gardensEN.en,
    photo_gallery: galleryEN.en,
  },
};

const detection = {
  order: ['localStorage', 'querystring', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
};

i18n
// detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    detection,
    fallbackLng: 'en',

    ns: ['landing', 'cta', 'notFound', 'sidebar', 'events', 'history', 'wine_vineyards', 'faq', 'about_us', 'gardens', 'photo_gallery'],
    defaultNS: 'landing',

    returnObjects: true, // to return objects (in case of arrays, e.g.)

    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;

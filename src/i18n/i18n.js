import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import landingEN from './locales/en/index.json';
import landingPT from './locales/pt/index.json';
import notFoundEN from './locales/en/404.json';
import notFoundPT from './locales/pt/404.json';
import sidebarEN from './locales/en/sidebar.json';
import sidebarPT from './locales/pt/sidebar.json';
import servicesEN from './locales/en/services.json';
import servicesPT from './locales/pt/services.json';
import historyEN from './locales/en/history.json';
import historyPT from './locales/pt/history.json';

const resources = {
  pt: {
    landing: landingPT.pt,
    notFound: notFoundPT.pt,
    sidebar: sidebarPT.pt,
    services: servicesPT.pt,
    history: historyPT.pt,
  },
  en: {
    landing: landingEN.en,
    notFound: notFoundEN.en,
    sidebar: sidebarEN.en,
    services: servicesEN.en,
    history: historyEN.en,
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

    ns: ['landing', 'notFound', 'sidebar', 'services', 'history'],
    defaultNS: 'landing',

    returnObjects: true, // to return objects (in case of arrays, e.g.)

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
export default i18n;

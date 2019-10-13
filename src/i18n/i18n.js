import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import landingEN from './locales/en/index.json';
import landingPT from './locales/pt/index.json';
import notFoundEN from './locales/en/404.json';
import notFoundPT from './locales/pt/404.json';

const resources = {
  pt: {
    landing: landingPT.pt,
    notFound: notFoundPT.pt,
  },
  en: {
    landing: landingEN.en,
    notFound: notFoundEN.en,
  },
};

i18n
// detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'pt',

    ns: ['landing', 'notFound'],
    defaultNS: 'landing',

    returnObjects: true, // to return objects (in case of arrays, e.g.)

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
export default i18n;

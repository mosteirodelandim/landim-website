import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/index.json';
import translationPT from './locales/pt/index.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  pt: {
    translation: translationPT.pt,
  },
  en: {
    translation: translationEN.en,
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

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
export default i18n;

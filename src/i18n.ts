import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

interface ILanguage {
  nativeName: string;
}

export const lngs: {[key: string]: ILanguage} = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  it: { nativeName: 'Italiano' }
};

i18n
  // loads translations from your server
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
    },
    ns: ['translation'],
    defaultNS: 'translation',
    react: {
      useSuspense: true,
      wait: true,
    }
  });

export default i18n;
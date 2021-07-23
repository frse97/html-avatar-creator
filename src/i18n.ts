import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

interface ILanguage {
  nativeName: string;
}

export const lngs: {[key: string]: ILanguage} = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

i18n
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
    resources: {
      en: {
        translation: {
          "test": "This is a english text"
        }
      },
      de: {
        translation: {
          "test": "Das ist ein deutscher text"
        }
      }
    }
  });

export default i18n;
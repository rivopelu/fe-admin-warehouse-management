import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import EnContentLanguage from '../constants/messages/en.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EnContentLanguage,
      },
    },
    lng: localStorage.getItem('language') ?? 'en',
    fallbackLng: localStorage.getItem('language') ?? 'en',

    interpolation: {
      escapeValue: false,
    },
  })
  .then();

export default i18next;

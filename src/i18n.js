import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

// Configure i18next
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback if translation missing
    interpolation: {
      escapeValue: false // React already escapes values
    },
    // Detect user language from browser or localStorage
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
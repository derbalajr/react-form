import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

function importAll(r) {
  const translations = {};
  r.keys().forEach((key) => {
    const language = key.split('/')[1];
    const namespace = key.split('/')[2].replace('.json', '');
    translations[language] = translations[language] || {};
    translations[language][namespace] = r(key);
  });
  return translations;
}

const resources = importAll(require.context('./locales', true, /\.\/([a-z]{2})\/(.*).json$/));

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
  

export default i18n;
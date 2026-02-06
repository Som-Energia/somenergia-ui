import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { somenergiaLibLocaleResources, registerSomEnergiaI18n } from '../lib/i18n';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    resources: somenergiaLibLocaleResources,
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      lookupQuerystring: 'lang',
    },
  });

registerSomEnergiaI18n(i18n);

export default i18n;

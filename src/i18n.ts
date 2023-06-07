// eslint-disable-next-line import/no-named-as-default
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		fallbackLng: process.env.REACT_APP_FALLBACK_LNG || 'uk',
		interpolation: {
			escapeValue: false,
		},
		ns: ['container-frontend'],
		detection: {
			order: ['querystring', 'cookie', 'localStorage'],
		},
		react: {
			useSuspense: true,
			bindI18n: 'languageChanged',
		},
		backend: {
			projectId: process.env.REACT_APP_LOCIZE_PROJECT_ID,
			version: process.env.REACT_APP_LOCIZE_VERSION,
		},
	});

export default i18n;

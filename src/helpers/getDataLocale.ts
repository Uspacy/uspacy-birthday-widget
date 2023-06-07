export const getDataLocale = async (code) => {
	switch (code) {
		case 'en-US': {
			const { default: locale } = await import('date-fns/locale/en-US');
			return locale;
		}
		case 'uk': {
			const { default: locale } = await import('date-fns/locale/uk');
			return locale;
		}
		case 'pt-BR': {
			const { default: locale } = await import('date-fns/locale/pt-BR');
			return locale;
		}
		case 'pl': {
			const { default: locale } = await import('date-fns/locale/pl');
			return locale;
		}
		default: {
			const { default: locale } = await import('date-fns/locale/en-US');
			return locale;
		}
	}
};

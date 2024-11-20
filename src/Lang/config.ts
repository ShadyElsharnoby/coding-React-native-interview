import { I18n } from 'i18n-js';
import { useEffect } from 'react';
import arTranslation from './data/ar.json';
import enTranslation from './data/en.json';

const i18n = new I18n({
    en: enTranslation,
    ar: arTranslation,
});

export const useLangConfigHook = () => {
    const appLang = 'en';

    useEffect(() => {
        console.log(`🚀 ~CONFIG:~`, appLang);

        if (appLang) {
            i18n.locale = appLang;
        }
    }, [appLang]);
};

export default i18n;

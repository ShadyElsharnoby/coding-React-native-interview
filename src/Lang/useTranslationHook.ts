import i18n from './config';

const useTranslationHook = () => {
    const t = (key: string): string => {
        return i18n.t(key);
    };

    return {
        t,
    };
};

export default useTranslationHook;

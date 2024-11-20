export type modeType = 'light' | 'dark';

export type generateThemeType = {
    isRTL: boolean;
    setRTL: React.Dispatch<React.SetStateAction<boolean>>;
    mode: modeType;
    setMode: React.Dispatch<React.SetStateAction<modeType>>;
};

import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import { MODE_COLORS } from './Colors';
import { TEXT_STYLE, reverseStyle } from './Text';

import { generateThemeType, modeType } from './ThemeTypes.dto';

const generateTheme = ({ isRTL, setRTL, mode, setMode }: generateThemeType) => {
    return {
        colors: MODE_COLORS(mode),
        textStyle: TEXT_STYLE(isRTL),
        isRTL,
        setRTL,
        mode,
        setMode,
        reverse: reverseStyle(isRTL),
    };
};
export const ThemeContext = createContext<ReturnType<typeof generateTheme>>(
    generateTheme({
        isRTL: false,
        setRTL: () => {},
        mode: 'dark',
        setMode: () => {},
    }),
);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<modeType>('dark');
    const [isRTL, setRTL] = useState<boolean>(I18nManager.isRTL);
    const [theme, setTheme] = useState(
        generateTheme({ isRTL, setRTL, mode, setMode }),
    );

    useEffect(() => {
        setTheme(generateTheme({ isRTL, setRTL, mode, setMode }));
    }, [isRTL, mode]);
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;

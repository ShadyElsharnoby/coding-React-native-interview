import { modeType } from './ThemeTypes.dto';

export const COLORS = {
    primary: {
        white: {
            w100: '#fff',
        },
        black: {
            b100: '#000',
        },
        blue: {
            b100: 'rgb(21,22,32)',
            b95: 'rgba(21,22,32,.95)',
            b70: 'rgb(63,66,80)',
            b50: 'rgba(29,34,42,.5)',
        },
        blueSky: {
            b100: '#007AFF',
        },
        yellow: {
            y70: 'rgb(238,202,99)',
        },
        red: {
            r100: 'rgb(185,75,63)',
            r70: 'rgb(206,100,87)',
        },
    },
};
const darkColors = {
    primary: COLORS.primary.blue.b100,
    background100: COLORS.primary.blue.b100,
    background70: COLORS.primary.blue.b70,
    text: COLORS.primary.white.w100,
};
const lightColors = {
    primary: COLORS.primary.white.w100,
    background100: COLORS.primary.blue.b100,
    background70: COLORS.primary.blue.b70,
    text: COLORS.primary.black.b100,
};
export const MODE_COLORS = (mode: modeType) => {
    return mode === 'dark' ? darkColors : lightColors;
};

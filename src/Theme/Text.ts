const alignStart = (isRTL: boolean) => {
    if (isRTL) {
        // for any customization
    }
    return {
        textAlign: 'left',
    };
};

export const TEXT_STYLE = (isRTL: boolean) => {
    if (isRTL) {
        // for any customization
    }
    return {
        align: alignStart,
    };
};

export const reverseStyle = (isRTL: boolean) => ({
    transform: [{ scaleX: isRTL ? -1 : 1 }],
});

import { COLORS } from '@/src/Theme/Colors';
import FONTS from '@/src/Theme/Fonts';
import { SH, SW } from '@/src/utils/Scale';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: SH(12),
        paddingVertical: SH(12),
        borderRadius: SH(11),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: FONTS.Medium,
        fontSize: SH(16),
        color: COLORS.primary.white.w100,
    },
    icon: {
        width: SH(25),
        height: SW(25),
        marginEnd: SW(5),
    },
});

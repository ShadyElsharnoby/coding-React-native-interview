import { COLORS } from '@/src/Theme/Colors';
import FONTS from '@/src/Theme/Fonts';
import { SF, SH } from '@/src/utils/Scale';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: SH(16),
        marginTop: SH(35),
    },
    title: {
        color: COLORS.primary.white.w100,
        fontFamily: FONTS.Bold,
        fontSize: SF(16),
    },
    seeMore: {
        color: COLORS.primary.white.w100,
        fontFamily: FONTS.Regular,
        fontSize: SF(11),
    },
});

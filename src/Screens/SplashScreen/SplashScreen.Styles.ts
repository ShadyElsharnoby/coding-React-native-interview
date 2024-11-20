import { COLORS } from '@/src/Theme/Colors';
import FONTS from '@/src/Theme/Fonts';
import { SF, SH } from '@/src/utils/Scale';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary.blue.b95,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        marginTop: -SH(130),
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: FONTS.Bold,
        fontSize: SF(30),
        color: COLORS.primary.white.w100,
    },
});

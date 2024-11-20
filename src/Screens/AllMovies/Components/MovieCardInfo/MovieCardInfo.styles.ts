import { COLORS } from '@/src/Theme/Colors';
import FONTS from '@/src/Theme/Fonts';
import { SH, SW } from '@/src/utils/Scale';
import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    imageContainer: {
        height: SH(230),
        width: '100%',
        backgroundColor: 'transparent',
        borderRadius: SW(8),
        padding: SW(6),
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: SH(10),
    },
    image: {
        width: '100%',
        height: '80%',
        borderRadius: Platform.select({
            ios: SW(8),
            android: SW(18),
        }),
    },
    labelContainer: {
        backgroundColor: 'transparent',
        width: '100%',
        flexDirection: 'row',
        height: SH(50),
        alignItems: 'center',
        paddingEnd: SW(8),
    },
    type: {
        fontFamily: FONTS.Bold,
        fontSize: SH(12),
        color: COLORS.primary.yellow.y70,
        textAlign: 'center',
    },
    largerDot: {
        fontSize: SH(20),
        color: COLORS.primary.yellow.y70,
        marginEnd: SW(4),
    },
    heartContainer: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        alignSelf: 'flex-end',
        width: SW(40),
        height: SW(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
});

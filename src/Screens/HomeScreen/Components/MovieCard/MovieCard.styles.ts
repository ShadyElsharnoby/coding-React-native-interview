import { COLORS } from '@/src/Theme/Colors';
import { SH, SW } from '@/src/utils/Scale';
import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    imageContainer: {
        height: SH(225),
        width: SW(150),
        backgroundColor: COLORS.primary.black.b100,
        borderRadius: SW(8),
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
        marginStart: SW(16),
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: Platform.select({
            ios: SW(8),
            android: SW(18),
        }),
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

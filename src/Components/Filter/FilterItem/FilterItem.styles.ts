import { StyleSheet } from 'react-native';
import { SH, SW, SF } from '@/src/utils/Scale';
import { COLORS } from '@/src/Theme/Colors';

export default StyleSheet.create({
    container: {
        borderRadius: SW(20),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: SW(3),
        paddingVertical: SH(5),
        minWidth: SW(100),
    },
    item: {
        borderRadius: SW(20),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: SH(30),
        borderWidth: SW(0.5),
        paddingHorizontal: SW(10),
    },
    itemActive: {
        backgroundColor: COLORS.primary.blue.b100,
    },
    text: {
        fontSize: SF(12),
        color: COLORS.primary.blue.b100,
    },
    textActive: {
        color: COLORS.primary.white.w100,
    },
});

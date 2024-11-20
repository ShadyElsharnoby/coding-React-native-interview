import { COLORS } from '@/src/Theme/Colors';
import { SH, SW } from '@/src/utils/Scale';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: SH(18),
        paddingVertical: SH(12),
        borderRadius: SH(11),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        paddingTop: '15%',
        width: '100%',
    },
    iconContainer: {
        width: SW(60),
        height: SW(60),
        borderRadius: SW(15),
        backgroundColor: COLORS.primary.blue.b50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

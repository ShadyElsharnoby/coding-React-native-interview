import { COLORS } from '@/src/Theme/Colors';
import FONTS from '@/src/Theme/Fonts';
import { SF, SH, SW } from '@/src/utils/Scale';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '60%',
        width: '100%',
        backgroundColor: COLORS.primary.black.b100,
        justifyContent: 'flex-end',
    },
    imageContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.primary.black.b100,
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    title: {
        color: COLORS.primary.white.w100,
        fontFamily: FONTS.Bold,
        fontSize: SF(34),
        textAlign: 'center',
        width: '80%',
        alignSelf: 'center',
        marginBottom: SH(8),
    },
    movieInfo: {
        color: COLORS.primary.yellow.y70,
        fontFamily: FONTS.Regular,
        fontSize: SF(11),
        maxWidth: '90%',
    },
    contentContainer: {
        alignItems: 'center',
        marginBottom: SH(35),
    },
    mainContent: {},
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: SH(16),
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: SW(15),
        marginTop: SH(25),
    },
    button: {
        flex: 1,
    },
});

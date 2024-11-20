import { StyleSheet } from 'react-native';
import { SH, SW, SF } from '@/src/utils/Scale';
import { COLORS } from '@/src/Theme/Colors';

export default StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: COLORS.primary.blue.b100,
        borderRadius: SW(80),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: SW(150),
        height: SH(50),
        gap: SW(10),
        boxShadow: '0px 0px 4px rgba(255, 255, 255, .5)',
    },
    buttonText: {
        color: 'white',
        fontSize: SF(20),
    },

    contentContainer: {
        // Add your content container styles here
    },
    footerContainer: {
        alignSelf: 'center',
        padding: SW(10),
    },
    footerText: {
        color: COLORS.primary.blueSky.b100,
        fontSize: SF(16),
    },
});

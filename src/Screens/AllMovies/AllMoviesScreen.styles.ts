import { COLORS } from '@/src/Theme/Colors';
import { SH, SW } from '@/src/utils/Scale';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary.blue.b95,
    },
    moviesListContainer: {
        width: '100%',
        flex: 1,
    },
    contentContainerStyle: {
        paddingHorizontal: SW(6),
    },
    loadingContainer: {
        paddingVertical: SH(20),
    },
    moreButton: {
        width: '60%',
        alignSelf: 'center',
    },
});

import { COLORS } from '@/src/Theme/Colors';
import { SW } from '@/src/utils/Scale';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.primary.blue.b100 },
    moviesListContainer: {
        width: '100%',
        paddingVertical: SW(16),
    },
    contentScrollView: {
        flexGrow: 1,
    },
});

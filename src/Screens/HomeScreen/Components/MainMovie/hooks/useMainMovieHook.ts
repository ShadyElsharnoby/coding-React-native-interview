import { SVG } from '@/src/Constants/Svgs';
import useTranslationHook from '@/src/Lang/useTranslationHook';
import { COLORS } from '@/src/Theme/Colors';
import { Alert } from 'react-native';

export const useMainMovieHook = () => {
    const { t } = useTranslationHook();
    const buttons = [
        {
            id: 1,
            buttonsTitle: t('info'),
            onPress: () => Alert.alert('See Info'),
            Icon: SVG.Info,
        },
        {
            id: 2,
            buttonsTitle: t('play'),
            onPress: () => Alert.alert('Play Video'),
            Icon: SVG.Play,
        },
        {
            id: 3,
            buttonsTitle: t('save'),
            onPress: () => Alert.alert('Do Action'),
            colors: [COLORS.primary.red.r70, COLORS.primary.red.r100],
        },
    ];
    return { buttons };
};

import useTranslationHook from '@/src/Lang/useTranslationHook';
import React, { FC } from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import styles from './SectionHeader.styles';
type props = {
    title: string;
    onPress: TouchableOpacityProps['onPress'];
};
const SectionHeader: FC<props> = ({ title, onPress }: props) => {
    const { t } = useTranslationHook();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.seeMore}>{t('seeMore')}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default SectionHeader;

import { Text, TouchableOpacity, View } from 'react-native';
import styles from './FilterItem.styles';
import useFilterItemHook from './hooks/useFilterItemHook';
import { genreI } from '@/src/Types/Movies.dto';
import React from 'react';

const FilterItem = ({ id, name }: genreI) => {
    const { isSelected, onPress } = useFilterItemHook(id);

    return (
        <View
            key={id}
            style={styles.container}
        >
            <TouchableOpacity
                style={[styles.item, isSelected && styles.itemActive]}
                onPress={onPress}
            >
                <Text style={[styles.text, isSelected && styles.textActive]}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default React.memo(FilterItem);

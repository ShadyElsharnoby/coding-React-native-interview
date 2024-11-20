import useMoviesStateHook from '@/src/Stores/hooks/useMoviesStateHook';
import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useEffect } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import styles from './FilterHorizontalList.styles';
import { View } from 'react-native';
const FilterHorizontalList = () => {
    const { selectedGenres, genresKeys, onResetSelectedGenres } =
        useMoviesStateHook((state) => ({
            selectedGenres: state.selectedGenres,
            genresKeys: state.genresKeys,
            onResetSelectedGenres: state.onResetSelectedGenres,
        }));

    useEffect(() => {
        onResetSelectedGenres();

        return () => {
            onResetSelectedGenres();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const keyExtractor = (item) => item;
    // callbacks

    // render
    const renderItem = useCallback(
        ({ item }) => {
            return (
                <FilterItem
                    id={item}
                    name={genresKeys[item]}
                />
            );
        },
        [genresKeys],
    );
    if (selectedGenres?.length <= 0) {
        return;
    }
    return (
        <View style={styles.container}>
            <FlashList
                data={selectedGenres}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                estimatedItemSize={35}
                contentContainerStyle={styles.contentContainer}
                horizontal
            />
        </View>
    );
};

export default React.memo(FilterHorizontalList);

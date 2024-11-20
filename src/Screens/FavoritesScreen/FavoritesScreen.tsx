import useUserStateHook from '@/src/Stores/hooks/useUserStateHook';
import { COLORS } from '@/src/Theme/Colors';
import type { favoriteI } from '@/src/Types/Movies.dto';
import { FlashList } from '@shopify/flash-list';
import React, { FC, Suspense, useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { MovieCardInfo } from '../AllMovies';
import styles from './FavoritesScreen.style';

const FavoritesScreen: FC = () => {
    const { favorites } = useUserStateHook((state) => ({
        favorites: state.favorites,
    }));

    const renderItem = useCallback(
        ({ item }: { item: favoriteI }) => (
            <MovieCardInfo
                path={item.poster_path}
                genre_ids={item.genre_ids}
                id={item.id}
            />
        ),
        [],
    );
    const keyExtractor = useCallback(
        (item: favoriteI) => item.id.toString(),
        [],
    );
    return (
        <Suspense fallback={null}>
            <SafeAreaView
                style={{ flex: 1, backgroundColor: COLORS.primary.blue.b100 }}
            >
                <FlashList
                    showsHorizontalScrollIndicator={false}
                    data={favorites}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    estimatedItemSize={200}
                    numColumns={4}
                    contentContainerStyle={styles.contentContainerStyle}
                />
            </SafeAreaView>
        </Suspense>
    );
};

export default React.memo(FavoritesScreen);

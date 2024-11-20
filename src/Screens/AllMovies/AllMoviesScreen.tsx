import { GradientButton } from '@/src/Components';
import Filter from '@/src/Components/Filter/Filter';
import FilterHorizontalList from '@/src/Components/Filter/FilterHorizontalList/FilterHorizontalList';
import { COLORS } from '@/src/Theme/Colors';
import { MovieI } from '@/src/Types/Movies.dto';
import { FlashList } from '@shopify/flash-list';
import React, { FC, Suspense, useCallback } from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    SafeAreaView,
    View,
} from 'react-native';
import { MovieCardInfo } from './';
import styles from './AllMoviesScreen.styles';
import { useAllMoviesHook } from './hooks/useAllMoviesHook';

const AllMovies: FC = () => {
    const { movies, seeMoreMovies, isLoading, onRefresh, isFailed } =
        useAllMoviesHook();

    const renderFooter = () => {
        if (isFailed) {
            return (
                <GradientButton
                    text="Show Movies"
                    onPress={seeMoreMovies}
                    containerStyle={styles.moreButton}
                />
            );
        }

        if (isLoading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator
                        animating
                        size="large"
                    />
                </View>
            );
        }
    };
    const renderItem = useCallback(
        ({ item }: { item: MovieI }) => (
            <MovieCardInfo
                path={item.poster_path}
                genre_ids={item.genre_ids}
                id={item.id}
            />
        ),
        [],
    );
    const keyExtractor = useCallback((item: MovieI) => item.id.toString(), []);
    return (
        <Suspense fallback={null}>
            <SafeAreaView
                style={{ flex: 1, backgroundColor: COLORS.primary.blue.b100 }}
            >
                <FilterHorizontalList />
                <FlashList
                    showsHorizontalScrollIndicator={false}
                    data={movies}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={onRefresh}
                            tintColor={COLORS.primary.white.w100}
                        />
                    }
                    renderItem={renderItem}
                    estimatedItemSize={200}
                    numColumns={4}
                    contentContainerStyle={styles.contentContainerStyle}
                    onEndReached={seeMoreMovies}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter}
                    keyboardDismissMode="on-drag"
                    contentInsetAdjustmentBehavior="automatic"
                    keyExtractor={keyExtractor}
                />
                <Filter />
            </SafeAreaView>
        </Suspense>
    );
};

export default React.memo(AllMovies);

import MainHeader from '@/src/Components/Headers/MainHeader/MainHeader';
import useTranslationHook from '@/src/Lang/useTranslationHook';
import { COLORS } from '@/src/Theme/Colors';
import type { MovieI } from '@/src/Types/Movies.dto';
import { FlashList } from '@shopify/flash-list';
import React, { FC, Suspense, useCallback } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { MainMovie, MovieCard, SectionHeader } from './';
import styles from './HomeScreen.styles';
import { useHomeScreenHook } from './hooks/useHomeScreenHook';

const HomeScreen: FC = () => {
    const { onSeeMorePress, onMoviePress, isLoading, onRefresh, data } =
        useHomeScreenHook();
    const { t } = useTranslationHook();

    const renderItem = useCallback(
        ({ item }: { item: MovieI }) => (
            <MovieCard
                path={item.poster_path}
                onPress={onMoviePress}
                id={item.id}
                genre_ids={item.genre_ids}
            />
        ),
        [onMoviePress],
    );
    const keyExtractor = useCallback((item: MovieI) => item.id.toString(), []);

    const randomNumber = Math.floor(Math.random() * 18) + 1;
    return (
        <Suspense fallback={null}>
            <View style={styles.container}>
                <MainHeader />
                <ScrollView
                    contentContainerStyle={styles.contentScrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={onRefresh}
                            tintColor={COLORS.primary.white.w100}
                        />
                    }
                >
                    {data.length > 1 && (
                        <>
                            <MainMovie
                                url={data[randomNumber].backdrop_path}
                                releaseDate={data[randomNumber].release_date}
                                ids={data[randomNumber].genre_ids}
                                time={135}
                                title={data[randomNumber].title?.slice(0, 25)}
                            />
                            <SectionHeader
                                title={t('trendingNow')}
                                onPress={onSeeMorePress}
                            />
                            <View style={styles.moviesListContainer}>
                                <FlashList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    data={data?.slice(0, 20)}
                                    renderItem={renderItem}
                                    estimatedItemSize={200}
                                    keyExtractor={keyExtractor}
                                />
                            </View>
                        </>
                    )}
                </ScrollView>
            </View>
        </Suspense>
    );
};

export default React.memo(HomeScreen);

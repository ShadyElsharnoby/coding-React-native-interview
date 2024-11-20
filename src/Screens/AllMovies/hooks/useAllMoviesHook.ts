import { useNavigationHook } from '@/src/Navigation/hooks/useNavigationHook';
import useGetFilteredMoviesHook from '@/src/Services/hooks/useGetFilteredMoviesHook';
import useMoviesStateHook from '@/src/Stores/hooks/useMoviesStateHook';
import { COLORS } from '@/src/Theme/Colors';
import { useLayoutEffect, useRef, useState } from 'react';

export const useAllMoviesHook = () => {
    const { selectedGenres } = useMoviesStateHook((state) => ({
        selectedGenres: state.selectedGenres,
    }));
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const { data, isLoading, fetchNextPage } = useGetFilteredMoviesHook({
        search: debouncedSearch,
        genreIds: [...selectedGenres],
    });
    const navigation = useNavigationHook();
    const searchRef = useRef('');

    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const movies = data?.pages.flatMap((page) => page?.results) || [];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: 'All Movies',
            headerBackTitle: 'Home',
            headerStyle: {
                backgroundColor: COLORS.primary.blue.b100,
            },
            headerTitleStyle: {
                color: COLORS.primary.white.w100,
            },
            headerTintColor: COLORS.primary.white.w100,
            headerBackButtonDisplayMode: 'default',
            headerSearchBarOptions: {
                placeholder: 'Search for movies',
                tintColor: COLORS.primary.white.w100,
                barTintColor: COLORS.primary.white.w100,
                onChangeText(e) {
                    searchRef.current = e.nativeEvent.text;

                    if (typingTimeoutRef.current) {
                        clearTimeout(typingTimeoutRef.current);
                    }

                    typingTimeoutRef.current = setTimeout(() => {
                        setDebouncedSearch(searchRef.current);
                    }, 500);
                },
            },
        });
    }, [navigation]);

    return {
        movies,
        seeMoreMovies: isLoading ? () => {} : fetchNextPage,
        isLoading,
        onRefresh: () => {},
        isFailed: false,
    };
};

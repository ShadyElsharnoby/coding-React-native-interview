import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '@/src/Navigation/Stacks/MainStack/MainStackParams.dto';
import { SCREEN_KEYS } from '@/src/Navigation/ScreenKeys';
import { useGetGenresHook } from '@/src/Services/hooks/useGetGenresHook';
import { useGetMoviesHook } from '@/src/Services/hooks/useGetMoviesHook';
import { useCallback } from 'react';
import { Alert } from 'react-native';
import { PageI } from '@/src/Types/Movies.dto';

export const useHomeScreenHook = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParams>>();

    const { data: res, isLoading, refetch } = useGetMoviesHook();

    const movies = res?.pages?.flatMap((page: PageI) => page.results) || [];
    // // states

    // onSeeMorePress
    const onSeeMorePress = useCallback(() => {
        navigation.navigate(SCREEN_KEYS.AllMoviesScreen);
    }, [navigation]);

    // onMoviePress
    const onMoviePress = useCallback(() => Alert.alert('Go To Details'), []);

    // onRefresh
    const onRefresh = useCallback(() => {
        refetch();
    }, [refetch]);

    useGetGenresHook();

    return { onSeeMorePress, onMoviePress, isLoading, onRefresh, data: movies };
};

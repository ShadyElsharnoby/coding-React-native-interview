import { lazy } from 'react';
import SplashScreen from '@/src/Screens/SplashScreen/SplashScreen';
import { SCREEN_KEYS } from './ScreenKeys';

const AllMoviesScreen = lazy(
    () => import('@/src/Screens/AllMovies/AllMoviesScreen'),
);
const HomeScreen = lazy(() => import('@/src/Screens/HomeScreen/HomeScreen'));

const FavoritesScreen = lazy(
    () => import('@/src/Screens/FavoritesScreen/FavoritesScreen'),
);

type SCREEN_DATA = {
    name: string;
    screen: React.ComponentType<any>;
};
export const SCREENS = (key: string) => {
    let data: SCREEN_DATA = { name: key } as SCREEN_DATA;
    switch (key) {
        case SCREEN_KEYS.HomeScreen:
            data.screen = HomeScreen;
            break;
        case SCREEN_KEYS.AllMoviesScreen:
            data.screen = AllMoviesScreen;
            break;
        case SCREEN_KEYS.SplashScreen:
            data.screen = SplashScreen;
            break;
        case SCREEN_KEYS.FavoritesScreen:
            data.screen = FavoritesScreen;
            break;
        default:
            break;
    }
    return data;
};

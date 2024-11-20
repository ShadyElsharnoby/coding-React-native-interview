import { DrawerParams } from '../../Drawer/DrawerParams.dto';
import { NavigatorScreenParams } from '@react-navigation/native';
import { SCREEN_KEYS } from '../../ScreenKeys';

export type MainStackParams = {
    [SCREEN_KEYS.SplashScreen]: undefined;
    Drawer: NavigatorScreenParams<DrawerParams>;
    [SCREEN_KEYS.AllMoviesScreen]: undefined;
};

import { SCREENS } from '@/src/Navigation/Screens';
import { createStackScreen } from '@/src/Navigation/helpers';
import { COLORS } from '@/src/Theme/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DrawerNavigator from '../../Drawer/Drawer';
import type { StackScreenI } from '../../Types/Screen.dto';
import type { MainStackParams } from './MainStackParams.dto';
import { SCREEN_KEYS } from '../../ScreenKeys';
const Stack = createNativeStackNavigator<MainStackParams>();

const stackScreens: StackScreenI[] = [
    { screen: SCREENS(SCREEN_KEYS.SplashScreen) },
    {
        screen: {
            name: 'Drawer',
            screen: DrawerNavigator,
        },
    },
    {
        screen: SCREENS(SCREEN_KEYS.AllMoviesScreen),
        options: {
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
            },
        },
    },
];

function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: false,
                headerShown: false,
            }}
        >
            {stackScreens.map(({ screen, options }) =>
                createStackScreen({
                    Stack,
                    screen: screen.name,
                    component: screen.screen,
                    options,
                }),
            )}
        </Stack.Navigator>
    );
}

export default MainStack;

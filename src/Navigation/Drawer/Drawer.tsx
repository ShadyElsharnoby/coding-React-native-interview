import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SCREENS } from '@/src/Navigation/Screens';
import { createDrawerScreen } from '@/src/Navigation/helpers';
import type { DrawerScreenI } from '../Types/Screen.dto';
import { COLORS } from '@/src/Theme/Colors';
import { SCREEN_KEYS } from '../ScreenKeys';

const Drawer = createDrawerNavigator();

const drawerScreens: DrawerScreenI[] = [
    { screen: SCREENS(SCREEN_KEYS.HomeScreen) },
    {
        screen: SCREENS(SCREEN_KEYS.FavoritesScreen),
        options: {
            headerShown: true,
            title: 'Favorites',
            headerStyle: {
                backgroundColor: COLORS.primary.blue.b100,
            },
            headerTitleStyle: {
                color: COLORS.primary.white.w100,
            },
            headerTintColor: COLORS.primary.white.w100,
        },
    },
];

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: COLORS.primary.blue.b100,
                    width: '50%',
                },
                drawerLabelStyle: {
                    color: 'white',
                },
            }}
        >
            {drawerScreens.map(({ screen, options }) =>
                createDrawerScreen({
                    Drawer: Drawer,
                    screen: screen.name,
                    component: screen.screen,
                    options,
                }),
            )}
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

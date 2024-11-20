import React from 'react';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerNavigationOptions,
} from '@react-navigation/drawer';

type CreateStackScreenParams<Params extends ParamListBase> = {
    Stack: ReturnType<typeof createNativeStackNavigator<Params>>;
    screen: string;
    component: React.ComponentType<any>;
    options?: NativeStackNavigationOptions;
};

type CreateDrawerScreenParams<Params extends ParamListBase> = {
    Drawer: ReturnType<typeof createDrawerNavigator<Params>>;
    screen: string;
    component: React.ComponentType<any>;
    options?: DrawerNavigationOptions;
};

export const createStackScreen = <Params extends ParamListBase>({
    Stack,
    screen,
    component,
    options,
}: CreateStackScreenParams<Params>) => {
    return (
        <Stack.Screen
            key={screen}
            name={screen}
            component={component}
            options={options}
        />
    );
};

export const createDrawerScreen = <Params extends ParamListBase>({
    Drawer,
    screen,
    component,
    options,
}: CreateDrawerScreenParams<Params>) => {
    return (
        <Drawer.Screen
            key={screen}
            name={screen}
            component={component}
            options={options}
        />
    );
};

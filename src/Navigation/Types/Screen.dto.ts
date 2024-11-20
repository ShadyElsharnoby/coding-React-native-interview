import type { DrawerNavigationOptions } from '@react-navigation/drawer';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type StackScreenI = {
    screen: {
        name: string;
        screen: React.ComponentType<any>;
    };
    options?: NativeStackNavigationOptions;
};

export type DrawerScreenI = {
    screen: {
        name: string;
        screen: React.ComponentType<any>;
    };
    options?: DrawerNavigationOptions;
};

import { useNavigationHook } from '@/src/Navigation/hooks/useNavigationHook';
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import {
    Easing,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated'; // Updated import

export const useSplashScreenHook = () => {
    const navigation = useNavigationHook();

    const opacity = useSharedValue<number>(0);
    const scale = useSharedValue<number>(0.8);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            opacity: opacity.value,
        };
    });
    useEffect(() => {
        // setBackgroundColor
        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('transparent');
        }
        // // call initial data

        opacity.value = withTiming(1, {
            duration: 2000,
            easing: Easing.linear,
        });

        scale.value = withTiming(
            1,
            {
                duration: 2000,
                easing: Easing.linear,
            },
            () => {
                runOnJS(navigation.navigate)({
                    name: 'Drawer',
                    params: { screen: 'HomeScreen' },
                });
            },
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { animatedStyle };
};

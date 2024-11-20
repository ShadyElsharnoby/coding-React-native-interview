import { SVG } from '@/src/Constants/Svgs';
import { useNavigationHook } from '@/src/Navigation/hooks/useNavigationHook';
import { useCallback } from 'react';
import { Alert } from 'react-native';

export const useMainHeaderHook = () => {
    const navigation = useNavigationHook();

    const openMenu = useCallback(() => {
        navigation.openDrawer();
    }, [navigation]);

    const buttons = [
        {
            id: 1,
            Icon: SVG.Menu,
            onPress: openMenu,
            size: 40,
        },
        {
            id: 2,
            Icon: SVG.Search,
            onPress: () => Alert.alert('Go To Search'),
            size: 30,
        },
    ];

    return { buttons };
};

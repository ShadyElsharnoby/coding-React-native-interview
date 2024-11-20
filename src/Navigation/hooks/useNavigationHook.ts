import type { DrawerNavigationProp } from '@react-navigation/drawer';
import {
    CompositeNavigationProp,
    useNavigation,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { DrawerParams } from '../Drawer/DrawerParams.dto'; // Adjust the import path as needed
import type { MainStackParams } from '../Stacks/MainStack/MainStackParams.dto';

type CombinedNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParams, 'Drawer'>,
    DrawerNavigationProp<DrawerParams>
>;

export const useNavigationHook = () => {
    return useNavigation<CombinedNavigationProp>();
};

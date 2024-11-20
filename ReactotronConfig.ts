import type { ReactotronReactNative } from 'reactotron-react-native';
import Reactotron from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import { storage } from '@/src/Stores/Storage/Storage';

Reactotron.configure({ name: 'React Native App' })
    .useReactNative()
    .use(mmkvPlugin<ReactotronReactNative>({ storage }))
    .connect();

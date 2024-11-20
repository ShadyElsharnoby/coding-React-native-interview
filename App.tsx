import { focusManager } from '@tanstack/react-query';
import React from 'react';
import { AppStateStatus, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/Navigation';
import { PersistQueryProvider } from './src/Providers/PersistQueryClientProvider';
import { useAppState } from './src/hooks/useAppState';
import { useOnlineManager } from './src/hooks/useOnlineManager';

if (__DEV__) {
    require('./ReactotronConfig');
}

function onAppStateChange(status: AppStateStatus) {
    // React Query already supports in web browser refetch on window focus by default
    if (Platform.OS !== 'web') {
        focusManager.setFocused(status === 'active');
    }
}
export default function App() {
    useOnlineManager();

    useAppState(onAppStateChange);
    return (
        <PersistQueryProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Navigation />
            </GestureHandlerRootView>
        </PersistQueryProvider>
    );
}

import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React from 'react';
import { clientPersister } from './ApiStorage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});

interface PersistQueryProviderProps {
    children: React.ReactNode;
}

export const PersistQueryProvider: React.FC<PersistQueryProviderProps> = ({
    children,
}) => (
    <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: clientPersister }}
        onSuccess={() => {
            queryClient.resumePausedMutations();
        }}
    >
        {children}
    </PersistQueryClientProvider>
);

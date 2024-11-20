import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createUserSlice, UserSliceI } from '../Slices/UserSlice';
import AppStorage from '../Storage/Storage';

export const useUserStore = create<UserSliceI>()(
    persist(
        (set, get, api) => ({
            ...createUserSlice(set, get, api),
        }),
        {
            name: 'bound-store-User',
            storage: createJSONStorage(() => AppStorage),
        },
    ),
);

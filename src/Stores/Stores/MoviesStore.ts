import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createMoviesSlice, MoviesSliceI } from '../Slices/MoviesSlice';
import AppStorage from '../Storage/Storage';

export const useMoviesStore = create<MoviesSliceI>()(
    persist(
        (set, get, api) => ({
            ...createMoviesSlice(set, get, api),
        }),
        {
            name: 'bound-store-Movies',
            storage: createJSONStorage(() => AppStorage),
        },
    ),
);

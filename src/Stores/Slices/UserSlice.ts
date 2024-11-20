import type { favoriteI } from '@/src/Types/Movies.dto';
import { StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface UserSliceI {
    favorites: favoriteI[];
    onAddToFavorites: (movie: favoriteI) => void;
}

export const createUserSlice: StateCreator<
    UserSliceI,
    [],
    [['zustand/immer', never]]
> = immer((set) => ({
    favorites: [],
    onAddToFavorites: (movie: favoriteI) =>
        set((state) => {
            const isLiked = state.favorites.find((f) => f.id === movie.id);

            if (isLiked) {
                state.favorites = state.favorites.filter(
                    (f) => f.id !== movie.id,
                );
            } else {
                state.favorites.push(movie);
            }
        }),
}));

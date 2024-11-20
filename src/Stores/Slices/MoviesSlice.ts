import type { genreI } from '@/src/Types/Movies.dto';
import { StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface MoviesSliceI {
    genres: genreI[] | [];
    selectedGenres: number[];
    genresKeys: { [key: number]: string };
    onSelectGenre: (id: number) => void;
    saveAllGenres: (genres: genreI[]) => void;
    onResetSelectedGenres: () => void;
}

export const createMoviesSlice: StateCreator<
    MoviesSliceI,
    [],
    [['zustand/immer', never]]
> = immer((set) => ({
    genres: [],
    selectedGenres: [] as number[],
    genresKeys: {},
    saveAllGenres: (genres) => {
        set((state) => {
            state.genres = genres;
            state.genresKeys = genres.reduce(
                (acc: { [key: number]: string }, genre) => {
                    acc[genre.id] = genre.name;
                    return acc;
                },
                {},
            );
        });
    },
    onSelectGenre: (id) =>
        set((state) => {
            if (state.selectedGenres.includes(id)) {
                state.selectedGenres = state.selectedGenres.filter(
                    (v) => v !== id,
                );
            } else {
                state.selectedGenres.push(id);
            }
        }),

    onResetSelectedGenres: () => {
        set((state) => {
            state.selectedGenres = [];
        });
    },
}));

import useMoviesStateHook from '@/src/Stores/hooks/useMoviesStateHook';
import useUserStateHook from '@/src/Stores/hooks/useUserStateHook';
import { useCallback } from 'react';

export const useMovieHook = ({
    path,
    genre_ids,
    id,
}: {
    path: string;
    genre_ids: number[];
    id: number;
}) => {
    const { genresKeys } = useMoviesStateHook((state) => ({
        genresKeys: state.genresKeys,
    }));

    // Map genre_ids to genre names
    const genres: string = genre_ids
        .map((i: number) => genresKeys[i])
        .join(', ');

    const { onAddToFavorites, isLiked } = useUserStateHook((state) => ({
        isLiked: state.favorites.find((f) => f.id === id),
        onAddToFavorites: state.onAddToFavorites,
    }));

    const onFavorites = useCallback(
        () =>
            onAddToFavorites({
                poster_path: path,
                genre_ids: genre_ids,
                id,
            }),
        [genre_ids, id, onAddToFavorites, path],
    );
    return {
        genres,
        onFavorites,
        isLiked,
    };
};

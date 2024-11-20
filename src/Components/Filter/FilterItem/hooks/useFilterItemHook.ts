import useMoviesStateHook from '@/src/Stores/hooks/useMoviesStateHook';
import { useCallback } from 'react';

const useFilterItemHook = (id: number) => {
    const { onSelectGenre, selectedGenres, isSelected } = useMoviesStateHook(
        (state) => ({
            onSelectGenre: state.onSelectGenre,
            selectedGenres: state.selectedGenres,
            isSelected: state.selectedGenres.includes(id),
        }),
    );

    const onPress = useCallback(() => {
        onSelectGenre(id);
    }, [id, onSelectGenre]);

    return {
        selectedGenres,
        onPress,
        isSelected,
    };
};

export default useFilterItemHook;

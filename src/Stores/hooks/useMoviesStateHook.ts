import { useShallow } from 'zustand/react/shallow';
import { type MoviesSliceI } from '../Slices/MoviesSlice';
import { useMoviesStore } from '../Stores/MoviesStore';

const useMoviesStateHook = <T>(selector: (state: MoviesSliceI) => T): T => {
    return useMoviesStore(useShallow((state: MoviesSliceI) => selector(state)));
};

export default useMoviesStateHook;

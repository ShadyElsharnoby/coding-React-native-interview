import { useQuery } from '@tanstack/react-query';
import { API_KEYS } from '../apiKeys';
import { getGenresApi } from '../Geners/getGenersApi';
import useMoviesStateHook from '@/src/Stores/hooks/useMoviesStateHook';
import { useEffect } from 'react';

export const useGetGenresHook = () => {
    const { data } = useQuery({
        queryKey: [API_KEYS.getGenresApi],
        queryFn: getGenresApi,
        staleTime: 5 * 60 * 1000,
    });

    const { saveAllGenres } = useMoviesStateHook((state) => ({
        saveAllGenres: state.saveAllGenres,
        genres: state.genres,
    }));

    useEffect(() => {
        if (data?.length > 0) {
            saveAllGenres(data);
        }
    }, [data, saveAllGenres]);
};

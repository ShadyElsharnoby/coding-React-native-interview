import { MoviesResponseI } from '@/src/Types/Movies.dto';
import { useInfiniteQuery } from '@tanstack/react-query';
import { API_KEYS } from '../apiKeys';
import { getFilteredMoviesAPI } from '../Movies/getFilteredMovies';

const useGetFilteredMoviesHook = ({
    search,
    genreIds,
}: {
    search: string;
    genreIds: number[];
}) => {
    return useInfiniteQuery<MoviesResponseI, Error>({
        queryKey: [
            API_KEYS.getMoviesAPI,
            search,
            JSON.stringify(genreIds.sort()),
        ],
        initialPageParam: 1,
        queryFn: ({ pageParam = 1 }) =>
            getFilteredMoviesAPI({
                query: search,
                genreIds,
                page: pageParam,
            }),
        getNextPageParam: (lastPage) => {
            return lastPage?.page < lastPage?.total_pages
                ? lastPage?.page + 1
                : undefined;
        },
        getPreviousPageParam: (firstPage) => {
            return firstPage?.page > 1 ? firstPage?.page - 1 : undefined;
        },
        staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    });
};
export default useGetFilteredMoviesHook;

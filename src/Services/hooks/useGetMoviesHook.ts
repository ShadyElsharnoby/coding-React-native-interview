import { useInfiniteQuery } from '@tanstack/react-query';
import { getMoviesAPI, getMoviesQueryKey } from '../Movies/getAllmovies';

export const useGetMoviesHook = () => {
    return useInfiniteQuery({
        queryKey: getMoviesQueryKey,
        queryFn: getMoviesAPI,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.total_pages
                ? lastPage.page + 1
                : undefined;
        },
        getPreviousPageParam: (firstPage) => {
            return firstPage.page > 1 ? firstPage.page - 1 : undefined;
        },
        staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    });
};

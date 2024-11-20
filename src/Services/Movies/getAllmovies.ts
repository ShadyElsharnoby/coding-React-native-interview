import { Constants } from '@/src/Constants/Constants';
import { MoviesResponseI } from '@/src/Types/Movies.dto';
import { type QueryFunction } from '@tanstack/react-query';
import { API_KEYS } from '../apiKeys';

export const getMoviesQueryKey = [API_KEYS.getMoviesAPI];

export const getMoviesAPI: QueryFunction<
    MoviesResponseI,
    typeof getMoviesQueryKey,
    number
> = async ({ pageParam = 0 }): Promise<MoviesResponseI> => {
    return await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${Constants.api_key}&page=${pageParam}`,
    ).then((res) => res.json());
};

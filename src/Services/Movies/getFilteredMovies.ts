import { Constants } from '@/src/Constants/Constants';

export const getFilteredMoviesAPI = async ({
    query,
    genreIds,
    page,
}: {
    query: string;
    genreIds: number[];
    page: number;
}) => {
    try {
        const apiKey = `api_key=${Constants.api_key}`;
        const genres = genreIds?.join(',');
        const applyFilter = genreIds?.length > 0;
        const applySearch = query?.length > 0;

        let url = '';

        switch (true) {
            case applySearch && applyFilter:
                url = `${Constants.BASEURL}search/movie?${apiKey}&query=${query}&with_genres=${genres}&page=${page}`;
                break;
            case applySearch:
                url = `${Constants.BASEURL}search/movie?${apiKey}&query=${query}&page=${page}`;
                break;
            case applyFilter:
                url = `${Constants.BASEURL}discover/movie?${apiKey}&with_genres=${genres}&sort_by=popularity.desc&page=${page}`;
                break;
            default:
                url = `${Constants.BASEURL}discover/movie?sort_by=popularity.desc&${apiKey}&page=${page}`;
                break;
        }

        return await fetch(url).then((res) => res.json());
    } catch (error) {
        console.error('Error fetching filtered movies', error);
    }
};

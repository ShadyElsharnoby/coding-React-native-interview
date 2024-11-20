import { Constants } from '@/src/Constants/Constants';

export const getGenresApi = async () => {
    try {
        return await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${Constants.api_key}`,
        ).then((res) => res.json());
    } catch (error) {
        console.error('Error fetching Genres:', error);
    }
};

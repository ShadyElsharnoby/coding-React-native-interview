import useMoviesStateHook from '../Stores/hooks/useMoviesStateHook';
type useMovieGenresHookType = {
    ids: number[];
    time: number;
    releaseDate: string;
};
const useMovieGenresHook = ({
    ids,
    time,
    releaseDate,
}: useMovieGenresHookType) => {
    const { genresKeys } = useMoviesStateHook((state) => ({
        genresKeys: state.genresKeys,
    }));

    let result = '';
    const largerDot: string = '\u2022';

    // Extract release year from release_date
    const releaseYear: number = new Date(releaseDate).getFullYear();

    // Map genre_ids to genre names
    const genres: string = ids.map((i: number) => genresKeys[i]).join(', ');

    if (time) {
        // Format runtime into 'HH hours MM minutes'
        const runtimeHours: number = Math.floor(time / 60);
        const runtimeMinutes: number = time % 60;
        const formattedRuntime: string = `${runtimeHours}H ${runtimeMinutes}mm`;
        // Combine all information into desired format
        result = `${releaseYear} ${largerDot} ${genres} ${largerDot} ${formattedRuntime}`;
    } else {
        result = `${releaseYear} ${largerDot} ${genres}`;
    }
    return { result };
};
export default useMovieGenresHook;

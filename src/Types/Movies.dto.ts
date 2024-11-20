export interface MoviesResponseI {
    page: number;
    results: MovieI[];
    total_pages: number;
    total_results: number;
}

export interface MovieI {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime?: number;
}

export type genreI = {
    id: number;
    name: string;
};

export type PageI = {
    page: number;
    results: MovieI[];
    total_pages: number;
    total_results: number;
};

export type PagesResponseI = {
    pages: PageI[];
    pageParams: number[];
};

export type favoriteI = Pick<MovieI, 'poster_path' | 'id' | 'genre_ids'>;

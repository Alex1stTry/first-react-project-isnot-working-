interface IMovie {
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
}

interface IMovieList {
    page: number;
    results: IMovie[];
}

interface IMovieCard {
    adult: boolean;
    backdrop_path: string;
    belong_to_collections: boolean;
    genres: IMovieGenres[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProduction[];
    production_country: ICounty[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ILanguages[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: string;
}

interface IGenre {
    genres: IMovieGenres[]
}

interface IMovieGenres {
    id: number;
    name: string;
}

interface IProduction {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface ICounty {
    iso_3166_1: string;
    name: string;
}

interface ILanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface IGenreFilm {
    page: string
    results: IResults[]

}

interface IResults {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id:number;
    original_language:string;
    original_title:string;
    overview:string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video:boolean;
    vote_average: number;
    vote_count:number

}

export type {
    IMovie,
    IMovieList,
    IMovieCard,
    IMovieGenres,
    IProduction,
    ICounty,
    ILanguages,
    IGenre,
    IGenreFilm,
    IResults
}
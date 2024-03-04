import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {usePageQuery} from "../../hooks/usePageQuery";
import {genresService} from "../../services/genresService";
import {IGenreFilm} from "../../interfaces";
import {GenreFilm} from "./GenreFilm";
import css from "./GenreFilms.module.css";

const GenreFilms = () => {
    const {id} = useParams()
    const [genreFilms, setGenreFilms] = useState<IGenreFilm>(null)
    const {page, prevPage, nextPage} = usePageQuery()
    useEffect(() => {
        genresService.getGenre(id,page).then(({data}) => setGenreFilms(data))
    }, [id, page]);
    return (
        <div className={css.MainBlock}>
            <div className={css.GenreFilms}>
                {genreFilms && genreFilms.results.map(genreFilm => <GenreFilm genreFilm={genreFilm}/>)}
            </div>
            <div className={css.Button}>
                <button disabled={+page === 1} onClick={prevPage}>Previous Page</button>
                <h5>Current Page: {page}</h5>
                <button disabled={+page === 500} onClick={nextPage}>Next Page</button>
            </div>
        </div>

    );
};

export {GenreFilms}
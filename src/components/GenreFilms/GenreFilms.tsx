import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {genresService} from "../../services/genresService";
import {IGenreFilm} from "../../interfaces";
import {GenreFilm} from "./GenreFilm";

const GenreFilms = () => {
    const {id} = useParams()
    const [genreFilms, setGenreFilms] = useState<IGenreFilm>(null)
    useEffect(() => {
        genresService.getGenre(id).then(({data}) => setGenreFilms(data))
    }, [id]);
    console.log(genreFilms)
    return (
        <div>
            {genreFilms && genreFilms.results.map(genreFilm=><GenreFilm genreFilm={genreFilm}/>)}
        </div>
    );
};

export {GenreFilms}
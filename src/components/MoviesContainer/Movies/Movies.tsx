import React, {useEffect, useState} from 'react';
import {moviesService} from "../../../services/moviesService";
import {Movie} from "../Movie/Movie";
import {IMovie} from "../../../interfaces/movieInterface";
import css from './Movies.module.css'
import {usePageQuery} from "../../../hooks/usePageQuery";



const Movies = () => {
    const [movies, setMovies] = useState(null)
    const {page, prevPage, nextPage} = usePageQuery()
    useEffect(() => {
        moviesService.getAll(page).then(({data}) => {
            const {results} = data
            setMovies(results)
        })


    }, [page]);
    return (
        <div>
            <div className={css.movies}> {movies &&
                movies.map((movie: IMovie) => (
                    <Movie key={movie.id} movie={movie}/>
                ))}
            </div>
            <div className={css.buttons}>
                <button disabled={+page===1} onClick={prevPage}>Previous Page</button>
                <h5>Current Page: {page}</h5>
                <button disabled={+page===500} onClick={nextPage}>Next Page</button>
            </div>
        </div>
    );
};

export {Movies}
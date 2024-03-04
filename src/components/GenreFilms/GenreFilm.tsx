import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import {IResults} from "../../interfaces";
import css from './GenreFilms.module.css'


interface IProps {
    genreFilm: IResults
}

const GenreFilm: FC<IProps> = ({genreFilm}) => {
    const {id,poster_path, vote_average, title} = genreFilm
    const imgURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${imgURL}${poster_path}`
    const nav = useNavigate()
    return (
        <div className={css.LittleBlock} onClick={()=>nav(`/movies/${id}`)}>
            <img src={poster} alt={title}/>
            <div>
                <h2>
                    {<ReactStars
                        count={10}
                        size={28}
                        activeColor="#eb8634"
                        value={vote_average}
                        edit={false}
                        isHalf={true}
                    />}
                </h2>
                <h4>{title}</h4>
            </div>

        </div>
    );
};
export {GenreFilm}
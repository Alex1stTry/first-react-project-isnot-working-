import {FC} from "react";
import React from 'react';
import {useNavigate} from "react-router-dom";
import ReactStars from 'react-rating-stars-component';

import css from './Movie.module.css'
import {IMovie} from "../../../interfaces";


interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {poster_path, title, id} = movie
    const imgURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${imgURL}${poster_path}`
    const nav = useNavigate();

    return (
        <div className={css.Movie} >
            <img className={css.image} src={poster} alt={title} onClick={()=>nav(id.toString())} />
            <div>{ <ReactStars
                count={10}
                size={28}
                activeColor="#eb8634"
                value={movie.vote_average}
                edit={false}
                isHalf={true}
            />}</div>
            <h4>{title}</h4>
        </div>
    );
};
export {Movie}
import {FC} from "react";

import css from './Movie.module.css'
import {IMovie} from "../../../interfaces/movieInterface";
import {useNavigate} from "react-router-dom";


interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {backdrop_path, title, vote_average,id} = movie
    const imgURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${imgURL}${backdrop_path}`
    const nav = useNavigate();

    return (
        <div className={css.Movie} onClick={()=>nav(id.toString())}>
            <img src={poster} alt={title}/>
            <div>{vote_average}</div>
            <h4>{title}</h4>
        </div>
    );
};
export {Movie}
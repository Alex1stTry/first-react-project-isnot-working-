import React, {FC} from "react";

import {IMovieCard} from "../../interfaces";
import css from './MovieCard.module.css'
import ReactStars from "react-rating-stars-component";
import {useNavigate} from "react-router-dom";

interface IProps {
    movieCard: IMovieCard
}

const MovieCard: FC<IProps> = ({movieCard}) => {
    const {
        title,
        overview,
        vote_average,
        genres,
        poster_path,
        runtime,
        release_date
    } = movieCard
    const imgURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${imgURL}${poster_path}`
    const nav = useNavigate()

    return (
        <div className={css.MovieCard}>
            <button onClick={()=>nav(-1)}>Back</button>
            <div>
                <h1>{title}</h1></div>
            <div className={css.PosterInfo}>
                <div>
                    <img src={poster} alt="poster"/></div>
                <div>Rating:
                    {<ReactStars
                        count={10}
                        size={28}
                        activeColor="#eb8634"
                        value={vote_average}
                        edit={false}
                        isHalf={true}
                    />}
                    <div> Genres:
                        {genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
                    </div>
                    <div>Runtime:
                        {runtime}
                    </div>
                    <div>Release data:
                        {release_date}
                    </div>
                </div>
            </div>
            <div><h3>Overview:</h3>{overview}</div>
        </div>
    );
};
export {MovieCard}
import {FC} from "react";

import {IMovieCard} from "../../interfaces";
import css from './MovieCard.module.css'

interface IProps {
    movieCard: IMovieCard
}

const MovieCard: FC<IProps> = ({movieCard}) => {
    console.log(movieCard)
    // const {title, backdrop_path, genre_ids, overview, vote_average} = movieCard
    return (
        <div className={css.MovieCard}>
            <div>{}</div>
        </div>
    );
};
export {MovieCard}
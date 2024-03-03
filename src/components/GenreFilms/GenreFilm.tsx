import React, {FC} from "react";
import {IResults} from "../../interfaces";
import ReactStars from "react-rating-stars-component";

interface IProps {
    genreFilm: IResults
}

const GenreFilm: FC<IProps> = ({genreFilm}) => {
    const {poster_path, vote_average, title} = genreFilm
    const imgURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${imgURL}${poster_path}`
    return (
        <div>
            <div>
                <img src={poster} alt={title}/>
            </div>
            <div>
                <h2>{ <ReactStars
                    count={10}
                    size={28}
                    activeColor="#eb8634"
                    value={vote_average}
                    edit={false}
                    isHalf={true}
                />}</h2>
                <h1>{title}</h1>
            </div>
        </div>
    );
};
export {GenreFilm}
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {moviesService} from "../services/moviesService";
import {MovieCard} from "../components/MovieListCard/MovieCard";
import {IMovieCard} from "../interfaces";


const MovieCardPage = () => {
const {id} = useParams();
    const [movieCard, setMovie] = useState<IMovieCard>(null)
    useEffect(() => {
       moviesService.getById(+id).then(({data})=>setMovie(data))
    }, []);

    return (
        <div>
            {movieCard && <MovieCard movieCard={movieCard}/>}
        </div>
    );
};

export {MovieCardPage};
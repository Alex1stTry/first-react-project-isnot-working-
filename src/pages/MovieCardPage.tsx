import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {moviesService} from "../services/moviesService";

const MovieCardPage = () => {
const {id} = useParams();
console.log(id)
    const [movieCard, setMovieCard] = useState(null)
    useEffect(() => {
        moviesService.getById(+(id)).then(({data})=>setMovieCard(data))
    }, []);
    return (
        <div>
            MovieCardPage
        </div>
    );
};

export {MovieCardPage};
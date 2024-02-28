import {useEffect, useState} from "react";


import {moviesService} from "../../services/moviesService";
import {IMovie} from "../../interfaces/MoviesInterface";
import {Movie} from "./Movie";




const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    useEffect(() => { moviesService.getAll().then(({data})=> setMovies(data.results))

    }, []);
     return (
       <div>
           {movies.map(movie=><Movie movie={movie} key={movie.id}/>)}
       </div>
     );
};
export {Movies}
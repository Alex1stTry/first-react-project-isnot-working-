import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responseType";
import {IMovieList} from "../interfaces/movieInterface";



const moviesService = {
    getAll:(page:string):IRes<IMovieList> => apiService.get(urls.movies.base,{params:{page}}),
}

export {moviesService}
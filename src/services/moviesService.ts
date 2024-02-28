import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responseType";
import {IMovie} from "../interfaces/MoviesInterface";


const moviesService = {
    getAll:(page='1'):IRes<IMovie> => apiService.get(urls.movies.base ,{params: page})
}

export {moviesService}
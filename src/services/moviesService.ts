import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responseType";
import {IMovieCard, IMovieList} from "../interfaces";




const moviesService = {
    getAll:(page:string):IRes<IMovieList> => apiService.get(urls.movies.base,{params:{page}}),
     getById:(id:number):IRes<IMovieCard> => apiService.get(urls.movies.byId(+id))
}

export {moviesService}
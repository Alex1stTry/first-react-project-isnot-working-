import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responseType";
import { IMovieList} from "../interfaces/movieInterface";



const moviesService = {
    getAll:(page:string):IRes<IMovieList> => apiService.get(urls.base,{params:{page}}),
    getById:(id:number) => apiService.get(urls.byId(id))
}

export {moviesService}
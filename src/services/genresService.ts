import {apiService} from "./apiService";
import {IRes} from "../types/responseType";
import {IGenre} from "../interfaces";
import {urls} from "../constants/urls";

const genresService = {
    getAll: (): IRes<IGenre> => apiService.get(urls.genres.base),
    getGenre: (with_genres: string, page: string = '1') => apiService.get(urls.genres.byGenre,{params:{with_genres,page}})
}
export {genresService}
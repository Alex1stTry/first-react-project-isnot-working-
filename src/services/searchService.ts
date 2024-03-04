import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

class IData {
}

const searchService={
    getBySearch:(query:string, page:string):IRes<IData>=>apiService.get(urls.search, {params:{query, page}})
}
export {searchService}
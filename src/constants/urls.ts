const baseURL = 'https://api.themoviedb.org/3'

const movies = '/discover/movie'


const urls = {
        base: movies,
        byId:(id:number)=> `${movies}/${id}`



}
export {baseURL,urls}
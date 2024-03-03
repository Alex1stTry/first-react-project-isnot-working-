const baseURL = 'https://api.themoviedb.org/3'

const discover = '/discover'
const movies = '/movie'


const urls = {
        base: `${discover}${movies}`,
        byId:(id:number)=> `${movies}/${id}`



}
export {baseURL,urls}
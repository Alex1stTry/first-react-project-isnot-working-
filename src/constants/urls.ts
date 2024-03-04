const baseURL = 'https://api.themoviedb.org/3'

const discover = '/discover'
const movies = '/movie'
const genre = '/genre'
const list = '/list'
const search='/search'


const urls = {
    movies: {
        base: `${discover}${movies}`,
        byId: (id: number) => `${movies}/${id}`

    },
    genres:{
      base:`${genre}${movies}${list}`,
        byGenre:`${discover}${movies}`
    },
    search:`${search}${movies}`
}
export {baseURL, urls}
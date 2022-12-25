import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8cb2067df7427c657a5f093d2a8e51ae';


export function getMovies(requestType = 'trending', query = '', page = 1) {
    let path = '';
    switch (requestType) {
        case 'trending':
            path = 'trending/movie/day';
            return axios.get(`${BASE_URL}/${path}?api_key=${API_KEY}&page=${page}`);
        case 'search': 
            path = '/search/movie';
            return axios.get(`${BASE_URL}/${path}?api_key=${API_KEY}&query=${query}&page=${page}`);
        default:
            break;
    }
   
}

export async function getMovieById(id) {
    const path = `/movie/${id}`;
    return await getMovies(path);
}

export async function getGenres() {
    const path = 'genre/movie/list';
    const genres = await (await getMovies(path)).data.genres;
    localStorage.setItem('genres', JSON.stringify(genres));
}
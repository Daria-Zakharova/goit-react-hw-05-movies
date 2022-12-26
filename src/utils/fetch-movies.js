import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8cb2067df7427c657a5f093d2a8e51ae';
export const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';


export const getMovies = ({requestType = 'trending', query = '', page = 1}) => {
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

export const getMovieById = id => {
    const path = `/movie/${id}`;
    return  axios.get(`${BASE_URL}/${path}?api_key=${API_KEY}`);
}

export const getMovieDetails = ({type, id}) => {
    let path = '';
    switch (type) {
        case 'cast':
           path = `/movie/${id}/credits`;
           break;
        case 'reviews':
            path = `movie/${id}/reviews`;
            break;
        default:
            throw new Error('Invalid details type meaning in get movie details'); 
    }
    
    return axios.get(`${BASE_URL}/${path}?api_key=${API_KEY}`);
}

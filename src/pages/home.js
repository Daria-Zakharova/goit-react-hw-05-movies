import { getMovies } from "utils/fetch-movies";
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";

export const Home = () => {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        const getTrending = async () => {
            setTrending(await(await getMovies({requestType: 'trending' })).data.results);
        }
        getTrending();
    }, []);
    
    return (
    <>
        <MovieList movies = {trending}/>
        
    </>);
};
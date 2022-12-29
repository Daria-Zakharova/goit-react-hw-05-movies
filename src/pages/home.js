import { getMovies } from "utils/fetch-movies";
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";

export default function Home () {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const getTrending = async () => {
            setTrending(await(await getMovies({requestType: 'trending' })).data.results);
        }
        getTrending();
    }, []);
    
    return (
    <>
        <h1 style={{paddingLeft: '100px', marginBottom: 0}}>Trending today:</h1>
        <MovieList movies = {trending}/>        
    </>);
};


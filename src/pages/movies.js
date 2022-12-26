import { getMovies } from "utils/fetch-movies";
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { MovieSearch } from "components/MovieSearch/MovieSearch";
import { Outlet } from "react-router-dom";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // infifnite scroll
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '40%',
            treshhold: 0,
        };

        const observer = new IntersectionObserver(() => {
            setPage((page) => page + 1)
        }, options);
        const guard = document.querySelector('.guard');
        guard && observer.observe(guard);
    }, [totalPages]);

    // set total pages
    useEffect(() => {
        const getTotalPages = async () => {
            const pages = await(await getMovies('search', query)).data.total_pages;
            setTotalPages(pages);
        };
        query && getTotalPages();
        
    }, [query]);

    // render movies
    useEffect(() => {
        const findMovies = async () => {
            if (page) {
                const newMovies = await(await getMovies({requestType: 'search', query, page})).data.results;
                setMovies(movies => [...movies, ...newMovies]); 
            }
            return;
        }
        query && findMovies();
    }, [query, page]);

    return (
        <>
        <Outlet/>
        <MovieSearch onSubmit={e => {
            e.preventDefault();
            setPage(1);
            setMovies([]);
            setQuery(e.target.elements.search.value.toLowerCase().trim());}}/>
        <MovieList movies = {movies}/>
        {page < totalPages && <div className="guard"/>}
        </>
    );
};
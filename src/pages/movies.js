import { getMovies } from "utils/fetch-movies";
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { MovieSearch } from "components/MovieSearch/MovieSearch";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

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
            const newMovies = await(await getMovies('search', query, page)).data.results;
            setMovies(movies => [...movies, ...newMovies]); 
        }
        query && findMovies();
    }, [query, page]);

    // infifnite scroll
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '30%',
            treshhold: 0,
        };

        const observer = new IntersectionObserver(() => {
            setPage((page) => {
                if(page === totalPages) {
                    return;
                }
                return page + 1})
        }, options);
        observer.observe(document.querySelector('.guard'));
    }, [totalPages]);

    return (
        <>
        <MovieSearch onSubmit={e => {
            e.preventDefault();
            setPage(1);
            setMovies([]);
            setQuery(e.target.elements.search.value.toLowerCase().trim());}}/>
        <MovieList movies = {movies}/>
        <div className="guard"/>
        </>
    );
};
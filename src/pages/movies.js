import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { getMovies } from "utils/fetch-movies";
import { MovieList } from "components/MovieList/MovieList";
import { MovieSearch } from "components/MovieSearch/MovieSearch";
import { NoDataMsg } from "components/NoDataMsg/NoDataMsg";

export default function Movies () {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [success, setSuccess] = useState();

    const [searchParams, setSearchParams] = useSearchParams('');    

    useEffect(() => {
        const title = searchParams.get('title') ?? '';
        title && setQuery(title);
    }, [searchParams]);

    // infifnite scroll
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '40%',
            treshhold: 0,
        };

        const observer = new IntersectionObserver(() => {
            setPage(page => page + 1)
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
            try{
                const newMovies = await(await getMovies({requestType: 'search', query, page})).data.results;
                setMovies(movies => [...movies, ...newMovies]);
                setSuccess(true);
            }
            catch {
                setSuccess(false);
            } 
        }
        query && findMovies();
    }, [query, page]);

    const onSearch = e => {
        e.preventDefault();
        const queryStr = e.target.elements.search.value.toLowerCase().trim();
        setPage(1);
        setMovies([]);
        setQuery(queryStr);
        queryStr && setSearchParams({title: queryStr});
    }

    return (
        <>        
        <MovieSearch onSubmit={onSearch} />
        {success === false && <NoDataMsg message = {`Sorry, there is no movie titled ${query}`}/>}
        {success === true && <MovieList movies = {movies}/>}

        <Outlet/>
        {page < totalPages && <div className="guard"/>}
        </>
    );
};

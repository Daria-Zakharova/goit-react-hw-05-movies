import { Movie } from "components/Movie/Movie";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieById } from "utils/fetch-movies";

export const MoviePage = () => {

    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [genres, setGenres] = useState([]);
    const [overview, setOverview] = useState('');

    const {id} = useParams();
    useEffect(() => {
        const getMovieInfo = async() => {
            const {'poster_path': img, title, vote_average: rating, genres, overview} = await(await(getMovieById(id))).data;
            setImg(img);
            setTitle(title);
            setRating((rating * 10).toFixed() + '%');
            setGenres(() => genres.map(item => item.name).join(' '));
            setOverview(overview)
        }
        getMovieInfo();
    }, [id]);

    return (
        <>
            <Movie imgUrl={img} movieTitle={title} rating={rating} overview={overview} genres={genres}/>
            <MovieDetails movieId={id}/>
        </>)
}
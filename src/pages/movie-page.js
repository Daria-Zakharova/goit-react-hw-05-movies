import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BackBtn } from "components/BackBtn/BackBtn";
import { Movie } from "components/Movie/Movie";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { getMovieById } from "utils/fetch-movies";
import PageNotFound from "./404";

export default function MoviePage () {
    const location = useLocation();
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [genres, setGenres] = useState([]);
    const [overview, setOverview] = useState('');
    const [backUrl, setBackUrl] = useState('');
    const [success, setSuccess] = useState();

    const {id} = useParams();

    useEffect(() => {
        location.state && setBackUrl(() => location.state.from);
    }, [location]);

    useEffect(() => {
        const getMovieInfo = async() => {
            try {
                const {'poster_path': img, title, vote_average: rating, genres, overview} = await(await(getMovieById(id))).data;
                setSuccess(true);
                setImg(img);
                setTitle(title);
                setRating((rating * 10).toFixed() + '%');
                setOverview(overview);
                setGenres(() => genres.map((item, idx) => idx === 0 ? item.name: item.name.toLowerCase()).join(', '));
            }
            catch {
                setSuccess(false)
            }
           
        }
        getMovieInfo();
    }, [id]);

    return (
            <>  {success === false && <PageNotFound/>}       
                {success === true && (<>
                    <BackBtn location={backUrl || '/movies'}/>    
                <Movie imgUrl={img} movieTitle={title} rating={rating} overview={overview} genres={genres}/>
                <MovieDetails/></>)}
            </>
        )
}
import { MovieInfo } from "./Movie.styled";
import { baseImgUrl } from "utils/fetch-movies";

export const Movie = ({imgUrl, movieTitle, rating, overview, genres, id}) => {

    const moviePlaceholderUrl = 'https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png';
    return (
        <MovieInfo>
        <div><img src={imgUrl ? (baseImgUrl + imgUrl) : moviePlaceholderUrl} alt={movieTitle}/></div>
        <div>
            <h1>{movieTitle}</h1>
            <p className="rating"><b>User score:</b> {rating}</p>
            <h2>Overview</h2>
            <p className="overview">{overview}</p>
            {genres && <>
                <h2>Genres</h2>
                <p className="genres">{genres}</p></>}

        </div>
        </MovieInfo>
    )
}
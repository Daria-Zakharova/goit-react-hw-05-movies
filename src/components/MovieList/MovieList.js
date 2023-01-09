import { Movies} from "./MovieList.styled";
import {AiOutlineRead} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import {baseImgUrl} from "../../utils/fetch-movies"

export const MovieList = ({movies}) => {
    const posterPlaceholderUrl = 'https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png';
    const location = useLocation();

    return (
        <Movies>
            {movies.map(({id, title, release_date, overview, poster_path: posterUrl}) => {
                const date = new Date(release_date);
                const year = date.getFullYear();
                const imgUrl = baseImgUrl + posterUrl;
                return (
                    <li key = {id}>
                        <AiOutlineRead className={overview ? "show-info-icon" : "disabled-info-icon"} size="30px"/> 
                        <div className="movie-item-wrap">
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                            <img className="poster" src={posterUrl ? imgUrl : posterPlaceholderUrl} alt={`poster for ${title}`}/>
                             <span className="title">{title} {release_date && " - " + year}</span></Link>
                            {overview && <p>{overview}</p>}
                        </div>
                        
                    </li>
                )
            })}
        </Movies>
    );
}
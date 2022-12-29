import { Movies} from "./MovieList.styled";
import {IoIosPlayCircle} from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export const MovieList = ({movies}) => {
    const location = useLocation();

    return (
        <Movies>
            {movies.map(({id, title, release_date, overview}) => {
                const date = new Date(release_date);
                const year = date.getFullYear();
                return (
                    <li key = {id}>
                        <IoIosPlayCircle className={overview ? "show-info-icon" : "disabled-info-icon"} size="30px"/> 
                        <div className="movie-item-wrap">
                            <Link to={`/movies/${id}`} state={{ from: location }}> {title} {release_date && "- " + year}</Link>
                            {overview && <p>{overview}</p>}
                        </div>
                        
                    </li>
                )
            })}
        </Movies>
    );
}
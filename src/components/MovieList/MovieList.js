import { Movies} from "./MovieList.styled";
import {RiMovieLine} from "react-icons/ri";
import { Link } from "react-router-dom";

export const MovieList = ({movies}) => {
    return (
        <Movies>
            {movies.map(({id, title, release_date, overview}) => {
                const date = new Date(release_date);
                const year = date.getFullYear();
                return (
                    <li key = {id}>
                        <RiMovieLine className={overview ? "show-info-icon" : "disabled-info-icon"} size="25px"/> 
                        <div className="movie-item-wrap">
                            <Link to={`/movies/${id}`}> {title} {release_date && "- " + year}</Link>
                            {overview && <p>{overview}</p>}
                        </div>
                        
                    </li>
                )
            })}
        </Movies>
    );
}
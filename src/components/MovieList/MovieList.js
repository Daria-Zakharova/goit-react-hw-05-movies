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
                        <RiMovieLine className="show-info-icon"/> <Link to={id}>{title} - {year}</Link>
                        <span>{overview}</span>
                        
                    </li>
                )
            })}
        </Movies>
    );
}
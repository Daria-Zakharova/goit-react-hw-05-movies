import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { Link, Outlet } from "react-router-dom";
import { MovieDetailed } from "./MovieDetailes.styled";

export const MovieDetails = (movieId) => {

    return (
        <MovieDetailed>
            <p className="subtitle">Additional information:</p>
            <ul className="detailsList">
                <li><Link to="cast" element={<Cast/>}>Cast</Link></li>
                <li><Link to="reviews" element={<Reviews/>}>Reviews</Link></li>
            </ul>
            <Outlet/>
        </MovieDetailed>
    );
}
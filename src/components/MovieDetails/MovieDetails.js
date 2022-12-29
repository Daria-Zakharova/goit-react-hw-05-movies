import { Suspense } from "react";
import { lazy } from "react";
import { Link, Outlet } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { MovieDetailed } from "./MovieDetailes.styled";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export const MovieDetails = () => {  

    return (
        <MovieDetailed>
            <p className="details-title">Additional information:</p>
            <ul className="details-list">
                <li><Link to="cast" element={<Cast/>}>Cast</Link></li>
                <li><Link to="reviews" element={<Reviews/>}>Reviews</Link></li>
            </ul>
            <Suspense fallback = {<div>Loading...<PulseLoader color="#b4b4b4"
            margin={10}
            size={10}
            speedMultiplier={0.7}/></div>}>
                <Outlet/>
            </Suspense>
        </MovieDetailed>
    );
}
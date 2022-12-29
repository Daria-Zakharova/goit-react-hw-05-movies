import { lazy} from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/home"));
const Movies = lazy(() => import("../pages/movies"));
const MoviePage= lazy(() => import("../pages/movie-page"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route path='/' element= {<Home/>}>           
        </Route>
        <Route path="/movies" element={<Movies/>}/>        
        <Route path='/movies/:id' element= {<MoviePage/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route>      
    </Routes>
  );
};
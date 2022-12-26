import { Home } from "pages/home";
import { Movies } from "pages/movies";
import { Route, Routes } from "react-router-dom";
import { MoviePage } from "../pages/movie-page";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { SharedLayout } from "./SharedLayout/SharedLayout";

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
/* style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }} */
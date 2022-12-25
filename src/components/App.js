import { Home } from "pages/home";
import { Movies } from "pages/movies";
import { Route, Routes } from "react-router-dom";
// import { MovieInfo } from "./MovieInfo/MovieInfo";
import { SharedLayout } from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route path='/' element= {<Home/>}>
          {/* <Route path='/movies/:id' element= {<MovieInfo/>}/> */}
        </Route>
      <Route path="/movies" element={<Movies/>}></Route>

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
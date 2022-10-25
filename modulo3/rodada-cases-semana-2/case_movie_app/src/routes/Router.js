import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Movie from '../pages/movie/Movie';
import PopularMovies from '../pages/PopularMovies';
import TopRatedMovies from '../pages/TopRatedMovies';
import Search from '../services/Search';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='movie/popular' element={<PopularMovies/>}/>
            <Route path='movie/top_rated' element={<TopRatedMovies/>}/>
            <Route path='movie/:id' element={<Movie/>}/>
        </Routes>
    )
}

export default Router

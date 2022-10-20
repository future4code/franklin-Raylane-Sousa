import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Movie from '../pages/Movie';
import PopularMovies from '../pages/PopularMovies';
import Search from '../pages/Search';
import TopRatedMovies from '../pages/TopRatedMovies';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='movie/:id' element={<Movie/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='movie/popular' element={<PopularMovies/>}/>
            <Route path='movie/top_rated' element={<TopRatedMovies/>}/>
        </Routes>
    )
}

export default Router

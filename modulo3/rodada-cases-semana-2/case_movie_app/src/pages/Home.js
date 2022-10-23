import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuGenreList from "../components/menuGenreList/MenuGenreList";
import MovieCard from "../components/moviecard/MovieCard";
import api from "../services/api";
import './MoviesGrid.css'

const API_KEY = process.env.REACT_APP_API_KEY

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const takePopularHome = () => {
    api.get(`movie/popular?${API_KEY}`)
    .then((res) => {

      setPopularMovies(res.data.results.slice(0,3))
    }).catch((error) => {
      console.log(error.code)
    })

  }
  
   useEffect(takePopularHome, []) 

  return (
      <div className="container">
        <MenuGenreList/>
      <div>
        <h2 className="title">Os mais populares do momento</h2>
            <div className="topMovies">
                {popularMovies.length === 0 && <p>loading...</p>}
                {popularMovies.length > 0 && popularMovies.map((movie) =>
                    <MovieCard key={movie.id} movie={movie}/>
                )}
            </div>
            <p className="link"><Link to={`/movie/popular`}>Ver mais</Link></p>
      </div>
    </div>
  )
};

export default Home;

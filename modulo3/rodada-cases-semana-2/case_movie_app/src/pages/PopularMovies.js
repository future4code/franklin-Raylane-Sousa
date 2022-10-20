import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard/MovieCard";
import './MoviesGrid.css'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_API;

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getMoviesPopular = async (url) => {
    const res = await fetch(url)
    const data = await res.json() 

    setPopularMovies(data.results)
}


  useEffect(() =>{
    const moviePopularUrl =`${BASE_URL}popular?${API_KEY}`
 
    getMoviesPopular (moviePopularUrl)
  }, [])

  return (
      <div className="container">
        <div>
          <h2 className="title">Filmes populares no momento</h2>
        </div>
          <div div className="topMovies">
              {popularMovies.length > 0 && popularMovies.map((pm) =>
                  <MovieCard key={pm.id} movie={pm}/>
              )}
          </div>
    </div>
  )
};

export default PopularMovies;

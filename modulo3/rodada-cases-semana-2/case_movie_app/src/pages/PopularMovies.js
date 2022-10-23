import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard/MovieCard";
import api from "../services/api";
import './MoviesGrid.css'

const API_KEY = process.env.REACT_APP_API_KEY

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const takeMoviesPopular = () => {
    api.get(`movie/popular?${API_KEY}`)
    .then((res) => {
      setPopularMovies(res.data.results)
    }).catch((error) => {
      console.log(error.code)
    })
}

  useEffect(takeMoviesPopular, [])

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

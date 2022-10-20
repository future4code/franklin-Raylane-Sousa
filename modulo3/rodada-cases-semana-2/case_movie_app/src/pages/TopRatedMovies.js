import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard/MovieCard";
import './MoviesGrid.css'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_API;

const TopRatedMovies = () => {
const [topMovies, setTopMovies] = useState([]);

const getMoviesTop = async (url) => {
    const res = await fetch(url)
    const data = await res.json() 

    setTopMovies(data.results)
}

useEffect(() =>{
    const movieTopUrl =`${BASE_URL}top_rated?${API_KEY}`
    getMoviesTop(movieTopUrl)
  }, [])

  return (
      <div className="container">
        <div>
          <h2 className="title">Os melhores filmes do momento</h2>
        </div>
          <div div className="topMovies">
              {topMovies.length > 0 && topMovies.map((pm) =>
                  <MovieCard key={pm.id} movie={pm}/>
              )}
          </div>
    </div>
  )
};

export default TopRatedMovies;

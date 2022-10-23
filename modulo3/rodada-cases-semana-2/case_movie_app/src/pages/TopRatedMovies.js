import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard/MovieCard";
import api from "../services/api";
import './MoviesGrid.css'

const API_KEY = process.env.REACT_APP_API_KEY

const TopRatedMovies = () => {
const [topMovies, setTopMovies] = useState([]);

const takeTopMovies = () => {
  api.get(`movie/top_rated?${API_KEY}`)
  .then((res)=> {
    setTopMovies(res.data.results)
  }).catch((error)=>{
    console.log(error.code)
  })
}

useEffect(takeTopMovies, [])

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

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieCard from "../components/moviecard/MovieCard";
import './MoviesGrid.css'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_API;
const GENRE_URL = process.env.REACT_APP_GENRE

const Home = () => {
  const [genreMovies, setGenreList] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate();

  const getMoviesPopular = async (url) => {
    const res = await fetch(url)
    const data = await res.json() 

    setPopularMovies(data.results.slice(0,3))
}


  const getGenreList = async (url) => {
    const res = await fetch(url)
    const data = await res.json() 

    setGenreList(data.genres)
}

  useEffect(() =>{
    const moviePopularUrl =`${BASE_URL}popular?${API_KEY}`
 
    getMoviesPopular (moviePopularUrl)
  }, [])

  useEffect(() =>{
    const genreListUrl =`${GENRE_URL}list?${API_KEY}&language=pt-BR`
    console.log(genreListUrl)
    getGenreList(genreListUrl)

  }, [])

  return (
      <div className="container">
        <h1 className="title">The Movie App</h1>
        <div>
         <div className="topMovies">
              {genreMovies.length > 0 && genreMovies.map((genre) =>
                  <button onClick={()=>navigate(`/search?q=${genre.name}`)}>{genre.name}</button>
              )}
          </div>
        </div>
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
